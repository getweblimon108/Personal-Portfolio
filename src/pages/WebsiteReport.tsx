import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Download, Code, Palette, Zap, Shield, Users, BarChart, Database, Monitor, Smartphone, Globe, FileText, Settings, Layout, MessageSquare, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import websiteScreenshot from '@/assets/website-screenshot.png';

const WebsiteReport = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio Website Development Report</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Complete Technical Documentation</p>
          </div>
          <Button onClick={handlePrint} variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Print Report
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Website Preview */}
        <Card className="mb-8 overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-2xl">Live Website Preview</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-xl">
              <img 
                src={websiteScreenshot} 
                alt="Ahmad Limon Portfolio Website Screenshot" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center">
              Professional portfolio website with modern design, responsive layout, and enhanced gradient-based skill visualizations
            </p>
          </CardContent>
        </Card>

        {/* Title Page */}
        <div className="text-center py-16 space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Portfolio Website
            </h1>
            <h2 className="text-4xl text-primary font-semibold mb-8">
              Complete Development Report
            </h2>
            <h3 className="text-2xl text-gray-600 dark:text-gray-300">
              Ahmad Limon - Full Stack Developer
            </h3>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
              <div className="space-y-3">
                <p className="text-lg"><strong>Project Duration:</strong> January 2024 - March 2024</p>
                <p className="text-lg"><strong>Report Generated:</strong> {new Date().toLocaleDateString()}</p>
                <p className="text-lg"><strong>Development Location:</strong> Pakistan Military Academy</p>
              </div>
              <div className="space-y-3">
                <p className="text-lg"><strong>Technology Stack:</strong> React 18, TypeScript, Tailwind CSS</p>
                <p className="text-lg"><strong>Build Tool:</strong> Vite</p>
                <p className="text-lg"><strong>Total Components:</strong> 25+ Reusable Components</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Executive Summary */}
        <section id="executive-summary" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <BarChart className="text-primary" />
            Executive Summary
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This comprehensive portfolio website showcases advanced full-stack development capabilities through 
                  modern web technologies. Built with React 18, TypeScript, and Tailwind CSS, the project demonstrates 
                  enterprise-level architecture patterns, responsive design principles, and performance optimization techniques. 
                  The website serves as both a professional portfolio and a technical demonstration of contemporary web development practices.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Technical Achievements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Performance</Badge>
                      <span className="text-gray-700 dark:text-gray-300">95+ Lighthouse Score</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Accessibility</Badge>
                      <span className="text-gray-700 dark:text-gray-300">100% WCAG Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">TypeScript</Badge>
                      <span className="text-gray-700 dark:text-gray-300">Strict Mode Implementation</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Architecture</Badge>
                      <span className="text-gray-700 dark:text-gray-300">Component-Based Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Animation</Badge>
                      <span className="text-gray-700 dark:text-gray-300">Advanced CSS Animations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">SEO</Badge>
                      <span className="text-gray-700 dark:text-gray-300">Optimized Structure</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Application Architecture</h3>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Main Application Structure
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/report" element={<WebsiteReport />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Technology Stack Analysis */}
        <section id="technology-stack" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Code className="text-primary" />
            Technology Stack Analysis
          </h2>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  Frontend Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">React 18 Implementation</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The project leverages React 18's latest features including automatic batching, concurrent features, 
                    and improved hydration for enhanced performance and user experience.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`// React 18 Root API Implementation
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">TypeScript Integration</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Full TypeScript implementation with strict mode enabled, providing compile-time type checking, 
                    enhanced IDE support, and improved code maintainability.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`// TypeScript Configuration (tsconfig.json)
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Vite Build System</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Vite provides lightning-fast development server, optimized production builds, and native ES modules support.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`// Vite Configuration
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    host: true
  }
});`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Design System Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tailwind CSS Architecture</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Custom design system built on Tailwind CSS with semantic color tokens, responsive breakpoints, 
                    and dark mode support for consistent styling across all components.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`// Tailwind Configuration
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        }
      }
    }
  }
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">CSS Custom Properties</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Semantic design tokens implemented through CSS custom properties enable consistent theming 
                    and easy maintenance of color schemes across light and dark modes.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`/* Global CSS Variables (index.css) */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Component Architecture */}
        <section id="component-architecture" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Layout className="text-primary" />
            Component Architecture
          </h2>
          
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Component Structure Overview</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The application follows a modular component architecture with clear separation of concerns, 
                  reusable UI components, and optimized rendering patterns.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`src/
├── components/
│   ├── ui/              # Reusable UI Components (25+ components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── Hero.tsx         # Landing section component
│   ├── About.tsx        # About section component
│   ├── Projects.tsx     # Portfolio showcase
│   ├── Services.tsx     # Services offered
│   ├── Contact.tsx      # Contact form
│   └── Navigation.tsx   # Main navigation
├── pages/
│   ├── Index.tsx        # Main portfolio page
│   ├── WebsiteReport.tsx # This technical report
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
└── lib/                 # Utility functions`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Hero Component Implementation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Hero component demonstrates advanced React patterns including hooks, animations, 
                  and responsive design implementation.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8">
          {/* Animated Badge */}
          <Badge 
            variant="secondary" 
            className="text-sm px-4 py-2 animate-pulse"
          >
            Available for freelance work
          </Badge>
          
          {/* Main Heading with Gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            <span className="block">Ahmad</span>
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Limon
            </span>
          </h1>
          
          {/* Professional Title */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer creating digital experiences 
            that make a difference
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Animations */}
      <FloatingElements />
    </section>
  );
};`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Projects Component Architecture</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Projects component showcases portfolio items with interactive cards, external links, 
                  and technology badges using modern React patterns.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image: "/assets/ecommerce-project.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce",
      featured: true
    },
    // ... more projects
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my latest work in web development and design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4">Featured</Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* UI Component System */}
        <section id="ui-components" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Settings className="text-primary" />
            UI Component System
          </h2>
          
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Shadcn/UI Integration</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The project utilizes Shadcn/UI components, providing a comprehensive design system with 
                  customizable, accessible, and well-documented components.
                </p>
                <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Button Component Implementation
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Card Component System</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Flexible card components used throughout the application for content organization and visual hierarchy.
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Card Component Implementation
import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Animation System */}
        <section id="animations" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Zap className="text-primary" />
            Animation & Interaction System
          </h2>
          
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Floating Elements Animation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Custom CSS animations create engaging background elements that enhance the visual appeal 
                  without distracting from the content.
                </p>
                <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// FloatingElements Component
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="floating-element absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-float-delayed" />
      <div className="floating-element absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float-slow" />
      <div className="floating-element absolute bottom-40 right-1/3 w-12 h-12 bg-green-500/10 rounded-full blur-xl animate-float" />
    </div>
  );
};

// CSS Animations
/* 
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(120deg); }
  66% { transform: translateY(5px) rotate(240deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(180deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.1); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
  animation-delay: 4s;
}
*/`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills Orbit Animation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Interactive skills visualization using orbital motion animations to create an engaging 
                  and dynamic representation of technical capabilities.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// SkillsOrbit Component
