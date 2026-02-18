// src/components/Footer.jsx

import Link from 'next/link';
// Import icons from a single library (Lucide-React for consistency)
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    // Main container with dark background and padding
    <footer className="bg-[#213742] text-gray-300 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-600 pb-10">
          
          {/* Column 1: Company Info / Logo Placeholder */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Innovative Learning
            </h3>
            <p className="text-sm">
              Empowering professionals with future-ready skills in project management and design technologies.
            </p>
          </div>

          {/* Column 2: Sitemap Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 border-l-4 border-[#b1976b] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-[#b1976b] transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#b1976b] transition duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#b1976b] transition duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#b1976b] transition duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Office Address */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 border-l-4 border-[#b1976b] pl-3">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#b1976b] mr-3 mt-1 flex-shrink-0" />
                <address className="not-italic">
                  207, King Fahad Abdulaziz st
                  Al Khobar, Al fawaziya area<br />
                  Saudi Arabia, 34627
                </address>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#b1976b] mr-3" />
                <span>+966 51 174 2526</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#b1976b] mr-3" />
                <span>info@innovativelh.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 border-l-4 border-[#b1976b] pl-3">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61581583274859" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-[#b1976b] transition duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/innovative_learning_horizons?igsh=MXh2aGx1MDNmcmV4cA==" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-[#b1976b] transition duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-[#b1976b] transition duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Innovative Learning Horizons. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
