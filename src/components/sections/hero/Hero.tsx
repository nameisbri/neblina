'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { ScrollIndicator } from '@/components/ui'
import { DURATION, EASING } from '@/lib/constants'
import { HeroTitle } from './HeroTitle'
import { HeroEntrance } from './HeroEntrance'
import { BreathIndicator } from './BreathIndicator'
import { PositioningLine } from './PositioningLine'

export function Hero() {
  const reducedMotion = useReducedMotion()
  const [entranceComplete, setEntranceComplete] = useState(reducedMotion)

  const handleEntranceComplete = useCallback(() => {
    setEntranceComplete(true)
  }, [])

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.slow, ease: EASING.easeOut },
    },
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      aria-label="Hero"
    >
      <HeroEntrance onComplete={handleEntranceComplete}>
        <div className="relative z-10 max-w-5xl">
          {/* Animated title with 3D shadow */}
          <div className="mb-6">
            <HeroTitle />
          </div>

          {/* CTA */}
          <motion.a
            variants={itemVariants}
            initial={false}
            animate="visible"
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 mt-10 text-base font-medium text-deep-night bg-particle-glow rounded-full hover:bg-cta-hover transition-colors duration-300"
          >
            Let&apos;s talk
          </motion.a>

          {/* Positioning line */}
          <PositioningLine entranceComplete={entranceComplete} />
        </div>
      </HeroEntrance>

      {/* Breath indicator for idle users */}
      <BreathIndicator entranceComplete={entranceComplete} />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ delay: reducedMotion ? 0 : 0.5, duration: 1 }}
        className="absolute bottom-12"
      >
        <ScrollIndicator targetId="about" />
      </motion.div>

      {/* Horizon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-fog-mid/15" />
    </section>
  )
}
