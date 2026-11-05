import Link from "next/link";
import Container from "../Container/Container";
import styles from "./Footer.module.scss";

const footerLinks = [
    { label: "О сайте", href: "/about" },
    { label: "Контакты", href: "/contact" },
    { label: "Политика конфиденциальности", href: "/privacy" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <span className={styles.copyright}>
                    RIDELINE © {new Date().getFullYear()}
                </span>

                <nav className={styles.navigation} aria-label="Навигация в подвале сайта">
                    {footerLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </Container>
        </footer>
    );
}
