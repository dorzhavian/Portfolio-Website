"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Footer = dynamic(() => import("../components/Footer"));
const About = dynamic(() => import("../components/About"));
const Skills = dynamic(() => import("../components/Skills"));
const Projects = dynamic(() => import("../components/Projects"));
const Contact = dynamic(() => import("../components/Contact"));

export default function Home() {
  // Every refresh return to Hero section
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}