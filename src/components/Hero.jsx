import { Mail, ArrowRight } from 'lucide-react';

const contacts = [
    { Icon: Mail, href: 'mailto:nuwagabavictor197@gmail.com' },
    { Icon: Mail, href: 'https://github.com/nuwagabavictor' },
    { Icon: Mail, href: 'https://linkedin.com/in/victor-nuwagaba-047487248' },
];

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center px-6 pt-28 relative overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary-600 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary-800 rounded-full blur-3xl" />

            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Text */}
                <div className="animate-slide-up">
                    <p className="text-primary-400 font-semibold mb-3">👋 Hello, I'm</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-3">
                        Nuwagaba Victor
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-primary-400 font-semibold mb-6">
                        Full-Stack Developer
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mb-8">
                        I build scalable backends, design efficient databases, craft clean
                        frontends, and understand the networks that connect them all.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <a href="#projects" className="btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-5">
                        { contacts.map(({ Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-primary-400 transition-all hover:-translate-y-1"
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Code card */}
                <div className="animate-fade-in">
                    <div className="card p-6 shadow-2xl shadow-primary-600/20 animate-glow font-mono text-sm">
                        <div className="flex gap-2 mb-4">
                            <span className="w-3 h-3 rounded-full bg-red-500" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500" />
                            <span className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <pre className="text-primary-100 whitespace-pre-wrap leading-relaxed">
{`const dev = {
  name: "Your Name",
  role: "Full-Stack Dev",
  skills: {
    backend:  ["Node.js", "Python"],
    database: ["PostgreSQL", "MongoDB"],
    frontend: ["React", "TypeScript"],
    networks: ["TCP/IP", "DNS", "HTTP"]
  },
  available: true
};`}
            </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;