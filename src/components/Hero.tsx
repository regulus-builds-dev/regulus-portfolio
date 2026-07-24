import {
    // FaArrowRight,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import Button from "./ui/Button";
import Badge from "./ui/Badge";
import Container from "./ui/Container";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden pt-24">

            {/* Background Blur */}
            <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <Container>

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT */}

                    <div>

                        <Badge>
                            Available for Freelance
                        </Badge>

                        <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                            Building
                            <span className="text-blue-400"> Web </span>
                            &
                            <br />
                            Mobile Applications
                            <br />
                            That Solve
                            <br />
                            Real Problems.
                        </h1>

                        {/* <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                            Regulus is an independent software development studio focused on building practical
                            web and mobile applications for businesses. Every project is developed with an emphasis
                            on usability, maintainability, and solving real operational problems.
                        </p> */}

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Button href="#projects">
                                View Projects
                            </Button>

                            <Button
                                href="#contact"
                                variant="secondary"
                            >
                                Contact Us
                            </Button>

                        </div>

                        <div className="mt-12 flex items-center gap-4">

                            {/* <a
                                href="https://github.com/YOUR_USERNAME"
                                aria-label="GitHub"
                                className="text-2xl text-slate-400 transition hover:text-white"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com/in/YOUR_USERNAME"
                                aria-label="LinkedIn"
                                className="text-2xl text-slate-400 transition hover:text-white"
                            >
                                <FaLinkedin />
                            </a> */}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="relative hidden lg:flex justify-center">

                        <div className="absolute h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

                        <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

                            <div className="mb-8 flex items-center gap-2">

                                <div className="h-3 w-3 rounded-full bg-red-500" />

                                <div className="h-3 w-3 rounded-full bg-yellow-500" />

                                <div className="h-3 w-3 rounded-full bg-green-500" />

                            </div>

                            <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
                                {`const regulus = {
    type: "Independent Software Studio",

    builds: [
        "Web Applications",
        "Mobile Applications",
        "Business Systems"
  ],

    mission:
        "Building practical
        software that solvesreal problems.",
};`}
                            </pre>

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    );
}