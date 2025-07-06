import React, { useState } from 'react';
import { Target, TrendingUp, Users, Zap, ChevronLeft, ChevronRight, Store, Globe, Home } from 'lucide-react';

const strategies = [
  {
    title: "The Retail Revolution Strategy",
    category: "Retail Store Marketing",
    description: "Our proven 5-step methodology to transform physical stores into customer magnets and sales powerhouses.",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Store className="w-6 h-6" />,
    steps: ["Store Audit & Analysis", "Customer Journey Mapping", "Visual Merchandising", "Local Marketing Campaigns", "Performance Tracking"],
    focus: "Foot Traffic & In-Store Sales"
  },
  {
    title: "Digital Domination Framework",
    category: "E-Commerce Strategy",
    description: "Complete digital transformation strategy that turns online visitors into loyal customers and brand advocates.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Globe className="w-6 h-6" />,
    steps: ["Website Optimization", "SEO & Content Strategy", "Paid Advertising", "Conversion Funnels", "Customer Retention"],
    focus: "Online Sales & Brand Growth"
  },
  {
    title: "Property Sales Accelerator",
    category: "Real Estate Marketing",
    description: "Strategic marketing approach that positions properties for maximum visibility and faster sales at premium prices.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Home className="w-6 h-6" />,
    steps: ["Market Analysis", "Property Staging", "Professional Photography", "Multi-Channel Marketing", "Lead Nurturing"],
    focus: "Faster Sales & Higher Prices"
  },
  {
    title: "Brand Identity Blueprint",
    category: "Brand Development",
    description: "Comprehensive brand building strategy that creates memorable identities and emotional connections with customers.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Target className="w-6 h-6" />,
    steps: ["Brand Discovery", "Visual Identity Design", "Brand Guidelines", "Market Positioning", "Brand Launch"],
    focus: "Brand Recognition & Loyalty"
  },
  {
    title: "Growth Acceleration System",
    category: "Performance Marketing",
    description: "Data-driven marketing system designed to scale businesses rapidly while maintaining profitability and quality.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <TrendingUp className="w-6 h-6" />,
    steps: ["Growth Audit", "Channel Optimization", "Automation Setup", "Performance Monitoring", "Scaling Strategy"],
    focus: "Sustainable Growth & ROI"
  },
  {
    title: "Customer Engagement Engine",
    category: "Social Media Strategy",
    description: "Strategic social media framework that builds communities, drives engagement, and converts followers into customers.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Users className="w-6 h-6" />,
    steps: ["Audience Research", "Content Strategy", "Community Building", "Influencer Partnerships", "Social Commerce"],
    focus: "Engagement & Community Growth"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Retail Store Marketing', 'E-Commerce Strategy', 'Real Estate Marketing', 'Brand Development', 'Performance Marketing', 'Social Media Strategy'];

  const filteredStrategies = filter === 'All' 
    ? strategies 
    : strategies.filter(strategy => strategy.category === filter);

  const nextStrategy = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredStrategies.length);
  };

  const prevStrategy = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredStrategies.length) % filteredStrategies.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            OUR STRATEGIES
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Proven methodologies and frameworks we use to transform businesses across retail, digital, and real estate markets
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Strategy Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div className="relative">
              <img
                src={filteredStrategies[currentIndex]?.image}
                alt={filteredStrategies[currentIndex]?.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-white bg-black/50 p-2 rounded-full">
                      {filteredStrategies[currentIndex]?.icon}
                    </div>
                    <span className="text-sm text-gray-300 uppercase tracking-wider">
                      {filteredStrategies[currentIndex]?.category}
                    </span>
                  </div>
                  <span className="text-sm text-gray-300 bg-black/50 px-3 py-1 rounded-full">
                    {filteredStrategies[currentIndex]?.focus}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  {filteredStrategies[currentIndex]?.title}
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mb-6">
                  {filteredStrategies[currentIndex]?.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {filteredStrategies[currentIndex]?.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900/70 text-white text-sm px-3 py-2 rounded-full border border-gray-600 text-center"
                    >
                      <span className="text-xs text-gray-400">Step {idx + 1}</span>
                      <div className="font-medium">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevStrategy}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextStrategy}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {filteredStrategies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStrategies.map((strategy, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={strategy.image}
                  alt={strategy.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white bg-black/50 p-2 rounded-full">
                    {strategy.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <Zap className="text-white" size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    {strategy.category}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                    {strategy.focus}
                  </span>
                </div>

                <h3 className="text-xl font-bold group-hover:text-gray-300 transition-colors duration-300">
                  {strategy.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {strategy.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {strategy.steps.slice(0, 2).map((step, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {step}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded-full">
                    +{strategy.steps.length - 2} more
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement These Strategies?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss which strategy framework is perfect for your business goals and start your transformation journey.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">Get Your Custom Strategy</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;