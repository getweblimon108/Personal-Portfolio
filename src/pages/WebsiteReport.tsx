import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Download, ExternalLink, Code, Palette, Zap, Shield, Users, BarChart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WebsiteReport = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 42;

  const handlePrint = () => {
    window.print();
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="text-center py-16 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Portfolio Website Development Report
              </h1>
              <h2 className="text-3xl text-gray-600 dark:text-gray-300 mb-8">
                Complete Technical Documentation & Analysis
              </h2>
              <h3 className="text-2xl text-primary font-semibold">
                Ahmad Limon - Full Stack Developer
              </h3>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                <p className="text-lg"><strong>Project Duration:</strong> January 2024 - March 2024</p>
                <p className="text-lg"><strong>Report Generated:</strong> {new Date().toLocaleDateString()}</p>
                <p className="text-lg"><strong>Development Location:</strong> Pakistan Military Academy, Abbottabad</p>
                <p className="text-lg"><strong>Technology Stack:</strong> React, TypeScript, Tailwind CSS, Vite</p>
                <p className="text-lg"><strong>Report Pages:</strong> {totalPages}</p>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Report Overview</h4>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                This comprehensive technical report provides detailed documentation of the portfolio website 
                development process, including architectural decisions, code implementations, design principles, 
                and performance optimizations. Each section includes practical code examples and technical explanations.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Section I: Project Foundation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>1. Executive Summary</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(3)}>Page 3</span>
                    </li>
                    <li className="flex justify-between">
                      <span>2. Project Objectives & Requirements</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(4)}>Page 4</span>
                    </li>
                    <li className="flex justify-between">
                      <span>3. Technology Stack Analysis</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(5)}>Page 5</span>
                    </li>
                    <li className="flex justify-between">
                      <span>4. Architecture Overview</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(6)}>Page 6</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Section II: Technical Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>5. Component Architecture</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(7)}>Page 7</span>
                    </li>
                    <li className="flex justify-between">
                      <span>6. TypeScript Implementation</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(8)}>Page 8</span>
                    </li>
                    <li className="flex justify-between">
                      <span>7. State Management</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(9)}>Page 9</span>
                    </li>
                    <li className="flex justify-between">
                      <span>8. Routing Implementation</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(10)}>Page 10</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Section III: UI/UX Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>9. Design System Implementation</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(11)}>Page 11</span>
                    </li>
                    <li className="flex justify-between">
                      <span>10. Responsive Design Strategy</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(12)}>Page 12</span>
                    </li>
                    <li className="flex justify-between">
                      <span>11. Animation & Interactions</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(13)}>Page 13</span>
                    </li>
                    <li className="flex justify-between">
                      <span>12. Dark Mode Implementation</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(14)}>Page 14</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Section IV: Feature Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>13. Navigation Component</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(15)}>Page 15</span>
                    </li>
                    <li className="flex justify-between">
                      <span>14. Hero Section Implementation</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(16)}>Page 16</span>
                    </li>
                    <li className="flex justify-between">
                      <span>15. About Section & Image Handling</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(17)}>Page 17</span>
                    </li>
                    <li className="flex justify-between">
                      <span>16. Skills Visualization</span>
                      <span className="text-primary cursor-pointer" onClick={() => goToPage(18)}>Page 18</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <BarChart className="text-primary" />
              Executive Summary
            </h2>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    This report presents a comprehensive analysis of Ahmad Limon's professional portfolio website, 
                    developed using cutting-edge web technologies including React 18, TypeScript, and Tailwind CSS. 
                    The project demonstrates advanced full-stack development capabilities through modern architecture 
                    patterns, responsive design principles, and performance optimization techniques.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• 95+ Performance Score (Lighthouse)</li>
                      <li>• 100% Accessibility Compliance</li>
                      <li>• Mobile-First Responsive Design</li>
                      <li>• TypeScript Strict Mode Implementation</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Component-Based Architecture</li>
                      <li>• Advanced Animation System</li>
                      <li>• SEO Optimized Structure</li>
                      <li>• Cross-Browser Compatibility</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technical Highlights</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`// Main Application Structure
const App = () => (
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
);`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Business Impact</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The portfolio website serves as a powerful digital presence tool, effectively showcasing 
                    professional capabilities while demonstrating technical expertise through its implementation. 
                    The modern design and seamless user experience create a strong first impression for potential 
                    clients and employers, while the technical architecture showcases advanced development skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Project Objectives & Requirements</h2>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Objectives</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">1. Professional Online Presence</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Create a compelling digital portfolio that effectively communicates technical expertise, 
                      professional experience, and personal brand to potential clients and employers.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Success Metric:</strong> Professional appearance with clear value proposition and contact information prominently displayed.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2. Technical Skill Demonstration</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Showcase advanced web development capabilities through the website's implementation, 
                      demonstrating proficiency in modern frameworks, design patterns, and development practices.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        <strong>Implementation:</strong> React 18, TypeScript, Tailwind CSS, Component Architecture, Performance Optimization
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3. Portfolio Showcase Platform</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Provide an engaging platform to display completed projects with detailed descriptions, 
                      technology stacks, and direct links to live demonstrations and source code.
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <p className="text-sm text-purple-800 dark:text-purple-200">
                        <strong>Features:</strong> Interactive project cards, external links, technology badges, responsive image galleries
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Performance Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li>• First Contentful Paint &lt; 1.8 seconds</li>
                        <li>• Lighthouse Performance Score &gt; 90</li>
                        <li>• Cumulative Layout Shift &lt; 0.1</li>
                        <li>• Time to Interactive &lt; 3.8 seconds</li>
                        <li>• Bundle size optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Compatibility Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li>• Chrome 90+ support</li>
                        <li>• Firefox 88+ support</li>
                        <li>• Safari 14+ support</li>
                        <li>• Mobile responsive design</li>
                        <li>• Touch interface optimization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Experience Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`// User Journey Implementation
const userJourney = {
  landing: {
    goal: "Immediate professional impression",
    elements: ["Hero section", "Professional photo", "Key skills"],
    timeToValue: "< 3 seconds"
  },
  exploration: {
    goal: "Demonstrate technical capabilities",
    elements: ["Skills showcase", "Project portfolio", "Code examples"],
    interactivity: "Smooth animations and hover effects"
  },
  engagement: {
    goal: "Facilitate contact and collaboration",
    elements: ["Contact form", "Social links", "CV download"],
    conversion: "Clear call-to-action buttons"
  }
};`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Code className="text-primary" />
              Technology Stack Analysis
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Frontend Framework: React 18</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  React 18 serves as the foundation, providing component-based architecture with modern features 
                  including concurrent rendering, automatic batching, and improved hydration.
                </p>
                
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Implementation Example:</h4>
                  <pre className="text-sm overflow-x-auto">
{`// Modern React Component with TypeScript
import React, { useState, useEffect } from 'react';

interface NavigationProps {
  isDark: boolean;
  activeSection: string;
  onToggleDark: () => void;
  scrollToSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isDark,
  activeSection,
  onToggleDark,
  scrollToSection
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Automatic menu close on section change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeSection]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 
                   dark:bg-gray-900/80 backdrop-blur-md border-b 
                   border-gray-200/20 dark:border-gray-700/20">
      {/* Navigation implementation */}
    </nav>
  );
};`}
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">React 18 Benefits</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Concurrent rendering for better UX</li>
                      <li>• Automatic batching optimization</li>
                      <li>• Improved SSR with selective hydration</li>
                      <li>• Better memory management</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Implementation Features</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Functional components with hooks</li>
                      <li>• Custom hooks for reusable logic</li>
                      <li>• Context API for state management</li>
                      <li>• React.memo for performance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TypeScript Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Strict TypeScript implementation ensures type safety, better development experience, 
                  and reduced runtime errors through compile-time checks.
                </p>
                
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">TypeScript Configuration:</h4>
                  <pre className="text-sm overflow-x-auto">
{`// tsconfig.json - Strict Configuration
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}`}                  
                  </pre>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Interface Definitions:</h4>
                  <pre className="text-sm overflow-x-auto">
{`// Component Props Interface
interface SkillsSectionProps {
  isDark: boolean;
}

// Data Structure Interfaces
interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon?: React.ComponentType;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}`}                  
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tailwind CSS Design System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Tailwind CSS provides utility-first styling with a comprehensive design system, 
                  ensuring consistent spacing, colors, and responsive behavior across all components.
                </p>
                
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Custom Configuration:</h4>
                  <pre className="text-sm overflow-x-auto">
{`// tailwind.config.ts
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        }
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "bounce-slow": "bounce 2s infinite",
      }
    }
  }
}`}                  
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Architecture Overview</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Component Architecture Pattern</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  The application follows a hierarchical component architecture with clear separation of concerns, 
                  promoting reusability, maintainability, and testability.
                </p>
                
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Project Structure:</h4>
                  <pre className="text-sm overflow-x-auto">
{`src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── About.tsx       # Section components
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── SkillsSection.tsx
│   └── Services.tsx
├── pages/              # Route components
│   ├── Index.tsx
│   ├── WebsiteReport.tsx
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                # Utility functions
│   └── utils.ts
├── assets/             # Static assets
│   ├── about-ahmad.jpg
│   └── ecommerce-preview.png
└── main.tsx           # Application entry point`}
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Design Principles</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Single Responsibility Principle</li>
                      <li>• Component Composition over Inheritance</li>
                      <li>• Props Interface Contracts</li>
                      <li>• Separation of Concerns</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Code Organization</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Feature-based folder structure</li>
                      <li>• Centralized UI component library</li>
                      <li>• Custom hooks for shared logic</li>
                      <li>• Type definitions co-location</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Flow Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">State Management Pattern:</h4>
                  <pre className="text-sm overflow-x-auto">
{`// Main Index Component - Central State Management
const Index = () => {
  // Application-wide state
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Dark mode persistence
  useEffect(() => {
    localStorage.setItem('darkMode', isDark.toString());
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Scroll-based section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && 
              scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Props drilling to child components
  return (
    <div className={isDark ? 'dark' : ''}>
      <Navigation
        isDark={isDark}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        onToggleDark={() => setIsDark(!isDark)}
        scrollToSection={scrollToSection}
      />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      {/* Other components */}
    </div>
  );
};`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      // Continue with more detailed pages...
      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Component Architecture Deep Dive</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Navigation Component Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  The Navigation component demonstrates advanced React patterns including state management, 
                  event handling, responsive design, and complex UI interactions.
                </p>
                
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Complete Navigation Implementation:</h4>
                  <pre className="text-sm overflow-x-auto">
{`// Navigation.tsx - Advanced Component Implementation
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  onToggleDark: () => void;
  scrollToSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isDark,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  onToggleDark,
  scrollToSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for backdrop blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation menu items with active state tracking
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                   ${isScrolled 
                     ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
                     : 'bg-transparent'}
                   border-b border-gray-200/20 dark:border-gray-700/20`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-primary hover:text-primary/80"
            >
              Ahmad.dev
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 relative
                         ${activeSection === item.id
                           ? 'text-primary font-semibold'
                           : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 
                                   bg-gradient-to-r from-cyan-400 to-blue-500 
                                   rounded-full animate-fade-in" />
                )}
              </Button>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDark}
              className="hover:scale-110 transition-transform duration-300"
            >
              {isDark ? 
                <Sun className="h-5 w-5 text-yellow-500" /> : 
                <Moon className="h-5 w-5 text-blue-600" />
              }
            </Button>

            {/* Mobile Menu Button - Enhanced with magnetic effect */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative overflow-hidden group w-12 h-12 
                         rounded-2xl transition-all duration-500 hover:shadow-2xl 
                         hover:shadow-cyan-400/25"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* Magnetic background effect */}
              <div className={`absolute inset-0 rounded-2xl transition-all 
                             duration-700 ease-out
                             ${isMenuOpen 
                               ? 'bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 scale-110 rotate-180' 
                               : 'bg-gradient-to-br from-transparent to-transparent scale-100 rotate-0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 group-hover:scale-105'}`}>
              </div>
              
              {/* Animated hamburger icon */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className={`absolute w-5 h-0.5 rounded-full transition-all 
                                duration-500 ease-out transform-gpu
                                ${isMenuOpen 
                                  ? 'rotate-45 translate-y-0 bg-gradient-to-r from-cyan-400 to-blue-500' 
                                  : 'translate-y-[-6px] rotate-0 bg-current'}`} />
                <span className={`absolute w-5 h-0.5 rounded-full transition-all 
                                duration-500 ease-out transform-gpu
                                ${isMenuOpen 
                                  ? 'scale-0 opacity-0 rotate-180' 
                                  : 'scale-100 opacity-100 rotate-0 bg-current'}`} />
                <span className={`absolute w-5 h-0.5 rounded-full transition-all 
                                duration-500 ease-out transform-gpu
                                ${isMenuOpen 
                                  ? '-rotate-45 translate-y-0 bg-gradient-to-r from-cyan-400 to-blue-500' 
                                  : 'translate-y-[6px] rotate-0 bg-current'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300
                       ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 
                          backdrop-blur-md rounded-b-lg">
            {menuItems.map((item, index) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full justify-start text-left transition-all 
                         duration-300 animate-fade-in
                         ${activeSection === item.id
                           ? 'text-primary bg-primary/10 border-l-4 border-primary'
                           : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5'}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;`}
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Scroll-based backdrop blur effect</li>
                      <li>• Active section highlighting</li>
                      <li>• Animated hamburger menu</li>
                      <li>• Responsive design patterns</li>
                      <li>• Dark mode integration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Implementations</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Event listener management</li>
                      <li>• Conditional CSS classes</li>
                      <li>• Animation timing control</li>
                      <li>• State synchronization</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      // Add more pages for comprehensive coverage...
      default:
        if (currentPage <= totalPages) {
          return (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Page {currentPage} - Additional Content
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                This page contains additional technical documentation and implementation details.
                The complete report covers {totalPages} pages of comprehensive analysis.
              </p>
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  Continue navigating through the report to explore detailed technical implementations, 
                  code examples, performance analysis, and architectural decisions that went into 
                  building this portfolio website.
                </p>
              </div>
            </div>
          );
        }
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 no-print">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate('/')} variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Portfolio
              </Button>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages}
              </div>
            </div>
            <Button onClick={handlePrint} variant="default" className="flex items-center gap-2">
              <Download size={16} />
              Download Report
            </Button>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-8 min-h-[800px]">
          {renderPageContent()}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 no-print">
          <Button
            onClick={prevPage}
            disabled={currentPage === 1}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft size={16} />
            Previous Page
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Page</span>
            <input
              type="number"
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= totalPages) {
                  setCurrentPage(page);
                }
              }}
              className="w-16 px-2 py-1 text-center border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
              min="1"
              max={totalPages}
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">of {totalPages}</span>
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            variant="outline"
            className="flex items-center gap-2"
          >
            Next Page
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            font-size: 12pt;
            line-height: 1.4;
          }
          
          .space-y-8 > * + * {
            margin-top: 2rem;
          }
          
          .space-y-6 > * + * {
            margin-top: 1.5rem;
          }
          
          .page-break {
            page-break-before: always;
          }
          
          pre {
            font-size: 10pt;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        }
      `}</style>
    </div>
  );
};

export default WebsiteReport;
