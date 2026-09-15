import { ArrowUp, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { personalInfo } from "../data/portifolio.jsx";

const Footer = ({ darkMode }) => {
    return (
        <footer
            className={`border-t transition-colors duration-500 ${
                darkMode
                    ? "bg-dark-bg border-dark-border text-dark-paragraph"
                    : "bg-light-bg border-light-border text-light-paragraph"
            }`}
        >
            {/* Contact CTA */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div
                    className={`relative overflow-hidden rounded-3xl border p-8 md:p-12 ${
                        darkMode
                            ? "bg-dark-card border-dark-border"
                            : "bg-light-card border-light-border"
                    }`}
                >
                    {/* Blue Glow */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-blue-600/20 blur-[120px]" />

                    <div className="relative text-center">
                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[4px]">
                            Let's Work Together
                        </p>

                        <h2
                            className={`mt-3 text-3xl md:text-5xl font-bold ${
                                darkMode
                                    ? "text-dark-heading"
                                    : "text-light-heading"
                            }`}
                        >
                            Have a project in mind?
                        </h2>

                        <p className="mt-5 max-w-2xl mx-auto leading-7 text-slate-400">
                            Whether it's a banking platform, ERP system,
                            REST API, mobile app, or full-stack web
                            application — I'd love to hear about it.
                        </p>

                        {/* Scroll to Contact Section */}
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <MessageCircle size={20} />
                            Get in Touch
                        </a>

                        <p className="mt-4 text-sm text-slate-500">
                            Send me a message through the contact form above.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div
                className={`border-t ${
                    darkMode
                        ? "border-dark-border"
                        : "border-light-border"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Name */}
                    <div className="text-center md:text-left">
                        <h3
                            className={`text-xl font-bold ${
                                darkMode
                                    ? "text-dark-heading"
                                    : "text-light-heading"
                            }`}
                        >
                            {personalInfo.name}
                        </h3>

                        <p className="text-sm text-slate-500 mt-1">
                            Backend Engineer • FinTech Developer • React
                            Developer
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/nuwagabavictor"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className={`h-10 w-10 flex items-center justify-center rounded-xl transition ${
                                darkMode
                                    ? "bg-dark-card hover:bg-blue-600 hover:text-white"
                                    : "bg-light-card hover:bg-blue-600 hover:text-white"
                            }`}
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href="https://linkedin.com/in/victornuwagaba/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className={`h-10 w-10 flex items-center justify-center rounded-xl transition ${
                                darkMode
                                    ? "bg-dark-card hover:bg-blue-600 hover:text-white"
                                    : "bg-light-card hover:bg-blue-600 hover:text-white"
                            }`}
                        >
                            <FaLinkedin size={18} />
                        </a>

                        {/* Back To Top */}
                        <a
                            href="#home"
                            aria-label="Back to top"
                            className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            <ArrowUp size={18} />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} {personalInfo.name}</div>
            </div>
        </footer>
    );
};

export default Footer;