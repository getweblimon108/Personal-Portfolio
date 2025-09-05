
import React from 'react';
import { Badge } from '@/components/ui/badge';
import CertificatesSection from '@/components/CertificatesSection';

interface AboutProps {
  isDark: boolean;
}

const About = ({ isDark }: AboutProps) => {
  return (
    <section id="about" className={`py-20 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900/50 via-purple-900/20 to-gray-800/50' : 'bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-pink-50/50'}`}>
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-float-particle"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-float-particle delay-2000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-red-500/10 rounded-full blur-3xl animate-float-particle delay-4000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in gradient-text ${isDark ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-fade-in">
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My Journey
            </h3>
            <p className={`mb-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Currently residing at Pakistan Military Academy in Abbottabad, I'm passionate about 
              creating digital experiences that make a difference. My journey in web development 
              started with curiosity and has evolved into expertise across multiple technologies.
            </p>
            <p className={`mb-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I specialize in building dynamic, responsive websites and user experiences while 
              maintaining a strong focus on clean code and modern design principles.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Creative', 'Dedicated', 'Problem Solver', 'Team Player'].map((trait, index) => (
                <Badge 
                  key={trait} 
                  variant="secondary" 
                  className="bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 border border-purple-400/30 hover:scale-110 transition-all duration-300 animate-fade-in hover-lift glow-rainbow pulse-rainbow backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {trait}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Professional Background
            </h3>
            <p className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              As a certified full-stack web developer, I bring together technical expertise and creative vision to deliver exceptional digital solutions.
            </p>
            <p className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              My experience spans across modern web technologies, UI/UX design, and multimedia content creation.
            </p>
          </div>
        </div>

        <CertificatesSection isDark={isDark} />
      </div>
    </section>
  );
};

export default About;
