"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Container from "../Container/Container";
import styles from "./Header.module.scss";

const navigation = [
    { label: "Поездки", href: "/rides" },
    { label: "Маршруты", href: "/routes" },
    { label: "Экипировка", href: "/gear" },
    { label: "Мастерская", href: "/workshop" },
    { label: "Журнал", href: "/journal" },
    { label: "Сообщество", href: "/community" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    RIDELINE<span>.</span>
                </Link>

                <nav className={styles.navigation} aria-label="Основная навигация">
                    {navigation.map((item) => (
                        <Link key={item.href} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <div
                        className={styles.languageToggle}
                        role="group"
                        aria-label="Выбор языка, пока недоступен"
                        aria-disabled="true"
                    >
                        <span className={styles.languageActive}>RU</span>
                        <span>EN</span>
                    </div>

                    <Link href="/saved" className={styles.saved}>
                        Избранное
                    </Link>

                    <button
                        type="button"
                        className={styles.menuButton}
                        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </Container>
            <AnimatePresence initial={false}>
                {isMenuOpen && (
                    <motion.nav
                        id="mobile-navigation"
                        className={styles.mobileNavigation}
                        aria-label="Мобильная навигация"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.2 },
                        }}
                    >
                        <Container className={styles.mobileContainer}>
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className={styles.mobileLink}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <Link className={styles.mobileLink} href="/saved" onClick={closeMenu}>
                                Избранное
                            </Link>
                        </Container>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
