import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { BsExclamationCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setMessage({ text: "Message sent successfully!", type: "success" });
      reset();
      setTimeout(() => setMessage({ text: "", type: "" }), 1500);
    } catch (error) {
      console.log(error);
      setMessage({ text: "Something went wrong. Try again!", type: "error" });
      setTimeout(() => setMessage({ text: "", type: "" }), 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#1E1E2C]  text-white py-16 px-6"  style={{ fontFamily: "'Tektur', sans-serif" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-[#252532] p-8 shadow-2xl shadow-white rounded-lg shadow-xl border border-purple-500"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-6">
          Contact Me
        </h2>

        {/* Success/Error Message */}
        {message.text && (
          <p
            className={`text-lg flex items-center gap-2 text-center py-2 ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.type === "success" ? (
              <AiOutlineCheckCircle className="w-6 h-6" />
            ) : (
              <BsExclamationCircle className="w-6 h-6" />
            )}
            {message.text}
          </p>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="w-full p-3 rounded-lg bg-[#2A2A3A] text-white border border-purple-500 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
            />
            {errors.name && (
              <p className="text-red-400 text-sm flex items-center gap-2 mt-1">
                <BsExclamationCircle />
                Name is required
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full p-3 rounded-lg bg-[#2A2A3A] text-white border border-purple-500 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
            />
            {errors.email && (
              <p className="text-red-400 text-sm flex items-center gap-2 mt-1">
                <BsExclamationCircle />
                Valid email is required.
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <input
              type="tel"
              placeholder="Your Phone Number"
              {...register("phone", {
                required: true,
                pattern: /^[0-9+\-() ]*$/i,
              })}
              className="w-full p-3 rounded-lg bg-[#2A2A3A] text-white border border-purple-500 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm flex items-center gap-2 mt-1">
                <BsExclamationCircle />
                Invalid phone number format.
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <input
              type="text"
              placeholder="Subject"
              {...register("subject", { required: true })}
              className="w-full p-3 rounded-lg bg-[#2A2A3A] text-white border border-purple-500 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
            />
            {errors.subject && (
              <p className="text-red-400 text-sm flex items-center gap-2 mt-1">
                <BsExclamationCircle />
                Subject is required.
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              placeholder="Your Message"
              {...register("message", { required: true })}
              className="w-full p-3 h-32 rounded-lg bg-[#2A2A3A] text-white border border-purple-500 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all resize-none"
            />
            {errors.message && (
              <p className="text-red-400 text-sm flex items-center gap-2 mt-1">
                <BsExclamationCircle />
                Message cannot be empty.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold hover:from-purple-500 hover:to-purple-300 transition-all duration-300 focus:ring-2 focus:ring-purple-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
