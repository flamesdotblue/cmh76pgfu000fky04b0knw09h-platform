import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <footer className="py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} FluxEdit — Sleek, fast, and powerful video editing.
      </footer>
    </div>
  );
}

export default App;
