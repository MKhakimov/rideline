import type { Metadata, Viewport } from "next";
import "./globals.scss";
import { Inter, Barlow_Condensed } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
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
        default: "RIDELINE — культура горного велосипеда",
        template: "%s | RIDELINE",
    },
    description:
        "Маунтинбайк, горные маршруты, экипировка и истории. Откройте мир горного велосипеда вместе с RIDELINE.",
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
            lang="ru"
            className={`${inter.variable} ${barlow.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
