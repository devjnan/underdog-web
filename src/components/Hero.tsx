import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 10;
      const yPos = (clientY / innerHeight - 0.5) * 10;
      
      heroRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={heroRef} className="relative z-10 text-center px-6 transition-transform duration-100 ease-out">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/WhatsApp Image 2025-07-06 at 08.14.10.jpeg" 
            alt="Underdog Logo" 
            className="w-32 h-32 mx-auto mb-6 object-contain"
          />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tighter leading-none">
          <span className="block animate-slide-up">WE ARE</span>
          <span className="block animate-slide-up delay-200 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            UNDERDOG
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
          We turn ambitious brands into market leaders through 
          <span className="text-white font-semibold"> fearless creativity</span> and 
          <span className="text-white font-semibold"> strategic innovation</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700">
          <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span className="group-hover:tracking-wider transition-all duration-300">Start Your Journey</span>
          </button>
          <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
            <span className="group-hover:tracking-wider transition-all duration-300">View Our Work</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/60" size={32} />
      </div>
    </section>
  );
};

export default Hero;