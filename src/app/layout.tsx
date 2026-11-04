import type { Metadata, Viewport } from "next";
import "./globals.scss";
import { Inter, Barlow_Condensed } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "RIDELINE — Mountain Bike Culture",
        template: "%s | RIDELINE",
    },
    description:
        "Mountain biking, trails, gear and stories. Explore the world of MTB with RIDELINE.",
};

export const viewport: Viewport = {
    themeColor: "#111310",
    colorScheme: "dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html 
            lang="en"
            className={`${inter.variable} ${barlow.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}