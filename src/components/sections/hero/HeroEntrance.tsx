'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { ENTRANCE } from '@/lib/constants'

interface HeroEntranceProps {
  /** Callback when entrance animation completes */
  onComplete?: () => void
  /** Children to render after entrance */
  children: React.ReactNode
}

/**
 * Simplified hero entrance with smooth fade-in.
 * The existing FogSystem provides the atmospheric backdrop.
 */
export function HeroEntrance({ onComplete, children }: HeroEntranceProps) {
  const reducedMotion = useReducedMotion()
  const [isReady, setIsReady] = useState(reducedMotion)

  useEffect(() => {
    if (reducedMotion) {
      setIsReady(true)
      onComplete?.()
      return
    }

    // Brief delay before showing content
    const timer = setTimeout(() => {
      setIsReady(true)
      onComplete?.()
    }, ENTRANCE.titleDelay)

    return () => clearTimeout(timer)
  }, [reducedMotion, onComplete])

  return (
    <motion.div
      initial={{ opacity: reducedMotion ? 1 : 0 }}
      animate={{ opacity: isReady ? 1 : 0 }}
      transition={{
        duration: reducedMotion ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