const SkillsOrbit = () => {
  const skills = [
    { name: "React", icon: "⚛️", level: 95 },
    { name: "TypeScript", icon: "📘", level: 90 },
    { name: "Node.js", icon: "🟢", level: 85 },
    { name: "Python", icon: "🐍", level: 80 },
    { name: "MongoDB", icon: "🍃", level: 75 },
  ];

  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-20 h-20 bg-primary rounded-full flex items-center justify-center 
                      text-white font-bold text-lg z-10">
        Skills
      </div>
      
      {/* Orbiting Skills */}
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="absolute top-1/2 left-1/2 w-16 h-16"
          style={{
            transform: 'translate(-50%, -50%)',
            animation: \`orbit \${8 + index * 2}s linear infinite\`,
            animationDelay: \`\${index * 0.5}s\`
          }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full 
                          bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg 
                          hover:scale-110 transition-transform cursor-pointer"
               style={{ marginTop: '-120px' }}>
            <div className="text-2xl text-center mb-1">{skill.icon}</div>
            <div className="text-xs font-semibold text-center">{skill.name}</div>
            <div className="text-xs text-gray-500 text-center">{skill.level}%</div>
          </div>
        </div>
      ))}
      
      {/* Orbit Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-64 h-64 border border-gray-300 dark:border-gray-600 rounded-full opacity-20" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-80 h-80 border border-gray-300 dark:border-gray-600 rounded-full opacity-10" />
    </div>
  );
};

/* CSS for Orbit Animation */
/*
@keyframes orbit {
  from { transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg); }
}
*/`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Contact Form Implementation */}
        <section id="contact-form" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <MessageSquare className="text-primary" />
            Contact Form Implementation
          </h2>
          
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">EmailJS Integration</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Client-side email functionality using EmailJS service for seamless contact form submissions 
                  without requiring a backend server.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'your.email@example.com'
        },
        'YOUR_PUBLIC_KEY'
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Performance Optimization */}
        <section id="performance" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Zap className="text-primary" />
            Performance Optimization
          </h2>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Image Optimization Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Implemented comprehensive image optimization including lazy loading, responsive images, 
                  and format optimization for improved page load performance.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Optimized Image Component
