import {
    FaCode,
    FaLaptopCode,
    FaMobileAlt,
    FaDatabase,
} from "react-icons/fa";

import Card from "./ui/Card";
import Container from "./ui/Container";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const strengths = [
    {
        icon: <FaLaptopCode size={26} />,
        title: "Web Applications",
        description:
            "Developing responsive web applications, dashboards, and business systems designed to solve practical operational needs.",
    },
    {
        icon: <FaMobileAlt size={26} />,
        title: "Mobile Applications",
        description:
            "Developing cross-platform mobile applications focused on usability, performance, and practical solutions for everyday business needs.",
    },
    {
        icon: <FaDatabase size={26} />,
        title: "Backend & Data Integration",
        description:
            "Connecting applications with databases, authentication, APIs, and backend services to support complete solutions.",
    },
    {
        icon: <FaCode size={26} />,
        title: "Software Engineering",
        description:
            "Designing and developing maintainable software with a focus on reliability, scalability, and long-term sustainability.",
    },
];

export default function About() {
    return (
        <Section
            id="about"
            className="bg-slate-900"
        >
            <Container>

                <div className="grid gap-16 lg:grid-cols-2">

                    {/* LEFT */}

                    <div>

                        <SectionTitle
                            eyebrow="About"
                            title="Building practical software for real-world use."
                            subtitle="
                            Regulus is an independent software development studio focused on
                            creating web applications, mobile applications, and business systems
                            that help organizations improve their daily operations through reliable
                            digital solutions.
                            "
                        />

                        <p className="mt-8 leading-8 text-slate-400">

                            Founded as a solo development studio, Regulus focuses on
                            transforming ideas and operational challenges into
                            functional software solutions.

                            <br />
                            <br />

                            Each project begins by understanding the actual problem,
                            then designing and developing software that is practical,
                            maintainable, and built with future improvements in mind.

                        </p>


                        <div className="mt-10 grid grid-cols-2 gap-6">

                            <div>

                                <h3 className="text-4xl font-black text-blue-400">
                                    2
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Completed Client Projects
                                </p>

                            </div>


                            <div>

                                <h3 className="text-4xl font-black text-blue-400">
                                    4
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Core Services
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT */}

                    <div className="grid gap-6">

                        {strengths.map((item) => (

                            <Card
                                key={item.title}
                                className="
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-blue-500
                            "
                            >

                                <div className="flex items-start gap-5">

                                    <div
                                        className="
                                            rounded-xl
                                            bg-blue-600/10
                                            p-4
                                            text-blue-400
                                        "
                                    >
                                        {item.icon}
                                    </div>

                                    <div>

                                        <h3 className="text-xl font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-slate-400">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            </Card>

                        ))}

                    </div>

                </div>

            </Container>
        </Section>
    );
}