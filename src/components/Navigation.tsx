
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isScrolled: boolean;
}

const Navigation = ({ 
  isDark, 
  setIsDark, 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection, 
  isScrolled 
}: NavigationProps) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? `${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl shadow-2xl` 
        : `${isDark ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-lg`
    } border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="text-xl sm:text-2xl font-bold gradient-text animate-fade-in">
            Hammad
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {['home', 'about', 'skills-section', 'projects', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 hover:text-cyan-400 hover:scale-110 transform relative group text-sm lg:text-base ${
                  activeSection === item ? 'text-cyan-400 scale-110' : isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item === 'skills-section' ? 'skills' : item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:rotate-180 w-8 h-8 sm:w-10 sm:h-10"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:scale-110 hover:bg-cyan-400/20 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10 group relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-5 h-5 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'rotate-45 translate-y-0.5 bg-gradient-to-r from-cyan-400 to-blue-500' 
                    : 'translate-y-0 shadow-sm'
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? 'opacity-0 scale-0' 
                    : 'opacity-100 scale-100 mt-1.5 shadow-sm'
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen 
                    ? '-rotate-45 -translate-y-0.5 bg-gradient-to-r from-cyan-400 to-blue-500' 
                    : 'translate-y-0 mt-1.5 shadow-sm'
                }`}></span>
              </div>
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 shadow-lg shadow-cyan-400/25' 
                  : 'bg-transparent'
              }`}></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } ${isDark ? 'bg-gray-800/95' : 'bg-gray-50/95'} backdrop-blur-xl border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['home', 'about', 'skills-section', 'projects', 'services', 'contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item);
                setIsMenuOpen(false);
              }}
              className={`block px-4 py-4 capitalize w-full text-left transition-all duration-500 hover:text-cyan-400 hover:bg-cyan-400/20 rounded-xl hover:translate-x-3 hover:scale-105 text-base font-medium transform ${
                activeSection === item ? 'text-cyan-400 bg-cyan-400/20 translate-x-2 scale-105' : isDark ? 'text-gray-300' : 'text-gray-700'
              } shadow-lg hover:shadow-xl border border-transparent hover:border-cyan-400/30`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)'
              }}
            >
              {item === 'skills-section' ? 'skills' : item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
