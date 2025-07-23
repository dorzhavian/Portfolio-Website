"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
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
              Software Engineer • Full Stack Developer • AI Enthusiast
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
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-300">
              I’m a software engineer focused on building clean, user-friendly applications. Experienced in Java, full-stack development, and AI projects.
            </p>
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
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-extrabold mb-10 text-purple-500">
              Contact Me
            </h2>
            <div className="flex justify-center space-x-10">
              <a
                href="tel:0526005290"
                className="text-gray-300 hover:text-purple-400 transition-transform transform hover:scale-125"
                aria-label="Call me"
              >
                <i className="bi bi-telephone-fill text-5xl"></i>
              </a>
              <a
                href="mailto:dorzhavian@gmail.com"
                className="text-gray-300 hover:text-purple-400 transition-transform transform hover:scale-125"
                aria-label="Send email"
              >
                <i className="bi bi-envelope-fill text-5xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/dor-zhavian-19a88b30a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-transform transform hover:scale-125"
                aria-label="LinkedIn profile"
              >
                <i className="bi bi-linkedin text-5xl"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