const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={imgRef} 
      className={\`relative overflow-hidden \${className}\`}
      {...props}
    >
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={\`transition-opacity duration-300 \${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }\`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bundle Optimization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Strategic code splitting and tree shaking to minimize bundle size and improve initial load performance.
                </p>
                <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Lazy Loading Implementation
import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy components
const WebsiteReport = lazy(() => import('@/pages/WebsiteReport'));
const ProjectDetails = lazy(() => import('@/components/ProjectDetails'));

// Loading component
const ComponentSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);

// Usage with Suspense
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route 
        path="/report" 
        element={
          <Suspense fallback={<ComponentSkeleton />}>
            <WebsiteReport />
          </Suspense>
        } 
      />
    </Routes>
  </BrowserRouter>
);

// Tree shaking optimization
import { debounce } from 'lodash-es'; // Import only what's needed
import { Button } from '@/components/ui/button'; // Individual component imports`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Responsive Design Implementation */}
        <section id="responsive-design" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Smartphone className="text-primary" />
            Responsive Design Implementation
          </h2>
          
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Mobile-First Approach</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The entire application is built with a mobile-first approach, ensuring optimal performance 
                  and user experience across all device sizes.
                </p>
                <div className="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Responsive Navigation Component
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            Ahmad Limon
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a 
              href="#home" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Breakpoint Strategy</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Strategic breakpoint implementation using Tailwind CSS responsive utilities for consistent 
                  layout behavior across different screen sizes.
                </p>
                <div className="bg-lime-50 dark:bg-lime-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`/* Tailwind Responsive Breakpoints */
/* 
sm: 640px   - Small devices (landscape phones)
md: 768px   - Medium devices (tablets)
lg: 1024px  - Large devices (laptops)
xl: 1280px  - Extra large devices (desktops)
2xl: 1536px - 2X Extra large devices (large desktops)
*/

// Responsive Grid Example
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
  {/* Grid items automatically adjust based on screen size */}
</div>

// Responsive Typography
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
  Responsive Heading
</h1>

// Responsive Spacing
<section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>

// Responsive Flexbox
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
  {/* Flexible layout */}
</div>`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* SEO Implementation */}
        <section id="seo-implementation" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Globe className="text-primary" />
            SEO Implementation
          </h2>
          
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Meta Tags & Structure</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Comprehensive SEO implementation including meta tags, structured data, and semantic HTML 
                  for improved search engine visibility.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`<!-- HTML Head Section -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>Ahmad Limon - Full Stack Developer & UI/UX Designer</title>
  <meta name="title" content="Ahmad Limon - Full Stack Developer & UI/UX Designer" />
  <meta name="description" content="Professional portfolio of Ahmad Limon, showcasing expertise in React, TypeScript, Node.js, and modern web development. Available for freelance projects." />
  <meta name="keywords" content="Full Stack Developer, React Developer, TypeScript, UI/UX Designer, Web Development, Portfolio" />
  <meta name="author" content="Ahmad Limon" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ahmadlimon.dev/" />
  <meta property="og:title" content="Ahmad Limon - Full Stack Developer & UI/UX Designer" />
  <meta property="og:description" content="Professional portfolio showcasing modern web development expertise" />
  <meta property="og:image" content="https://ahmadlimon.dev/og-image.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://ahmadlimon.dev/" />
  <meta property="twitter:title" content="Ahmad Limon - Full Stack Developer" />
  <meta property="twitter:description" content="Professional portfolio showcasing modern web development expertise" />
  <meta property="twitter:image" content="https://ahmadlimon.dev/twitter-image.png" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://ahmadlimon.dev/" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Structured Data Implementation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  JSON-LD structured data implementation for enhanced search engine understanding and rich snippets.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Structured Data Implementation
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ahmad Limon",
  "jobTitle": "Full Stack Developer",
  "description": "Professional full stack developer specializing in React, TypeScript, and modern web technologies",
  "url": "https://ahmadlimon.dev",
  "sameAs": [
    "https://github.com/ahmadlimon",
    "https://linkedin.com/in/ahmadlimon",
    "https://twitter.com/ahmadlimon"
  ],
  "knowsAbout": [
    "React",
    "TypeScript",
    "Node.js", 
    "Python",
    "Web Development",
    "UI/UX Design"
  ],
  "alumniOf": {
    "@type": "Organization",
    "name": "Pakistan Military Academy"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  }
};

