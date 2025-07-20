import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section
          id="hero"
          className="h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-400 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">
            Hi, I’m Dor Zhavian
          </h1>
          <p className="text-xl md:text-2xl mb-6 animate-fade-in-up">
            Software Engineer | Building cool stuff | AI Enthusiast
          </p>
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
            See My Work
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-100 text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed">
              I’m a passionate software engineer with a focus on creating clean, user-friendly applications. My journey started in Java, and I’ve since expanded into web development and AI.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Projects</h2>
            <p className="text-lg leading-relaxed mb-4">
              Here are some of my projects showcasing different technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-2">E-commerce App</h3>
                <p>A Java-based e-commerce system with DB integration.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-2">Snake Game</h3>
                <p>A fun browser-based Snake game using JavaScript and Canvas.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-2">DorKES Bot</h3>
                <p>An AI chatbot with a unique personality built using Python & Flask.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100 text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <p className="text-lg mb-4">Want to get in touch? Drop me a message!</p>
            <a href="mailto:your.email@example.com" className="inline-block px-6 py-3 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition">
              Contact Me
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
