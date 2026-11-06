import Image from "next/image";
import Link from "next/link";
import styles from "./ContentCard.module.scss";

export type ContentCardProps = {
    href: string;
    image: string;
    imageAlt: string;
    title: string;
    details: string[];
};

export default function ContentCard({
    href,
    image,
    imageAlt,
    title,
    details,
}: ContentCardProps) {
    return (
        <Link href={href} className={styles.card}>
            <span className={styles.imageFrame}>
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className={styles.image}
                />
            </span>

            <h3 className={styles.title}>{title}</h3>

            <span className={styles.details}>
                {details.map((detail, index) => (
                    <span className={styles.detail} key={`${detail}-${index}`}>
                        {detail}
                    </span>
                ))}
            </span>
        </Link>
    );
}
