"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BackgroundSlideshowProps {
  interval?: number // in milliseconds, default 30 seconds
  className?: string
}

const SPLASH_IMAGES = [
  '/assets/splashes/00001.jpg',
  '/assets/splashes/00002.jpg',
  '/assets/splashes/00003.jpg',
  '/assets/splashes/00004.jpg',
]

export function BackgroundSlideshow({ interval = 30000, className = "" }: BackgroundSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(SPLASH_IMAGES.length).fill(false))

  // Preload all images
  useEffect(() => {
    SPLASH_IMAGES.forEach((src, index) => {
      const img = new Image()
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }
      img.src = src
    })
  }, [])

  // Change image at specified interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        // Get next random index that's different from current
        let nextIndex
        do {
          nextIndex = Math.floor(Math.random() * SPLASH_IMAGES.length)
        } while (nextIndex === prevIndex && SPLASH_IMAGES.length > 1)
        
        return nextIndex
      })
    }, interval)

    return () => clearInterval(timer)
  }, [interval])

  // Set initial random image
  useEffect(() => {
    setCurrentImageIndex(Math.floor(Math.random() * SPLASH_IMAGES.length))
  }, [])

  return (
    <div className={`fixed inset-0 -z-50 overflow-hidden ${className}`}>
      <AnimatePresence mode="sync">
        {SPLASH_IMAGES.map((src, index) => (
          index === currentImageIndex && imagesLoaded[index] && (
            <motion.div
              key={`${src}-${index}-${currentImageIndex}`}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${src})`,
                }}
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Light/dark mode overlay for theme consistency */}
              <div className="absolute inset-0 bg-background/20 dark:bg-background/40" />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Fallback background if images haven't loaded */}
      {!imagesLoaded.some(loaded => loaded) && (
        <div className="absolute inset-0 bg-background" />
      )}
    </div>
  )
}