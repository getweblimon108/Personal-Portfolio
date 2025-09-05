
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
      icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
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
          
          {/* Content Section - Left on large screens, top on mobile */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'} animate-scale-in`}>
              {typedText}
              <span className="animate-pulse text-cyan-400">|</span>
            </h1>

            {/* Skills Animation */}
            <div className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 h-auto lg:h-16 overflow-hidden">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-2">
                {skills.map((skill, index) => {
                  const skillIcons = {
                    'Full Stack Developer': '💻',
                    'UI/UX Designer': '🎨', 
                    'Video Editor': '🎬',
                    'Photo Editor': '📸',
                    'Graphics Designer': '✨',
                    'Digital Marketer': '📱'
                  };
                  
                  return (
                    <div 
                      key={skill}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-500 hover:scale-110 ${
                        currentSkillIndex === index 
                          ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 border border-cyan-400/30' 
                          : isDark ? 'bg-gray-800/50 text-gray-400' : 'bg-gray-100 text-gray-600'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <span className="text-lg animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                        {skillIcons[skill]}
                      </span>
                      {skill}
                    </div>
                  );
                })}
              </div>
              <div 
                key={currentSkillIndex}
                className="gradient-text font-bold text-xl sm:text-2xl animate-fade-in transform transition-all duration-500"
              >
                Currently: {skills[currentSkillIndex]}
              </div>
            </div>

            <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl lg:max-w-none animate-fade-in delay-300 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              A passionate full-stack web developer and creative designer. I craft visually immersive, responsive websites with futuristic UI, glowing animations, and real user impact. Whether it's a personal portfolio, tribute project, or a powerful web app, I build with precision and purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 animate-fade-in delay-500">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 glow-cyan hover-lift border-0"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 hover-lift ${
                  isDark 
                    ? 'border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-gray-900 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]' 
                    : 'border-blue-500 text-blue-500 bg-white hover:bg-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                }`}
              >
                Get In Touch
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
                  className={`p-2 sm:p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} 
                    transition-all duration-300 hover:scale-125 transform hover:-translate-y-2 
                    ${social.color} hover:shadow-lg group glow-cyan hover-lift pulse-glow`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="group-hover:animate-pulse">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Hero Image Section - Right on large screens, top on mobile */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse delay-2000"></div>
                <img
                  src="https://i.postimg.cc/63s7XkPy/Whats-App-Image-2025-06-28-at-2-25-43-PM.jpg"
                  alt="Hammad Ahmed - Full Stack Developer"
                  className="relative w-full h-full rounded-full object-cover border-4 lg:border-6 border-cyan-400 shadow-2xl transform group-hover:scale-105 glow-cyan pulse-glow transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
