
import React from 'react';
import { Code, Palette, Video, Camera, Star, TrendingUp } from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

const Services = ({ isDark }: ServicesProps) => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Complete web applications with modern technologies'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces'
    },
    {
      icon: (
        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">G</span>
        </div>
      ),
      title: 'Google Ads',
      description: 'Professional Google Ads campaigns for maximum ROI and targeted reach'
    },
    {
      icon: (
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">M</span>
        </div>
      ),
      title: 'Meta Ads',
      description: 'Strategic Facebook & Instagram advertising for social media success'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video content creation'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photo Editing',
      description: 'Creative photo manipulation and enhancement'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Graphics Designing',
      description: 'Creative visual design and branding solutions'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and online brand growth'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-transparent via-purple-500/5 to-cyan-500/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-20 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-fade-in gradient-text ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Services I Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 sm:p-8 rounded-xl text-center transition-all duration-500 hover:scale-105 transform group animate-fade-in hover-lift cursor-pointer relative overflow-hidden
                ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50' 
                    : 'bg-white/90 backdrop-blur-sm border border-gray-200/50'
                } 
                shadow-lg hover:shadow-2xl glow-rainbow pulse-rainbow
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/10 before:via-purple-500/10 before:to-pink-500/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative z-10">
                <div className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:animate-pulse">
                  {service.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-all duration-300 ${
                  isDark ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text' 
                    : 'text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm sm:text-base transition-colors duration-300 ${
                  isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  {service.description}
                </p>
              </div>
              
              {/* Animated background particles */}
              <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 animate-float-particle"></div>
              <div className="absolute top-6 right-6 w-0.5 h-0.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 animate-float-particle" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-4 left-6 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-float-particle" style={{animationDelay: '2s'}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
