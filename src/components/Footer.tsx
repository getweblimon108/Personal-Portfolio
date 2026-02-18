
import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Mail, MapPin, Code2, ArrowUp } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer = ({ isDark }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`pt-16 pb-8 px-4 border-t ${isDark ? 'bg-gray-950 border-gray-800' : 'bg-gray-900 border-gray-800'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-cyan-400" />
              Hammad Ahmed
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Full-Stack Developer & UI/UX Designer crafting modern, 
              high-performance web experiences. Turning ideas into elegant digital solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Pakistan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Let's Connect</h4>
            <p className="text-gray-400 text-sm mb-6">
              Have a project in mind? Let's build something amazing together.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/getweblimon108', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/hammad-ahmed-limon/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/hammad_ahmed_limon/', label: 'Instagram' },
                { icon: Facebook, href: 'https://www.facebook.com/hammadahmed.limon', label: 'Facebook' },
                { icon: Mail, href: 'mailto:hammadahmedlimon2@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-cyan-400/20 border border-gray-700 hover:border-cyan-400/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hammad Ahmed. All rights reserved. Built with passion & precision.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-400/20 border border-gray-700 hover:border-cyan-400/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
