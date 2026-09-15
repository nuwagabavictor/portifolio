import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled ? 'nav-scrolled py-3' : 'py-5'
            }`}
        >
            <div className="container-custom px-6 flex items-center justify-between">
                <a
                    href="#home"
                    className="flex items-center gap-2 text-primary-400 font-bold text-xl"
                >
                    <Code2 size={26} />
                    <span>Dev.Portfolio</span>
                </a>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="text-gray-300 hover:text-primary-400 font-medium transition-colors"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-200"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden absolute top-full inset-x-0 bg-dark-800 border-b border-dark-600 
          transition-all duration-300 overflow-hidden ${
                    open ? 'max-h-96' : 'max-h-0'
                }`}
            >
                <ul className="flex flex-col p-6 gap-4">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="block text-gray-300 hover:text-primary-400 font-medium"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;