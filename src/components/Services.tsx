
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
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.956 1.404-5.956s-.358-.719-.358-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.887 2.745.097.118.111.221.082.942-.105.437-.338 1.361-.383 1.556-.059.247-.191.299-.441.18-1.623-.755-2.64-3.129-2.64-5.044 0-4.119 2.991-7.906 8.625-7.906 4.526 0 8.042 3.235 8.042 7.555 0 4.508-2.841 8.13-6.785 8.13-1.327 0-2.579-.691-3.005-1.516 0 0-.658 2.514-.818 3.129-.297 1.163-1.098 2.615-1.632 3.497C9.57 23.812 10.763 24.001 12.017 24c6.624-.001 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" fill="#EA4335"/>
          <path d="M12.017 5.062c-3.822 0-6.925 3.103-6.925 6.925s3.103 6.925 6.925 6.925 6.925-3.103 6.925-6.925-3.103-6.925-6.925-6.925zm0 11.85c-2.716 0-4.925-2.209-4.925-4.925s2.209-4.925 4.925-4.925 4.925 2.209 4.925 4.925-2.209 4.925-4.925 4.925z" fill="#FBBC04"/>
          <path d="M12.017 8.062c-2.17 0-3.925 1.755-3.925 3.925s1.755 3.925 3.925 3.925 3.925-1.755 3.925-3.925-1.755-3.925-3.925-3.925z" fill="#34A853"/>
          <path d="M12.017 9.062c-1.618 0-2.925 1.307-2.925 2.925s1.307 2.925 2.925 2.925 2.925-1.307 2.925-2.925-1.307-2.925-2.925-2.925z" fill="#EA4335"/>
        </svg>
      ),
      title: 'Google Ads',
      description: 'Professional Google Ads campaigns for maximum ROI and targeted reach'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
        </svg>
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
