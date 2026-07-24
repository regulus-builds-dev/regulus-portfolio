import Container from "./ui/Container";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">

            <Container>

                <div className="flex flex-col items-center justify-between gap-6 py-8 text-center text-slate-400 md:flex-row">

                    <div className="flex flex-col items-center md:items-start">

                        <a
                            href="#"
                            className="flex items-center"
                        >
                            <img
                                src="/logo/regulus-emblem.svg"
                                alt="Regulus emblem"
                                className="h-12 w-12"
                            />

                            <h2 className="font-lustria text-3xl tracking-wide text-white">
                                REGULUS
                            </h2>
                        </a>

                        <p className="mt-2 text-sm text-slate-500">

                            Building Practical Software

                        </p>

                    </div>

                    <p className="text-sm text-slate-500">

                        © {new Date().getFullYear()} Regulus. All rights reserved.

                    </p>

                </div>

            </Container>

        </footer>
    );
}