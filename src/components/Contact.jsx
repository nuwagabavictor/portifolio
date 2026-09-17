import {
    MessageCircle,
    ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import ContactForm from "./ContactForm";
import {contacts} from "../data/portifolio.jsx";

const Contact = () => {

    return (
        <section
            id="contact"
            className="bg-background py-16 transition-colors duration-500 sm:py-20 lg:py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* SECTION HEADER*/}
                <div className="mb-10 text-center sm:mb-12 lg:mb-16">

                    <p className="text-xs font-semibold uppercase tracking-[3px] text-primary sm:text-sm sm:tracking-[4px]">
                        Contact
                    </p>

                    <h2 className="mt-3 text-3xl font-bold leading-tight text-heading sm:text-4xl md:text-5xl">
                        Let's Build Something{" "}
                        <span className="text-primary">
                            Together
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-paragraph sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
                        Have a project, business idea, or software
                        challenge? Send me a message and let's talk about
                        how I can help turn it into a working solution.
                    </p>
                </div>

                {/* CONTACT CONTENT */}
                <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-5 lg:gap-10">

                    {/* LEFT SIDE */}
                    <div className="w-full lg:col-span-2">

                        <div className="w-full rounded-2xl border border-border bg-surface p-5 shadow-xl shadow-black/5 transition-colors duration-500 sm:rounded-3xl sm:p-6 lg:p-8">

                            {/* Header */}
                            <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-14 sm:w-14 sm:rounded-2xl">
                                    <MessageCircle
                                        size={22}
                                        className="sm:hidden"
                                    />

                                    <MessageCircle
                                        size={28}
                                        className="hidden sm:block"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-lg font-bold text-heading sm:text-xl">
                                        Get in touch
                                    </h3>

                                    <p className="mt-1 text-xs text-muted sm:text-sm">
                                        I'm always open to new opportunities.
                                    </p>
                                </div>
                            </div>

                            {/*CONTACT DETAILS */}
                            <div className="space-y-3 sm:space-y-4">

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
                                                className={`flex w-full items-center gap-3 rounded-xl border border-border bg-background/60 p-3 transition-all duration-300 sm:gap-4 sm:rounded-2xl sm:p-4 ${
                                                    href
                                                        ? "hover:-translate-y-1 hover:border-primary/50 hover:bg-surface-hover"
                                                        : ""
                                                }`}
                                            >

                                                {/* Icon */}
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-11 sm:w-11 sm:rounded-xl">
                                                    <Icon
                                                        size={18}
                                                        className="sm:hidden"
                                                    />

                                                    <Icon
                                                        size={20}
                                                        className="hidden sm:block"
                                                    />
                                                </div>

                                                {/* Text */}
                                                <div className="min-w-0 flex-1">

                                                    <p className="text-[10px] uppercase tracking-wider text-muted sm:text-xs">
                                                        {label}
                                                    </p>

                                                    <p className="mt-1 break-words text-xs font-medium text-heading sm:text-sm">
                                                        {value}
                                                    </p>
                                                </div>

                                                {/* Arrow */}
                                                {href && (
                                                    <ArrowUpRight
                                                        size={16}
                                                        className="shrink-0 text-muted transition-transform duration-300 group-hover:text-primary"
                                                    />
                                                )}
                                            </Content>
                                        );
                                    }
                                )}
                            </div>

                            {/*SOCIAL LINKS */}
                            <div className="mt-6 border-t border-border pt-6 sm:mt-8 sm:pt-8">

                                <div className="flex items-center justify-between gap-4">

                                    <p className="text-xs text-muted sm:text-sm">
                                        Find me online
                                    </p>

                                    <div className="flex gap-3">

                                        {/* GitHub */}
                                        <a
                                            href="https://github.com/nuwagabavictor"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-paragraph transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white sm:h-11 sm:w-11 sm:rounded-xl"
                                        >
                                            <FaGithub size={18} />
                                        </a>

                                        {/* LinkedIn */}
                                        <a
                                            href="https://linkedin.com/in/victor-nuwagaba-047487248"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-paragraph transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white sm:h-11 sm:w-11 sm:rounded-xl"
                                        >
                                            <FaLinkedin size={18} />
                                        </a>

                                    </div>
                                </div>
                            </div>

                            {/* AVAILABILITY */}
                            <div className="mt-6 flex items-center gap-3 sm:mt-8">

                                <span className="relative flex h-3 w-3 shrink-0">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />

                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                                </span>

                                <p className="text-xs text-paragraph sm:text-sm">
                                    Available for new projects
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE — CONTACT FORM*/}
                    <div className="w-full min-w-0 lg:col-span-3">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;