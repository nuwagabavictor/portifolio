import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    Mail,
} from "lucide-react";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { personalInfo } from "../data/portifolio.jsx";
import profileImage from "../assets/profile.png";

const Hero = ({ darkMode }) => {
    return (
        <section
            id="home"
            className={`relative overflow-hidden pt-28 md:pt-32 lg:pt-36 pb-24 px-6 transition-colors duration-500 ${
                darkMode
                    ? "bg-dark-bg text-dark-heading"
                    : "bg-light-bg text-light-heading"
            }`}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div
                    className="
                        absolute top-10 left-1/2
                        h-96 w-96
                        -translate-x-1/2
                        rounded-full
                        bg-blue-600/20
                        blur-[130px]
                    "
                />

                <div
                    className="
                        absolute top-1/2 left-1/4
                        h-64 w-64
                        rounded-full
                        bg-cyan-500/10
                        blur-[120px]
                    "
                />

                <div
                    className="
                        absolute bottom-0 right-1/4
                        h-72 w-72
                        rounded-full
                        bg-blue-500/10
                        blur-[120px]
                    "
                />
            </div>

            {/* HERO CONTENT */}
            <div className="max-w-5xl mx-auto text-center">

                {/* PROFILE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="relative mx-auto w-fit"
                >
                    {/* Glow behind image */}
                    <div
                        className="
                            absolute inset-0
                            rounded-full
                            bg-blue-600/30
                            blur-3xl
                            scale-110
                        "
                    />

                    {/* Image ring */}
                    <div
                        className={`relative rounded-full p-1.5 ${
                            darkMode
                                ? "bg-slate-800"
                                : "bg-white shadow-xl"
                        }`}
                    >
                        <div className="rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-400 p-1">
                            <img
                                src={profileImage}
                                alt={personalInfo.name}
                                className="
                                    h-50 w-40
                                    md:h-48 md:w-48
                                    lg:h-52 lg:w-52
                                    rounded-full
                                    object-cover
                                    object-[center_5%]
                                "
                            />
                        </div>
                    </div>

                    {/* Online indicator */}
                    <span
                        className={`absolute bottom-4 right-4 h-6 w-6 rounded-full border-4 ${
                            darkMode
                                ? "border-slate-950 bg-green-500"
                                : "border-white bg-green-500"
                        }`}
                    />
                </motion.div>

                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                    }}
                    className="mt-8"
                >
                    <span
                        className="
                            inline-flex items-center gap-2
                            px-4 py-2
                            rounded-full
                            border border-blue-500/30
                            bg-blue-500/10
                            text-blue-400
                            text-sm
                            font-medium
                        "
                    >
                        <span
                            className="
                                h-2 w-2
                                rounded-full
                                bg-blue-500
                                animate-pulse
                            "
                        />

                        Available for Full Stack & Backend Projects
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                    }}
                    className={`mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight ${
                        darkMode
                            ? "text-dark-heading"
                            : "text-light-heading"
                    }`}
                >
                    Hi, I'm{" "}

                    <span className="text-blue-500">
                        {personalInfo.name}
                    </span>
                </motion.h1>

                {/* Professional Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.4,
                    }}
                    className={`mt-4 text-xl md:text-2xl font-semibold ${
                        darkMode
                            ? "text-dark-heading"
                            : "text-light-heading"
                    }`}
                >
                    Full Stack Developer
                    <span className="mx-2 text-blue-500">•</span>
                    FinTech
                    <span className="mx-2 text-blue-500">•</span>
                    Core Banking
                </motion.h2>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.5,
                    }}
                    className={`mt-6 mx-auto max-w-3xl text-base md:text-lg leading-8 ${
                        darkMode
                            ? "text-dark-paragraph"
                            : "text-light-paragraph"
                    }`}
                >
                    {personalInfo.bio}
                </motion.p>

                {/* CTA BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.6,
                    }}
                    className="
                        flex
                        flex-wrap
                        justify-center
                        gap-4
                        mt-10
                    "
                >
                    {/* View Projects */}
                    <a
                        href="#projects"
                        className="
                            flex items-center gap-2
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            font-semibold
                            px-7 py-3
                            rounded-xl
                            shadow-lg
                            shadow-blue-500/30
                            transition-all
                            duration-300
                            hover:-translate-y-1
                        "
                    >
                        View Projects
                        <ArrowRight size={18} />
                    </a>

                    {/* Download CV */}
                    <a
                        href="/Victor_Nuwagaba_CV.pdf"
                        download
                        className="
                            flex items-center gap-2
                            border border-blue-500
                            text-blue-400
                            hover:bg-blue-500/10
                            px-7 py-3
                            rounded-xl
                            font-semibold
                            transition-all
                            duration-300
                            hover:-translate-y-1
                        "
                    >
                        <Download size={18} />
                        Download CV
                    </a>
                </motion.div>

                {/* SOCIAL LINKS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.7,
                    }}
                    className="
                        flex
                        justify-center
                        items-center
                        gap-4
                        mt-10
                    "
                >
                    {/* GitHub */}
                    <a
                        href="https://github.com/nuwagaba"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ${
                            darkMode
                                ? "bg-dark-card text-dark-heading hover:bg-blue-600 hover:text-white"
                                : "bg-light-card text-light-heading hover:bg-blue-600 hover:text-white"
                        }`}
                    >
                        <FaGithub size={21} />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/victornuwagaba"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ${
                            darkMode
                                ? "bg-dark-card text-dark-heading hover:bg-blue-600 hover:text-white"
                                : "bg-light-card text-light-heading hover:bg-blue-600 hover:text-white"
                        }`}
                    >
                        <FaLinkedin size={20} />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:victornuwagaba@gmail.com"
                        aria-label="Email"
                        className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ${
                            darkMode
                                ? "bg-dark-card text-dark-heading hover:bg-blue-600 hover:text-white"
                                : "bg-light-card text-light-heading hover:bg-blue-600 hover:text-white"
                        }`}
                    >
                        <Mail size={20} />
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.a
                    href="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 1.2,
                    }}
                    className="inline-flex flex-col items-center mt-16 group"
                >
                    <span
                        className={`text-xs uppercase tracking-[3px] ${
                            darkMode
                                ? "text-slate-500"
                                : "text-slate-400"
                        }`}
                    >
                        Explore
                    </span>

                    <span
                        className="
                            mt-3
                            h-10 w-6
                            rounded-full
                            border
                            border-blue-500/40
                            flex
                            justify-center
                            pt-2
                        "
                    >
                        <span
                            className="
                                h-1.5 w-1.5
                                rounded-full
                                bg-blue-500
                                animate-bounce
                            "
                        />
                    </span>
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;