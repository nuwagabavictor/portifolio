import { useState } from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { projects } from '../data/portifolio.jsx';

const filters = ['All', 'Backend', 'Frontend', 'Full-Stack', 'Networks'];

const Projects = () => {
    const [active, setActive] = useState('All');
    const filtered =
        active === 'All' ? projects : projects.filter((p) => p.category === active);

    return (
        <section id="projects" className="section">
            <div className="container-custom">
                <h2 className="section-heading">
                    Featured <span className="section-heading-accent">Projects</span>
                </h2>
                <p className="section-subheading">Some of the things I've built.</p>

                {/* Filter buttons */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActive(f)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                                active === f
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/40'
                                    : 'bg-dark-800 text-gray-400 border border-dark-600 hover:border-primary-600 hover:text-primary-400'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((p) => (
                        <article
                            key={p.title}
                            className="card card-hover p-6 flex flex-col relative overflow-hidden group"
                        >
                            {/* Top accent bar */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-bold text-white pr-4">{p.title}</h3>
                                <div className="flex gap-3 shrink-0">
                                    {p.github && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:text-primary-400 transition-colors"
                                            aria-label="GitHub"
                                        >
                                            <Mail size={18} />
                                        </a>
                                    )}
                                    {p.demo && (
                                        <a
                                            href={p.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:text-primary-400 transition-colors"
                                            aria-label="Demo"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-5 flex-1">
                                {p.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span key={t} className="tag text-xs">{t}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;