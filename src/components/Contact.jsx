import {
    Mail,
    MapPin,
    MessageCircle,
    ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { personalInfo } from "../data/portifolio.jsx";
import ContactForm from "./ContactForm";

const Contact = ({ darkMode }) => {
    const contacts = [
        {
            icon: Mail,
            label: "Email",
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
        },
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: "+256 770 799 15",
            href: "https://wa.me/25677079915",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Kampala, Uganda",
            href: null,
        },
    ];

    return (
        <section
            id="contact"
            className={`py-24 transition-colors duration-500 ${
                darkMode
                    ? "bg-dark-bg"
                    : "bg-light-bg"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-blue-400 font-semibold uppercase tracking-[4px]">
                        Contact
                    </p>

                    <h2
                        className={`mt-3 text-4xl md:text-5xl font-bold ${
                            darkMode
                                ? "text-dark-heading"
                                : "text-light-heading"
                        }`}
                    >
                        Let's Build Something
                        <span className="text-blue-500"> Together</span>
                    </h2>

                    <p
                        className={`mt-5 max-w-2xl mx-auto text-lg leading-8 ${
                            darkMode
                                ? "text-dark-paragraph"
                                : "text-light-paragraph"
                        }`}
                    >
                        Have a project, business idea, or software challenge?
                        Send me a message and let's talk about how I can help
                        turn it into a working solution.
                    </p>
                </div>

                {/* Contact Content */}
                <div className="grid lg:grid-cols-5 gap-10 items-start">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-2">

                        <div
                            className={`rounded-3xl border p-8 ${
                                darkMode
                                    ? "bg-dark-card border-dark-border"
                                    : "bg-light-card border-light-border"
                            }`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400">
                                    <MessageCircle size={28} />
                                </div>

                                <div>
                                    <h3
                                        className={`text-xl font-bold ${
                                            darkMode
                                                ? "text-dark-heading"
                                                : "text-light-heading"
                                        }`}
                                    >
                                        Get in touch
                                    </h3>

                                    <p className="text-sm text-slate-500 mt-1">
                                        I'm always open to new opportunities.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-4">
                                {contacts.map(
                                    ({
                                         icon: Icon,
                                         label,
                                         value,
                                         href,
                                     }) => {
                                        const Content = href ? "a" : "div";

                                        return (
                                            <Content
                                                key={label}
                                                href={href || undefined}
                                                target={
                                                    href?.startsWith("http")
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    href?.startsWith("http")
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                }
                                                className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${
                                                    href
                                                        ? "hover:-translate-y-1 hover:border-blue-500"
                                                        : ""
                                                } ${
                                                    darkMode
                                                        ? "bg-slate-900/40 border-dark-border"
                                                        : "bg-white/60 border-light-border"
                                                }`}
                                            >
                                                <div className="h-11 w-11 shrink-0 flex items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                                                    <Icon size={20} />
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <p className="text-xs uppercase tracking-wider text-slate-500">
                                                        {label}
                                                    </p>

                                                    <p
                                                        className={`mt-1 text-sm font-medium truncate ${
                                                            darkMode
                                                                ? "text-dark-heading"
                                                                : "text-light-heading"
                                                        }`}
                                                    >
                                                        {value}
                                                    </p>
                                                </div>

                                                {href && (
                                                    <ArrowUpRight
                                                        size={17}
                                                        className="text-slate-500"
                                                    />
                                                )}
                                            </Content>
                                        );
                                    }
                                )}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-slate-800">
                                <p className="text-sm text-slate-500 mb-4">
                                    Find me online
                                </p>

                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/nuwagaba"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                        className={`h-11 w-11 flex items-center justify-center rounded-xl transition-all duration-300 ${
                                            darkMode
                                                ? "bg-slate-900 text-slate-300 hover:bg-blue-600 hover:text-white"
                                                : "bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white"
                                        }`}
                                    >
                                        <FaGithub size={20} />
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/victornuwagaba"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className={`h-11 w-11 flex items-center justify-center rounded-xl transition-all duration-300 ${
                                            darkMode
                                                ? "bg-slate-900 text-slate-300 hover:bg-blue-600 hover:text-white"
                                                : "bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white"
                                        }`}
                                    >
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="mt-8 flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                                </span>

                                <p className="text-sm text-slate-400">
                                    Available for new projects
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - CONTACT FORM */}
                    <div className="lg:col-span-3">
                        <ContactForm darkMode={darkMode} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;