import { useState } from "react";
import { motion } from "framer-motion";
import {
    CheckCircle,
    Mail,
    MessageCircle,
    Send,
} from "lucide-react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        const whatsappNumber = "256770759915";

        const message = `
*New Portfolio Contact*

*Name:* ${formData.name}

*Email:* ${formData.email}

*Subject:* ${formData.subject}

*Message:*
${formData.message}
        `.trim();

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, "_blank");

        setStatus("success");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        setErrors({});
    };

    const handleReset = () => {
        setStatus("idle");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        setErrors({});
    };

    const inputClass = `w-full rounded-xl border border-border bg-background px-4 py-3 text-heading placeholder:text-muted outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 `;

    return (
        <div className="rounded-3xl border border-border bg-surface p-5 shadow-xl shadow-black/5 transition-colors duration-500 sm:p-6 md:p-8 ">
            {status === "success" ? (
                <motion.div
                    initial={{opacity: 0, y: 15,}}
                    animate={{opacity: 1, y: 0,}}
                    transition={{duration: 0.3,}}
                    className="flex min-h-[450px] flex-col items-center justify-center text-center "
                >
                    {/* Success Icon */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle size={42} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-2xl font-bold text-heading">
                        Message Ready
                    </h3>

                    {/* Description */}
                    <p className="mt-3 max-w-md leading-7 text-paragraph">
                        WhatsApp has opened with your message prepared and
                        ready to send. Just review it and tap send.
                    </p>

                    {/* WhatsApp Notice */}
                    <div className="mt-6 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4">
                        <MessageCircle size={22} className="shrink-0 text-primary" />

                        <p className="text-sm font-medium text-primary">
                            Continue the conversation on WhatsApp
                        </p>
                    </div>

                    {/* Reset */}
                    <button
                        type="button"
                        onClick={handleReset}
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                    >
                        <Send size={18} />
                        Send Another Message
                    </button>
                </motion.div>
            ) : (
                <>
                    {/* FORM HEADER */}
                    <div className="mb-8">
                        <div className="flex items-center gap-4 ">
                            {/* Icon */}
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                            >
                                <Mail size={23} />
                            </div>

                            {/* Heading */}
                            <div>
                                <h3 className="text-xl font-bold text-heading sm:text-2xl">
                                    Send a Message
                                </h3>

                                <p className="mt-1 text-sm text-muted">
                                    Tell me about your project or idea.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*FORM*/}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* Name + Email */}
                        <div className="grid gap-5 md:grid-cols-2">

                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-heading">
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={inputClass}
                                />

                                {errors.name && (
                                    <p className="mt-1.5 text-sm text-secondary">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-heading">
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={inputClass}
                                />

                                {errors.email && (
                                    <p className="mt-1.5 text-sm text-secondary">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/*SUBJECT*/}
                        <div>
                            <label htmlFor="subject"
                                className="mb-2 block text-sm font-medium text-heading">
                                Subject
                            </label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project inquiry"
                                className={inputClass}
                            />

                            {errors.subject && (
                                <p className="mt-1.5 text-sm text-secondary">
                                    {errors.subject}
                                </p>
                            )}
                        </div>

                        {/* MESSAGE */}
                        <div>
                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-heading">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me a little about your project..."
                                className={`${inputClass} resize-none`}
                            />

                            {errors.message && (
                                <p className="mt-1.5 text-sm text-secondary">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        {/* WHATSAPP NOTICE*/}
                        <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 ">
                            <MessageCircle size={20} className="mt-0.5 shrink-0 text-primary "/>
                            <div>
                                <p className="text-sm font-semibold text-heading">
                                    Messages are sent through WhatsApp
                                </p>

                                <p className="mt-1 text-xs leading-5 text-muted">
                                    After submitting, WhatsApp will open with
                                    your message already prepared.
                                </p>
                            </div>
                        </div>

                        {/* SUBMIT BUTTON*/}
                        <button
                            type="submit"
                            className=" flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-primary/30"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default ContactForm;