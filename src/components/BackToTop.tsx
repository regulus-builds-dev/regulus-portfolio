import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const update = () => {
            setVisible(window.scrollY > 500);
        };

        update();

        window.addEventListener("scroll", update);

        return () => window.removeEventListener("scroll", update);
    }, []);

    return (
        <button
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            className={`
                fixed
                bottom-8
                right-8
                z-50
                rounded-full
                bg-blue-600
                p-4
                shadow-lg
                transition-all
                duration-300
                hover:bg-blue-700
                ${
                    visible
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                }
            `}
            aria-label="Back to top"
        >
            <FaArrowUp />
        </button>
    );
}