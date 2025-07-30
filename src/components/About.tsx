"use client";

import AnimatedBackground from "./AnimatedBackground";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-gray-900 text-gray-100 relative overflow-hidden"
    >
      {/* Light animation for About section */}
      <AnimatedBackground intensity="light" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-purple-500">
          About Me
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-8 rounded"></div>
        <h3 className="text-2xl font-extrabold mb-6 text-white-300">
          Who I am ?
        </h3>
        <div className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-300 space-y-6 mb-16">
          <p>
            Hi, I&apos;m <span className="text-purple-400 font-semibold">Dor Zhavian</span>, a{" "}
            <span className="text-purple-400 font-semibold">software engineering student</span> and full‑stack developer passionate about building scalable, secure, and user‑friendly applications.
          </p>
          <p>
            I enjoy tackling complex challenges, exploring new technologies, and writing clean, maintainable code that makes an impact.
          </p>
          <p>
            In my free time I enjoy playing soccer, solving crosswords, reading general knowledge, and playing FIFA.
          </p>
        </div>
      </div>
    </section>
  );
}