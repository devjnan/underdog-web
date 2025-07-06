import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="/WhatsApp Image 2025-07-06 at 08.14.10.jpeg" 
              alt="Underdog Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-white tracking-tight">UNDERDOG</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Work', id: 'work' },
              { name: 'Services', id: 'services' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-black/95 backdrop-blur-lg`}>
        <nav className="px-6 py-4 space-y-4">
          {[
            { name: 'Work', id: 'work' },
            { name: 'Services', id: 'services' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase py-2"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;