"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectLogoCyclerProps {
  interval?: number // in milliseconds, default 30 seconds
  offset?: number // offset in milliseconds, default 15 seconds
  className?: string
}

const PROJECT_LOGOS = [
  '/assets/project-logos/si_api.png',
  '/assets/project-logos/si_biomes.png',
  '/assets/project-logos/si_credits.png',
  '/assets/project-logos/si_crownfall.png',
  '/assets/project-logos/si_death_bolt.png',
  '/assets/project-logos/si_item_remover.png',
  '/assets/project-logos/si_library.png',
  '/assets/project-logos/si_refined_obsidian.png',
  '/assets/project-logos/si_scriptified.png',
  '/assets/project-logos/si_skillpoints.png',
]

export function ProjectLogoCycler({ 
  interval = 30000, 
  offset = 15000,
  className = "" 
}: ProjectLogoCyclerProps) {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(PROJECT_LOGOS.length).fill(false))

  // Preload all images
  useEffect(() => {
    PROJECT_LOGOS.forEach((src, index) => {
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

  // Change logo at specified interval with offset
  useEffect(() => {
    // Start after the offset delay
    const initialTimeout = setTimeout(() => {
      // Set initial random image
      setCurrentLogoIndex(Math.floor(Math.random() * PROJECT_LOGOS.length))
      
      // Then start the regular interval
      const timer = setInterval(() => {
        setCurrentLogoIndex((prevIndex) => {
          // Get next random index that's different from current
          let nextIndex
          do {
            nextIndex = Math.floor(Math.random() * PROJECT_LOGOS.length)
          } while (nextIndex === prevIndex && PROJECT_LOGOS.length > 1)
          
          return nextIndex
        })
      }, interval)

      return () => clearInterval(timer)
    }, offset)

    return () => clearTimeout(initialTimeout)
  }, [interval, offset])

  // Don't render until at least one image is loaded
  if (!imagesLoaded.some(loaded => loaded)) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <div className="animate-pulse bg-gray-300 rounded-2xl w-full h-full" />
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <AnimatePresence mode="sync">
        {PROJECT_LOGOS.map((src, index) => (
          index === currentLogoIndex && imagesLoaded[index] && (
            <motion.div
              key={`${src}-${index}-${currentLogoIndex}`}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut"
              }}
            >
              <img
                src={src}
                alt={`Project Logo ${index + 1}`}
                className="w-full h-full object-contain hover-glow transition-all duration-300 ease-in-out"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  )

}
