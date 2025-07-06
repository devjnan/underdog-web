import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/WhatsApp Image 2025-07-06 at 08.14.10.jpeg" 
                alt="Underdog Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight">UNDERDOG</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Transforming ambitious brands into market leaders through fearless creativity 
              and strategic innovation. Every champion was once an underdog.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {['Brand Strategy', 'Creative Design', 'Digital Marketing', 'Performance Marketing', 'Growth Strategy', 'Experience Design'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              {['About Us', 'Our Work', 'Careers', 'Blog', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Underdog Marketing Agency. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for ambitious brands
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;