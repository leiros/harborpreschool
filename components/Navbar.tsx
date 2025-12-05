import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, ContentData } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: ContentData['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    setLanguage(language === Language.EN ? Language.PT : Language.EN);
  };

  const navLinks = [
    { label: content.principles, href: '#principles' },
    { label: content.references, href: '#references' },
    { label: content.curriculum, href: '#curriculum' },
    { label: content.projects, href: '#projects' },
    { label: content.assessment, href: '#assessment' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <span className="text-secondary">Harbor</span>Preschool
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold hover:text-primary transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full border-2 transition-colors ${
                isScrolled
                  ? 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-secondary'
              }`}
            >
              <Globe size={16} />
              <span className="font-bold text-xs">{language}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleLanguage}
              className={`mr-4 px-2 py-1 rounded border ${
                 isScrolled ? 'border-gray-400 text-gray-700' : 'border-white text-white'
              }`}
            >
              <span className="font-bold text-xs">{language}</span>
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full rounded-b-2xl overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;