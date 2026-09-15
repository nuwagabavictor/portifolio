import { useState } from "react";
import { motion } from "framer-motion";
import {
    CheckCircle,
    Mail,
    MessageCircle,
    Send,
} from "lucide-react";

const ContactForm = ({ darkMode }) => {
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

        const whatsappNumber = "25677079915";

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

    const inputClass = `
        w-full
        rounded-xl
        border
        px-4
        py-3
        outline-none
        transition-all
        duration-300
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/20
    `;

    return (
        <div
            className={`rounded-3xl border p-6 md:p-8 shadow-xl transition-colors duration-500 ${
                darkMode
                    ? "bg-dark-card border-dark-border"
                    : "bg-light-card border-light-border"
            }`}
        >
            {status === "success" ? (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className="flex min-h-[500px] flex-col items-center justify-center text-center"
                >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                        <CheckCircle size={42} />
                    </div>

                    <h3
                        className={`mt-6 text-2xl font-bold ${
                            darkMode
                                ? "text-dark-heading"
                                : "text-light-heading"
                        }`}
                    >
                        Message Ready
                    </h3>

                    <p className="mt-3 max-w-md text-slate-500 leading-7">
                        WhatsApp has opened with your message prepared and
                        ready to send. Just review it and tap send.
                    </p>

                    <div
                        className={`mt-6 flex items-center gap-3 rounded-2xl border px-5 py-4 ${
                            darkMode
                                ? "border-green-500/20 bg-green-500/5"
                                : "border-green-500/20 bg-green-50"
                        }`}
                    >
                        <MessageCircle
                            size={22}
                            className="text-green-500"
                        />

                        <p className="text-sm font-medium text-green-500">
                            Continue the conversation on WhatsApp
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="
                            mt-8
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-blue-600
                            px-6
                            py-3
                            font-semibold
                            text-white
                            shadow-lg
                            shadow-blue-500/20
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-blue-700
                        "
                    >
                        <Send size={18} />

                        Send Another Message
                    </button>
                </motion.div>
            ) : (
                <>
                    {/* Form Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                                <Mail size={23} />
                            </div>

                            <div>
                                <h3
                                    className={`text-2xl font-bold ${
                                        darkMode
                                            ? "text-dark-heading"
                                            : "text-light-heading"
                                    }`}
                                >
                                    Send a Message
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Tell me about your project or idea.
                                </p>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* Name + Email */}
                        <div className="grid gap-5 md:grid-cols-2">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className={`mb-2 block text-sm font-medium ${
                                        darkMode
                                            ? "text-dark-heading"
                                            : "text-light-heading"
                                    }`}
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={`${inputClass} ${
                                        darkMode
                                            ? "bg-slate-900/60 border-dark-border text-white placeholder:text-slate-600"
                                            : "bg-white border-light-border text-slate-900 placeholder:text-slate-400"
                                    }`}
                                />

                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className={`mb-2 block text-sm font-medium ${
                                        darkMode
                                            ? "text-dark-heading"
                                            : "text-light-heading"
                                    }`}
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={`${inputClass} ${
                                        darkMode
                                            ? "bg-slate-900/60 border-dark-border text-white placeholder:text-slate-600"
                                            : "bg-white border-light-border text-slate-900 placeholder:text-slate-400"
                                    }`}
                                />

                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label
                                htmlFor="subject"
                                className={`mb-2 block text-sm font-medium ${
                                    darkMode
                                        ? "text-dark-heading"
                                        : "text-light-heading"
                                }`}
                            >
                                Subject
                            </label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project inquiry"
                                className={`${inputClass} ${
                                    darkMode
                                        ? "bg-slate-900/60 border-dark-border text-white placeholder:text-slate-600"
                                        : "bg-white border-light-border text-slate-900 placeholder:text-slate-400"
                                }`}
                            />

                            {errors.subject && (
                                <p className="mt-1 text-sm text-red-400">
                                    {errors.subject}
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className={`mb-2 block text-sm font-medium ${
                                    darkMode
                                        ? "text-dark-heading"
                                        : "text-light-heading"
                                }`}
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me a little about your project..."
                                className={`${inputClass} resize-none ${
                                    darkMode
                                        ? "bg-slate-900/60 border-dark-border text-white placeholder:text-slate-600"
                                        : "bg-white border-light-border text-slate-900 placeholder:text-slate-400"
                                }`}
                            />

                            {errors.message && (
                                <p className="mt-1 text-sm text-red-400">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        {/* WhatsApp Notice */}
                        <div
                            className={`flex items-start gap-3 rounded-2xl border p-4 ${
                                darkMode
                                    ? "border-green-500/20 bg-green-500/5"
                                    : "border-green-500/20 bg-green-50"
                            }`}
                        >
                            <MessageCircle
                                size={20}
                                className="mt-0.5 shrink-0 text-green-500"
                            />

                            <div>
                                <p
                                    className={`text-sm font-semibold ${
                                        darkMode
                                            ? "text-slate-200"
                                            : "text-slate-800"
                                    }`}
                                >
                                    Messages are sent through WhatsApp
                                </p>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    After submitting, WhatsApp will open with
                                    your message already prepared.
                                </p>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-blue-600
                                px-6
                                py-3.5
                                font-semibold
                                text-white
                                shadow-lg
                                shadow-blue-500/20
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-blue-700
                                hover:shadow-blue-500/30
                            "
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