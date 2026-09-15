import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials.jsx";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode((previous) => !previous);
    };

    return (
        <div
            className={`min-h-screen transition-colors duration-500 ${
                darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900"
            }`}
        >
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />

            <main>
                <Hero darkMode={darkMode} />

                <Skills darkMode={darkMode} />

                <Projects darkMode={darkMode} />

                <Testimonials darkMode={darkMode} />

                <Contact darkMode={darkMode} />
            </main>

            <Footer darkMode={darkMode} />
        </div>
    );
}

export default App;