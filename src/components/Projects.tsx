
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import ecommerceProject from '@/assets/ecommerce-project.png';

interface ProjectsProps {
  isDark: boolean;
}

const Projects = ({ isDark }: ProjectsProps) => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A modern full-stack e-commerce application with product listings, cart, and checkout features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: ecommerceProject,
      liveUrl: 'https://ecommerce-ahmad.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/ecommerce-site.ahmad'
    },
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className={`py-12 sm:py-16 lg:py-20 px-3 sm:px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
            >
              <Card
                className={`overflow-hidden transition-all duration-500 hover:scale-105 transform group h-full ${
                  isDark ? 'bg-gray-700 border-gray-600 hover:border-cyan-400/50' : 'bg-white hover:border-blue-500/50'
                } hover:shadow-2xl glow-cyan`}
              >
                <div className="relative overflow-hidden">
                  <LazyImage
                    src={typeof project.image === 'string' ? project.image : project.image}
                    alt={`${project.title} - Project Screenshot`}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ x: 20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    <Badge className="bg-cyan-400/90 text-gray-900">Featured</Badge>
                  </motion.div>
                </div>
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 text-sm sm:text-base flex-grow ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs hover:scale-110 transition-transform duration-300 hover-lift"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className={`${isDark ? 'border-gray-600/60' : 'border-gray-200'} mt-auto pt-4 border-t`}>
                    <div className="flex gap-2 sm:gap-3">
                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                        className={`flex-1 group/btn text-xs sm:text-sm ${
                          isDark 
                            ? 'border-gray-500 text-gray-200 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10' 
                            : 'border-gray-400 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} code on GitHub`}>
                          <span className="inline-flex items-center">
                            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover/btn:rotate-12 transition-transform" />
                            Code
                          </span>
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        asChild
                        className={`flex-1 group/btn text-xs sm:text-sm ${
                          isDark
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                        }`}
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open live demo of ${project.title}`}>
                          <span className="inline-flex items-center">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover/btn:scale-110 transition-transform" />
                            Demo
                          </span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
