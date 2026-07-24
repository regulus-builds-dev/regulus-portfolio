import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import Button from "./ui/Button";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

export default function Contact() {
    return (
        <Section
            id="contact"
            className="bg-slate-900"
        >
            <Container>

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT */}

                    <div>

                        <SectionTitle
                            eyebrow="Contact"
                            title="Let's Build Something Together"
                            subtitle="Whether you need a website, business system, or
                            Android mobile application, Regulus is open to
                            discussing projects and exploring practical solutions
                            for your needs."
                        />

                        <div className="mt-10">

                            <Button href="mailto:regulus.builds.dev@gmail.com">

                                Send an Email

                            </Button>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <Card>

                        <div className="space-y-8">

                            <div>

                                <h3 className="text-2xl font-bold">

                                    Contact Information

                                </h3>

                                <p className="mt-3 text-slate-400">

                                    The fastest way to reach Regulus is through email.

                                </p>

                            </div>

                            <div className="space-y-5">

                                <a
                                    href="mailto:regulus.builds.dev@gmail.com"
                                    className="flex items-center gap-4 transition hover:text-blue-400"
                                >

                                    <FaEnvelope size={22} />

                                    <span>

                                        regulus.builds.dev@gmail.com

                                    </span>

                                </a>

                                {/* <a
                                    href="https://github.com/YOUR_USERNAME"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 transition hover:text-blue-400"
                                >

                                    <FaGithub size={22} />

                                    <span>

                                        github.com/YOUR_USERNAME

                                    </span>

                                </a> */}

                                <a
                                    href="https://linkedin.com/in/regulus-builds-dev"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 transition hover:text-blue-400"
                                >

                                    <FaLinkedin size={22} />

                                    <span>

                                        linkedin.com/in/regulus-builds-dev

                                    </span>

                                </a>

                            </div>

                            <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">

                                <h4 className="font-semibold">

                                    Typical Response Time

                                </h4>

                                <p className="mt-3 leading-7 text-slate-400">
                                    Regulus will get back to you within 24 hours to understand your goals,
                                    explore requirements, and discuss how we can help bring your idea to life.
                                </p>

                            </div>

                        </div>

                    </Card>

                </div>

            </Container>
        </Section>
    );
}