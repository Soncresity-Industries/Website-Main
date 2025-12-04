'use client';

import React from 'react';

interface GradientTextProps {
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
  children: React.ReactNode;
}

const GradientText: React.FC<GradientTextProps> = ({
  colors,
  animationSpeed = 3,
  showBorder = false,
  className = '',
  children
}) => {
  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(-45deg, ${colors.join(', ')})`,
        backgroundSize: '400% 400%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        animation: `gradient ${animationSpeed}s ease infinite`,
        display: 'inline-block',
        border: showBorder ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
      }}
    >
      {children}
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </span>
  );
};

export default GradientText;