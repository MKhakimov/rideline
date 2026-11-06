import Image from "next/image";
import Link from "next/link";
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
                    ПУТЬ
                </h1>

                <p className={styles.description}>
                    Горы, трейлы, экипировка и всё, что делает каждую поездку особенной.
                </p>

                <Link href="/routes" className={styles.link}>
                    Смотреть маршруты <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="m13.05 12.361l-5.656 5.657l-1.414-1.414l5.657-5.657l-4.95-4.95H18v11.314z"></path></svg>
                </Link>
            </Container>
        </section>
    );
}
