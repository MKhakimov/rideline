import Link from "next/link";
import Container from "@/components/layout/Container/Container";
import ContentCard from "@/components/cards/ContentCard/ContentCard";
import { rides } from "@/data/rides";
import styles from "./Rides.module.scss";

export default function Rides() {
    return (
        <section className={styles.section} aria-labelledby="rides-title">
            <Container>
                <h2 className={styles.title} id="rides-title">
                    Поездки
                </h2>

                <div className={styles.grid}>
                    {rides.map((ride) => (
                        <ContentCard key={ride.href} {...ride} />
                    ))}
                </div>
                
                <div className={styles.actionBar}>
                    <Link href="/rides" className={styles.link}>
                        Все поездки <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="m13.05 12.361l-5.656 5.657l-1.414-1.414l5.657-5.657l-4.95-4.95H18v11.314z"></path></svg>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
