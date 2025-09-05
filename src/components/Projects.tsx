
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

const Projects = ({ isDark }: ProjectsProps) => {
  const projects = [
    {
      title: 'Portfolio',
      description: 'Professional portfolio showcase website',
      tech: ['Vue.js', 'Tailwind', 'Responsive'],
      image: 'https://i.postimg.cc/3xc2WCJC/image.png',
      liveUrl: 'https://getweblimonportfolio.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Portfolio/tree/main/Portfolio'
    },
    {
      title: 'Mathematical Heart',
      description: 'Creative mathematical visualization project',
      tech: ['JavaScript', 'Canvas', 'Math'],
      image: 'https://i.postimg.cc/4N15499B/image.png',
      liveUrl: 'https://mathematical-heart.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Heart'
    },
    {
      title: 'Friend Card',
      description: 'Interactive friendship card generator',
      tech: ['Vue.js', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/SKRVvxjV/image.png',
      liveUrl: 'https://forfriendcard.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Friend-Card'
    },
    {
      title: 'Mother Tribute',
      description: 'Heartfelt tribute website with animations',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/j5C9Phzx/image.png',
      liveUrl: 'https://formother.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Mother-Day/tree/main/Mother'
    },
    {
      title: 'Father Tribute',
      description: 'Dedicated tribute to fathers everywhere',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/dtfbBp5b/image.png',
      liveUrl: 'https://forfather.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Father-day/tree/main/Father-day'
    },
    {
      title: 'Youm-e-Takbeer',
      description: 'Pakistan Defense Day commemoration site',
      tech: ['Vue.js', 'Tailwind', 'Animations'],
      image: 'https://i.postimg.cc/6qmmM4fr/image.png',
      liveUrl: 'https://youm-e-takbeer.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Yom-r-takbeer'
    },
    {
      title: 'For Parents',
      description: 'Dedicated platform for parent resources',
      tech: ['Full Stack', 'Database', 'API'],
      image: 'https://i.postimg.cc/8PnSYjzn/image.png',
      liveUrl: 'https://forparents.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Parent-day'
    }
  ];

  return (
    <section id="projects" className={`py-20 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900/50 via-blue-900/20 to-purple-900/30' : 'bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50'}`}>
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-16 w-28 h-28 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-float-particle"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-cyan-400/10 to-pink-500/10 rounded-full blur-3xl animate-float-particle delay-3000"></div>
        <div className="absolute top-40 left-1/3 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-blue-500/10 rounded-full blur-3xl animate-float-particle delay-1500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in gradient-text ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden transition-all duration-500 hover:scale-105 transform group animate-fade-in hover-lift relative
                ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm' 
                    : 'bg-white/90 border border-gray-200/50 backdrop-blur-sm'
                } 
                hover:shadow-2xl glow-rainbow pulse-rainbow
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/5 before:via-purple-500/5 before:to-pink-500/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <Badge className="gradient-bg text-white font-semibold">Featured</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${
                  isDark ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text' 
                    : 'text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
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
                        ? 'border-gray-500 text-gray-200 hover:border-cyan-400 hover:text-white hover:bg-cyan-400/20' 
                        : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-gray-900 hover:bg-blue-50'
                    }`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1 gradient-bg text-white hover:scale-105 transition-all duration-300 hover-lift border-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
