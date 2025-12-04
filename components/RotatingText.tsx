'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[currentIndex];
  const letters = currentText.split('');

  return (
    <div className={mainClassName} style={{ position: 'relative', display: 'inline-block' }}>
      <div className={splitLevelClassName} style={{ overflow: 'hidden', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            style={{ display: 'flex' }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {letters.map((letter, index) => {
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
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}