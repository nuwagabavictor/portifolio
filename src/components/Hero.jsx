import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portifolio.jsx";
import profileImage from "../assets/profile.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-background text-heading pt-28 md:pt-32 lg:pt-36 pb-24 px-6 transition-colors duration-500"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

                <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto text-center">

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto w-fit"
                >
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl scale-110" />

                    <div className="relative rounded-full p-[2px] bg-primary">
                        <div className="rounded-full bg-surface p-1">
                            <img
                                src={profileImage}
                                alt={personalInfo.name}
                                className="h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 rounded-full object-cover object-[center_2%]"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                >
                    Hi, I'm{" "}
                    <span className="text-primary">{personalInfo.name}</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="mt-5 text-lg md:text-2xl font-semibold text-paragraph"
                >
                    Full Stack Developer
                    <span className="mx-3 text-primary">•</span>
                    FinTech
                    <span className="mx-3 text-primary">•</span>
                    Core Banking
                </motion.h2>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="mt-6 mx-auto max-w-3xl text-base md:text-lg leading-8 text-paragraph"
                >
                    {personalInfo.bio}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    className="flex flex-wrap justify-center gap-4 mt-10"
                >
                    <a href="#projects" className="flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-semibold text-white shadow-sm shadow-primary/50 transition-all duration-300 hover:text-primary hover:bg-white hover:-translate-y-1 hover:opacity-90">
                        View Projects
                        <ArrowRight size={18} />
                    </a>

                    <a
                        href="/Victor_Nuwagaba_CV.pdf"
                        download
                        className="flex items-center gap-2 rounded-xl border border-primary-dark bg-transparent px-7 py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:border-white hover:-translate-y-1"
                    >
                        <Download size={18} />
                        Download CV
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                    className="flex justify-center items-center gap-4 mt-10"
                >
                    {[
                        {
                            icon: <FaGithub size={20} />,
                            href: "https://github.com/nuwagabavictor",
                            label: "GitHub",
                        },
                        {
                            icon: <FaLinkedin size={20} />,
                            href: "https://linkedin.com/in/victor-nuwagaba-047487248",
                            label: "LinkedIn",
                        },
                        {
                            icon: <Mail size={20} />,
                            href: "mailto:nuwagabavictor197@gmail.com",
                            label: "Email",
                        },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target={social.href.startsWith("http") ? "_blank" : undefined}
                            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            aria-label={social.label}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-heading transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                        >
                            {social.icon}
                        </a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.a
                    href="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="inline-flex flex-col items-center mt-16 group"
                >
                    <span className="text-xs uppercase tracking-[3px] text-muted">
                        Explore
                    </span>

                    <span className="mt-3 flex h-10 w-6 justify-center rounded-full border border-primary/30 pt-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" />
                    </span>
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;