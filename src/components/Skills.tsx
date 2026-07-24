import {
    FaCode,
    FaMobileAlt,
    FaDatabase,
    FaTools,
} from "react-icons/fa";

import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const expertise = [
    {
        icon: <FaCode size={28} />,
        title: "Business Applications",
        description:
            "Building responsive web applications, dashboards, and management systems that help organizations organize information and improve workflows.",

        technologies: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
        ],
    },

    {
        icon: <FaMobileAlt size={28} />,
        title: "Mobile Applications",
        description:
            "Developing cross-platform mobile applications with React Native and Expo, focusing on practical features, usability, and reliable user experiences.",

        technologies: [
            "React Native",
            "Expo",
            "React Navigation",
            "TypeScript",
        ],
    },

    {
        icon: <FaDatabase size={28} />,
        title: "Backend & Data Integration",
        description:
            "Connecting applications with databases, authentication systems, APIs, and external services to support complete software solutions.",

        technologies: [
            "Supabase",
            "SQL",
            "REST API",
            "Mapbox",
        ],
    },

    {
        icon: <FaTools size={28} />,
        title: "Software Development Workflow",
        description:
            "Using modern development tools and practices to create organized, maintainable, and scalable software projects.",

        technologies: [
            "Git",
            "GitHub",
            "VS Code",
            "Vite",
        ],
    },
];

export default function Skills() {
    return (
        <Section id="skills">
            <Container>

                <SectionTitle
                    eyebrow="Expertise"
                    title="Core Expertise"
                    subtitle="Regulus combines modern technologies and practical development approaches
                    to build reliable software solutions for businesses." />

                <div className="grid gap-8 md:grid-cols-2">

                    {expertise.map((item) => (

                        <Card
                            key={item.title}
                            className="h-full"
                        >

                            <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-4 text-blue-400">

                                {item.icon}

                            </div>

                            <h3 className="text-2xl font-bold">

                                {item.title}

                            </h3>

                            <p className="mt-4 leading-8 text-slate-400">

                                {item.description}

                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                {item.technologies.map((tech) => (

                                    <Badge key={tech}>

                                        {tech}

                                    </Badge>

                                ))}

                            </div>

                        </Card>

                    ))}

                </div>

            </Container>
        </Section>
    );
}