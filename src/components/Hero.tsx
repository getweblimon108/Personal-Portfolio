import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, MessageCircle, Facebook, Download } from 'lucide-react';
import heroImage from '@/assets/hero-image-new.jpg';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 order-1 lg:order-1 lg:w-[45%]"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto relative group animated-border-round">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse delay-2000"></div>
                <img
                  src={heroImage}
                  alt="Hammad Ahmed - Full Stack Developer"
                  className="relative w-full h-full rounded-full object-cover border-4 lg:border-6 border-cyan-400 shadow-2xl transform group-hover:scale-105 glow-cyan pulse-glow transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-2"
          >
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-primary text-primary bg-transparent hover:bg-primary hover:text-gray-900' 
                    : 'border-primary text-primary bg-white hover:bg-primary hover:text-white'
                }`}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                asChild
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-accent text-accent bg-transparent hover:bg-accent hover:text-gray-900' 
                    : 'border-accent text-accent bg-white hover:bg-accent hover:text-white'
                }`}
              >
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 md:space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 sm:p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} 
                    transition-all duration-300 ${social.color} hover:shadow-lg group`}
                >
                  <div className="group-hover:animate-pulse">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
