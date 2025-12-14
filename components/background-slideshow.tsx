"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BackgroundVideoProps {
  className?: string
}

export function BackgroundSlideshow({ className = "" }: BackgroundVideoProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = document.querySelector('#bg-video') as HTMLVideoElement
    if (video) {
      video.onloadeddata = () => setVideoLoaded(true)
    }
  }, [])

  return (
    <div className={`fixed inset-0 -z-50 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <video
          id="bg-video"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Light/dark mode overlay for theme consistency */}
        <div className="absolute inset-0 bg-background/20 dark:bg-background/40" />
      </motion.div>
      
      {/* Fallback background if video hasn't loaded */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-background" />
      )}
    </div>
  )
}