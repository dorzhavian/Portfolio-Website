"use client";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md text-gray-100 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-lg md:text-xl font-bold tracking-wide">ZHAVIAN.</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-sm md:text-base font-medium">
          <li>
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, "#hero")}
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="hover:text-purple-400 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="block md:hidden focus:outline-none"
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

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-md">
          <ul className="flex flex-col space-y-4 px-4 py-4 text-sm">
            <li>
              <a
                href="#hero"
                onClick={(e) => handleScroll(e, "#hero")}
                className="block py-2 hover:text-purple-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="block py-2 hover:text-purple-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "#projects")}
                className="block py-2 hover:text-purple-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="block py-2 hover:text-purple-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
