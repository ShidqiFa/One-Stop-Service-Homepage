import React from 'react';
import { scrollToElement } from '../utils/scroll';
export const CTASection = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
  };
  return <section className="bg-gradient-to-r from-orange-500 to-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block text-orange-100">
            Book your service today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a href="#services" onClick={e => handleClick(e, 'services')} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50">
              Book Now
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a href="#contact" onClick={e => handleClick(e, 'contact')} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>;
};