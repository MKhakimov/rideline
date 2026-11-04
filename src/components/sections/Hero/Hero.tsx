import Image from "next/image";
import Container from "@/components/layout/Container/Container";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Image
                src="/images/hero.png"
                alt="Mountain biker riding through a mountain trail"
                fill
                priority
                sizes="100vw"
                className={styles.image}
            />

            <div className={styles.overlay} />

            <Container className={styles.content}>
                <span className={styles.eyebrow}>
                    Mountain Bike Culture
                </span>

                <h1 className={styles.title}>
                    Beyond
                    <br />
                    The Trail<span>.</span>
                </h1>

                <p className={styles.description}>
                    Stories, rides and gear for those who live
                    for the ride.
                </p>

                <a href="/rides" className={styles.link}>
                    Explore rides <span>↗</span>
                </a>
            </Container>
        </section>
    );
}