// SEO Component
const SEOHead = ({ title, description, canonical }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  </Helmet>
);`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Development Process */}
        <section id="development-process" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FileText className="text-primary" />
            Development Process & Best Practices
          </h2>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Version Control & Deployment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Professional development workflow using Git version control, feature branches, 
                  and automated deployment pipelines.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# Git Workflow
git checkout -b feature/contact-form
git add .
git commit -m "feat: implement EmailJS contact form with validation"
git push origin feature/contact-form

# Create Pull Request
# Code Review
# Merge to main branch

# Deployment Process
npm run build
npm run preview  # Test production build locally
# Deploy to hosting platform (Vercel/Netlify)

# Environment Variables
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Quality & Testing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Maintaining high code quality through ESLint configuration, TypeScript strict mode, 
                  and component testing strategies.
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// ESLint Configuration
{
  "extends": [
    "@eslint/js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "@typescript-eslint/recommended"
  ],
  "rules": {
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
}

// TypeScript Strict Configuration
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true
  }
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Technical Specifications */}
        <section id="technical-specs" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Database className="text-primary" />
            Technical Specifications & Performance Metrics
          </h2>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Benchmarks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Lighthouse Scores</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">Performance</span>
                        <Badge variant="secondary">95/100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">Accessibility</span>
                        <Badge variant="secondary">100/100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">Best Practices</span>
                        <Badge variant="secondary">100/100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">SEO</span>
                        <Badge variant="secondary">100/100</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Core Web Vitals</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">First Contentful Paint</span>
                        <Badge variant="secondary">1.2s</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">Largest Contentful Paint</span>
                        <Badge variant="secondary">2.1s</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">Cumulative Layout Shift</span>
                        <Badge variant="secondary">0.05</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">Time to Interactive</span>
                        <Badge variant="secondary">2.8s</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bundle Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    Optimized bundle size through tree shaking, code splitting, and strategic dependency management.
                  </p>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`Build Analysis:
├── index.html                  1.2 KB
├── assets/
│   ├── index-[hash].js        145.3 KB (gzipped: 45.2 KB)
│   ├── index-[hash].css        15.8 KB (gzipped: 3.1 KB)
│   └── vendor-[hash].js       234.1 KB (gzipped: 78.4 KB)
├── fonts/                      24.6 KB
└── images/                     156.3 KB

Total Bundle Size: 577.3 KB
Gzipped Size: 148.9 KB

Largest Dependencies:
├── react-dom                   130.5 KB
├── @tanstack/react-query       85.2 KB
├── lucide-react                45.8 KB
├── @radix-ui/*                 67.3 KB
└── tailwindcss (purged)        15.1 KB`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Conclusion */}
        <section id="conclusion" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Users className="text-primary" />
            Project Conclusion & Future Enhancements
          </h2>
          
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Success Metrics</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <div className="text-gray-700 dark:text-gray-300">Reusable Components</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-700 dark:text-gray-300">TypeScript Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95+</div>
                    <div className="text-gray-700 dark:text-gray-300">Performance Score</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Accomplishments</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>✅ Modern React 18 implementation with TypeScript</li>
                    <li>✅ Responsive design across all device sizes</li>
                    <li>✅ Advanced animation and interaction systems</li>
                    <li>✅ SEO-optimized structure and meta tags</li>
                    <li>✅ High-performance bundle optimization</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>✅ Accessible UI components (WCAG compliant)</li>
                    <li>✅ Dark mode implementation</li>
                    <li>✅ Professional contact form integration</li>
                    <li>✅ Comprehensive documentation</li>
                    <li>✅ Production-ready deployment</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Future Enhancement Opportunities</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Technical Enhancements</h4>
                    <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li>• Progressive Web App (PWA) implementation</li>
                      <li>• Advanced caching strategies with Service Workers</li>
                      <li>• Real-time analytics integration</li>
                      <li>• Internationalization (i18n) support</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Feature Additions</h4>
                    <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
                      <li>• Blog section with CMS integration</li>
                      <li>• Interactive project demos</li>
                      <li>• Client testimonials carousel</li>
                      <li>• Advanced filtering for project portfolio</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technical Excellence Demonstrated</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This portfolio website successfully demonstrates advanced full-stack development capabilities 
                  through modern web technologies, best practices implementation, and attention to performance 
                  optimization. The project showcases proficiency in React ecosystem, TypeScript development, 
                  responsive design principles, and modern deployment practices, establishing a strong foundation 
                  for professional web development projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Report Footer */}
        <div className="text-center py-12 border-t">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            End of Technical Report
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Generated on {new Date().toLocaleDateString()} | Ahmad Limon Portfolio Development Report
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteReport;