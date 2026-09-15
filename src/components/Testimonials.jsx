import { Quote, Star } from "lucide-react";
import {testimonials} from "../data/portifolio.jsx";


const Testimonials = ({ darkMode }) => {
    return (
        <section
            className={`py-20 transition-colors duration-500 ${
                darkMode ? "bg-dark-bg" : "bg-light-bg"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-blue-400 text-sm font-semibold uppercase tracking-[3px]">
                        Testimonials
                    </p>

                    <h2
                        className={`mt-2 text-3xl md:text-4xl font-bold ${
                            darkMode
                                ? "text-dark-heading"
                                : "text-light-heading"
                        }`}
                    >
                        What Clients Say
                    </h2>

                    <p
                        className={`mt-4 max-w-2xl mx-auto text-base leading-7 ${
                            darkMode
                                ? "text-dark-paragraph"
                                : "text-light-paragraph"
                        }`}
                    >
                        Feedback from people I've had the opportunity to work
                        with.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={`${testimonial.name}-${testimonial.company}`}
                            className={`relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                                darkMode
                                    ? "bg-dark-card border-dark-border hover:border-blue-500/50"
                                    : "bg-light-card border-light-border hover:border-blue-500/50"
                            }`}
                        >
                            {/* Quote */}
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                                    <Quote size={20} />
                                </div>

                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={14}
                                            className="fill-blue-500 text-blue-500"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <p
                                className={`mt-5 text-sm leading-7 ${
                                    darkMode
                                        ? "text-slate-300"
                                        : "text-slate-600"
                                }`}
                            >
                                "{testimonial.message}"
                            </p>

                            {/* Client */}
                            <div
                                className={`mt-6 pt-5 border-t flex items-center gap-3 ${
                                    darkMode
                                        ? "border-slate-800"
                                        : "border-slate-200"
                                }`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                                    {testimonial.initials}
                                </div>

                                <div>
                                    <h3
                                        className={`text-sm font-semibold ${
                                            darkMode
                                                ? "text-dark-heading"
                                                : "text-light-heading"
                                        }`}
                                    >
                                        {testimonial.name}
                                    </h3>

                                    <p className="text-xs text-slate-500 mt-0.5">
                                        {testimonial.role}
                                    </p>

                                    <p className="text-xs text-blue-400 mt-0.5">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;