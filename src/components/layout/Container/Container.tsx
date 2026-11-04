import styles from "./Container.module.scss";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({
    children,
    className,
}: Readonly<ContainerProps>) {
    return (
        <div className={`${styles.container} ${className ?? ""}`}>
            {children}
        </div>
    );
}