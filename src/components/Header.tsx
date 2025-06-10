// src/components/Header.tsx
import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
import { scrollToElement } from '../utils/scroll';

// Tambahkan prop onContactClick
export const Header = ({ onContactClick }: { onContactClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
    setIsMenuOpen(false);
    // Jika ID adalah 'contact', panggil fungsi highlight
    if (id === 'contact') {
      onContactClick();
    }
  };

  const navLinkClass = "relative text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium header-nav-link";
  const contactLinkClass = "flex items-center text-orange-500 hover:text-orange-600 font-medium header-nav-link";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src={"https://todayassist.my/wp-content/uploads/2024/12/TODAYASSIST-removebg-1024x1024.png"}
              alt="TodayAssist Logo"
              className="h-32 w-32 rounded-full mr-3 mt-3"
            />
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" onClick={e => handleNavClick(e, 'home')} className={navLinkClass}>
              Home
            </a>
            <a href="#services" onClick={e => handleNavClick(e, 'services')} className={navLinkClass}>
              Services
            </a>
            <a href="#how-it-works" onClick={e => handleNavClick(e, 'how-it-works')} className={navLinkClass}>
              How It Works
            </a>
            <a href="#testimonials" onClick={e => handleNavClick(e, 'testimonials')} className={navLinkClass}>
              Testimonials
            </a>
          </nav>
          <div className="hidden md:flex items-center">
            {/* Panggil handleNavClick untuk Contact Us */}
            <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className={contactLinkClass}>
              <PhoneIcon className="h-4 w-4 mr-1" />
              <span>Contact Us</span>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none">
              {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={e => handleNavClick(e, 'home')} className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium">
              Home
            </a>
            <a href="#services" onClick={e => handleNavClick(e, 'services')} className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium">
              Services
            </a>
            <a href="#how-it-works" onClick={e => handleNavClick(e, 'how-it-works')} className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium">
              How It Works
            </a>
            <a href="#testimonials" onClick={e => handleNavClick(e, 'testimonials')} className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium">
              Testimonials
            </a>
            {/* Panggil handleNavClick untuk Contact Us di mobile menu */}
            <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="block px-3 py-2 text-orange-500 hover:text-orange-600 font-medium">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};