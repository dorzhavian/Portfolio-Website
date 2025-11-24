"use client";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiCplusplus,
  SiN8N,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const skills = [
  { Icon: FaJava, color: "text-purple-400", title: "Java" },
  { Icon: SiTypescript, color: "text-white", title: "TypeScript" },
  { Icon: FaReact, color: "text-purple-400", title: "React" },
  { Icon: SiNextdotjs, color: "text-white", title: "Next.js" },
  { Icon: FaNodeJs, color: "text-purple-400", title: "Node.js" },
  { Icon: SiPostgresql, color: "text-white", title: "PostgreSQL" },
  { Icon: SiCplusplus, color: "text-purple-400", title: "C++" },
  { Icon: FaDatabase, color: "text-white", title: "SQL/NoSQL" },
  { Icon: FaGitAlt, color: "text-purple-400", title: "Git" },
  { Icon: FaPython, color: "text-white", title: "Python" },
  { Icon: FaLinux, color: "text-purple-400", title: "Linux" },
  { Icon: SiN8N, color: "text-white", title: "n8n" },
];

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
          viewport={{ once: true, amount: 0.3 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-purple-600 mx-auto mb-12 rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Icons */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 text-7xl max-w-5xl mx-auto justify-items-center"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map(({ Icon, color, title }, index) => (
            <motion.div
              key={index}
              variants={iconVariants}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className={color} title={title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}