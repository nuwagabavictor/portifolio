import { Server, Database, Monitor, Network } from 'lucide-react';
import { skills } from '../data/portifolio.jsx';

const iconMap = { server: Server, database: Database, monitor: Monitor, network: Network };

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container-custom">
                <h2 className="section-heading">
                    My <span className="section-heading-accent">Skills</span>
                </h2>
                <p className="section-subheading">
                    Technologies and areas I work with every day.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map(({ category, icon, color, items }) => {
                        const Icon = iconMap[icon];
                        return (
                            <div key={category} className="card card-hover p-7">
                                <div
                                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} 
                    flex items-center justify-center mb-5 shadow-lg`}
                                >
                                    <Icon size={26} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((s) => (
                                        <span key={s} className="tag">{s}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;