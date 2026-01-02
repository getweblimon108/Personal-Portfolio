import React from 'react';
import { Terminal, Layers, Clapperboard, ImagePlus, PenTool, Megaphone } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EnhancedServicesProps {
  isDark: boolean;
}

const EnhancedServices = ({ isDark }: EnhancedServicesProps) => {
  const services = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Complete web applications with modern technologies',
      tooltip: 'React, Node.js, MongoDB, Express - End-to-end development'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      tooltip: 'Figma, Adobe XD, User research, Prototyping'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M5.319 15.942l2.346-2.5 3.453 3.678-4.612 4.91c-.836.89-2.235.893-3.076.008l-.002-.002a2.308 2.308 0 01.007-3.219l1.884-2.876z" fill="#FBBC04"/>
          <path d="M18.681 8.058l-2.346 2.5-3.453-3.678 4.612-4.91c.836-.89 2.235-.893 3.076-.008l.002.002a2.308 2.308 0 01-.007 3.219l-1.884 2.876z" fill="#4285F4"/>
          <path d="M8.335 10.558l3.453 3.678L8.335 17.9l-3.453-3.678 3.453-3.664z" fill="#34A853"/>
          <path d="M15.665 13.442l-3.453-3.678 3.453-3.664 3.453 3.678-3.453 3.664z" fill="#EA4335"/>
        </svg>
      ),
      title: 'Google Ads',
      description: 'Professional Google Ads campaigns for maximum ROI and targeted reach',
      tooltip: 'Search ads, Display campaigns, YouTube advertising, Shopping ads'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="metaGradientEnhanced" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0088FF"/>
              <stop offset="50%" stopColor="#A033FF"/>
              <stop offset="100%" stopColor="#FF5C87"/>
            </linearGradient>
          </defs>
          <path d="M6.915 4.03c-1.968 0-3.463 1.35-4.043 3.323-.671 2.28.083 4.907 1.998 6.822l5.028 5.028c.667.667 1.64 1.022 2.602 1.022.961 0 1.934-.355 2.601-1.022l5.029-5.028c1.914-1.915 2.668-4.542 1.997-6.822-.58-1.973-2.075-3.323-4.043-3.323-.812 0-1.612.247-2.32.716L12 6.38l-3.765-1.633A4.458 4.458 0 006.915 4.03z" fill="url(#metaGradientEnhanced)"/>
        </svg>
      ),
      title: 'Meta Ads',
      description: 'Strategic Facebook & Instagram advertising for social media success',
      tooltip: 'Facebook ads, Instagram campaigns, Audience targeting, Retargeting'
    },
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video content creation',
      tooltip: 'Adobe Premiere Pro, After Effects, Motion graphics'
    },
    {
      icon: <ImagePlus className="w-8 h-8" />,
      title: 'Photo Editing',
      description: 'Creative photo manipulation and enhancement',
      tooltip: 'Adobe Photoshop, Lightroom, Color grading, Retouching'
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Graphics Designing',
      description: 'Creative visual design and branding solutions',
      tooltip: 'Adobe Illustrator, Brand identity, Logo design, Print design'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and online brand growth',
      tooltip: 'SEO optimization, Content strategy, Social media management'
    }
  ];

  return (
    <section id="services" className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Services I 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2">
              Offer
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive digital solutions to bring your vision to life
          </p>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Tooltip key={service.title}>
                <TooltipTrigger asChild>
                  <div
                    className={`group p-8 rounded-xl text-center transition-all duration-500 hover:scale-105 transform animate-fade-in cursor-pointer ${
                      isDark 
                        ? 'bg-gray-800 border border-gray-700 hover:border-primary/50' 
                        : 'bg-white border border-gray-200 hover:border-primary/50'
                    } shadow-lg hover:shadow-2xl hover-lift relative overflow-hidden`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="text-primary mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex justify-center">
                        {service.icon}
                      </div>
                      <h3 className={`text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'}`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p className="text-sm">{service.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        {/* Services stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} hover-lift`}>
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Services Offered</div>
          </div>
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} hover-lift`}>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Projects Completed</div>
          </div>
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} hover-lift`}>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Support Available</div>
          </div>
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'} hover-lift`}>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServices;