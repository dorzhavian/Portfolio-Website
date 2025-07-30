"use client";

import AnimatedBackground from "./AnimatedBackground";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 bg-gray-900 text-gray-100 relative overflow-hidden"
    >
      {/* Medium animation for Projects section */}
      <AnimatedBackground intensity="medium" />

      <div className="container mx-auto px-4 text-center relative z-10">
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
                <h3 className="text-2xl text-white font-bold mb-2">
                  E-commerce App
                </h3>
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
  );
};

export default Projects;