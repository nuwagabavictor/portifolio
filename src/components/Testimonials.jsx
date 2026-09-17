import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/portifolio.jsx";

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-background py-20 transition-colors duration-500 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* SECTION HEADER */}
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">

                    <p className="text-xs font-semibold uppercase tracking-[3px] text-primary sm:text-sm sm:tracking-[4px]">
                        Testimonials
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl md:text-5xl">
                        What Clients Say
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-paragraph sm:mt-5 sm:text-base sm:leading-8">
                        Feedback from people I've had the opportunity to work
                        with.
                    </p>
                </div>

                {/*TESTIMONIALS */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">

                    {testimonials.map((testimonial) => (
                        <div
                            key={`${testimonial.name}-${testimonial.company}`}
                            className="group relative rounded-2xl border border-border bg-surface p-6 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:rounded-3xl sm:p-7"
                        >
                            {/* Decorative Glow */}
                            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

                            <div className="relative">

                                {/* QUOTE + RATING*/}
                                <div className="flex items-center justify-between gap-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-dark text-white transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                        <Quote size={21} />
                                    </div>

                                    <div
                                        className="flex gap-0.5"
                                        aria-label="5 out of 5 stars"
                                    >
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                size={14}
                                                className="fill-gold text-white transition-all duration-300 group-hover:fill-primary"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* MESSAGE*/}
                                <p className="mt-6 text-sm leading-7 text-paragraph">
                                    "{testimonial.message}"
                                </p>

                                {/*CLIENT*/}
                                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">

                                    {/* Initials */}
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                                        {testimonial.initials}
                                    </div>

                                    {/* Client Details */}
                                    <div className="min-w-0">
                                        <h3 className="truncate text-sm font-semibold text-heading">
                                            {testimonial.name}
                                        </h3>

                                        <p className="mt-0.5 text-xs text-muted">
                                            {testimonial.role}
                                        </p>

                                        <p className="mt-0.5 text-xs font-medium text-primary">
                                            {testimonial.company}
                                        </p>
                                    </div>
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