import React from 'react';
import { Heart, Brain, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/sayandkrishna' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com/in/sayandkrishna' },
    { icon: Mail, label: 'Email', link: 'mailto:sayandkrishna242003@gmail.com' },
    { icon: ExternalLink, label: 'Portfolio', link: '#' },
  ];

  return (
    <footer className="bg-dark-900/50 backdrop-blur-sm border-t border-dark-700/30 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
                Sayand Krishna
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI & Data Science Engineer passionate about developing intelligent solutions for real-world problems.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              © {currentYear} Made with 
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              by Sayand Krishna
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target={social.link.startsWith('http') ? '_blank' : '_self'}
                rel={social.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="p-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700/30 rounded-lg text-gray-400 hover:text-secondary-400 hover:border-secondary-500/30 hover:bg-secondary-500/10 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-dark-700/30 text-center">
          <p className="text-gray-500 text-xs">
            Built with React, TypeScript, and Tailwind CSS. Specialized in AI, Machine Learning, and Data Science.
          </p>
        </div>
      </div>
    </footer>
  );
};