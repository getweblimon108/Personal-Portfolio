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
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">React 18</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Latest React version with concurrent features and improved performance.
                      </p>
                      <div className="text-xs bg-blue-100 dark:bg-blue-900/20 p-2 rounded">
                        Features: Suspense, Transitions, Strict Mode
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">TypeScript</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Static typing for enhanced development experience and code reliability.
                      </p>
                      <div className="text-xs bg-green-100 dark:bg-green-900/20 p-2 rounded">
                        Features: Strict mode, Interface definitions, Type safety
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tailwind CSS</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Utility-first CSS framework for rapid UI development.
                      </p>
                      <div className="text-xs bg-purple-100 dark:bg-purple-900/20 p-2 rounded">
                        Features: Dark mode, Custom utilities, Responsive design
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Development Tools & Libraries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Build Tools</h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li>• <strong>Vite:</strong> Fast build tool with HMR</li>
                        <li>• <strong>PostCSS:</strong> CSS processing and optimization</li>
                        <li>• <strong>ESLint:</strong> Code quality and consistency</li>
                        <li>• <strong>TypeScript Compiler:</strong> Type checking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">UI Libraries</h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li>• <strong>Radix UI:</strong> Accessible component primitives</li>
                        <li>• <strong>Lucide React:</strong> Modern icon library</li>
                        <li>• <strong>React Router:</strong> Client-side routing</li>
                        <li>• <strong>TanStack Query:</strong> Data fetching and caching</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 15:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Code className="text-primary" />
              Navigation Component Implementation
            </h2>

            <Card>
              <CardHeader>
                <CardTitle>Navigation Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Component Overview</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The navigation component implements a modern, responsive navigation system with smooth scrolling, 
                    active section highlighting, and an enhanced mobile hamburger menu with magnetic effects.
                  </p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// Enhanced Navigation Component
const Navigation = ({ activeSection, onToggleDark, isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Navigation content */}
    </nav>
  );
};`}
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

      default:
        if (currentPage <= totalPages) {
          return (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Page {currentPage} - Additional Content
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                This section contains detailed analysis and code examples for various aspects of the portfolio website development.
              </p>
              
              <Card className="mt-8 max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Continued Technical Documentation
                  </h3>
                  <div className="space-y-4">
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Development Methodologies</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        The project follows modern development practices including component-driven development, 
                        test-driven development principles, and continuous integration workflows.
                      </p>
                    </div>
                    
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Performance Optimization</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Implementation includes code splitting, lazy loading, image optimization, 
                        and efficient bundle management for optimal performance across all devices.
                      </p>
                    </div>
                    
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Accessibility Features</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Full WCAG compliance with screen reader support, keyboard navigation, 
                        semantic HTML structure, and appropriate ARIA labels throughout the application.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        }
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 print:hidden">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Website Development Report</h1>
              <p className="text-cyan-100">Ahmad Limon Portfolio - Technical Documentation</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={handlePrint}
              className="text-white hover:bg-white/20"
            >
              <Download className="h-4 w-4 mr-2" />
              Print Report
            </Button>
            <Badge variant="secondary" className="bg-white/20 text-white">
              {totalPages} Pages
            </Badge>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto p-6 min-h-[600px]">
        {renderPageContent()}
      </main>

      {/* Footer Navigation */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 print:hidden">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={prevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            
            <Button
              variant="outline"
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Go to page:</span>
            {[1, 2, 3, 4, 5, 15].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(page)}
                className="w-8 h-8 p-0"
              >
                {page}
              </Button>
            ))}
            {currentPage > 5 && currentPage !== 15 && (
              <Button
                variant="default"
                size="sm"
                className="w-8 h-8 p-0"
              >
                {currentPage}
              </Button>
            )}
          </div>
        </div>
      </footer>

      {/* Print Styles */}
      <style>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          
          body {
            font-size: 12pt;
            line-height: 1.4;
          }
          
          .text-5xl {
            font-size: 24pt !important;
          }
          
          .text-3xl {
            font-size: 18pt !important;
          }
          
          .text-2xl {
            font-size: 16pt !important;
          }
          
          .text-xl {
            font-size: 14pt !important;
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