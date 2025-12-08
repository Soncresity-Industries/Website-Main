'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from './GradientText';

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
    type: "spring" | "tween" | "keyframes" | "inertia";
    damping: number;
    stiffness: number;
  };
  rotationInterval?: number;
  useGradient?: boolean;
  gradientColors?: string[];
  gradientAnimationSpeed?: number;
  showGradientBorder?: boolean;
}

export default function RotatingTextWithGradient({
  texts,
  mainClassName = '',
  staggerFrom = 'last',
  initial = { y: '100%' },
  animate = { y: 0 },
  exit = { y: '-120%' },
  staggerDuration = 0.025,
  splitLevelClassName = '',
  transition = { type: 'spring' as const, damping: 30, stiffness: 400 },
  rotationInterval = 2000,
  useGradient = false,
  gradientColors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  gradientAnimationSpeed = 3,
  showGradientBorder = false,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[currentIndex];
  const letters = currentText.split('');

  const letterElements = letters.map((letter, index) => {
    const delay = staggerFrom === 'last' 
      ? (letters.length - 1 - index) * staggerDuration 
      : index * staggerDuration;

    return (
      <motion.span
        key={index}
        style={{ display: 'inline-block' }}
        variants={{
          hidden: { y: initial.y },
          visible: { y: animate.y },
          exit: { y: exit.y }
        }}
        transition={{
          ...transition,
          delay: delay
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    );
  });

  const content = (
    <motion.div
      style={{ display: 'flex' }}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {letterElements}
    </motion.div>
  );

  return (
    <div className={mainClassName} style={{ position: 'relative', display: 'inline-block' }}>
      <div className={splitLevelClassName} style={{ overflow: 'hidden', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <div key={currentIndex}>
            {useGradient ? (
              <GradientText 
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={showGradientBorder}
              >
                {content}
              </GradientText>
            ) : (
              content
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}