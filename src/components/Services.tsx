import {
    FaLaptopCode,
    FaMobileAlt,
    FaDatabase,
    FaTools,
} from "react-icons/fa";

import Card from "./ui/Card";
import Container from "./ui/Container";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const services = [
    {
        icon: <FaLaptopCode size={30} />,
        title: "Business Software Development",
        description:
            "Developing business applications, management systems, and dashboards that improve operational efficiency and streamline everyday workflows.",

        includes: [
            "Admin Dashboards",
            "Business Systems",
            "Responsive Interfaces",
            "API Integration",
        ],
    },

    {
        icon: <FaMobileAlt size={30} />,
        title: "Mobile Application Development",
        description:
            "Developing cross-platform mobile applications focused on practical functionality, usability, and maintainable solutions.",

        includes: [
            "React Native",
            "Expo",
            "Cross-platform Apps",
            "Device Feature Integration",
        ],
    },

    {
        icon: <FaDatabase size={30} />,
        title: "Backend Development & Integration",
        description:
            "Designing backend services, integrating databases, authentication, APIs, and third-party services to support reliable software solutions.",

        includes: [
            "Supabase",
            "Database Design",
            "Authentication",
            "REST APIs",
        ],
    },

    {
        icon: <FaTools size={30} />,
        title: "Software Maintenance & Enhancement",
        description:
            "Improving existing applications through bug fixes, performance improvements, feature additions, and code organization.",

        includes: [
            "Bug Fixes",
            "Performance Improvements",
            "Feature Development",
            "Code Refactoring",
        ],
    },
];

export default function Services() {
    return (
        <Section
            id="services"
            className="bg-slate-950"
        >
            <Container>

                <SectionTitle
                    eyebrow="Services"
                    title="Services"
                    subtitle="Whether you're starting a new project or improving an existing one, I focus on delivering practical, maintainable software solutions."
                />

                <div className="grid gap-8 md:grid-cols-2">

                    {services.map((service) => (

                        <Card
                            key={service.title}
                            className="
                            flex
                            h-full
                            flex-col
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-blue-500
                        "
                        >
                            <div className="mb-6 inline-flex w-fit rounded-xl bg-blue-500/10 p-4 text-blue-400">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold">
                                {service.title}
                            </h3>

                            <p className="mt-4 leading-8 text-slate-400">
                                {service.description}
                            </p>

                            <ul className="mt-8 space-y-3">

                                {service.includes.map((item) => (

                                    <li
                                        key={item}
                                        className="flex items-center gap-3 text-slate-300"
                                    >
                                        <span className="text-blue-400">
                                            •
                                        </span>

                                        {item}

                                    </li>

                                ))}

                            </ul>

                        </Card>

                    ))}

                </div>

                {/* <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">

                    <h3 className="text-3xl font-bold">

                        Let's Build Your Next Software Solution

                    </h3>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
                        Whether you need a business system, web application, or mobile application,
                        Regulus is ready to help transform your ideas into reliable software solutions.
                    </p>

                    <div className="mt-10">

                        <Button href="#contact">

                            Contact

                        </Button>

                    </div>

                </div> */}

            </Container>
        </Section>
    );
}