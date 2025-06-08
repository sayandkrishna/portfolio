import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center space-y-4 mb-16 animate-slide-up ${className}`}>
      <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-secondary-200 to-accent-300 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <div className="flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full"></div>
      </div>
    </div>
  );
};