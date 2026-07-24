import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Badge({
    children,
}: Props) {
    return (
        <span
            className="
                inline-flex
                items-center
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-blue-300
                transition-all
                duration-300
                hover:border-blue-400
                hover:bg-blue-500/20
            "
        >
            {children}
        </span>
    );
}