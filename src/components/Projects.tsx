import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

import { projects } from "../data/projects";

export default function Projects() {
    return (
        <Section
            id="projects"
            className="bg-slate-950"
        >
            <Container>

                <SectionTitle
                    eyebrow="Portfolio"
                    title="Selected Projects"
                    subtitle="A selection of software projects built to solve real operational challenges for organizations and small businesses."
                />

                <div className="space-y-10">

                    {projects.map((project, index) => (

                        <Card
                            key={project.title}
                            className="group overflow-hidden p-0"
                        >

                            <div className="grid lg:grid-cols-2">

                                {/* LEFT */}

                                <div className="overflow-hidden">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="
                                            aspect-video
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-105
                                        "
                                    />

                                </div>

                                {/* RIGHT */}

                                <div className="flex flex-col p-10">

                                    <div className="flex items-center justify-between">

                                        <span className="text-5xl font-black text-slate-800">

                                            {String(index + 1).padStart(2, "0")}

                                        </span>

                                        <span
                                            className={`
                                                rounded-full
                                                px-4
                                                py-2
                                                text-sm
                                                font-semibold
                                                ${project.status === "Completed"
                                                    ? "bg-green-500/20 text-green-400"
                                                    : "bg-orange-500/20 text-orange-400"
                                                }
                                            `}
                                        >
                                            {project.status}
                                        </span>

                                    </div>

                                    <h3 className="mt-6 text-3xl font-bold text-white">

                                        {project.title}

                                    </h3>

                                    <p className="mt-6 leading-8 text-slate-400">

                                        {project.overview}

                                    </p>

                                    <div className="mt-8">

                                        <h4 className="font-semibold text-white">

                                            Challenge

                                        </h4>

                                        <p className="mt-2 leading-7 text-slate-400">

                                            {project.problem}

                                        </p>

                                    </div>

                                    <div className="mt-6">

                                        <h4 className="font-semibold text-white">

                                            Solution

                                        </h4>

                                        <p className="mt-2 leading-7 text-slate-400">

                                            {project.solution}

                                        </p>

                                    </div>

                                    <div className="mt-6">

                                        <h4 className="font-semibold text-white">

                                            Outcome

                                        </h4>

                                        <p className="mt-2 leading-7 text-slate-400">

                                            {project.impact}

                                        </p>

                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-3">

                                        {project.tech.map((tech) => (

                                            <Badge key={tech}>

                                                {tech}

                                            </Badge>

                                        ))}

                                    </div>

                                    {/* Client Notice */}

                                    <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-4">

                                        <p className="text-sm italic text-slate-500">

                                            Screenshots have been edited to remove
                                            client branding and sensitive information.

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </Card>

                    ))}

                </div>

            </Container>
        </Section>
    );
}