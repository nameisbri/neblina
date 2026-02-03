'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCursor } from './CursorContext'
import { CURSOR_CONFIG, Z_INDEX } from '@/lib/constants'

interface TrailParticle {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
}

/**
 * Subtle particle trail following the cursor.
 *
 * Creates small fading particles that trail behind cursor movement,
 * enhancing the magical, ethereal feel of the interface.
 */
export function CursorTrail() {
  const { position, isActive, mode } = useCursor()
  const [particles, setParticles] = useState<TrailParticle[]>([])
  const lastPosRef = useRef({ x: 0, y: 0 })
  const idCounterRef = useRef(0)

  useEffect(() => {
    if (!isActive || mode === 'hidden') return

    // Calculate distance moved
    const dx = position.x - lastPosRef.current.x
    const dy = position.y - lastPosRef.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Only spawn particles when moving fast enough
    if (distance > 15) {
      lastPosRef.current = { x: position.x, y: position.y }

      // Create new particle
      const newParticle: TrailParticle = {
        id: idCounterRef.current++,
        x: position.x,
        y: position.y,
        opacity: 0.6,
        scale: 0.5 + Math.random() * 0.3,
      }

      setParticles((prev) => {
        const updated = [...prev, newParticle]
        // Limit trail length
        if (updated.length > CURSOR_CONFIG.trailLength) {
          return updated.slice(-CURSOR_CONFIG.trailLength)
        }
        return updated
      })
    }
  }, [position, isActive, mode])

  // Clean up old particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.filter((p) => Date.now() - p.id < 500).slice(-CURSOR_CONFIG.trailLength)
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isActive || mode === 'hidden') return null

  return (
    <div
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: Z_INDEX.cursor - 1 }}
    >
      <AnimatePresence>
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: 8,
              height: 8,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, rgba(165, 180, 252, ${particle.opacity}) 0%, transparent 70%)`,
            }}
            initial={{ scale: particle.scale, opacity: particle.opacity }}
            animate={{
              scale: particle.scale * 0.5,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
