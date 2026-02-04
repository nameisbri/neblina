'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useMousePosition, useReducedMotion } from '@/hooks'
import { EASING, ENTRANCE } from '@/lib/constants'

/**
 * Enhanced Hero title with:
 * - 3D text shadow that responds to mouse position
 * - Letter-by-letter reveal with blur-to-sharp transition
 * - Subtle floating animation after reveal
 */
export function HeroTitle() {
  const delay = ENTRANCE.titleDelay
  const mousePosition = useMousePosition()
  const reducedMotion = useReducedMotion()
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Spring-based mouse tracking for smooth shadow movement
  const mouseX = useSpring(windowSize.width / 2, { stiffness: 50, damping: 20 })
  const mouseY = useSpring(windowSize.height / 2, { stiffness: 50, damping: 20 })

  useEffect(() => {
    if (mousePosition && !reducedMotion) {
      mouseX.set(mousePosition.x)
      mouseY.set(mousePosition.y)
    }
  }, [mousePosition, mouseX, mouseY, reducedMotion])

  // Calculate shadow offset based on mouse position
  // Max offset of 12px in any direction
  const shadowX = useTransform(
    mouseX,
    [0, windowSize.width],
    [12, -12]
  )
  const shadowY = useTransform(
    mouseY,
    [0, windowSize.height],
    [8, -8]
  )

  // Generate text shadow string
  const textShadow = useTransform(
    [shadowX, shadowY],
    ([x, y]: number[]) => {
      if (reducedMotion) {
        return '0 0 80px rgba(165, 180, 252, 0.5)'
      }
      return `
        ${x * 0.3}px ${y * 0.3}px 10px rgba(165, 180, 252, 0.4),
        ${x * 0.6}px ${y * 0.6}px 30px rgba(165, 180, 252, 0.25),
        ${x}px ${y}px 60px rgba(165, 180, 252, 0.15),
        0 0 100px rgba(165, 180, 252, 0.3)
      `
    }
  )

  const brandName = 'Neblina'
  const tagline = 'Clarity through craft'

  // Word animation variants
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: reducedMotion ? 0 : (delay / 1000) + i * 0.08,
        ease: EASING.easeOut,
      },
    }),
  }

  // Floating animation after reveal (subtle)
  const floatVariants = {
    float: {
      y: [0, -6, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  }

  // Container for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1,
        delayChildren: reducedMotion ? 0 : delay / 1000,
      },
    },
  }

  return (
    <motion.div
      className="flex flex-col items-center"
      variants={containerVariants}
      initial={false}
      animate="visible"
    >
      <motion.h1
        className="font-serif text-6xl md:text-7xl lg:text-8xl tracking-tight"
        animate={!reducedMotion ? 'float' : undefined}
        variants={floatVariants}
      >
        <motion.span
          custom={0}
          variants={wordVariants}
          initial={false}
          animate="visible"
          className="inline-block bg-gradient-to-b from-white via-text-primary to-text-secondary bg-clip-text text-transparent"
          style={{
            textShadow: reducedMotion ? '0 0 80px rgba(165, 180, 252, 0.5)' : textShadow,
          }}
        >
          {brandName}
        </motion.span>
      </motion.h1>
      <motion.p
        custom={1}
        variants={wordVariants}
        initial={false}
        animate="visible"
        className="mt-4 text-xl md:text-2xl lg:text-3xl text-text-secondary font-light tracking-wide"
      >
        {tagline}
      </motion.p>
    </motion.div>
  )
}
