import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
import { scrollToElement } from '../utils/scroll';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
    setIsMenuOpen(false);
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-orange-500">Today</span>
            <span className="text-2xl font-bold text-blue-600">Assist</span>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" onClick={e => handleNavClick(e, 'home')} className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#services" onClick={e => handleNavClick(e, 'services')} className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="#how-it-works" onClick={e => handleNavClick(e, 'how-it-works')} className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">
              How It Works
            </a>
            <a href="#testimonials" onClick={e => handleNavClick(e, 'testimonials')} className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">
              Testimonials
            </a>
          </nav>
          <div className="hidden md:flex items-center">
            <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
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
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
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
            <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="block px-3 py-2 text-orange-500 hover:text-orange-600 font-medium">
              Contact Us
            </a>
          </div>
        </div>}
    </header>;
};