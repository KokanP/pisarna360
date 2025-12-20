import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Documentation from './components/Documentation';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
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
        <Testimonials />
        <FAQ />
        <Contact />
        <PrivacyPolicy />
        <TermsAndConditions />
      </main>

      <Footer />
    </div>
  );
}

export default App;