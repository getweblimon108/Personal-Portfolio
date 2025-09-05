
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, MessageCircle, Facebook } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ isDark, scrollToSection }: HeroProps) => {
  const [typedText, setTypedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const skills = [
    'Full Stack Developer',
    'UI/UX Designer', 
    'Video Editor',
    'Photo Editor',
    'Graphics Designer',
    'Digital Marketer'
  ];
  const fullText = "Hi, I'm Hammad Ahmed";

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://github.com/getweblimon108/",
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://www.linkedin.com/in/hammadahmed-ahmed-b32117372/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://www.instagram.com/hammadahmad4526/",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://www.facebook.com/profile.php?id=61577936158112",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.685"/>
        </svg>
      ),
      href: "https://wa.me/923217026152",
      label: "WhatsApp",
      color: "hover:text-green-400"
    }
  ];

  useEffect(() => {
    const typeWriter = () => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    };

    const timer = setTimeout(typeWriter, 100);
    return () => clearTimeout(timer);
  }, [typedText, fullText]);

  useEffect(() => {
    const skillTimer = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(skillTimer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto w-full animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Hero Image Section - Left on large screens, top on mobile */}
          <div className="flex-shrink-0 order-1 lg:order-1 lg:w-[45%]">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto relative group">
                {/* Multiple layered glowing backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-md opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full blur-lg opacity-40 animate-pulse delay-1000 group-hover:opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-500 to-blue-400 rounded-full blur-2xl opacity-30 animate-pulse delay-2000 group-hover:opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse delay-3000 group-hover:opacity-40"></div>
                
                {/* Rotating ring effect */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{animationDuration: '3s'}}></div>
                
                <img
                  src="https://i.postimg.cc/63s7XkPy/Whats-App-Image-2025-06-28-at-2-25-43-PM.jpg"
                  alt="Hammad Ahmed - Full Stack Developer"
                  className="relative w-full h-full rounded-full object-cover border-4 lg:border-6 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-2xl transform group-hover:scale-105 glow-rainbow pulse-rainbow transition-all duration-500"
                />
                
                {/* Floating particles */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-float-particle opacity-60"></div>
                <div className="absolute top-8 right-6 w-1 h-1 bg-purple-500 rounded-full animate-float-particle opacity-80" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-particle opacity-70" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-float-particle opacity-90" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>

          {/* Content Section - Right on large screens, bottom on mobile */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'} animate-scale-in`}>
              {typedText}
              <span className="animate-pulse text-cyan-400">|</span>
            </h1>

            {/* Skills Animation */}
            <div className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 h-16 overflow-hidden">
              <div 
                key={currentSkillIndex}
                className="gradient-text font-bold animate-fade-in transform transition-all duration-500"
              >
                {skills[currentSkillIndex]}
              </div>
            </div>

            {/* Short Description Paragraph */}
            <p className={`text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl animate-fade-in delay-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionate about creating exceptional digital experiences through innovative design and cutting-edge technology. 
              Let's bring your ideas to life with creative solutions that make an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 animate-fade-in delay-500">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="gradient-bg text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 glow-rainbow hover-lift border-0 relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 hover-lift relative overflow-hidden group ${
                  isDark 
                    ? 'border-purple-400 text-purple-400 bg-transparent hover:text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]' 
                    : 'border-purple-500 text-purple-500 bg-white hover:text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]'
                }`}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 md:space-x-6 animate-fade-in delay-700">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2 sm:p-3 rounded-full relative overflow-hidden group
                    transition-all duration-500 hover:scale-125 transform hover:-translate-y-2 
                    ${social.color} hover:shadow-lg glow-rainbow hover-lift pulse-rainbow
                    ${isDark ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="group-hover:animate-pulse relative z-10">
                    {social.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
