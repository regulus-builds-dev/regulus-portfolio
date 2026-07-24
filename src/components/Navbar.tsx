import { useEffect, useState } from "react";
import Container from "./ui/Container";

const links = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const sections = links
            .map((item) => document.querySelector(item.href))
            .filter(Boolean) as HTMLElement[];

        const onScroll = () => {
            setScrolled(window.scrollY > 40);

            const current = window.scrollY + 150;

            sections.forEach((section) => {
                if (
                    current >= section.offsetTop &&
                    current < section.offsetTop + section.offsetHeight
                ) {
                    setActive(`#${section.id}`);
                }
            });
        };

        onScroll();

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`
                fixed
                top-0
                left-0
                right-0
                z-50
                border-b
                border-slate-800
                bg-slate-950/70
                backdrop-blur-xl
                transition-all
                duration-300
                ${scrolled ? "py-3" : "py-5"}
            `}
        >
            <Container>

                <nav className="flex items-center justify-between">

                    <a
                        href="#"
                        className="font-lustria text-3xl tracking-wide text-white"
                    >
                        REGULUS
                    </a>

                    <ul className="hidden md:flex items-center gap-8">

                        {links.map((link) => (

                            <li key={link.href}>

                                <a
                                    href={link.href}
                                    className={`
                                        text-sm
                                        transition-colors
                                        duration-300
                                        ${active === link.href
                                            ? "text-blue-400"
                                            : "text-slate-400 hover:text-white"
                                        }
                                    `}
                                >
                                    {link.name}
                                </a>

                            </li>

                        ))}

                    </ul>

                </nav>

            </Container>

        </header>
    );
}