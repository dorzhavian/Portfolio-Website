"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dor Zhavian</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
