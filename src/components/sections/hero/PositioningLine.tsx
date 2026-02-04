'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { DURATION, EASING } from '@/lib/constants'

interface PositioningLineProps {
  entranceComplete: boolean
}

export function PositioningLine({ entranceComplete }: PositioningLineProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{
        opacity: entranceComplete ? 0.75 : 0,
        y: entranceComplete ? 0 : 15,
      }}
      transition={{
        delay: reducedMotion ? 0 : 0.8,
        duration: reducedMotion ? 0 : DURATION.slow,
        ease: EASING.easeOut,
      }}
      className="max-w-3xl mx-auto mt-10 text-center text-base md:text-lg text-text-secondary leading-relaxed"
    >
      Working with founders, studios, and teams who care about getting the details right.
    </motion.p>
  )
}
