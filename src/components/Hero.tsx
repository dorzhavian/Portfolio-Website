"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white flex flex-col justify-center items-center text-center relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heavy animation for Hero */}
      <AnimatedBackground intensity="heavy" />

      <div className="flex flex-col items-center space-y-6 relative z-10">
        <Image
          src="/profilePicture.png"
          alt="Dor Zhavian"
          width={160}
          height={160}
          className="rounded-full object-contain"
          priority
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
          className="mt-8 inline-block px-8 py-3 bg-purple-600 text-white font-medium rounded-full shadow-lg hover:bg-purple-700 transition relative z-10"
        >
          View My Work
        </a>
      </div>
    </motion.section>
  );
}