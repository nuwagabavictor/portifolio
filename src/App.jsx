import { useEffect, useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials.jsx";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((previous) => !previous);
    };

    return (
        <>
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />

            <main>
                <Hero />

                <Skills />

                <Projects />

                <Testimonials />

                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;