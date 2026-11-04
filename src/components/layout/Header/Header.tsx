"use client";

import { useState } from "react";
import Link from "next/link";

import Container from "../Container/Container";
import styles from "./Header.module.scss";

const navigation = [
    { label: "Rides", href: "/rides" },
    { label: "Gear", href: "/gear" },
    { label: "Journal", href: "/journal" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <Container className={styles.container} aria-label="Main navigation">
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    RIDELINE<span>.</span>
                </Link>

                <nav className={styles.navigation}>
                    {navigation.map((item) => (
                        <Link key={item.href} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <Link href="/saved" className={styles.saved}>
                        Saved
                    </Link>

                    <button
                        type="button"
                        className={styles.menuButton}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </Container>

            {isMenuOpen && (
                <nav
                    id="mobile-navigation"
                    className={styles.mobileNavigation}
                    aria-label="Mobile navigation"
                >
                    <Container className={styles.mobileContainer}>
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link href="/saved" onClick={closeMenu}>
                            Saved
                        </Link>
                    </Container>
                </nav>
            )}
        </header>
    );
}