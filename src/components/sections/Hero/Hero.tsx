import Image from "next/image";
import Container from "@/components/layout/Container/Container";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Image
                src="/images/hero.png"
                alt="Маунтинбайкер едет по горной тропе"
                fill
                priority
                sizes="100vw"
                className={styles.image}
            />

            <div className={styles.overlay} />

            <Container className={styles.content}>
                <span className={styles.eyebrow}>
                    Культура горного велосипеда
                </span>

                <h1 className={styles.title}>
                    За
                    <br />
                    пределами тропы<span>.</span>
                </h1>

                <p className={styles.description}>
                    Истории, маршруты и экипировка для тех,
                    кто живёт скоростью и свободой.
                </p>

                <a href="/rides" className={styles.link}>
                    Смотреть маршруты <span>↗</span>
                </a>
            </Container>
        </section>
    );
}
