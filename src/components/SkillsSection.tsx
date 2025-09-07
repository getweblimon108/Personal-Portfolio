import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Palette, 
  Settings,
  Globe,
  Server,
  Smartphone,
  Cpu
} from 'lucide-react';

interface SkillsSectionProps {
  isDark: boolean;
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

const SkillsSection = ({ isDark }: SkillsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skillColors = {
    'HTML/CSS': 'from-orange-500 to-red-500',
    'JavaScript': 'from-yellow-400 to-orange-500',
    'React': 'from-blue-400 to-cyan-500',
    'Vue.js': 'from-green-400 to-emerald-500',
    'Node.js': 'from-green-500 to-lime-500',
    'Express': 'from-gray-600 to-gray-800',
    'MongoDB': 'from-green-600 to-emerald-600',
    'API Development': 'from-purple-500 to-indigo-500',
    'Graphic Design': 'from-pink-500 to-rose-500',
    'Video Editing': 'from-red-500 to-pink-500',
    'Photo Editing': 'from-violet-500 to-purple-500',
    'UI/UX Design': 'from-indigo-500 to-blue-500',
    'Google Ads': 'from-blue-500 to-green-500',
    'Meta Ads': 'from-blue-600 to-indigo-600',
    'SEO': 'from-teal-500 to-cyan-500',
    'Digital Marketing': 'from-amber-500 to-orange-500'
  };

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', level: 95, icon: <Code className="w-5 h-5" />, category: 'frontend' },
    { name: 'JavaScript', level: 90, icon: <Code className="w-5 h-5" />, category: 'frontend' },
    { name: 'React', level: 88, icon: <Code className="w-5 h-5" />, category: 'frontend' },
    { name: 'Vue.js', level: 85, icon: <Code className="w-5 h-5" />, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 82, icon: <Server className="w-5 h-5" />, category: 'backend' },
    { name: 'Express', level: 80, icon: <Server className="w-5 h-5" />, category: 'backend' },
    { name: 'MongoDB', level: 78, icon: <Database className="w-5 h-5" />, category: 'backend' },
    { name: 'API Development', level: 85, icon: <Globe className="w-5 h-5" />, category: 'backend' },
    
    // Design
    { name: 'Graphic Design', level: 92, icon: <Palette className="w-5 h-5" />, category: 'design' },
    { name: 'Video Editing', level: 88, icon: <Palette className="w-5 h-5" />, category: 'design' },
    { name: 'Photo Editing', level: 90, icon: <Palette className="w-5 h-5" />, category: 'design' },
    { name: 'UI/UX Design', level: 85, icon: <Smartphone className="w-5 h-5" />, category: 'design' },
    
    // Tools & Marketing
    { name: 'Google Ads', level: 87, icon: <Settings className="w-5 h-5" />, category: 'tools' },
    { name: 'Meta Ads', level: 85, icon: <Settings className="w-5 h-5" />, category: 'tools' },
    { name: 'SEO', level: 83, icon: <Globe className="w-5 h-5" />, category: 'tools' },
    { name: 'Digital Marketing', level: 86, icon: <Cpu className="w-5 h-5" />, category: 'tools' }
  ];

  const categories = {
    frontend: { name: 'Frontend', color: 'from-blue-500 to-cyan-400', progressColor: 'bg-gradient-to-r from-blue-500 to-cyan-400' },
    backend: { name: 'Backend', color: 'from-green-500 to-emerald-400', progressColor: 'bg-gradient-to-r from-green-500 to-emerald-400' },
    design: { name: 'Design', color: 'from-purple-500 to-pink-400', progressColor: 'bg-gradient-to-r from-purple-500 to-pink-400' },
    tools: { name: 'Tools & Marketing', color: 'from-orange-500 to-red-400', progressColor: 'bg-gradient-to-r from-orange-500 to-red-400' }
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
      id="skills" 
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

        {/* Category Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(categories).map(([key, category]) => (
            <Card 
              key={key}
              className={`text-center transition-all duration-500 hover:scale-105 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } hover:shadow-xl hover-lift`}
            >
              <CardContent className="p-6">
                <div className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                  {getCategoryAverage(key as keyof typeof categories)}%
                </div>
                <h3 className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([key, category]) => (
            <Card 
              key={key}
              className={`transition-all duration-500 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } hover:shadow-xl hover-lift`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    {getSkillsByCategory(key as keyof typeof categories)[0]?.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {getSkillsByCategory(key as keyof typeof categories).map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-primary">{skill.icon}</span>
                          <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {skill.name}
                          </span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className={`relative h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${skillColors[skill.name as keyof typeof skillColors]}`}
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