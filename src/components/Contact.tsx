"use client";

import AnimatedBackground from "./AnimatedBackground";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const leftColVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, when: "beforeChildren", staggerChildren: 0.12 },
  },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // TODO: Integrate EmailJS or a backend service here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 2500); 
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <section id="contact" className="py-28 bg-gray-900 text-gray-100 relative overflow-hidden">
      <AnimatedBackground intensity="light" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center text-purple-500"
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: false, amount: 0.3 }}
        >
          Contact Me
        </motion.h2>

        <div className="bg-gray-800 rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto shadow-lg">
          {/* Left side – info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={leftColVariants}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-3xl font-bold">Let&apos;s Talk</h3>
            <p className="text-gray-300">
              Have a question or want to work together? Leave your details and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-4 text-gray-200">
              <div className="flex items-center space-x-4">
                <i className="bi bi-geo-alt-fill text-purple-400 text-2xl"></i>
                <span>Netanya, Israel</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="bi bi-envelope-fill text-purple-400 text-2xl"></i>
                <span>dorzhavian@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right side – form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            variants={formVariants}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                variants={fieldVariants}
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.input
                variants={fieldVariants}
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <motion.input
              variants={fieldVariants}
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <motion.textarea
              variants={fieldVariants}
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <motion.button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300 disabled:opacity-50"
              disabled={status === "loading"}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {status === "loading" ? "Sending..." : "Send"}
            </motion.button>

            {/* Feedback */}
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-green-400 text-sm mt-2"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-400 text-sm mt-2"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;