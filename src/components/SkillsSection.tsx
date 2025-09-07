import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Palette, 
  Settings,
  Globe,
  Server,
  Smartphone,
  Cpu,
  FileCode,
  Layers,
  Wrench
} from 'lucide-react';

interface SkillsSectionProps {
  isDark: boolean;
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'frameworks' | 'tools';
  gradient: string;
}

const SkillsSection = ({ isDark }: SkillsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skills: Skill[] = [
    // Frontend Development
    { 
      name: 'React', 
      level: 90, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-[#61DAFB] to-[#21D4FD] rounded-sm flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11 0-.24.05-.34.05-.23 0-.46-.05-.68-.06a33.3 33.3 0 01-.53-.84c-.17-.28-.34-.57-.49-.88.23-.29.44-.58.65-.88.21-.3.42-.6.62-.91.23-.31.44-.63.65-.95a30.9 30.9 0 01-.62-.90 31.2 31.2 0 01-.65-.95c-.23-.32-.44-.65-.62-.98a33.7 33.7 0 01-.65-.95c-.16.33-.32.65-.46.98a30.5 30.5 0 01-.46.96c-.15.33-.29.67-.42 1.02a31.7 31.7 0 000 .02c-.13.34-.25.69-.35 1.04-.11.23-.21.47-.29.72-.08.25-.15.51-.21.78a24.2 24.2 0 000 .05c-.05.27-.09.55-.12.83-.03.27-.05.55-.05.83 0 .27.02.54.05.8.03.27.07.54.12.8l.05.01c.06.26.13.51.21.76.08.25.18.49.29.72M9 20.5c-.21 0-.4-.14-.5-.35-.41-.92-.14-2.7.87-4.54.52-.1 1.04-.23 1.56-.4.19.35.39.7.61 1.03.22.33.44.65.67.95.53 1.44.24 2.76-.2 3.31zm1.64-6.79a33.5 33.5 0 01-1.15-1.69c.39-.01.78-.01 1.18 0 .4.01.79.03 1.17.06-.38.54-.74 1.08-1.1 1.63M12.5 2.75c.63-.38 1.64-.5 2.61-.31-.32-.7-.33-1.9-1.01-2.37-.68-.47-1.95-.14-2.7.5.31.46.7 1.04 1.1 1.18M12 6.78c-.19.22-.39.44-.59.65-.2-.21-.4-.43-.59-.65.4-.01.78-.01 1.18 0M2.48 12.85c0 .48.49 1.02 1.28 1.24.32-.75.68-1.48 1.08-2.19-.4-.7-.76-1.43-1.08-2.18-.79.22-1.28.75-1.28 1.23v1.9M21.52 11.15c0-.48-.49-1.01-1.28-1.23-.32.75-.68 1.48-1.08 2.18.4.71.76 1.44 1.08 2.19.79-.22 1.28-.76 1.28-1.24v-1.9M16.63 4c-.63-.38-2.01.2-3.6 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.31-3.96M15 3.5c.21 0 .4.14.5.35.41.92.14 2.7-.87 4.54-.52.1-1.04.23-1.56.4-.19-.35-.39-.7-.61-1.03-.22-.33-.44-.65-.67-.95C11.26 5.37 11.55 4.05 12 3.5c.45-.55 1.4-.5 3 0"/>
          </svg>
        </div>
      ), 
      category: 'frontend', 
      gradient: 'from-[#61DAFB] to-[#21D4FD] via-[#40E0F0]' 
    },
    { 
      name: 'JavaScript', 
      level: 85, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-[#F7DF1E] to-[#FFED4A] rounded-sm flex items-center justify-center">
          <span className="text-[10px] font-bold text-black">JS</span>
        </div>
      ), 
      category: 'frontend', 
      gradient: 'from-[#F7DF1E] to-[#FFED4A] via-[#FFF24A]' 
    },
    { 
      name: 'HTML5', 
      level: 95, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-[#E34F26] to-[#F16529] rounded-sm flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
          </svg>
        </div>
      ), 
      category: 'frontend', 
      gradient: 'from-[#E34F26] to-[#F16529] via-[#EF5A29]' 
    },
    { 
      name: 'CSS3', 
      level: 90, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-[#1572B6] to-[#33A9DC] rounded-sm flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
          </svg>
        </div>
      ), 
      category: 'frontend', 
      gradient: 'from-[#1572B6] to-[#33A9DC] via-[#2C8ED1]' 
    },
    { 
      name: 'TypeScript', 
      level: 85, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-[#3178C6] to-[#5A99D4] rounded-sm flex items-center justify-center">
          <span className="text-[10px] font-bold text-white">TS</span>
        </div>
      ), 
      category: 'frontend', 
      gradient: 'from-[#3178C6] to-[#5A99D4] via-[#4A88CD]' 
    },
    
    // Backend Development
    { 
      name: 'Node.js', 
      level: 80, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-[#339933] to-[#68A063] rounded-sm flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.277-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
          </svg>
        </div>
      ), 
      category: 'backend', 
      gradient: 'from-[#339933] to-[#68A063] via-[#4CAF50]' 
    },
    { 
      name: 'Express', 
      level: 75, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-sm flex items-center justify-center">
          <span className="text-[8px] font-bold text-white">EX</span>
        </div>
      ), 
      category: 'backend', 
      gradient: 'from-gray-700 to-gray-900 via-gray-800' 
    },
    { 
      name: 'MongoDB', 
      level: 85, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-[#47A248] to-[#4DB33D] rounded-sm flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
          </svg>
        </div>
      ), 
      category: 'backend', 
      gradient: 'from-[#47A248] to-[#4DB33D] via-[#4AAE42]' 
    },
    
    // UI Frameworks & Libraries
    { 
      name: 'Tailwind CSS', 
      level: 90, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-[#06B6D4] to-[#38BDF8] rounded-sm flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
        </div>
      ), 
      category: 'frameworks', 
      gradient: 'from-[#06B6D4] to-[#38BDF8] via-[#22C3E6]' 
    },
    { 
      name: 'Bootstrap', 
      level: 85, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-[#7952B3] to-[#9C7AEB] rounded-sm flex items-center justify-center">
          <span className="text-[10px] font-bold text-white">B</span>
        </div>
      ), 
      category: 'frameworks', 
      gradient: 'from-[#7952B3] to-[#9C7AEB] via-[#8B66CF]' 
    },
    
    // Tools & Platforms
    { 
      name: 'GitHub', 
      level: 88, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-gray-700 to-gray-500 rounded-sm flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
      ), 
      category: 'tools', 
      gradient: 'from-gray-700 to-gray-500 via-gray-600' 
    },
    { 
      name: 'Vercel', 
      level: 82, 
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-gray-800 to-gray-600 rounded-sm flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 22.525H0l12-21.05 12 21.05z"/>
          </svg>
        </div>
      ), 
      category: 'tools', 
      gradient: 'from-gray-800 to-gray-600 via-gray-700' 
    }
  ];

  const categories = {
    frontend: { 
      name: 'Frontend Development', 
      gradient: 'from-blue-600 via-purple-600 to-blue-800',
      icon: <Code className="w-5 h-5 text-white" />
    },
    backend: { 
      name: 'Backend Development', 
      gradient: 'from-green-600 via-emerald-600 to-teal-700',
      icon: <Server className="w-5 h-5 text-white" />
    },
    frameworks: { 
      name: 'UI Frameworks & Libraries', 
      gradient: 'from-purple-600 via-pink-600 to-rose-700',
      icon: <Layers className="w-5 h-5 text-white" />
    },
    tools: { 
      name: 'Tools & Platforms', 
      gradient: 'from-orange-600 via-red-600 to-pink-700',
      icon: <Wrench className="w-5 h-5 text-white" />
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 100);
      });
    }
  }, [isVisible]);

  const getSkillsByCategory = (category: keyof typeof categories) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryAverage = (category: keyof typeof categories) => {
    const categorySkills = getSkillsByCategory(category);
    return Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length);
  };

  return (
    <section 
      id="skills-section" 
      className={`py-20 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500 to-orange-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2">
              Expertise
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A comprehensive overview of my technical capabilities and professional expertise
          </p>
        </div>

        {/* Skills Grid - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(categories).map(([key, category]) => (
            <Card 
              key={key}
              className={`relative transition-all duration-500 ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/80 border-gray-700/50 backdrop-blur-sm' 
                  : 'bg-gradient-to-br from-white/80 to-gray-50/60 border-gray-200/50 backdrop-blur-sm'
              } hover:shadow-2xl hover:-translate-y-2 rounded-xl overflow-hidden group`}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl`}></div>
              
              <CardContent className="p-6 relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {category.name}
                    </h3>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Average: {getCategoryAverage(key as keyof typeof categories)}%
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {getSkillsByCategory(key as keyof typeof categories).map((skill, index) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`transform group-hover/skill:scale-110 transition-transform duration-300 ${isDark ? 'drop-shadow-lg' : 'drop-shadow-md'}`}>
                            {skill.icon}
                          </div>
                          <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                            {skill.name}
                          </span>
                        </div>
                        <div className={`text-sm font-bold ${isDark ? 'text-gray-300' : 'text-gray-600'} bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </div>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700/50' : 'bg-gray-200/70'} backdrop-blur-sm`}>
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${skill.gradient} relative transition-all duration-1000 ease-out shadow-lg transform group-hover/skill:shadow-xl`}
                          style={{ 
                            width: `${animatedValues[skill.name] || 0}%`
                          }}
                        >
                          {/* Animated glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-50 blur-sm animate-pulse`}></div>
                          <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center">
          <Card className={`inline-block transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 backdrop-blur-lg' 
              : 'bg-gradient-to-br from-white/90 to-gray-50/80 border-gray-200/50 backdrop-blur-lg'
          } hover:shadow-2xl hover:-translate-y-1 rounded-2xl overflow-hidden group`}>
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {skills.length}
                  </div>
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Skills
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
                  </div>
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Average Level
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {Object.keys(categories).length}
                  </div>
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Categories
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;