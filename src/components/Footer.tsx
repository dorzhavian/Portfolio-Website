"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-md text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          © {currentYear} Dor Zhavian. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {/* Phone */}
          <a
            href="tel:+972526005290"
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="Call me"
          >
            <i className="bi bi-telephone-fill text-xl"></i>
          </a>
          {/* Email */}
          <a
            href="mailto:dorzhavian@gmail.com"
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="Send email"
          >
            <i className="bi bi-envelope-fill text-xl"></i>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dor-zhavian-19a88b30a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="LinkedIn profile"
          >
            <i className="bi bi-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;