import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layers, Clapperboard, ImagePlus, PenTool, Megaphone } from 'lucide-react';
import metaAdsLogo from '@/assets/meta-ads-logo.png';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EnhancedServicesProps {
  isDark: boolean;
}

// Google Ads Icon (Blue version)
const GoogleAdsIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 192 192" fill="none">
    <path d="M12.214 108.474l48.493-83.994c9.9-17.147 31.813-23.02 48.96-13.12 17.148 9.9 23.02 31.813 13.12 48.96L74.294 144.314c-9.9 17.147-31.813 23.02-48.96 13.12-17.147-9.9-23.02-31.813-13.12-48.96z" fill="#60A5FA"/>
    <path d="M179.786 108.474l-48.493-83.994c-9.9-17.147-31.813-23.02-48.96-13.12-17.148 9.9-23.02 31.813-13.12 48.96l48.493 83.994c9.9 17.147 31.813 23.02 48.96 13.12 17.147-9.9 23.02-31.813 13.12-48.96z" fill="#3B82F6"/>
    <circle cx="36" cy="144" r="24" fill="#1D4ED8"/>
  </svg>
);

// Meta/Facebook Icon
const MetaIcon = () => (
  <img src={metaAdsLogo} alt="Meta Ads" className="w-8 h-8 object-contain" />
);

const EnhancedServices = ({ isDark }: EnhancedServicesProps) => {
  const services = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Complete web applications with modern technologies',
      tooltip: 'React, Node.js, MongoDB, Express - End-to-end development'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      tooltip: 'Figma, Adobe XD, User research, Prototyping'
    },
    {
      icon: <GoogleAdsIcon />,
      title: 'Google Ads',
      description: 'Professional Google Ads campaigns for maximum ROI',
      tooltip: 'Search ads, Display campaigns, YouTube advertising, Shopping ads'
    },
    {
      icon: <MetaIcon />,
      title: 'Meta Ads',
      description: 'Strategic Facebook & Instagram advertising',
      tooltip: 'Facebook ads, Instagram campaigns, Audience targeting, Retargeting'
    },
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video content creation',
      tooltip: 'Adobe Premiere Pro, After Effects, Motion graphics'
    },
    {
      icon: <ImagePlus className="w-8 h-8" />,
      title: 'Photo Editing',
      description: 'Creative photo manipulation and enhancement',
      tooltip: 'Adobe Photoshop, Lightroom, Color grading, Retouching'
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Graphics Designing',
      description: 'Creative visual design and branding solutions',
      tooltip: 'Adobe Illustrator, Brand identity, Logo design, Print design'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and online brand growth',
      tooltip: 'SEO optimization, Content strategy, Social media management'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 12
      }
    }
  };

  return (
    <section id="services" className={`py-24 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Services I{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Comprehensive digital solutions to bring your vision to life
          </p>
        </motion.div>

        <TooltipProvider>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service) => (
              <Tooltip key={service.title}>
                <TooltipTrigger asChild>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`group p-8 rounded-2xl text-center cursor-pointer relative overflow-hidden backdrop-blur-sm ${
                      isDark 
                        ? 'bg-gray-800/80 border border-gray-700/50 hover:border-primary/50' 
                        : 'bg-white/80 border border-gray-200/50 hover:border-primary/50'
                    } shadow-lg hover:shadow-2xl`}
                  >
                    {/* Animated background gradient */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="text-primary mb-6 flex justify-center"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 5,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className={`font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs font-sans">
                  <p className="text-sm">{service.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </TooltipProvider>

        {/* Services stats */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { value: '8', label: 'Services Offered' },
            { value: '50+', label: 'Projects Completed' },
            { value: '24/7', label: 'Support Available' },
            { value: '100%', label: 'Client Satisfaction' }
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              variants={statVariants}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
              className={`p-6 rounded-xl backdrop-blur-sm ${isDark ? 'bg-gray-800/60 border border-gray-700/30' : 'bg-gray-50/80 border border-gray-200/30'}`}
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

export default EnhancedServices;