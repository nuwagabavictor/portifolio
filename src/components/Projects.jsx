import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ExternalLink,
    Building2,
    Smartphone,
    Globe,
    Server,
    Database,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "../data/portifolio.jsx";

const filters = [
    "All",
    "FinTech",
    "ERP",
    "Backend",
    "Mobile",
];

const categoryIcons = {
    FinTech: Building2,
    ERP: Database,
    Backend: Server,
    Mobile: Smartphone,
};

const Projects = ({ darkMode }) => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(
                (project) => project.category === activeFilter
            );

    const currentProject = filteredProjects[currentIndex];

    const changeFilter = (filter) => {
        setActiveFilter(filter);
        setCurrentIndex(0);
        setDirection(1);
    };

    const nextProject = () => {
        if (filteredProjects.length <= 1) {
            return;
        }

        setDirection(1);

        setCurrentIndex((previous) =>
            previous === filteredProjects.length - 1
                ? 0
                : previous + 1
        );
    };

    const previousProject = () => {
        if (filteredProjects.length <= 1) {
            return;
        }

        setDirection(-1);

        setCurrentIndex((previous) =>
            previous === 0
                ? filteredProjects.length - 1
                : previous - 1
        );
    };

    if (!currentProject) {
        return (
            <section
                id="projects"
                className={`py-24 transition-colors duration-500 ${
                    darkMode ? "bg-dark-bg" : "bg-light-bg"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-slate-500">
                        No projects found in this category.
                    </p>
                </div>
            </section>
        );
    }

    const Icon =
        categoryIcons[currentProject.category] || Globe;

    return (
        <section
            id="projects"
            className={`py-24 transition-colors duration-500 ${
                darkMode ? "bg-dark-bg" : "bg-light-bg"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-blue-400 font-semibold uppercase tracking-[4px]">
                        Portfolio
                    </p>

                    <h2
                        className={`mt-3 text-4xl md:text-5xl font-bold ${
                            darkMode
                                ? "text-dark-heading"
                                : "text-light-heading"
                        }`}
                    >
                        Projects I've Built
                    </h2>

                    <p
                        className={`mt-5 max-w-3xl mx-auto text-lg leading-8 ${
                            darkMode
                                ? "text-dark-paragraph"
                                : "text-light-paragraph"
                        }`}
                    >
                        From enterprise banking platforms and ERP systems to
                        mobile applications and scalable APIs — these projects
                        showcase my experience building production-ready
                        software.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => changeFilter(filter)}
                            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                                activeFilter === filter
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                    : darkMode
                                        ? "bg-dark-card text-dark-paragraph hover:bg-blue-600 hover:text-white"
                                        : "bg-light-card text-light-paragraph hover:bg-blue-600 hover:text-white"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Project Slider */}
                <div
                    className={`relative overflow-hidden rounded-3xl border ${
                        darkMode
                            ? "bg-dark-card border-dark-border"
                            : "bg-light-card border-light-border"
                    }`}
                >
                    <AnimatePresence
                        mode="wait"
                        custom={direction}
                    >
                        <motion.div
                            key={`${activeFilter}-${currentProject.title}`}
                            custom={direction}
                            initial={{
                                opacity: 0,
                                x: direction > 0 ? 80 : -80,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: direction > 0 ? -80 : 80,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                            className="grid lg:grid-cols-2"
                        >
                            {/* Project Image */}
                            <div className="relative min-h-[420px] lg:min-h-[560px] overflow-hidden">
                                <img
                                    src={currentProject.image}
                                    alt={currentProject.title}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Category */}
                                <div className="absolute top-6 left-6">
                                    <div className="flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 text-sm font-medium text-white">
                                        <Icon size={17} />
                                        {currentProject.category}
                                    </div>
                                </div>

                                {/* Project Number */}
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-sm font-medium text-white/70">
                                        Project{" "}
                                        {String(currentIndex + 1).padStart(
                                            2,
                                            "0"
                                        )}{" "}
                                        /{" "}
                                        {String(filteredProjects.length).padStart(
                                            2,
                                            "0"
                                        )}
                                    </p>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">

                                {/* Category */}
                                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold uppercase tracking-wider">
                                    <Icon size={17} />
                                    {currentProject.category}
                                </div>

                                {/* Title */}
                                <h3
                                    className={`mt-4 text-3xl md:text-4xl font-bold ${
                                        darkMode
                                            ? "text-dark-heading"
                                            : "text-light-heading"
                                    }`}
                                >
                                    {currentProject.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-blue-400 font-medium mt-3">
                                    {currentProject.subtitle}
                                </p>

                                {/* Description */}
                                <p
                                    className={`mt-6 text-base md:text-lg leading-8 ${
                                        darkMode
                                            ? "text-dark-paragraph"
                                            : "text-light-paragraph"
                                    }`}
                                >
                                    {currentProject.description}
                                </p>

                                {/* Highlights */}
                                <div className="mt-7 space-y-3">
                                    {currentProject.highlights.map(
                                        (item) => (
                                            <div
                                                key={item}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />

                                                <p
                                                    className={`text-sm leading-6 ${
                                                        darkMode
                                                            ? "text-slate-400"
                                                            : "text-slate-600"
                                                    }`}
                                                >
                                                    {item}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-7">
                                    {currentProject.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-4 mt-8">
                                    {currentProject.github && (
                                        <a
                                            href={currentProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 rounded-xl border border-blue-500 px-5 py-2.5 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                        >
                                            <FaGithub size={18} />
                                            GitHub
                                        </a>
                                    )}

                                    {currentProject.live && (
                                        <a
                                            href={currentProject.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 transition-all duration-300"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Slider Controls */}
                    {filteredProjects.length > 1 && (
                        <div className="absolute bottom-6 right-6 flex items-center gap-3">
                            <button
                                type="button"
                                onClick={previousProject}
                                aria-label="Previous project"
                                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${
                                    darkMode
                                        ? "border-slate-700 bg-slate-950/70 text-slate-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                                        : "border-slate-200 bg-white/80 text-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                                }`}
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <button
                                type="button"
                                onClick={nextProject}
                                aria-label="Next project"
                                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${
                                    darkMode
                                        ? "border-slate-700 bg-slate-950/70 text-slate-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                                        : "border-slate-200 bg-white/80 text-slate-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                                }`}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Slider Indicators */}
                {filteredProjects.length > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                        {filteredProjects.map((project, index) => (
                            <button
                                key={project.title}
                                type="button"
                                onClick={() => {
                                    setDirection(
                                        index > currentIndex ? 1 : -1
                                    );
                                    setCurrentIndex(index);
                                }}
                                aria-label={`View ${project.title}`}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "w-8 bg-blue-600"
                                        : darkMode
                                            ? "w-2 bg-slate-700 hover:bg-slate-500"
                                            : "w-2 bg-slate-300 hover:bg-slate-400"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;