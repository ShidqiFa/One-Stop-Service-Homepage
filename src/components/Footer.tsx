// src/components/Footer.tsx
//import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import todayassistlogo from '../assets/images/todayassistlogo.png';
import mdeclogo from '../assets/images/mdeclogo.png';

export const Footer = () => {
  // Kelas CSS untuk efek garis hover pada tautan footer
  const footerLinkClass = "relative text-base text-black hover:text-orange-500 footer-nav-link";

  return (
    <footer id="contact" className="bg-white text-black">
      <div className="max-w-7xl mx-8 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="h-268 w-128 items-center justify-content mr-3">
              <img
                src={todayassistlogo}
                alt="TodayAssist Logo"
                className="h-32 w-32 items-center rounded-full "
                style={{ marginLeft: '3rem' }}
              />
              <img
                src={mdeclogo}
                alt="MDEC Logo"
                className="h-32 w-32 items-center rounded-full m"
                style={{ marginLeft: '3rem' }}
              />
            </div>
            <p className="mt-4 text-base text-black">
              Your one-stop solution for all service needs. Professional,
              reliable, and affordable.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-black hover:text-orange-500">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/todayassist_sdn_bhd" className="text-black hover:text-orange-500">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-black hover:text-orange-500">
                <TwitterIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className={footerLinkClass}>
                  Equipment Rental
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Nursing Services
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Security Services
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Makeup Artists
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Transport Services
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Education Services
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className={footerLinkClass}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-black mr-2" />
                <span className="text-base text-black">603 2779 6238</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-black mr-2" />
                <span className="text-base text-black">
                  info@todayassist.my
                </span>
              </li>
              <li className="flex">
                <MapPinIcon className="h-5 w-5 text-black mr-2 mt-1 flex-shrink-0" />
                <span className="text-base text-black">
                  TODAYASSIST SDN BHD
                  <br />
                  Level 7, Menara Arina Uniti,
                  <br />
                  Jalan Raja Muda Abdul Aziz,
                  <br />
                  50300, Kuala Lumpur
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-black text-center">
            &copy; {new Date().getFullYear()} TodayAssist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};