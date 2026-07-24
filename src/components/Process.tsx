import Container from "./ui/Container";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const process = [
    {
        number: "01",
        title: "Consultation",
        description:
            "Discuss your business, understand the challenges, gather requirements, and define the project's objectives before development begins.",
    },
    {
        number: "02",
        title: "Planning & Design",
        description:
            "Plan the system architecture, user interface, features, and project milestones to ensure a clear development roadmap.",
    },
    {
        number: "03",
        title: "Development",
        description:
            "Build the application using modern technologies while providing regular progress updates and incorporating feedback throughout development.",
    },
    {
        number: "04",
        title: "Testing & Deployment",
        description:
            "Thoroughly test the application, resolve issues, optimize performance, and prepare the final release with post-delivery support when needed.",
    },
];

export default function Process() {
    return (
        <Section
            id="process"
            className="bg-slate-950"
        >
            <Container>

                <SectionTitle
                    eyebrow="Process"
                    title="How Projects Are Delivered"
                    subtitle="Every project follows a structured process to ensure clear communication, efficient development, and reliable results."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {process.map((step) => (

                        <div
                            key={step.number}
                            className="
                                rounded-2xl
                                border
                                border-slate-800
                                bg-slate-900
                                p-8
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-blue-500
                            "
                        >

                            <span className="text-5xl font-black text-slate-800">

                                {step.number}

                            </span>

                            <h3 className="mt-6 text-xl font-bold text-white">

                                {step.title}

                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">

                                {step.description}

                            </p>

                        </div>

                    ))}

                </div>

            </Container>
        </Section>
    );
}