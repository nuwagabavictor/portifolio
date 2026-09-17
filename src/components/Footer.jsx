import { ArrowUp, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { personalInfo } from "../data/portifolio.jsx";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-background text-paragraph transition-colors duration-500">

            {/* CONTACT CTA */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-xl shadow-black/5 sm:p-10 md:p-12">

                    {/* Primary Glow */}
                    <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />

                    <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />

                    <div className="relative text-center">

                        <p className="text-xs font-semibold uppercase tracking-[3px] text-primary sm:text-sm sm:tracking-[4px]">
                            Let's Work Together
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl md:text-5xl">
                            Have a project in mind?
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-paragraph sm:text-base sm:leading-8">
                            Whether it's a banking platform, ERP system,
                            REST API, mobile app, or full-stack web
                            application — I'd love to hear about it.
                        </p>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-primary/30 sm:px-8 sm:py-4"
                        >
                            <MessageCircle size={20} />
                            Get in Touch
                        </a>

                        <p className="mt-4 text-xs text-muted sm:text-sm">
                            Send me a message through the contact form above.
                        </p>
                    </div>
                </div>
            </div>

            {/* BOTTOM FOOTER*/}
            <div className="border-t border-border">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 md:flex-row lg:px-8">

                    {/* Name / Role */}
                    <div className="text-center md:text-left">

                        <h3 className="text-xl font-bold text-heading">
                            {personalInfo.name}
                        </h3>

                        <p className="mt-1 text-sm text-muted">
                            SpringBoot • NodeJs • React • Kotlin • Angular
                        </p>
                    </div>

                    {/* Social + Back To Top */}
                    <div className="flex items-center gap-3">

                        {/* GitHub */}
                        <a
                            href="https://github.com/nuwagabavictor"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-paragraph transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary hover:text-white"
                        >
                            <FaGithub size={18} />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/victor-nuwagaba-047487248"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-paragraph transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary hover:text-white"
                        >
                            <FaLinkedin size={18} />
                        </a>

                        {/* Back To Top */}
                        <a
                            href="#home"
                            aria-label="Back to top"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
                        >
                            <ArrowUp size={18} />
                        </a>
                    </div>
                </div>

                {/* =========================
                    COPYRIGHT
                ========================= */}
                <div className="border-t border-border px-4 py-6 text-center text-sm text-muted">
                    © {new Date().getFullYear()} {personalInfo.name}
                </div>
            </div>
        </footer>
    );
};

export default Footer;