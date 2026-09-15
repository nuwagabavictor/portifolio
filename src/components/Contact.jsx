import { Mail, MapPin } from 'lucide-react';

const contacts = [
    { Icon: Mail, label: 'Email', value: 'you@email.com', href: 'mailto:you@email.com' },
    { Icon: Mail, label: 'GitHub', value: '@yourusername', href: 'https://github.com/yourusername' },
    { Icon: Mail, label: 'LinkedIn', value: 'Your Name', href: 'https://linkedin.com/in/yourprofile' },
    { Icon: MapPin, label: 'Location', value: 'Your City, Country', href: null },
];

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container-custom">
                <h2 className="section-heading">
                    Get In <span className="section-heading-accent">Touch</span>
                </h2>
                <p className="section-subheading">Let's build something together.</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {contacts.map(({ Icon, label, value, href }) => {
                        const Wrapper = href ? 'a' : 'div';
                        return (
                            <Wrapper
                                key={label}
                                {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
                                className="card card-hover p-6 flex items-center gap-4"
                            >
                                <Icon size={24} className="text-primary-400 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-sm mb-0.5">{label}</h4>
                                    <p className="text-gray-400 text-sm">{value}</p>
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Contact;