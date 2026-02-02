'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { ScrollIndicator } from '@/components/ui'
import { DURATION, EASING } from '@/lib/constants'

/**
 * Hero section component for the landing page.
 *
 * Features:
 * - Full viewport height with centered content
 * - Company name in serif font with tagline
 * - Staggered fade-in animations
 * - Scroll indicator at bottom pointing to services section
 * - Respects user's reduced motion preferences
 *
 * Design Pattern: Container/Item animation pattern for staggered reveals
 */
export function Hero() {
  const reducedMotion = useReducedMotion()

  // Container variant controls stagger timing for children
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.2,
        delayChildren: reducedMotion ? 0 : 0.3,
      },
    },
  }

  // Item variant for individual animated elements
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.normal, ease: EASING.easeOut },
    },
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
      aria-label="Hero"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.h1
          variants={item}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary mb-6 tracking-tight"
        >
          Neblina Digital
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto"
        >
          Clarity through the mist
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reducedMotion ? 0 : 1.5, duration: 0.5 }}
        className="absolute bottom-12"
      >
        <ScrollIndicator targetId="services" />
      </motion.div>
    </section>
  )
}
