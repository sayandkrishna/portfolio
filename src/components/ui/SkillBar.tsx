import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  level: number;
  color: string;
  delay?: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ level, color, delay = 0 }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="relative">
      <div className="w-full bg-dark-700/50 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${animatedLevel}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};