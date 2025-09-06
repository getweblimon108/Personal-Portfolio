
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
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
        </svg>
      ),
      title: 'Google Ads',
      description: 'Professional Google Ads campaigns for maximum ROI and targeted reach',
      tooltip: 'Search ads, display campaigns, YouTube advertising'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
        </svg>
      ),
      title: 'Meta Ads',
      description: 'Strategic Facebook & Instagram advertising for social media success',
      tooltip: 'Facebook ads, Instagram campaigns, audience targeting'
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
