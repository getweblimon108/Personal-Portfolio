import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Globe, Heart, Zap, LayoutGrid } from 'lucide-react';
import ecommercePreview from '@/assets/ecommerce-preview.png';

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
  category: string;
  featured?: boolean;
}

const ProjectsGrid = ({ isDark }: ProjectsGridProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      title: 'E-Commerce Website',
      description: 'A modern full-stack e-commerce application with product listings, cart, and checkout features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: ecommercePreview,
      liveUrl: 'https://ecommerce-ahmad.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/ecommerce-site.ahmad',
      category: 'web-apps',
      featured: true
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts and beautiful UI.',
      tech: ['JavaScript', 'API', 'CSS3'],
      image: 'https://i.postimg.cc/zBtVJmrR/image.png',
      liveUrl: 'https://hammadweather.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/hammad-weather',
      category: 'web-apps'
    },
    {
      title: 'For Parents Platform',
      description: 'Comprehensive platform for parent resources with backend functionality.',
      tech: ['Full Stack', 'Database', 'API'],
      image: 'https://i.postimg.cc/8PnSYjzn/image.png',
      liveUrl: 'https://forparents.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Parent-day',
      category: 'tributes'
    },
    {
      title: 'Youm-e-Takbeer',
      description: 'Pakistan Defense Day commemoration site with patriotic design.',
      tech: ['Vue.js', 'Tailwind', 'Animations'],
      image: 'https://i.postimg.cc/6qmmM4fr/image.png',
      liveUrl: 'https://youm-e-takbeer.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Yom-r-takbeer',
      category: 'creative'
    },
    {
      title: 'Mathematical Heart',
      description: 'Creative mathematical visualization project using canvas and animations.',
      tech: ['JavaScript', 'Canvas', 'Math'],
      image: 'https://i.postimg.cc/4N15499B/image.png',
      liveUrl: 'https://mathematical-heart.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Heart',
      category: 'creative'
    },
    {
      title: 'Friend Card Generator',
      description: 'Interactive friendship card generator with customizable templates.',
      tech: ['Vue.js', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/SKRVvxjV/image.png',
      liveUrl: 'https://forfriendcard.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Friend-Card',
      category: 'creative'
    },
    {
      title: 'Birthday Wish Generator',
      description: 'Unique and interactive birthday wish creator with custom templates.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'https://i.postimg.cc/fyQTWMPf/image.png',
      liveUrl: 'https://unique-birthday-wish.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/unique-birthdaywish',
      category: 'creative'
    },
    {
      title: 'Mother Tribute Site',
      description: 'Heartfelt tribute website with beautiful animations and responsive design.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/j5C9Phzx/image.png',
      liveUrl: 'https://formother.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Mother-Day/tree/main/Mother',
      category: 'tributes'
    },
    {
      title: 'Father Tribute Site',
      description: 'Dedicated tribute website with modern styling and interactive elements.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://i.postimg.cc/dtfbBp5b/image.png',
      liveUrl: 'https://forfather.vercel.app/',
      codeUrl: 'https://github.com/getweblimon108/Father-day/tree/main/Father-day',
      category: 'tributes'
    }
  ];

  const filters = [
    { key: 'all', label: 'All', icon: <LayoutGrid className="w-4 h-4" />, count: projects.length },
    { key: 'web-apps', label: 'Web Apps', icon: <Globe className="w-4 h-4" />, count: projects.filter(p => p.category === 'web-apps').length },
    { key: 'creative', label: 'Creative', icon: <Zap className="w-4 h-4" />, count: projects.filter(p => p.category === 'creative').length },
    { key: 'tributes', label: 'Tributes', icon: <Heart className="w-4 h-4" />, count: projects.filter(p => p.category === 'tributes').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      className={`py-24 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore my latest work — filter by category to find what interests you
          </p>
        </motion.div>

        {/* Scrollable Category Chips - Mobile Friendly */}
        <motion.div
          className="relative mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex overflow-x-auto no-scrollbar gap-2 px-1 py-1 justify-start md:justify-center">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`relative flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'text-primary-foreground shadow-md'
                    : isDark
                      ? 'text-gray-400 hover:text-white bg-gray-800/80 border border-gray-700/50'
                      : 'text-gray-600 hover:text-gray-900 bg-white border border-gray-200'
                }`}
              >
                {activeFilter === filter.key && (
                  <motion.div
                    layoutId="activeChip"
                    className="absolute inset-0 bg-primary rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                  {filter.icon}
                  {filter.label}
                  <span className={`text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full ${
                    activeFilter === filter.key
                      ? 'bg-white/25'
                      : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {filter.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card
                  className={`group overflow-hidden h-full transition-all duration-500 hover:scale-[1.03] ${
                    isDark ? 'bg-gray-800/80 border-gray-700/50 hover:border-primary/50' : 'bg-white border-gray-200/50 hover:border-primary/50'
                  } hover:shadow-2xl backdrop-blur-sm ${project.featured ? 'ring-2 ring-primary/30' : ''}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-primary/90 text-primary-foreground text-xs">
                          ⭐ Featured
                        </Badge>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <Badge variant="secondary" className="bg-black/50 text-white border-white/20 text-xs backdrop-blur-sm">
                        {filters.find(f => f.key === project.category)?.label}
                      </Badge>
                    </div>

                    {/* Hover Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => window.open(project.codeUrl, '_blank')}
                          className="bg-white/90 text-gray-900 hover:bg-white shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="bg-primary text-primary-foreground shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className={`font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`mb-4 text-sm leading-relaxed font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`text-xs ${isDark ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.codeUrl, '_blank')}
                        className={`flex-1 ${
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
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: projects.length, label: 'Total Projects' },
            { value: filters.length - 1, label: 'Categories' },
            { value: projects.filter(p => p.featured).length, label: 'Featured' },
            { value: '100%', label: 'Passion' }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-xl backdrop-blur-sm ${isDark ? 'bg-gray-800/60 border border-gray-700/30' : 'bg-white/80 border border-gray-200/30'} shadow-sm`}
            >
              <div className="font-display text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className={`text-sm font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
