import Container from "@/components/layout/Container/Container";
import ContentCard from "@/components/cards/ContentCard/ContentCard";
import Button from "@/components/ui/Button/Button";
import { getRoutes } from "@/data/routes";
import styles from "./Routes.module.scss";

const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Tashkent",
});
export default async function Routes({ showAll = false }: { showAll?: boolean }) {
    const routes = await getRoutes();
    const visibleRoutes = showAll ? routes : routes.slice(0, 6);

    return (
        <section className={styles.section} aria-labelledby="routes-title">
            <Container>
                <h2 className={styles.title} id="routes-title">
                    Маршруты
                </h2>

                <div className={styles.grid}>
                    {visibleRoutes.map((route) => {
                        const distance = route.distanceKm.toLocaleString("ru-RU", {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1,
                        });
                        const addedAt = route.addedAt
                            ? `Добавлен ${dateFormatter.format(new Date(route.addedAt))}`
                            : "Дата не указана";

                        return (
                            <ContentCard
                                key={route.id}
                                media={
                                    <svg
                                        className={styles.preview}
                                        viewBox="0 0 320 180"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d={route.path}
                                            fill="none"
                                            stroke="var(--color-accent)"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                }
                                title={route.title}
                                details={[`${distance} км`, addedAt]}
                                action={{
                                    href: route.gpxUrl,
                                    label: "Скачать GPX",
                                    download: route.fileName,
                                }}
                            />
                        );
                    })}
                </div>

                {!showAll && (
                    <div className={styles.actionBar}>
                        <Button href="/routes" variant="fill" showArrow>
                            Открыть все маршруты
                        </Button>
                    </div>
                )}
            </Container>
        </section>
    );
}
