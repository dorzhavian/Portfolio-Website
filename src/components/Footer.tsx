"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Dor Zhavian. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
