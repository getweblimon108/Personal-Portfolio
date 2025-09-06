import React from 'react';
import { Code, Palette, Video, Camera, Star, TrendingUp } from 'lucide-react';
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
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Complete web applications with modern technologies',
      tooltip: 'React, Node.js, MongoDB, Express - End-to-end development'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      tooltip: 'Figma, Adobe XD, User research, Prototyping'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
        </svg>
      ),
      title: 'Google Ads',
      description: 'Professional Google Ads campaigns for maximum ROI and targeted reach',
      tooltip: 'Search ads, Display campaigns, YouTube advertising, Shopping ads'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
        </svg>
      ),
      title: 'Meta Ads',
      description: 'Strategic Facebook & Instagram advertising for social media success',
      tooltip: 'Facebook ads, Instagram campaigns, Audience targeting, Retargeting'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video content creation',
      tooltip: 'Adobe Premiere Pro, After Effects, Motion graphics'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photo Editing',
      description: 'Creative photo manipulation and enhancement',
      tooltip: 'Adobe Photoshop, Lightroom, Color grading, Retouching'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Graphics Designing',
      description: 'Creative visual design and branding solutions',
      tooltip: 'Adobe Illustrator, Brand identity, Logo design, Print design'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
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