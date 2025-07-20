"use client";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold">Dor Zhavian</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
