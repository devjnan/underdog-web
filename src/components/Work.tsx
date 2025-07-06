import React, { useState } from 'react';
import { ExternalLink, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "TechFlow Rebrand",
    category: "Brand Strategy & Design",
    description: "Complete brand transformation for a B2B SaaS company, resulting in 300% increase in lead generation.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    awards: ["Awwwards SOTD", "CSS Design Awards"],
    metrics: ["300% Lead Increase", "150% Brand Recognition"],
    year: "2024"
  },
  {
    title: "EcoVibe Campaign",
    category: "Digital Marketing",
    description: "Sustainable fashion brand campaign that reached 2M+ users and drove 400% sales growth.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    awards: ["Cannes Lions Bronze", "D&AD Pencil"],
    metrics: ["2M+ Reach", "400% Sales Growth"],
    year: "2024"
  },
  {
    title: "FinanceForward App",
    category: "UX/UI Design",
    description: "Mobile-first financial app design that simplified complex investment processes for millennials.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    awards: ["Red Dot Award", "UX Design Awards"],
    metrics: ["95% User Satisfaction", "60% Task Completion"],
    year: "2023"
  },
  {
    title: "SportsTech Launch",
    category: "Product Launch",
    description: "Go-to-market strategy for innovative sports technology startup, achieving market leadership in 6 months.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    awards: ["Marketing Excellence", "Innovation Award"],
    metrics: ["#1 Market Position", "500K+ Users"],
    year: "2023"
  },
  {
    title: "RetailRevolution",
    category: "E-commerce Strategy",
    description: "Omnichannel retail transformation that increased online sales by 500% and customer retention by 200%.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    awards: ["E-commerce Excellence", "Digital Innovation"],
    metrics: ["500% Online Sales", "200% Retention"],
    year: "2024"
  },
  {
    title: "HealthTech Breakthrough",
    category: "Healthcare Marketing",
    description: "Revolutionary healthcare app launch that connected 1M+ patients with healthcare providers.",
    image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
    awards: ["Healthcare Innovation", "Digital Health Award"],
    metrics: ["1M+ Users", "98% Satisfaction"],
    year: "2023"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Brand Strategy & Design', 'Digital Marketing', 'UX/UI Design', 'Product Launch', 'E-commerce Strategy', 'Healthcare Marketing'];

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
            FEATURED WORK
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Case studies that showcase our ability to transform challenges into victories
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
                  <span className="text-sm text-gray-300 uppercase tracking-wider">
                    {filteredProjects[currentIndex]?.category}
                  </span>
                  <span className="text-sm text-gray-300">
                    {filteredProjects[currentIndex]?.year}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  {filteredProjects[currentIndex]?.title}
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl">
                  {filteredProjects[currentIndex]?.description}
                </p>
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
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Award size={12} className="text-yellow-400" />
                    <span className="text-xs text-gray-400">{project.awards.length}</span>
                  </div>
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
          <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            <span className="group-hover:tracking-wider transition-all duration-300">View All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;