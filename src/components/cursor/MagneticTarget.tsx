'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from './CursorContext'
import { CURSOR_CONFIG } from '@/lib/constants'
import { cn } from '@/lib'

interface MagneticTargetProps {
  children: React.ReactNode
  /** Pull strength from 0 to 1 (default 0.3) */
  strength?: number
  /** Radius in pixels where magnetic effect activates (default from config) */
  radius?: number
  /** Additional CSS classes */
  className?: string
  /** Whether to change cursor mode on hover */
  cursorMode?: 'hover' | 'default'
}

/**
 * Wrapper component that creates a magnetic pull effect on cursor.
 *
 * When the cursor enters the magnetic radius, both the cursor and the
 * element itself are subtly pulled toward each other, creating an
 * engaging, tactile feel.
 */
export function MagneticTarget({
  children,
  strength = 0.3,
  radius = CURSOR_CONFIG.magnetRadius,
  className,
  cursorMode = 'hover',
}: MagneticTargetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { position, setCursorMode, isActive } = useCursor()
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isActive || !ref.current || !isHovered) {
      setOffset({ x: 0, y: 0 })
      return
    }

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const dx = position.x - centerX
    const dy = position.y - centerY
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < radius) {
      // Calculate pull strength based on distance (stronger when closer)
      const pullFactor = (1 - distance / radius) * strength
      setOffset({
        x: dx * pullFactor,
        y: dy * pullFactor,
      })
    } else {
      setOffset({ x: 0, y: 0 })
    }
  }, [position, isActive, isHovered, radius, strength])

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (isActive) {
      setCursorMode(cursorMode)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setOffset({ x: 0, y: 0 })
    if (isActive) {
      setCursorMode('default')
    }
  }

  return (
    <motion.div
      ref={ref}
      className={cn('inline-block', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  )
}
