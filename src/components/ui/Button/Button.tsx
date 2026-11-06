import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonBaseProps = {
    children: ReactNode;
    className?: string;
    variant?: "fill" | "outline" | "link";
    size?: "sm" | "md" | "lg";
    showArrow?: boolean;
};

type ButtonLinkProps = ButtonBaseProps & {
    href: string;
    type?: never;
    disabled?: never;
};

type NativeButtonProps = ButtonBaseProps & {
    href?: never;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

type ButtonProps = ButtonLinkProps | NativeButtonProps;

function ArrowIcon() {
    return (
        <svg
            className={styles.arrow}
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="m13.05 12.361-5.656 5.657-1.414-1.414 5.657-5.657-4.95-4.95H18v11.314z" />
        </svg>
    );
}

export default function Button(props: ButtonProps) {
    const {
        children,
        className,
        variant = "link",
        size = "md",
        showArrow = false,
    } = props;

    const classNames = [styles.button, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(" ");

    if (props.href !== undefined) {
        return (
            <Link href={props.href} className={classNames}>
                {children}
                {showArrow && <ArrowIcon />}
            </Link>
        );
    }

    return (
        <button
            type={props.type ?? "button"}
            className={classNames}
            disabled={props.disabled}
        >
            {children}
            {showArrow && <ArrowIcon />}
        </button>
    );
}
