"use client";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiPostgresql, SiCplusplus } from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-gray-900 text-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-purple-500">
          Skills
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-12 rounded"></div>
        <div className="space-y-10">
          {/* Row 1: 3 items */}
          <div className="flex justify-center gap-10 text-7xl">
            <FaJava className="text-purple-400" title="Java" />
            <SiTypescript className="text-white" title="TypeScript" />
            <FaReact className="text-purple-400" title="React" />
          </div>
          {/* Row 2: 4 items */}
          <div className="flex justify-center gap-10 text-7xl">
            <SiNextdotjs className="text-white" title="Next.js" />
            <FaNodeJs className="text-purple-400" title="Node.js" />
            <SiPostgresql className="text-white" title="PostgreSQL" />
            <SiCplusplus className="text-purple-400" title="C++" />
          </div>
          {/* Row 3: 3 items */}
          <div className="flex justify-center gap-10 text-7xl">
            <FaDatabase className="text-white" title="SQL/NoSQL" />
            <FaGitAlt className="text-purple-400" title="Git" />
            <FaPython className="text-white" title="Python" />
          </div>
        </div>
      </div>
    </section>
  );
}