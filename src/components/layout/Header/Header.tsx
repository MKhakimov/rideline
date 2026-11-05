"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Container from "../Container/Container";
import styles from "./Header.module.scss";

type NavigationItem = {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
};

const navigation: NavigationItem[] = [
    { label: "Поездки", href: "/rides" },
    { label: "Маршруты", href: "/routes" },
    {
        label: "Экипировка",
        href: "/gear",
        children: [
            { label: "Райдеры", href: "/gear/riders" },
            { label: "Велосипеды", href: "/gear/bikes" },
            { label: "Экипировка", href: "/gear/equipment" },
        ],
    },
    {
        label: "Мастерская",
        href: "/workshop",
        children: [
            { label: "Вилки", href: "/workshop/forks" },
            { label: "Амортизаторы", href: "/workshop/shocks" },
            { label: "Тормоза", href: "/workshop/brakes" },
            { label: "Трансмиссия", href: "/workshop/drivetrain" },
        ],
    },
    { label: "Журнал", href: "/journal" },
    { label: "Сообщество", href: "/community" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpenMobileSubmenu(null);
    };

    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    RIDELINE<span>.</span>
                </Link>

                <nav className={styles.navigation} aria-label="Основная навигация">
                    <ul className={styles.navigationList}>
                        {navigation.map((item) => (
                            <li key={item.href} className={styles.navigationItem}>
                                <Link className={styles.navigationLink} href={item.href}>
                                    {item.label}
                                </Link>

                                {item.children && (
                                    <ul className={styles.submenu}>
                                        {item.children.map((child) => (
                                            <li key={child.href}>
                                                <Link href={child.href}>{child.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
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
                                <div className={styles.mobileItem} key={item.href}>
                                    <div className={styles.mobileMain}>
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className={styles.mobileLink}
                                        >
                                            {item.label}
                                        </Link>
                                        {item.children && (
                                            <button
                                                type="button"
                                                className={`${styles.mobileSubmenuToggle} ${openMobileSubmenu === item.href ? styles.isOpen : ""}`}
                                                onClick={() =>
                                                    setOpenMobileSubmenu((current) =>
                                                        current === item.href ? null : item.href,
                                                    )
                                                }
                                            >
                                                <svg fill="currentColor" className={styles.mobileSubmenuToggleIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M12.236.744a.788.788 0 0 1 .104 1.063l-.104.116L5.672 8l6.564 6.077a.788.788 0 0 1 .104 1.063l-.104.116a.955.955 0 0 1-1.148.096l-.124-.096-7.2-6.667a.788.788 0 0 1-.104-1.063l.104-.115 7.2-6.667a.952.952 0 0 1 1.272 0Z"></path></svg>
                                            </button>
                                        )}
                                    </div>

                                    {item.children && openMobileSubmenu === item.href && (
                                        <ul className={styles.mobileSubmenu}>
                                            {item.children.map((child) => (
                                                <li key={child.href}>
                                                    <Link href={child.href} onClick={closeMenu}>
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
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
