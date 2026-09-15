import { useState, useEffect } from "react";
import {
    Menu,
    X,
    Code2,
    Sun,
    Moon,
} from "lucide-react";

const links = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = links.map((link) =>
                document.querySelector(link.href)
            );

            sections.forEach((section) => {
                if (!section) return;

                const top = section.offsetTop - 120;
                const height = section.offsetHeight;

                if (
                    window.scrollY >= top &&
                    window.scrollY < top + height
                ) {
                    setActive(`#${section.id}`);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? darkMode
                        ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg"
                        : "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-2 group"
                >
                    <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                        <Code2 size={22} />
                    </div>

                    <div className="leading-none">
                        <h1 className="font-bold text-lg text-blue-500">
                            Victor.Dev
                        </h1>

                        <p
                            className={`text-xs ${
                                darkMode
                                    ? "text-slate-400"
                                    : "text-slate-500"
                            }`}
                        >
                            Software Engineer
                        </p>
                    </div>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`relative text-sm font-medium transition-colors ${
                                active === link.href
                                    ? "text-blue-500"
                                    : darkMode
                                        ? "text-slate-300 hover:text-blue-400"
                                        : "text-slate-700 hover:text-blue-500"
                            }`}
                        >
                            {link.label}

                            {active === link.href && (
                                <span className="absolute left-0 -bottom-2 w-full h-[2px] rounded-full bg-blue-500" />
                            )}
                        </a>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className={`hidden md:flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                            darkMode
                                ? "bg-slate-900 border border-slate-700 text-yellow-400 hover:bg-slate-800"
                                : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                        }`}
                    >
                        {darkMode ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>

                    {/* Hire Me Button */}
                    <a
                        href="#contact"
                        className="hidden md:flex px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Hire Me
                    </a>

                    {/* Mobile Theme Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className={`md:hidden h-10 w-10 flex items-center justify-center rounded-lg ${
                            darkMode
                                ? "bg-slate-900 text-yellow-400"
                                : "bg-slate-100 text-slate-700"
                        }`}
                    >
                        {darkMode ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className={`md:hidden h-10 w-10 flex items-center justify-center rounded-lg ${
                            darkMode
                                ? "text-white hover:bg-slate-800"
                                : "text-slate-900 hover:bg-slate-100"
                        }`}
                    >
                        {open ? (
                            <X size={22} />
                        ) : (
                            <Menu size={22} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                    open ? "max-h-96" : "max-h-0"
                } ${
                    darkMode
                        ? "bg-slate-950/95 border-t border-slate-800"
                        : "bg-white/95 border-t border-slate-200"
                } backdrop-blur-xl`}
            >
                <nav className="flex flex-col p-6 gap-4">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`rounded-lg px-4 py-3 font-medium transition ${
                                active === link.href
                                    ? "bg-blue-600 text-white"
                                    : darkMode
                                        ? "text-slate-300 hover:bg-slate-900 hover:text-blue-400"
                                        : "text-slate-700 hover:bg-slate-100 hover:text-blue-500"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="mt-2 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700 transition"
                    >
                        Hire Me
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;