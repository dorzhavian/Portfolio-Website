"use client";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiCplusplus,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-gray-900 text-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-6 text-purple-500"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-purple-600 mx-auto mb-12 rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        />

        {/* Icons */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Row 1 */}
          <div className="flex justify-center gap-10 text-7xl">
            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaJava className="text-purple-400" title="Java" />
            </motion.div>

            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <SiTypescript className="text-white" title="TypeScript" />
            </motion.div>

            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaReact className="text-purple-400" title="React" />
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-10 text-7xl">
            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <SiNextdotjs className="text-white" title="Next.js" />
            </motion.div>

            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaNodeJs className="text-purple-400" title="Node.js" />
            </motion.div>

            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <SiPostgresql className="text-white" title="PostgreSQL" />
            </motion.div>

            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <SiCplusplus className="text-purple-400" title="C++" />
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="flex justify-center gap-10 text-7xl">
            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaDatabase className="text-white" title="SQL/NoSQL" />
            </motion.div>

            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGitAlt className="text-purple-400" title="Git" />
            </motion.div>

            <motion.div
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPython className="text-white" title="Python" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}