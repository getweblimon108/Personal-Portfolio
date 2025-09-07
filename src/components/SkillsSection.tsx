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
  color: string;
}

const SkillsSection = ({ isDark }: SkillsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skills: Skill[] = [
    // Frontend Development
    { name: 'React', level: 90, icon: <FileCode className="w-5 h-5 text-[#61DAFB]" />, category: 'frontend', color: 'from-[#61DAFB] to-[#61DAFB]' },
    { name: 'JavaScript', level: 85, icon: <FileCode className="w-5 h-5 text-[#F7DF1E]" />, category: 'frontend', color: 'from-[#F7DF1E] to-[#FFD700]' },
    { name: 'HTML5', level: 95, icon: <Code className="w-5 h-5 text-[#E34F26]" />, category: 'frontend', color: 'from-[#E34F26] to-[#FF6B35]' },
    { name: 'CSS3', level: 90, icon: <Palette className="w-5 h-5 text-[#1572B6]" />, category: 'frontend', color: 'from-[#1572B6] to-[#3498DB]' },
    { name: 'TypeScript', level: 85, icon: <FileCode className="w-5 h-5 text-[#3178C6]" />, category: 'frontend', color: 'from-[#3178C6] to-[#5A99D4]' },
    
    // Backend Development
    { name: 'Node.js', level: 80, icon: <Server className="w-5 h-5 text-[#339933]" />, category: 'backend', color: 'from-[#339933] to-[#68A063]' },
    { name: 'Express', level: 75, icon: <Server className="w-5 h-5 text-gray-300" />, category: 'backend', color: 'from-gray-600 to-gray-400' },
    { name: 'MongoDB', level: 85, icon: <Database className="w-5 h-5 text-[#47A248]" />, category: 'backend', color: 'from-[#47A248] to-[#4DB33D]' },
    
    // UI Frameworks & Libraries
    { name: 'Tailwind CSS', level: 90, icon: <Layers className="w-5 h-5 text-[#06B6D4]" />, category: 'frameworks', color: 'from-[#06B6D4] to-[#38BDF8]' },
    { name: 'Bootstrap', level: 85, icon: <Layers className="w-5 h-5 text-[#7952B3]" />, category: 'frameworks', color: 'from-[#7952B3] to-[#9C7AEB]' },
    
    // Tools & Platforms
    { name: 'GitHub', level: 88, icon: <Wrench className="w-5 h-5 text-gray-300" />, category: 'tools', color: 'from-gray-700 to-gray-500' },
    { name: 'Vercel', level: 82, icon: <Globe className="w-5 h-5 text-gray-300" />, category: 'tools', color: 'from-gray-800 to-gray-600' }
  ];

  const categories = {
    frontend: { 
      name: 'Frontend Development', 
      color: 'from-blue-500 to-purple-600',
      icon: <Code className="w-5 h-5 text-white" />
    },
    backend: { 
      name: 'Backend Development', 
      color: 'from-green-500 to-emerald-600',
      icon: <Server className="w-5 h-5 text-white" />
    },
    frameworks: { 
      name: 'UI Frameworks & Libraries', 
      color: 'from-purple-500 to-pink-600',
      icon: <Layers className="w-5 h-5 text-white" />
    },
    tools: { 
      name: 'Tools & Platforms', 
      color: 'from-orange-500 to-red-600',
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
      className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto">
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
              className={`transition-all duration-300 ${
                isDark ? 'bg-gray-900/80 border-gray-700' : 'bg-white border-gray-200'
              } hover:shadow-xl backdrop-blur-sm rounded-xl`}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {getSkillsByCategory(key as keyof typeof categories).map((skill, index) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        {skill.icon}
                        <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`flex-1 h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${animatedValues[skill.name] || 0}%`
                            }}
                          />
                        </div>
                        <span className={`text-sm font-semibold min-w-[40px] text-right ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {skill.level}%
                        </span>
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
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } hover:shadow-xl hover-lift`}>
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {skills.length}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Total Skills
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Average Level
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {Object.keys(categories).length}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
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