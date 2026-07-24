import type { ReactNode } from "react";

interface Props {
    id?: string;
    className?: string;
    children: ReactNode;
}

export default function Section({
    id,
    className = "",
    children,
}: Props) {
    return (
        <section
            id={id}
            className={`py-28 ${className}`}
        >
            {children}
        </section>
    );
}