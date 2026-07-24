import type { ReactNode } from "react";

interface Props {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary";
    external?: boolean;
}

export default function Button({
    href,
    children,
    variant = "primary",
    external = false,
}: Props) {
    const styles = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20",

        secondary:
            "border border-slate-700 text-white hover:border-blue-500 hover:bg-slate-900",
    };

    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`
                inline-flex
                items-center
                justify-center
                rounded-xl
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-0.5
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-offset-2
                focus:ring-offset-slate-950
                ${styles[variant]}
            `}
        >
            {children}
        </a>
    );
}