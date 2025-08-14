import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import img from '../assets/1.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="w-full" 
      style={{ backgroundColor: '#1b4242' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              {/* Logo Image Placeholder */}
              <div className="w-10 h-10 bg-teal-500/20 rounded-full border-2 border-teal-500 flex items-center justify-center">
     
                <img src={img} alt="Gamma Defence Systems" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">GAMMA DEFENCE SYSTEMS</h1>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                className="text-white hover:bg-black hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-white hover:bg-black hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About Us
              </a>
              <a 
                href="#products" 
                className="text-white hover:bg-black hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Products
              </a>
              <a 
                href="#services" 
                className="text-white hover:bg-black hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="text-white hover:bg-black hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Remove Mission Status Indicator for clean look */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-black hover:bg-opacity-20 p-2 rounded-md"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{ backgroundColor: '#000000' }}>
            <a
              href="#home"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#products"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#services"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;