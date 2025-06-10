// src/App.tsx
import React, { useState } from 'react'; // Import useState
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export function App() {
  const [highlightContact, setHighlightContact] = useState(false);

  // Fungsi untuk mengaktifkan highlight pada contact section
  const triggerContactHighlight = () => {
    setHighlightContact(true);
    // Setelah beberapa saat, nonaktifkan highlight
    setTimeout(() => {
      setHighlightContact(false);
    }, 2000); // Highlight akan aktif selama 2 detik
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Meneruskan triggerContactHighlight sebagai prop ke Header */}
      <Header onContactClick={triggerContactHighlight} />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
      {/* Meneruskan state highlightContact dan triggerContactHighlight ke Footer */}
      <Footer shouldHighlightContact={highlightContact} onContactClick={triggerContactHighlight} />
    </div>
  );
}