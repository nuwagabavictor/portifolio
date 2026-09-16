import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {coreTechnologies, skillGroups} from "../data/portifolio.jsx";

const Skills = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const cardsPerPage = 3;

    const pages = [];

    for (let i = 0; i < skillGroups.length; i += cardsPerPage) {
        pages.push(skillGroups.slice(i, i + cardsPerPage));
    }

    return (
        <section id="skills" className="relative overflow-hidden bg-background py-20 sm:py-24 transition-colors duration-500 ">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-40 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <p className="text-2xl font-bold uppercase tracking-[4px] text-primary ">
                        Technical Skills
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl md:text-5xl">
                        My Technical Expertise
                    </h2>

                    <p className=" mx-auto mt-5 max-w-3xl text-base leading-7 text-paragraph sm:text-lg sm:leading-8">
                        I specialize in building enterprise-grade backend
                        systems, microservices, fintech platforms, modern web applications,
                        mobile apps, and scalable production infrastructure.
                    </p>
                </div>

                <div className="relative">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{opacity: 0, x: 40,}}
                            animate={{opacity: 1, x: 0,}}
                            exit={{opacity: 0, x: -40,}}
                            transition={{duration: 0.4, ease: "easeInOut",}}
                            className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
                            {pages[currentPage].map((group) => {
                                const Icon = group.icon;

                                return (
                                    <motion.div
                                        key={group.title}
                                        whileHover={{y: -6,}}
                                        transition={{duration: 0.25,}}
                                        className=" group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-lg shadow-black/5
                                                    transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-7">

                                        {/* Card Glow */}
                                        <div
                                            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10"
                                        />

                                        <div className="relative">

                                            {/* CARD TOP*/}
                                            <div className="flex items-start gap-5">

                                                {/* Icon */}
                                                <div
                                                    className=" flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary
                                                                transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                                                >
                                                    <Icon size={20} />
                                                </div>

                                                {/* Title + Description */}
                                                <div className="min-w-0">

                                                    <h3 className="text-xl font-bold text-heading sm:text-xl">
                                                        {group.title}
                                                    </h3>

                                                    <p className=" mt-3 text-sm leading-6 text-paragraph">
                                                        {group.description}
                                                    </p>

                                                </div>
                                            </div>

                                            {/* SKILLS*/}
                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {group.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className=" rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium text-accent
                                                                     transition-all duration-300 hover:border-primary hover:bg-primaryhover:text-white"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {/* PAGE INDICATORS*/}
                    {pages.length > 1 && (
                        <div className="mt-10 flex items-center justify-center gap-3">
                            {pages.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setCurrentPage(index)}
                                    aria-label={`Show skills page ${
                                        index + 1
                                    }`}
                                    className={` h-2.5 rounded-full transition-all duration-300
                                        ${
                                        currentPage === index ? "w-10 bg-primary" : "w-2.5 bg-border hover:bg-primary/50"}
                                    `}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* CORE TECHNOLOGIES*/}
                <div className="mt-20">

                    <div className="mb-10 text-center">
                        <p className="text-xl font-bold uppercase tracking-[3px] text-primary ">
                            Toolbox
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-heading sm:text-3xl">
                            Core Technologies I Work With
                        </h3>
                    </div>

                    <div className=" flex flex-wrap items-center justify-center gap-3">
                        {coreTechnologies.map((tech) => (
                            <motion.div
                                key={tech}
                                whileHover={{y: -3, scale: 1.03,}}
                                transition={{duration: 0.2,}}
                                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-heading transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary
                                "
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;