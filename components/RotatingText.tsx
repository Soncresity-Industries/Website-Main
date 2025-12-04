'use client';

import React, { useState, useEffect } from 'react';

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: 'first' | 'last';
  initial?: { y: string };
  animate?: { y: number };
  exit?: { y: string };
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: {
    type: string;
    damping: number;
    stiffness: number;
  };
  rotationInterval?: number;
}

export default function RotatingText({
  texts,
  mainClassName = '',
  staggerFrom = 'last',
  initial = { y: '100%' },
  animate = { y: 0 },
  exit = { y: '-120%' },
  staggerDuration = 0.025,
  splitLevelClassName = '',
  transition = { type: 'spring', damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 300);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[currentIndex];
  const letters = currentText.split('');

  return (
    <div className={mainClassName} style={{ display: 'inline-block' }}>
      <div className={splitLevelClassName}>
        {letters.map((letter, index) => {
          const delay = staggerFrom === 'last' 
            ? (letters.length - 1 - index) * staggerDuration 
            : index * staggerDuration;

          return (
            <span
              key={`${currentIndex}-${index}`}
              style={{
                display: 'inline-block',
                transform: isAnimating ? 'translateY(-120%)' : 'translateY(0)',
                transition: `transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
                opacity: isAnimating ? 0 : 1,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          );
        })}
      </div>
    </div>
  );
}