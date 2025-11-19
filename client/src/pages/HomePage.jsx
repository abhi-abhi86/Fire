import React from 'react';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';

function HomePage() {
  return (
    <div className="min-h-screen text-black bg-white">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default HomePage;
