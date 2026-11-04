import Container from "../Container/Container";
import styles from "./Header.module.scss";

const navigation = [
    { label: "Rides", href: "/rides" },
    { label: "Gear", href: "/gear" },
    { label: "Journal", href: "/journal" },
];

export default function Header() {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <a href="/" className={styles.logo}>
                    RIDELINE<span>.</span>
                </a>

                <nav className={styles.navigation}>
                    {navigation.map((item) => (
                        <a key={item.href} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a href="/saved" className={styles.saved}>
                    Saved
                </a>
            </Container>
        </header>
    );
}