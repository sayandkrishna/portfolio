import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-dark-800/30 
      backdrop-blur-lg 
      border border-dark-700/30 
      rounded-xl 
      shadow-xl 
      shadow-dark-900/20
      hover:border-dark-600/50
      transition-all 
      duration-300
      ${className}
    `}>
      {children}
    </div>
  );
};