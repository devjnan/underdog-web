import React from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

const stats = [
  { icon: <Users className="w-8 h-8" />, number: "50+", label: "Brands Transformed" },
  { icon: <Award className="w-8 h-8" />, number: "25+", label: "Industry Awards" },
  { icon: <Globe className="w-8 h-8" />, number: "15+", label: "Countries Reached" },
  { icon: <TrendingUp className="w-8 h-8" />, number: "300%", label: "Average Growth" }
];

const team = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "15+ years crafting award-winning campaigns for Fortune 500 companies"
  },
  {
    name: "Marcus Rodriguez",
    role: "Strategy Lead",
    image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Former McKinsey consultant specializing in brand transformation"
  },
  {
    name: "Elena Kowalski",
    role: "Digital Director",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Performance marketing expert with $50M+ in managed ad spend"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ABOUT UNDERDOG
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're not just another marketing agency. We're the strategic partner that helps ambitious brands 
            break through the noise and claim their rightful place at the top.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-700 rounded-3xl p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Our Philosophy
            </h3>
            <p className="text-xl leading-relaxed text-gray-300 mb-8">
              "Every market leader was once an underdog. We believe that with the right strategy, 
              fearless execution, and relentless focus, any brand can rise to dominate their space."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="/WhatsApp Image 2025-07-06 at 08.14.10.jpeg" 
                alt="Underdog Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-gray-400">— The Underdog Team</span>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Meet The Pack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 hover:border-gray-600 hover:shadow-lg transition-all duration-300">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-gray-300 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;