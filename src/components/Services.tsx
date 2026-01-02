
import React from 'react';
import { Terminal, Layers, Clapperboard, ImagePlus, PenTool, Megaphone } from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

const Services = ({ isDark }: ServicesProps) => {
  const services = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Complete web applications with modern technologies'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="#FF0000"/>
          <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#FFFFFF"/>
        </svg>
      ),
      title: 'Google Ads',
      description: 'Professional Google Ads campaigns for maximum ROI and targeted reach',
      tooltip: 'Search ads, display campaigns, YouTube advertising'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="metaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0088FF"/>
              <stop offset="50%" stopColor="#A033FF"/>
              <stop offset="100%" stopColor="#FF5C87"/>
            </linearGradient>
          </defs>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="url(#metaGradient)"/>
        </svg>
      ),
      title: 'Meta Ads',
      description: 'Strategic Facebook & Instagram advertising for social media success',
      tooltip: 'Facebook ads, Instagram campaigns, audience targeting'
    },
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video content creation'
    },
    {
      icon: <ImagePlus className="w-8 h-8" />,
      title: 'Photo Editing',
      description: 'Creative photo manipulation and enhancement'
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Graphics Designing',
      description: 'Creative visual design and branding solutions'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and online brand growth'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Services I Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 sm:p-8 rounded-lg text-center transition-all duration-500 hover:scale-105 transform group animate-fade-in hover-lift ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              } shadow-lg hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-blue-500/10 border-2 border-transparent hover:border-cyan-400/50 glow-cyan cursor-pointer pulse-glow`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 group-hover:animate-pulse">
                {service.icon}
              </div>
              <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
