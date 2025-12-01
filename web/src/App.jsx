import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Documentation from './components/Documentation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column font-sans">
      <Header />
      
      <main className="flex-grow-1">
        <Hero />
        <Features />
        <Pricing />
        <Documentation />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;