"use client";

import AnimatedBackground from "./AnimatedBackground";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-gray-900 text-gray-100 relative overflow-hidden"
    >
      <AnimatedBackground intensity="light" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-5xl font-extrabold mb-6 text-purple-500"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-purple-600 mx-auto mb-8 rounded"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <motion.h3
          className="text-2xl font-extrabold mb-6 text-white-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Who I am ?
        </motion.h3>

        <motion.div
          className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-300 space-y-6 mb-16"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m{" "}
            <span className="text-purple-400 font-semibold">Dor Zhavian</span> a{" "}
            <span className="text-purple-400 font-semibold">
              software engineering student
            </span>{" "}
            and full‑stack developer passionate about building scalable,
            secure, and user‑friendly applications.
          </motion.p>

          <motion.p
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            I enjoy tackling complex challenges, exploring new technologies,
            and writing clean, maintainable code that makes an impact.
          </motion.p>

          <motion.p
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            In my free time I enjoy playing soccer, solving crosswords,
            reading general knowledge, and playing FIFA.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}