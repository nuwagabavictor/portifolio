import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { skillGroups } from "../data/portifolio.jsx";

const Skills = ({ darkMode }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const cardsPerPage = 3;

    const pages = [];

    for (let i = 0; i < skillGroups.length; i += cardsPerPage) {
        pages.push(skillGroups.slice(i, i + cardsPerPage));
    }

    return (
        <section
            id="skills"
            className={`py-24 overflow-hidden transition-colors duration-500 ${
                darkMode ? "bg-dark-bg" : "bg-light-bg"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-400 font-semibold uppercase tracking-[4px]">
                        Technical Skills
                    </p>

                    <h2
                        className={`mt-3 text-4xl md:text-5xl font-bold ${
                            darkMode
                                ? "text-dark-heading"
                                : "text-light-heading"
                        }`}
                    >
                        My Technical Expertise
                    </h2>

                    <p
                        className={`mt-5 max-w-3xl mx-auto text-lg leading-8 ${
                            darkMode
                                ? "text-dark-paragraph"
                                : "text-light-paragraph"
                        }`}
                    >
                        I specialize in building enterprise-grade backend
                        systems, fintech platforms, modern web applications,
                        mobile apps, and deploying scalable production
                        infrastructure.
                    </p>
                </div>

                {/* Skills Carousel */}
                <div className="relative">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{
                                opacity: 0,
                                x: 50,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: -50,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {pages[currentPage].map((group) => {
                                const Icon = group.icon;

                                return (
                                    <motion.div
                                        key={group.title}
                                        whileHover={{
                                            y: -8,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className={`group relative overflow-hidden rounded-3xl p-8 min-h-[440px] transition-all duration-300 ${
                                            darkMode
                                                ? "bg-slate-900 shadow-[0_20px_55px_rgba(0,0,0,0.45)] hover:shadow-[0_28px_70px_rgba(37,99,235,0.22)]"
                                                : "bg-white shadow-[0_20px_55px_rgba(15,23,42,0.12)] hover:shadow-[0_28px_70px_rgba(37,99,235,0.20)]"
                                        }`}
                                    >
                                        {/* Background Glow */}
                                        <div
                                            className="
                                                absolute
                                                -right-20
                                                -top-20
                                                h-48
                                                w-48
                                                rounded-full
                                                bg-blue-600/10
                                                blur-3xl
                                                transition-all
                                                duration-500
                                                group-hover:bg-blue-600/20
                                            "
                                        />

                                        <div className="relative">

                                            {/* Icon */}
                                            <div className="h-16 w-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-7">
                                                <Icon size={32} />
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className={`text-2xl font-bold mb-4 ${
                                                    darkMode
                                                        ? "text-dark-heading"
                                                        : "text-light-heading"
                                                }`}
                                            >
                                                {group.title}
                                            </h3>

                                            {/* Description */}
                                            <p
                                                className={`text-base leading-7 mb-7 ${
                                                    darkMode
                                                        ? "text-dark-paragraph"
                                                        : "text-light-paragraph"
                                                }`}
                                            >
                                                {group.description}
                                            </p>

                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-2.5">
                                                {group.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="
                                                            px-3.5
                                                            py-2
                                                            rounded-full
                                                            text-sm
                                                            font-medium
                                                            bg-blue-600/10
                                                            text-blue-500
                                                            transition-all
                                                            duration-300
                                                            hover:bg-blue-600
                                                            hover:text-white
                                                        "
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

                    {/* Page Indicators */}
                    {pages.length > 1 && (
                        <div className="flex justify-center items-center gap-3 mt-10">
                            {pages.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setCurrentPage(index)}
                                    aria-label={`Show skills page ${
                                        index + 1
                                    }`}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        currentPage === index
                                            ? "w-10 bg-blue-600"
                                            : darkMode
                                                ? "w-2.5 bg-slate-700 hover:bg-slate-500"
                                                : "w-2.5 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Core Technologies */}
                <div className="mt-20">
                    <h3
                        className={`text-center text-2xl md:text-3xl font-bold mb-10 ${
                            darkMode
                                ? "text-dark-heading"
                                : "text-light-heading"
                        }`}
                    >
                        Core Technologies I Work With
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Java",
                            "Spring Boot",
                            "Apache Fineract",
                            "Node.js",
                            "TypeScript",
                            "React",
                            "Angular",
                            "Tailwind CSS",
                            "Kotlin",
                            "Jetpack Compose",
                            "MariaDB",
                            "PostgreSQL",
                            "Docker",
                            "Linux",
                            "Nginx",
                            "Git",
                            "GitHub",
                        ].map((tech) => (
                            <motion.div
                                key={tech}
                                whileHover={{
                                    y: -4,
                                    scale: 1.03,
                                }}
                                className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    darkMode
                                        ? "bg-slate-900 text-dark-heading shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.18)]"
                                        : "bg-white text-light-heading shadow-[0_10px_30px_rgba(15,23,42,0.10)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.18)]"
                                }`}
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