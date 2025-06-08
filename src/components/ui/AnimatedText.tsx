import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  gradient?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  gradient = 'from-white to-gray-300' 
}) => {
  return (
    <h1 className={`
      bg-gradient-to-r ${gradient} 
      bg-clip-text 
      text-transparent 
      animate-slide-up
      ${className}
    `}>
      {text}
    </h1>
  );
};