"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-br from-gray-900 via-black to-purple-900 text-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-purple-500">Projects</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-12 rounded"></div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Project 1 */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/dealzone.png"
              alt="Deal Zone"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold mb-2 text-purple-400">Deal Zone</h3>
              <p className="text-gray-300 mb-4">
                A Java‑based e‑commerce system with SQL integration. Features include user management, cart functionality, and secure transactions.
              </p>
              <a
                href="https://github.com/dorzhavian/DealZone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/supermarket.png"
              alt="Supermarket"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold mb-2 text-purple-400">Supermarket System</h3>
              <p className="text-gray-300 mb-4">
                A C‑based supermarket management system. Includes inventory tracking, checkout functionality, and efficient memory management.
              </p>
              <a
                href="https://github.com/dorzhavian/SupermarketC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}