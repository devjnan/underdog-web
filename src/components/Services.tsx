import React from 'react';
import { Store, Globe, Home, TrendingUp, Target, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Store className="w-8 h-8" />,
    title: "Retail Store Marketing",
    description: "Transform your physical store into a customer magnet with strategic in-store marketing, visual merchandising, and local advertising campaigns.",
    features: ["In-Store Displays", "Local SEO", "Customer Experience Design", "Foot Traffic Analytics"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "E-Commerce & Online Stores",
    description: "Boost your online presence with conversion-optimized websites, digital advertising, and comprehensive e-commerce strategies.",
    features: ["Website Development", "Online Advertising", "Conversion Optimization", "Social Commerce"]
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Real Estate Marketing",
    description: "Sell properties faster and at better prices with targeted marketing campaigns, virtual tours, and lead generation systems.",
    features: ["Property Photography", "Virtual Tours", "Lead Generation", "Market Analysis"]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Brand Development",
    description: "Build powerful brand identities that resonate with your target audience across all touchpoints and marketing channels.",
    features: ["Logo Design", "Brand Guidelines", "Market Positioning", "Brand Strategy"]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Digital Advertising",
    description: "Maximize ROI with data-driven advertising campaigns across Google, Facebook, Instagram, and other high-converting platforms.",
    features: ["Google Ads", "Social Media Ads", "Retargeting", "Performance Analytics"]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Social Media Management",
    description: "Engage your audience and build community with strategic social media content, influencer partnerships, and community management.",
    features: ["Content Creation", "Community Management", "Influencer Marketing", "Social Analytics"]
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
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive marketing solutions for retail stores, online businesses, and real estate ventures
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

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Underdog for Your Marketing?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-2">Multi-Channel Expertise</div>
                <p className="text-gray-300">From physical stores to online platforms and real estate markets</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">Proven Results</div>
                <p className="text-gray-300">Average 500% increase in sales and brand visibility</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">Full-Service Support</div>
                <p className="text-gray-300">End-to-end marketing solutions with dedicated account management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;