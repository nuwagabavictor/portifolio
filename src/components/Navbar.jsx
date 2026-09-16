import { useState, useEffect } from "react";
import {Menu, X, Sun, Moon} from "lucide-react";
import image from "../assets/favicon.png"

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
        <header className={` fixed top-0 left-0 w-full z-50 transition-all duration-300
                ${scrolled  ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"}
            `}
        >
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-2.5 group"
                >
                    {/* Logo Image */}
                    <div className=" h-10 w-10 rounded-xl overflow-hidden border border-primary/30 bg-primary/10 flex items-center
                        justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20
                        "
                    >
                        <img  src={image} alt="Victor.Dev" className=" h-full w-full object-cover "/>
                    </div>

                    {/* Brand Name */}
                    <div className="leading-none">
                        <h1 className="font-bold text-lg text-primary tracking-tight ">
                            Victor.Dev
                        </h1>

                        <p className="text-xs text-muted mt-1">
                            Software Developer
                        </p>
                    </div>
                </a>

                {/*DESKTOP NAVIGATION*/}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={` relative font-bold transition-colors duration-300 text-lg
                                       ${active === link.href ? "text-primary" : "text-paragraph hover:text-primary"}
                            `}
                        >
                            {link.label}

                            {/* Active Indicator */}
                            {active === link.href && (
                                <span className=" absolute left-0 -bottom-2 w-full h-[2px] rounded-full bg-primary"/>
                            )}
                        </a>
                    ))}
                </nav>

                {/*RIGHT SIDE*/}
                <div className="flex items-center gap-2 sm:gap-3">

                    {/* DESKTOP THEME TOGGLE */}
                    <button
                        onClick={toggleDarkMode}
                        aria-label={ darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        className=" hidden md:flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-heading transition-all
                                    duration-300 hover:border-primary hover:text-primary hover:bg-primary/10 ">

                        {darkMode ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>


                    {/* MOBILE THEME TOGGLE*/}
                    <button
                        onClick={toggleDarkMode}
                        aria-label={ darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        className=" md:hidden h-10 w-10 flex items-center justify-center rounded-lg border border-border bg-surface
                                    text-heading transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10
                        ">

                        {darkMode ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </button>

                    {/*MOBILE MENU BUTTON*/}
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label={ open ? "Close navigation menu" : "Open navigation menu"}
                        className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg border border-border
                                   bg-surface text-heading transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10
                        "
                    >
                        {open ? (
                            <X size={22} />
                        ) : (
                            <Menu size={22} />
                        )}
                    </button>
                </div>
            </div>

            {/*MOBILE MENU*/}
            <div
                className={` md:hidden overflow-hidden transition-all duration-300
                    ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div className="bg-background/95 backdrop-blur-xl border-t border-border">
                    <nav className="flex flex-col p-4 sm:p-6 gap-2">

                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={` rounded-xl px-4 py-3 font-medium transition-all duration-300
                                            ${active === link.href ? "bg-primary text-white shadow-md shadow-primary/20" : "text-paragraph hover:bg-primary/10 hover:text-primary"}
                                `}
                            >
                                {link.label}
                            </a>
                        ))}

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;