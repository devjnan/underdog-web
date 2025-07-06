import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const projects = [
  {
    title: "TechFlow Rebrand",
    category: "Brand Strategy & Design",
    description: "Complete brand transformation for a B2B SaaS company, resulting in 300% increase in lead generation.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    awards: ["Awwwards SOTD", "CSS Design Awards"],
    metrics: ["300% Lead Increase", "150% Brand Recognition"]
  },
  {
    title: "EcoVibe Campaign",
    category: "Digital Marketing",
    description: "Sustainable fashion brand campaign that reached 2M+ users and drove 400% sales growth.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    awards: ["Cannes Lions Bronze", "D&AD Pencil"],
    metrics: ["2M+ Reach", "400% Sales Growth"]
  },
  {
    title: "FinanceForward App",
    category: "UX/UI Design",
    description: "Mobile-first financial app design that simplified complex investment processes for millennials.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    awards: ["Red Dot Award", "UX Design Awards"],
    metrics: ["95% User Satisfaction", "60% Task Completion"]
  },
  {
    title: "SportsTech Launch",
    category: "Product Launch",
    description: "Go-to-market strategy for innovative sports technology startup, achieving market leadership in 6 months.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    awards: ["Marketing Excellence", "Innovation Award"],
    metrics: ["#1 Market Position", "500K+ Users"]
  }
];

const Work = () => {
  return (
    <section id="work" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            FEATURED WORK
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Case studies that showcase our ability to transform challenges into victories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <ExternalLink className="text-white" size={24} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-yellow-400" />
                    <span className="text-sm text-gray-400">{project.awards.length} Awards</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold group-hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.awards.map((award, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-yellow-400 flex items-center"
                    >
                      <Award size={12} className="mr-1" />
                      {award}
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