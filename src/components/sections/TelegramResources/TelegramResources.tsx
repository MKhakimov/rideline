import Container from "@/components/layout/Container/Container";
import { telegramResources } from "@/data/telegramResources";
import styles from "./TelegramResources.module.scss";

function ResourceAvatar({ type }: { type: "Канал" | "Группа" }) {
    if (type === "Группа") {
        return (
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <g
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                >
                    <polygon points="14.25 14.25 14.25 5.25 4.75 5.25 4.75 11.25 10.75 11.25" />
                    <path d="m4.75 7.25-3 3v-8.5h10v3" />
                </g>
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M9 17s7 1 10 4h1a1 1 0 0 0 1-1v-6.063a2 2 0 0 0 0-3.874V4a1 1 0 0 0-1-1h-1C16 6 9 7 9 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1l1 5h2zm2-8.339c.683-.146 1.527-.35 2.44-.617c1.678-.494 3.81-1.271 5.56-2.47v12.851c-1.75-1.198-3.883-1.975-5.56-2.469A34 34 0 0 0 11 15.34zM5 9h4v6H5z"
            />
        </svg>
    );
}

export default function TelegramResources() {
    return (
        <section className={styles.section} aria-labelledby="telegram-resources-title">
            <Container>
                <h2 className={styles.title} id="telegram-resources-title">
                    Telegram-ресурсы
                </h2>

                <div className={styles.grid}>
                    {telegramResources.map((resource) => (
                        <a
                            className={styles.card}
                            href={resource.href}
                            key={resource.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className={styles.avatar}>
                                <ResourceAvatar type={resource.type} />
                            </span>

                            <span className={styles.content}>
                                <span className={styles.name}>{resource.name}</span>
                                <span className={styles.type}>{resource.type}</span>
                                <span className={styles.description}>{resource.description}</span>
                            </span>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
}
