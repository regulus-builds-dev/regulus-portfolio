import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export default function Card({
    children,
    className = "",
}: Props) {
    return (
        <div
            className={`
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/70
                hover:shadow-2xl
                ${className}
            `}
        >
            {children}
        </div>
    );
}