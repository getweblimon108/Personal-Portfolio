
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectsGrid from '@/components/ProjectsGrid';
import EnhancedServices from '@/components/EnhancedServices';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import EnhancedFloatingElements from '@/components/EnhancedFloatingElements';
import SkillsSection from '@/components/SkillsSection';

const Index = () => {
  // Load dark mode preference from localStorage
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    // Save dark mode preference
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    
    // Update meta theme color for mobile browsers
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', isDark ? '#111827' : '#ffffff');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Ahmad Limon - Full Stack Developer | Portfolio</title>
      <meta name="description" content="Professional Full Stack Developer specializing in React, Node.js, and modern web technologies. Creating innovative digital solutions with 5+ years of experience." />
      <meta name="keywords" content="full stack developer, react developer, node.js, web development, portfolio, ahmad limon, javascript, mongodb" />
      <meta name="author" content="Ahmad Limon" />
      <meta property="og:title" content="Ahmad Limon - Full Stack Developer" />
      <meta property="og:description" content="Professional Full Stack Developer creating innovative digital solutions" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={isDark ? '#111827' : '#ffffff'} />
      <link rel="canonical" href="https://ahmadlimon.dev" />
      
      <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} overflow-x-hidden`}>
        <EnhancedFloatingElements isDark={isDark} />

        <Navigation
          isDark={isDark}
          setIsDark={setIsDark}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isScrolled={isScrolled}
        />

        <main>
          <Hero isDark={isDark} scrollToSection={scrollToSection} />
          <About isDark={isDark} />
          
          {/* Enhanced Skills Section */}
          <SkillsSection isDark={isDark} />

          <ProjectsGrid isDark={isDark} />
          <EnhancedServices isDark={isDark} />
          <Contact isDark={isDark} />
        </main>
        
        <Footer isDark={isDark} />
      </div>
    </>
  );
};

export default Index;
