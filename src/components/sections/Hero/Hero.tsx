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
                    ИЩИ СВОЙ
                    <br />
                    ПУТЬ<span>.</span>
                </h1>

                <p className={styles.description}>
                    Горы, трейлы, экипировка и всё, что делает каждую поездку особенной.
                </p>

                <a href="/rides" className={styles.link}>
                    Смотреть маршруты <span>↗</span>
                </a>
            </Container>
        </section>
    );
}
