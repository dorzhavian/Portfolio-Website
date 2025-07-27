"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwldvde", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error("Form error");
      }
    } catch {
      setStatus("error");
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white flex flex-col justify-center items-center text-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center space-y-6">
            <img
              src="/profile.png"
              alt="Dor Zhavian"
              className="w-40 h-40 rounded-full object-contain"
            />
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              <Typewriter
                words={["Dor Zhavian"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl">
              Software Engineer Student • Full Stack Developer • AI Enthusiast
            </p>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#projects");
                if (target) {
                  const y = target.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="mt-8 inline-block px-8 py-3 bg-purple-600 text-white font-medium rounded-full shadow-lg hover:bg-purple-700 transition"
            >
              View My Work
            </a>
          </div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-28 bg-gray-900 text-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-extrabold mb-6 text-purple-500">
              About Me
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8 rounded"></div>

            <div className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-300 space-y-6 mb-16">
              <p>
                I'm <span className="text-purple-400 font-semibold">Dor Zhavian</span>, a dedicated <span className="text-purple-400 font-semibold">software engineering student</span> with a passion for creating intuitive and efficient digital experiences.
              </p>
              <p>
                I specialize in building full-stack applications that are scalable, secure, and user-friendly. My stack includes <span className="text-purple-400">Java</span>, <span className="text-purple-400">TypeScript</span>, <span className="text-purple-400">React</span> & <span className="text-purple-400">Next.js</span>, plus SQL/NoSQL DBs.
              </p>
              <p>
                I’m constantly exploring new tech, contributing to challenging projects, and writing clean, maintainable code that makes an impact.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-4 gap-10 justify-center items-start">
              {/* Row 1 */}
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-html5-plain colored text-6xl" />
                <span className="text-sm">HTML</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-javascript-plain colored text-6xl" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-css3-plain colored text-6xl" />
                <span className="text-sm">CSS</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-react-original colored text-6xl" />
                <span className="text-sm">React</span>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-nextjs-original colored text-6xl" />
                <span className="text-sm">Next.js</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-nodejs-plain colored text-6xl" />
                <span className="text-sm">Node.js</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-java-plain colored text-6xl" />
                <span className="text-sm">Java</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-typescript-plain colored text-6xl" />
                <span className="text-sm">TypeScript</span>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-python-plain colored text-6xl" />
                <span className="text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-c-plain colored text-6xl" />
                <span className="text-sm">C</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-cplusplus-plain colored text-6xl" />
                <span className="text-sm">C++</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="devicon-git-plain colored text-6xl" />
                <span className="text-sm">Git</span>
              </div>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-28 bg-gray-900 text-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-extrabold mb-6 text-purple-500">
              Projects
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8 rounded"></div>
            <p className="text-lg text-gray-400 mb-10">
              A selection of my work showcasing different technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 – E-commerce */}
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={400}
                className="rounded-lg shadow-lg"
              >
                <div className="h-64 bg-gray-800 relative group rounded-lg overflow-hidden flex flex-col justify-center items-center">
                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center opacity-100 group-hover:bg-black/50 transition-all duration-500">
                    <h3 className="text-2xl text-white font-bold mb-2">E-commerce App</h3>
                    <p className="text-gray-300 mb-4 px-4">
                      A Java-based e-commerce system with database integration.
                    </p>
                    <a
                      href="#"
                      className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                    >
                      View
                    </a>
                  </div>
                </div>
              </Tilt>

              {/* Project 2 - (Coming Soon) */}
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={400}
                className="rounded-lg shadow-lg"
              >
                <div className="h-64 bg-gray-800 flex items-center justify-center text-gray-500 text-2xl font-bold rounded-lg">
                  🚧 Coming Soon
                </div>
              </Tilt>

              {/* Project 3 – (Coming Soon) */}
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={400}
                className="rounded-lg shadow-lg"
              >
                <div className="h-64 bg-gray-800 flex items-center justify-center text-gray-500 text-2xl font-bold rounded-lg">
                  🚧 Coming Soon
                </div>
              </Tilt>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-28 bg-gray-900 text-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-extrabold mb-12 text-center text-purple-500">
              Contact Me
            </h2>

            <div className="bg-gray-800 rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto shadow-lg">
              {/* Left side – info */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Let's Talk</h3>
                <p className="text-gray-300">
                  Have a question or want to work together? Leave your details and I’ll get back to you as soon as possible.
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
                    className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
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
      </main>
      <Footer />
    </div>
  );
}
