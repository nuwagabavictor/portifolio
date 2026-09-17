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
    "Web App",
    "Mobile",
    "Website"
];

const categoryIcons = {
    FinTech: Building2,
    ERP: Database,
    Backend: Server,
    Mobile: Smartphone,
    Website: Globe,
};

const Projects = () => {
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
            <section id="projects" className="bg-background py-20 sm:py-24 transition-colors duration-500">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <p className="text-muted">
                        No projects found in this category.
                    </p>
                </div>
            </section>
        );
    }

    const Icon = categoryIcons[currentProject.category] || Globe;

    return (
        <section id="projects" className=" relative overflow-hidden bg-background py-20 sm:py-24 transition-colors duration-500">
            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* SECTION HEADING */}
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">

                    <p className=" text-xl font-bold uppercase tracking-[4px] text-primary">
                        Portfolio
                    </p>

                    <h2 className=" mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl md:text-5xl ">
                        Projects I've Built
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-paragraph sm:text-lg sm:leading-8">
                        From enterprise banking platforms and ERP systems to
                        mobile applications and scalable APIs — these projects
                        showcase my experience building production-ready
                        software.
                    </p>
                </div>

                {/* FILTERS */}
                <div className=" mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:mb-12 sm:gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => changeFilter(filter)}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5 sm:py-2.5
                                ${
                                activeFilter === filter
                                    ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
                                    : "border-border bg-surface text-paragraph hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                            }
                            `}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* PROJECT SLIDER*/}
                <div className=" relative overflow-hidden rounded-3xl border border-border bg-surface shadow-lg shadow-black/5">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={`${activeFilter}-${currentProject.title}`}
                            custom={direction}
                            initial={{opacity: 0, x: direction > 0 ? 80 : -80,}}
                            animate={{opacity: 1, x: 0,}}
                            exit={{opacity: 0, x: direction > 0 ? -80 : 80,}}
                            transition={{duration: 0.4, ease: "easeInOut",}}
                            className="grid grid-cols-1 lg:grid-cols-2"
                        >
                            {/*PROJECT IMAGE*/}
                            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-background p-4 sm:min-h-[400px] lg:min-h-[560px] lg:p-6">
                                <img
                                    src={currentProject.image}
                                    alt={currentProject.title}
                                    className="h-full w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                                />

                                {/* Soft gradient so text overlays remain readable */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                                {/* Category */}
                                <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-accent px-3 py-2 text-xs font-medium text-white backdrop-blur-md sm:px-4 sm:text-sm ">
                                        <Icon size={20} />
                                        {currentProject.category}
                                    </div>
                                </div>

                                {/* Project Number */}
                                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                                    <p className="text-xs font-medium text-white/70 sm:text-sm">
                                        Project{" "}
                                        {String(currentIndex + 1).padStart(
                                            2,
                                            "0"
                                        )}{" "}
                                        /{" "}
                                        {String(
                                            filteredProjects.length
                                        ).padStart(2, "0")}
                                    </p>
                                </div>
                            </div>

                            {/*PROJECT CONTENT*/}
                            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 ">

                                {/* Category + Project Number */}
                                <div className=" flex flex-wrap items-center justify-between gap-3 ">
                                    <div className="flex items-center gap-2 text-xl font-bold uppercase tracking-wider text-primary ">
                                        <Icon size={20} />
                                        {currentProject.category}
                                    </div>

                                    <span className=" rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-accent ">
                                        {String(currentIndex + 1).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className=" mt-4 text-2xl font-bold leading-tight text-heading sm:text-3xl md:text-4xl ">
                                    {currentProject.title}
                                </h3>

                                {/* Subtitle */}
                                <p className=" mt-3 font-medium text-accent ">
                                    {currentProject.subtitle}
                                </p>

                                {/* Description */}
                                <p className="mt-5 text-sm leading-7 text-paragraph sm:mt-6 sm:text-base md:text-lg md:leading-8 ">
                                    {currentProject.description}
                                </p>

                                {/* HIGHLIGHTS*/}
                                <div className="mt-6 flex flex-col gap-3">
                                    {currentProject.highlights.map(
                                        (item) => (
                                            <div
                                                key={item}
                                                className=" flex items-start gap-3"
                                            >
                                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-dark"/>

                                                <p className="text-sm leading-6 text-paragraph">
                                                    {item}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>

                                {/* TECH STACK */}
                                <div className="mt-6 flex flex-wrap items-center gap-2 ">
                                    {currentProject.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className=" rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium text-accent transition-all duration-300 hover:border-primary hover:text-accent "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* ACTION BUTTONS*/}
                                <div className=" mt-7 flex flex-wrap items-center gap-3">
                                    {currentProject.github && (
                                        <a
                                            href={currentProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white "
                                        >
                                            <FaGithub size={18} />
                                            GitHub
                                        </a>
                                    )}

                                    {currentProject.live && (
                                        <a
                                            href={currentProject.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className=" inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* =========================================================
                        SLIDER CONTROLS
                    ========================================================= */}
                    {filteredProjects.length > 1 && (
                        <div className="absolute bottom-4 right-4 flex items-center gap-2 sm:bottom-6 sm:right-6 sm:gap-3 ">
                            <button
                                type="button"
                                onClick={previousProject}
                                aria-label="Previous project"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary sm:h-11 sm:w-11"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <button
                                type="button"
                                onClick={nextProject}
                                aria-label="Next project"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary sm:h-11 sm:w-11"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>

                {/* =========================================================
                    SLIDER INDICATORS
                ========================================================= */}
                {filteredProjects.length > 1 && (
                    <div className="mt-8 flex items-center justify-center gap-2">
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
                                className={`h-2 rounded-full transition-all duration-300
                                    ${index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                                }
                                `}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;