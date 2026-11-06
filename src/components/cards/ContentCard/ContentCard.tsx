import Link from "next/link";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button/Button";
import styles from "./ContentCard.module.scss";

export type ContentCardProps = {
    href?: string;
    media: ReactNode;
    title: string;
    details: string[];
    action?: {
        href: string;
        label: string;
        download?: string | boolean;
    };
};

export default function ContentCard({
    href,
    media,
    title,
    details,
    action,
}: ContentCardProps) {
    const content = (
        <>
            <span className={styles.imageFrame}>
                {media}
            </span>

            <span className={styles.title}>{title}</span>

            <span className={styles.details}>
                {details.map((detail, index) => (
                    <span className={styles.detail} key={`${detail}-${index}`}>
                        {detail}
                    </span>
                ))}
            </span>
        </>
    );

    return (
        <div className={styles.card}>
            {href ? (
                <Link href={href} className={styles.contentLink}>
                    {content}
                </Link>
            ) : (
                <div className={styles.contentLink}>{content}</div>
            )}

            {action && (
                <Button
                    href={action.href}
                    download={action.download}
                    variant="link"
                    size="sm"
                    className={styles.action}
                >
                    {action.label}
                </Button>
            )}
        </div>
    );
}
