'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCarouselProps {
  className?: string;
  projectImages: string[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ className = '', projectImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (projectImages.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % projectImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [projectImages.length]);

  if (projectImages.length === 0) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-64 h-64 bg-gray-800/50 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <div className="relative w-64 h-64">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0"
          >
            <Image
              src={`/projects/${projectImages[currentIndex]}`}
              alt={`Project: ${projectImages[currentIndex].replace('.png', '').replace(/_/g, ' ')}`}
              width={256}
              height={256}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10" />
      </div>
      
      {/* Progress indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projectImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;