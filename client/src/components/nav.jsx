import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import img from '../assets/1.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  // Check if current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className="w-full sticky top-0 z-50" 
      style={{ backgroundColor: '#1b4242' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              {/* Logo Image */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500/20 rounded-full border-2 border-teal-500 flex items-center justify-center">
                <img src={img} alt="Gamma Defence Systems" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white text-lg sm:text-xl font-bold font-mono">GAMMA DEFENCE SYSTEMS</h1>
              </div>
              <div className="sm:hidden">
                <h1 className="text-white text-sm font-bold font-mono">GAMMA</h1>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-teal-500 bg-black bg-opacity-20' 
                    : 'text-white hover:bg-black hover:bg-opacity-20'
                }`}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'text-teal-500 bg-black bg-opacity-20' 
                    : 'text-white hover:bg-black hover:bg-opacity-20'
                }`}
              >
                ABOUT
              </Link>
              <Link 
                to="/products" 
                className={`px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors duration-200 ${
                  isActive('/products') 
                    ? 'text-teal-500 bg-black bg-opacity-20' 
                    : 'text-white hover:bg-black hover:bg-opacity-20'
                }`}
              >
                PRODUCTS
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-teal-500 bg-black bg-opacity-20' 
                    : 'text-white hover:bg-black hover:bg-opacity-20'
                }`}
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-black hover:bg-opacity-20 p-2 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full z-40">
          <div 
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-teal-500/30" 
            style={{ backgroundColor: '#000000' }}
          >
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium font-mono ${
                isActive('/') 
                  ? 'text-teal-500 bg-gray-700' 
                  : 'text-white hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium font-mono ${
                isActive('/about') 
                  ? 'text-teal-500 bg-gray-700' 
                  : 'text-white hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/products"
              className={`block px-3 py-2 rounded-md text-base font-medium font-mono ${
                isActive('/products') 
                  ? 'text-teal-500 bg-gray-700' 
                  : 'text-white hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              PRODUCTS
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium font-mono ${
                isActive('/contact') 
                  ? 'text-teal-500 bg-gray-700' 
                  : 'text-white hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;