
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import ProfessionalSkills from '@/components/ProfessionalSkills';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
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
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} overflow-x-hidden`}>
      <FloatingElements isDark={isDark} />

      <Navigation
        isDark={isDark}
        setIsDark={setIsDark}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />

      <Hero isDark={isDark} scrollToSection={scrollToSection} />
      <About isDark={isDark} />
      
      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Skills & 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-2">
                Technologies
              </span>
            </h2>
            <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
            
            {/* Advertising Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in">
              <div className={`p-6 rounded-xl border-2 border-dashed transition-all duration-300 hover:scale-105 ${
                isDark ? 'border-gray-600 bg-gray-800/30' : 'border-gray-300 bg-gray-50'
              }`}>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <span className={`ml-2 font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Google Ads</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Professional Google Ads campaigns for maximum ROI and targeted reach
                </p>
                <div className="mt-3 text-xs text-cyan-400 font-medium">
                  ✓ Search Campaigns ✓ Display Network ✓ YouTube Ads
                </div>
              </div>
              
              <div className={`p-6 rounded-xl border-2 border-dashed transition-all duration-300 hover:scale-105 ${
                isDark ? 'border-gray-600 bg-gray-800/30' : 'border-gray-300 bg-gray-50'
              }`}>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <span className={`ml-2 font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Meta Ads</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Strategic Facebook & Instagram advertising for social media success
                </p>
                <div className="mt-3 text-xs text-cyan-400 font-medium">
                  ✓ Facebook Ads ✓ Instagram Stories ✓ Messenger Ads
                </div>
              </div>
            </div>
          </div>
          <ProfessionalSkills isDark={isDark} />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      <Projects isDark={isDark} />
      <Services isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
};

export default Index;
