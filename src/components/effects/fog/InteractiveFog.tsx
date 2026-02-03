'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useMousePosition, useReducedMotion } from '@/hooks'

interface InteractiveFogProps {
  /** Radius of the clear area around cursor (default 150) */
  radius?: number
  /** Softness of the fog edge (default 0.5) */
  softness?: number
  /** Base opacity of the fog (default 0.3) */
  opacity?: number
  /** Z-index for layering */
  zIndex?: number
}

/**
 * Interactive fog layer that parts around the cursor position.
 *
 * Uses a radial gradient mask to create a hole in the fog that
 * follows the cursor with smooth interpolation, creating an
 * immersive "parting the mist" effect.
 */
export function InteractiveFog({
  radius = 150,
  softness = 0.5,
  opacity = 0.3,
  zIndex = 5,
}: InteractiveFogProps) {
  const mousePosition = useMousePosition()
  const reducedMotion = useReducedMotion()
  const [isClient, setIsClient] = useState(false)

  // Spring-based cursor following for smooth movement
  const cursorX = useSpring(0, { stiffness: 50, damping: 20 })
  const cursorY = useSpring(0, { stiffness: 50, damping: 20 })

  // Track if cursor is on screen
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (mousePosition) {
      cursorX.set(mousePosition.x)
      cursorY.set(mousePosition.y)
      setIsHovering(true)
    }
  }, [mousePosition, cursorX, cursorY])

  // Handle mouse leave
  useEffect(() => {
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseEnter = () => setIsHovering(true)

    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  // Calculate the inner and outer radius for gradient
  const innerRadius = radius * (1 - softness)
  const outerRadius = radius

  // Transform spring values to mask gradient string
  const maskGradient = useTransform(
    [cursorX, cursorY],
    ([x, y]) => `radial-gradient(
      circle ${outerRadius}px at ${x}px ${y}px,
      transparent ${innerRadius}px,
      rgba(0, 0, 0, 0.5) ${innerRadius + (outerRadius - innerRadius) * 0.5}px,
      black ${outerRadius}px
    )`
  )

  // Don't render on server or with reduced motion
  if (!isClient || reducedMotion) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed inset-0"
      style={{
        zIndex,
        opacity: isHovering ? opacity : opacity * 0.7,
        transition: 'opacity 0.5s ease-out',
      }}
      aria-hidden="true"
    >
      {/* Fog layer with mask */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 30% 20%, rgba(26, 26, 56, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse 80% 100% at 70% 80%, rgba(45, 45, 75, 0.5) 0%, transparent 45%),
            radial-gradient(ellipse 120% 60% at 50% 50%, rgba(35, 35, 65, 0.7) 0%, transparent 55%)
          `,
          maskImage: maskGradient,
          WebkitMaskImage: maskGradient,
        }}
      />

      {/* Subtle glow at cursor position */}
      <motion.div
        className="absolute w-40 h-40 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(165, 180, 252, 0.08) 0%, transparent 70%)',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      />
    </motion.div>
  )
}
