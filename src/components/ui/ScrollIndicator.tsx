'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

interface ScrollIndicatorProps {
  targetId?: string
}

/**
 * Animated scroll indicator component for hero sections.
 * Shows a bouncing arrow that scrolls to a target section on click.
 * Respects user's reduced motion preferences.
 *
 * @example
 * <ScrollIndicator targetId="services" />
 */
export function ScrollIndicator({ targetId = 'services' }: ScrollIndicatorProps) {
  const reducedMotion = useReducedMotion()

  const handleClick = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      className={
        'flex flex-col items-center gap-2 text-text-secondary ' +
        'hover:text-text-primary transition-colors cursor-pointer ' +
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ' +
        'focus-visible:ring-offset-4 focus-visible:ring-offset-deep-night rounded'
      }
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      aria-label="Scroll to explore"
    >
      <span className="text-sm font-light tracking-wider uppercase">Explore</span>
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        animate={reducedMotion ? {} : { y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </motion.button>
  )
}
