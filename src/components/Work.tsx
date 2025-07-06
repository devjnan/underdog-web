import React, { useState } from 'react';
import { ExternalLink, Award, ChevronLeft, ChevronRight, Store, Globe, Home } from 'lucide-react';

const projects = [
  {
    title: "Fashion Boutique Revival",
    category: "Retail Store Marketing",
    description: "Complete store transformation and local marketing campaign that increased foot traffic by 400% and sales by 350%.",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Store className="w-6 h-6" />,
    metrics: ["400% Foot Traffic", "350% Sales Growth", "85% Customer Retention"],
    year: "2024"
  },
  {
    title: "E-Commerce Empire",
    category: "Online Store Development",
    description: "Built and launched a complete e-commerce platform that generated $2M+ in revenue within the first year.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Globe className="w-6 h-6" />,
    metrics: ["$2M+ Revenue", "150% Conversion Rate", "50K+ Customers"],
    year: "2024"
  },
  {
    title: "Luxury Property Sales",
    category: "Real Estate Marketing",
    description: "Premium real estate marketing campaign that sold 95% of luxury condos within 6 months, exceeding market expectations.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Home className="w-6 h-6" />,
    metrics: ["95% Sales Rate", "6 Month Timeline", "$50M+ Value"],
    year: "2024"
  },
  {
    title: "Restaurant Chain Expansion",
    category: "Multi-Location Marketing",
    description: "Coordinated marketing strategy across 15 restaurant locations, increasing average revenue per location by 280%.",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Store className="w-6 h-6" />,
    metrics: ["280% Revenue Growth", "15 Locations", "92% Customer Satisfaction"],
    year: "2023"
  },
  {
    title: "Tech Startup Launch",
    category: "Digital Brand Building",
    description: "Complete digital marketing strategy for tech startup, achieving 1M+ app downloads and $5M Series A funding.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Globe className="w-6 h-6" />,
    metrics: ["1M+ Downloads", "$5M Funding", "Top 10 App Store"],
    year: "2023"
  },
  {
    title: "Commercial Real Estate",
    category: "Commercial Property Marketing",
    description: "Strategic marketing for commercial real estate portfolio, achieving 100% occupancy rate in competitive market.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Home className="w-6 h-6" />,
    metrics: ["100% Occupancy", "Premium Tenants", "25% Above Market Rate"],
    year: "2023"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Retail Store Marketing', 'Online Store Development', 'Real Estate Marketing', 'Multi-Location Marketing', 'Digital Brand Building', 'Commercial Property Marketing'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="work" className="py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            SUCCESS STORIES
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real results from retail stores, online businesses, and real estate ventures we've transformed
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

        {/* Featured Project Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div className="relative">
              <img
                src={filteredProjects[currentIndex]?.image}
                alt={filteredProjects[currentIndex]?.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-white">
                      {filteredProjects[currentIndex]?.icon}
                    </div>
                    <span className="text-sm text-gray-300 uppercase tracking-wider">
                      {filteredProjects[currentIndex]?.category}
                    </span>
                  </div>
                  <span className="text-sm text-gray-300">
                    {filteredProjects[currentIndex]?.year}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  {filteredProjects[currentIndex]?.title}
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mb-6">
                  {filteredProjects[currentIndex]?.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {filteredProjects[currentIndex]?.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-900/70 text-white text-sm rounded-full border border-gray-600"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {filteredProjects.map((_, index) => (
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white bg-black/50 p-2 rounded-full">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold group-hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.metrics.slice(0, 2).map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <span className="group-hover:tracking-wider transition-all duration-300">Start Your Success Story</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;