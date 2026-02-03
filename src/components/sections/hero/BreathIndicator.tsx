'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

interface BreathIndicatorProps {
  /** Idle time before showing (ms) */
  idleTimeout?: number
  /** Whether entrance animation is complete */
  entranceComplete?: boolean
}

/**
 * Subtle "breathe" prompt that appears after user is idle.
 *
 * Encourages users to take their time exploring the site,
 * reinforcing the calm, intentional brand aesthetic.
 */
export function BreathIndicator({
  idleTimeout = 8000,
  entranceComplete = true,
}: BreathIndicatorProps) {
  const reducedMotion = useReducedMotion()
  const [isIdle, setIsIdle] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const resetIdleTimer = useCallback(() => {
    setIsIdle(false)
    setHasInteracted(true)
  }, [])

  useEffect(() => {
    if (!entranceComplete || reducedMotion) return

    let idleTimer: NodeJS.Timeout

    const startIdleTimer = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        // Only show once per session after first interaction
        if (!hasInteracted) {
          setIsIdle(true)
        }
      }, idleTimeout)
    }

    // Start initial timer
    startIdleTimer()

    // Reset on any interaction
    const handleInteraction = () => {
      resetIdleTimer()
      startIdleTimer()
    }

    window.addEventListener('mousemove', handleInteraction)
    window.addEventListener('scroll', handleInteraction)
    window.addEventListener('keydown', handleInteraction)
    window.addEventListener('touchstart', handleInteraction)

    return () => {
      clearTimeout(idleTimer)
      window.removeEventListener('mousemove', handleInteraction)
      window.removeEventListener('scroll', handleInteraction)
      window.removeEventListener('keydown', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
    }
  }, [entranceComplete, reducedMotion, idleTimeout, hasInteracted, resetIdleTimer])

  if (reducedMotion || !entranceComplete) return null

  return (
    <AnimatePresence>
      {isIdle && (
        <motion.div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            className="text-fog-mid/60 text-sm font-light tracking-wider"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            take a breath
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
