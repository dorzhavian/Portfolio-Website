"use client";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold">Dor Zhavian</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li><a href="#hero" className="block py-2 hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="block py-2 hover:text-gray-400">About</a></li>
            <li><a href="#projects" className="block py-2 hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="block py-2 hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
