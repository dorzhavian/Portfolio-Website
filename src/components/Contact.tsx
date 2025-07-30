"use client";

import AnimatedBackground from "./AnimatedBackground";
import { useState } from "react";

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
      await new Promise((resolve) => setTimeout(resolve, 1500)); 
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" }); 
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 bg-gray-900 text-gray-100 relative overflow-hidden">
      <AnimatedBackground intensity="light" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-purple-500">
          Contact Me
        </h2>

        <div className="bg-gray-800 rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto shadow-lg">
          {/* Left side – info */}
          <div className="space-y-6">
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
          </div>

          {/* Right side – form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300 disabled:opacity-50"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send"}
            </button>

            {/* Feedback */}
            {status === "success" && (
              <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;