import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

type Point = { lat: number; lon: number };

export type Route = {
    id: string;
    title: string;
    distanceKm: number;
    addedAt: string | null;
    gpxUrl: string;
    fileName: string;
    path: string;
};

const routesDirectory = path.join(process.cwd(), "public/gpx/routes");

function getPoints(gpx: string): Point[] {
    return [...gpx.matchAll(/<(?:trkpt|rtept)\b([^>]*)>/g)].flatMap(([, attributes]) => {
        const lat = attributes.match(/\blat="([^"]+)"/)?.[1];
        const lon = attributes.match(/\blon="([^"]+)"/)?.[1];

        return lat && lon ? [{ lat: Number(lat), lon: Number(lon) }] : [];
    });
}

function getRoutePath(points: Point[]): string {
    if (points.length < 2) return "";

    const referenceLatitude = points.reduce((sum, point) => sum + point.lat, 0) / points.length;
    const projected = points.map(({ lat, lon }) => ({
        x: lon * Math.cos((referenceLatitude * Math.PI) / 180),
        y: lat,
    }));
    const bounds = projected.reduce(
        (result, { x, y }) => ({
            minX: Math.min(result.minX, x),
            maxX: Math.max(result.maxX, x),
            minY: Math.min(result.minY, y),
            maxY: Math.max(result.maxY, y),
        }),
        { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity },
    );
    const { minX, maxX, minY, maxY } = bounds;
    const width = maxX - minX || 1;
    const height = maxY - minY || 1;
    const scale = Math.min(300 / width, 160 / height);
    const offsetX = (320 - width * scale) / 2;
    const offsetY = (180 - height * scale) / 2;
    const step = Math.max(1, Math.ceil(points.length / 500));

    return projected
        .filter((_, index) => index % step === 0 || index === projected.length - 1)
        .map(({ x, y }, index) => {
            const svgX = offsetX + (x - minX) * scale;
            const svgY = offsetY + (maxY - y) * scale;
            return `${index === 0 ? "M" : "L"}${svgX.toFixed(1)} ${svgY.toFixed(1)}`;
        })
        .join(" ");
}

function getDistanceKm(points: Point[]): number {
    return points.slice(1).reduce((distance, point, index) => {
        const previous = points[index];
        const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
        const latDistance = toRadians(point.lat - previous.lat);
        const lonDistance = toRadians(point.lon - previous.lon);
        const value =
            Math.sin(latDistance / 2) ** 2 +
            Math.cos(toRadians(previous.lat)) *
                Math.cos(toRadians(point.lat)) *
                Math.sin(lonDistance / 2) ** 2;

        return distance + 6371 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
    }, 0);
}

function getTagValue(gpx: string, tag: string): string | null {
    return gpx.match(new RegExp(`<${tag}\\b[^>]*>([^<]+)</${tag}>`))?.[1]?.trim() ?? null;
}

async function readRoute(fileName: string): Promise<Route | null> {
    const gpx = await readFile(path.join(routesDirectory, fileName), "utf8");
    const points = getPoints(gpx);
    const routePath = getRoutePath(points);

    if (!routePath) return null;

    const title = getTagValue(gpx, "name") ?? path.parse(fileName).name;
    const addedAt = getTagValue(gpx, "time");

    return {
        id: fileName,
        title,
        distanceKm: getDistanceKm(points),
        addedAt,
        gpxUrl: `/gpx/routes/${encodeURIComponent(fileName)}`,
        fileName,
        path: routePath,
    };
}

export async function getRoutes(): Promise<Route[]> {
    const files = (await readdir(routesDirectory)).filter((file) =>
        file.toLowerCase().endsWith(".gpx"),
    );
    const routes = await Promise.all(files.map(readRoute));

    return routes
        .filter((route): route is Route => route !== null)
        .sort((a, b) => {
            if (!a.addedAt && !b.addedAt) return a.fileName.localeCompare(b.fileName);
            if (!a.addedAt) return 1;
            if (!b.addedAt) return -1;
            return Date.parse(b.addedAt) - Date.parse(a.addedAt);
        });
}
