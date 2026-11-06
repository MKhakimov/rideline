import Container from "@/components/layout/Container/Container";
import ContentCard from "@/components/cards/ContentCard/ContentCard";
import Button from "@/components/ui/Button/Button";
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
                    <Button href="/rides" variant="fill" showArrow>
                        Все поездки
                    </Button>
                </div>
            </Container>
        </section>
    );
}
