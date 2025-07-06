import React from 'react';
import { Zap, Target, Palette, TrendingUp, Globe, Users } from 'lucide-react';

const services = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Brand Strategy",
    description: "We craft compelling brand narratives that resonate with your audience and differentiate you from the competition.",
    features: ["Brand Positioning", "Market Research", "Competitive Analysis"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Creative Design",
    description: "Award-winning creative that captures attention and drives engagement across all touchpoints.",
    features: ["Visual Identity", "Campaign Design", "Digital Assets"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Data-driven digital strategies that maximize reach, engagement, and conversion rates.",
    features: ["Social Media", "Content Marketing", "SEO/SEM"]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Performance Marketing",
    description: "ROI-focused campaigns that deliver measurable results and sustainable growth.",
    features: ["Paid Advertising", "Conversion Optimization", "Analytics"]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth Strategy",
    description: "Comprehensive growth frameworks that scale your business and market presence.",
    features: ["Market Expansion", "Product Launch", "Partnership Strategy"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Experience Design",
    description: "User-centered experiences that create lasting connections between brands and customers.",
    features: ["UX/UI Design", "Customer Journey", "Interaction Design"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            OUR SERVICES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end marketing solutions that transform underdogs into industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-white mb-6 transition-colors duration-500 group-hover:text-gray-100">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-500">
                {service.title}
              </h3>
              
              <p className="text-gray-300 group-hover:text-gray-200 mb-6 leading-relaxed transition-colors duration-500">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-500 group-hover:bg-gray-300 rounded-full mr-3 transition-colors duration-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;