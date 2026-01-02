
import React from 'react';
import { Terminal, Layers, Clapperboard, ImagePlus, PenTool, Megaphone } from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

// Official Google Ads Icon
const GoogleAdsIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 192 192" fill="none">
    <path d="M12.214 108.474l48.493-83.994c9.9-17.147 31.813-23.02 48.96-13.12 17.148 9.9 23.02 31.813 13.12 48.96L74.294 144.314c-9.9 17.147-31.813 23.02-48.96 13.12-17.147-9.9-23.02-31.813-13.12-48.96z" fill="#FBBC04"/>
    <path d="M179.786 108.474l-48.493-83.994c-9.9-17.147-31.813-23.02-48.96-13.12-17.148 9.9-23.02 31.813-13.12 48.96l48.493 83.994c9.9 17.147 31.813 23.02 48.96 13.12 17.147-9.9 23.02-31.813 13.12-48.96z" fill="#4285F4"/>
    <circle cx="36" cy="144" r="24" fill="#34A853"/>
  </svg>
);

// Official Meta/Facebook Icon
const MetaIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none">
    <defs>
      <linearGradient id="metaGradientServices" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0081FB"/>
        <stop offset="25%" stopColor="#0064E0"/>
        <stop offset="50%" stopColor="#A033FF"/>
        <stop offset="75%" stopColor="#FF5C87"/>
        <stop offset="100%" stopColor="#FF7A59"/>
      </linearGradient>
    </defs>
    <path d="M8.04 18c0-3.7 1.95-7.7 4.44-10.36 2.82-3.01 5.9-4.14 8.56-4.14 3.06 0 5.24 1.28 6.73 3.01 1.35 1.56 2.23 3.54 2.84 5.49.58 1.84.95 3.68.95 5.5 0 1.82-.37 3.66-.95 5.5-.61 1.95-1.49 3.93-2.84 5.49-1.49 1.73-3.67 3.01-6.73 3.01-2.66 0-5.74-1.13-8.56-4.14C9.99 25.7 8.04 21.7 8.04 18zm6.59 0c0 2.03.79 4.29 2.09 5.78.72.82 1.5 1.22 2.32 1.22.82 0 1.42-.29 1.88-.78.53-.56.97-1.39 1.28-2.38.35-1.1.55-2.38.55-3.84 0-1.46-.2-2.74-.55-3.84-.31-.99-.75-1.82-1.28-2.38-.46-.49-1.06-.78-1.88-.78-.82 0-1.6.4-2.32 1.22-1.3 1.49-2.09 3.75-2.09 5.78z" fill="url(#metaGradientServices)"/>
  </svg>
);

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
      icon: <GoogleAdsIcon />,
      title: 'Google Ads',
      description: 'Professional Google Ads campaigns for maximum ROI'
    },
    {
      icon: <MetaIcon />,
      title: 'Meta Ads',
      description: 'Strategic Facebook & Instagram advertising'
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
        <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Services I Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 sm:p-8 rounded-2xl text-center transition-all duration-500 hover:scale-105 transform group animate-fade-in hover-lift ${
                isDark ? 'bg-gray-800/80 hover:bg-gray-700/80' : 'bg-white/80 hover:bg-gray-50/80'
              } shadow-lg hover:shadow-2xl border border-transparent hover:border-primary/50 backdrop-blur-sm cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4 group-hover:scale-125 transition-all duration-300 flex justify-center">
                {service.icon}
              </div>
              <h3 className={`font-display text-lg sm:text-xl font-semibold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`text-sm sm:text-base font-light transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
