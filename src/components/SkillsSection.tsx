import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
    { name: 'React', level: 90, icon: <FileCode className="w-5 h-5" />, category: 'frontend', color: 'bg-[#61DAFB]' },
    { name: 'JavaScript', level: 85, icon: <FileCode className="w-5 h-5" />, category: 'frontend', color: 'bg-[#F7DF1E]' },
    { name: 'HTML5', level: 95, icon: <Code className="w-5 h-5" />, category: 'frontend', color: 'bg-[#E34F26]' },
    { name: 'CSS3', level: 90, icon: <Palette className="w-5 h-5" />, category: 'frontend', color: 'bg-[#1572B6]' },
    { name: 'TypeScript', level: 85, icon: <FileCode className="w-5 h-5" />, category: 'frontend', color: 'bg-[#3178C6]' },
    
    // Backend Development
    { name: 'Node.js', level: 80, icon: <Server className="w-5 h-5" />, category: 'backend', color: 'bg-[#339933]' },
    { name: 'Express', level: 75, icon: <Server className="w-5 h-5" />, category: 'backend', color: 'bg-[#000000]' },
    { name: 'MongoDB', level: 85, icon: <Database className="w-5 h-5" />, category: 'backend', color: 'bg-[#47A248]' },
    
    // UI Frameworks & Libraries
    { name: 'Tailwind CSS', level: 90, icon: <Layers className="w-5 h-5" />, category: 'frameworks', color: 'bg-[#06B6D4]' },
    { name: 'Bootstrap', level: 85, icon: <Layers className="w-5 h-5" />, category: 'frameworks', color: 'bg-[#7952B3]' },
    
    // Tools & Platforms
    { name: 'GitHub', level: 88, icon: <Wrench className="w-5 h-5" />, category: 'tools', color: 'bg-[#181717]' },
    { name: 'Vercel', level: 82, icon: <Globe className="w-5 h-5" />, category: 'tools', color: 'bg-[#000000]' }
  ];

  const categories = {
    frontend: { 
      name: 'Frontend Development', 
      color: 'from-blue-600 to-purple-600',
      icon: <Code className="w-6 h-6 text-white" />
    },
    backend: { 
      name: 'Backend Development', 
      color: 'from-green-600 to-teal-600',
      icon: <Server className="w-6 h-6 text-white" />
    },
    frameworks: { 
      name: 'UI Frameworks & Libraries', 
      color: 'from-purple-600 to-pink-600',
      icon: <Layers className="w-6 h-6 text-white" />
    },
    tools: { 
      name: 'Tools & Platforms', 
      color: 'from-orange-600 to-red-600',
      icon: <Wrench className="w-6 h-6 text-white" />
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
              className={`transition-all duration-500 ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
              } hover:shadow-xl hover-lift backdrop-blur-sm`}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {category.name}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {getCategoryAverage(key as keyof typeof categories)}% Average
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {getSkillsByCategory(key as keyof typeof categories).map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${skill.color} flex items-center justify-center shadow-md`}>
                            <span className="text-white text-xs font-bold">
                              {skill.name.slice(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className={`relative h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                          style={{ 
                            width: `${animatedValues[skill.name] || 0}%`,
                            transition: 'width 1s ease-out'
                          }}
                        />
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