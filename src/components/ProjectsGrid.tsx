import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Filter } from 'lucide-react';
import ecommercePreview from '@/assets/ecommerce-preview.png';
import ecommerceProject from '@/assets/ecommerce-project.png';

interface ProjectsGridProps {
  isDark: boolean;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'uiux';
  featured?: boolean;
}

const ProjectsGrid = ({ isDark }: ProjectsGridProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const projects: Project[] = [
    {
      title: 'E-Commerce Website',
      description: 'A modern full-stack e-commerce application with product listings, cart, and checkout features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: ecommercePreview,
      liveUrl: 'https://ecommerce-ahmad.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/ecommerce-site.ahmad',
      category: 'fullstack',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'Professional portfolio showcase website with modern design and animations.',
      tech: ['Vue.js', 'Tailwind', 'Responsive'],
      image: 'https://i.postimg.cc/3xc2WCJC/image.png',
      liveUrl: 'https://getweblimonportfolio.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Portfolio/tree/main/Portfolio',
      category: 'frontend'
    },
    {
      title: 'Mathematical Heart',
      description: 'Creative mathematical visualization project using canvas and animations.',
      tech: ['JavaScript', 'Canvas', 'Math'],
      image: 'https://i.postimg.cc/4N15499B/image.png',
      liveUrl: 'https://mathematical-heart.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Heart',
      category: 'frontend'
    },
    {
      title: 'Friend Card Generator',
      description: 'Interactive friendship card generator with customizable templates.',
      tech: ['Vue.js', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/SKRVvxjV/image.png',
      liveUrl: 'https://forfriendcard.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Friend-Card',
      category: 'uiux'
    },
    {
      title: 'Mother Tribute Site',
      description: 'Heartfelt tribute website with beautiful animations and responsive design.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/j5C9Phzx/image.png',
      liveUrl: 'https://formother.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Mother-Day/tree/main/Mother',
      category: 'frontend'
    },
    {
      title: 'Father Tribute Site',
      description: 'Dedicated tribute website with modern styling and interactive elements.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/dtfbBp5b/image.png',
      liveUrl: 'https://forfather.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Father-day/tree/main/Father-day',
      category: 'frontend'
    },
    {
      title: 'Youm-e-Takbeer',
      description: 'Pakistan Defense Day commemoration site with patriotic design.',
      tech: ['Vue.js', 'Tailwind', 'Animations'],
      image: 'https://i.postimg.cc/6qmmM4fr/image.png',
      liveUrl: 'https://youm-e-takbeer.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Yom-r-takbeer',
      category: 'frontend'
    },
    {
      title: 'For Parents Platform',
      description: 'Comprehensive platform for parent resources with backend functionality.',
      tech: ['Full Stack', 'Database', 'API'],
      image: 'https://i.postimg.cc/8PnSYjzn/image.png',
      liveUrl: 'https://forparents.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Parent-day',
      category: 'fullstack'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts and beautiful UI.',
      tech: ['JavaScript', 'API', 'CSS3'],
      image: 'https://i.postimg.cc/zBtVJmrR/image.png',
      liveUrl: 'https://hammadweather.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/hammad-weather',
      category: 'frontend'
    },
    {
      title: 'Birthday Wish Generator',
      description: 'Unique and interactive birthday wish creator with custom templates.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'https://i.postimg.cc/fyQTWMPf/image.png',
      liveUrl: 'https://unique-birthday-wish.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/unique-birthdaywish',
      category: 'frontend'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'uiux', label: 'UI/UX' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="projects-section" 
      className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2">
              Projects
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={`transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.key
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : isDark
                    ? 'border-gray-600 text-gray-300 hover:border-primary hover:text-primary'
                    : 'border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            // On mobile, hide projects after 5 unless showAllMobile is true
            const hiddenOnMobile = !showAllMobile && index >= 5;
            return (
            <Card
              key={project.title}
              className={`group overflow-hidden transition-all duration-500 hover:scale-105 transform animate-fade-in hover-lift ${hiddenOnMobile ? 'hidden md:block' : ''} ${
                isDark ? 'bg-gray-800 border-gray-700 hover:border-primary/50' : 'bg-white hover:border-primary/50'
              } hover:shadow-2xl ${project.featured ? 'ring-2 ring-primary/30' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground animate-glow">
                      Featured
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                    {project.category.toUpperCase()}
                  </Badge>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                      className="bg-white/90 text-gray-900 hover:bg-white"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="bg-primary text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className={`text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs hover:scale-110 transition-transform duration-300 hover-lift"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => window.open(project.codeUrl, '_blank')}
                    className={`flex-1 hover:scale-105 transition-all duration-300 hover-lift ${
                      isDark 
                        ? 'border-gray-600 text-gray-300 hover:border-primary hover:text-primary' 
                        : 'border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
                    }`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 hover-lift"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* View More Button - Mobile Only */}
        {!showAllMobile && filteredProjects.length > 5 && (
          <div className="mt-8 text-center md:hidden">
            <Button
              variant="outline"
              onClick={() => setShowAllMobile(true)}
              className={`px-8 py-3 transition-all duration-300 ${
                isDark
                  ? 'border-primary/50 text-primary hover:bg-primary/10'
                  : 'border-primary/50 text-primary hover:bg-primary/10'
              }`}
            >
              View More Projects ({filteredProjects.length - 5} more)
            </Button>
          </div>
        )}

        {/* Projects Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover-lift`}>
              <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Total Projects</div>
            </div>
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover-lift`}>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.filter(p => p.category === 'fullstack').length}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Full-Stack Apps</div>
            </div>
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover-lift`}>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.filter(p => p.category === 'frontend').length}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Frontend Projects</div>
            </div>
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover-lift`}>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Featured Works</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;