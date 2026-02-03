'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { ScrollIndicator } from '@/components/ui'
import { GlowOrb } from '@/components/effects'
import { DURATION, EASING } from '@/lib/constants'
import { HeroTitle } from './HeroTitle'
import { HeroEntrance } from './HeroEntrance'
import { BreathIndicator } from './BreathIndicator'

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
      {/* Decorative glow orbs */}
      <GlowOrb size="xl" color="purple" className="-top-32 -left-32 opacity-50" delay={0.5} />
      <GlowOrb size="lg" color="blue" className="top-1/4 -right-20 opacity-40" delay={0.8} />
      <GlowOrb size="md" color="silver" className="bottom-1/4 left-1/4 opacity-30" delay={1.1} />

      <HeroEntrance onComplete={handleEntranceComplete}>
        <div className="relative z-10 max-w-5xl">
          {/* Animated title with 3D shadow */}
          <div className="mb-6">
            <HeroTitle />
          </div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            initial={false}
            animate="visible"
            className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Strategy, design, and digital products for brands navigating what&apos;s next.
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={itemVariants}
            initial={false}
            animate="visible"
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm text-text-primary border border-fog-mid/30 rounded-full hover:border-particle-glow/50 hover:bg-fog-mid/10 transition-colors duration-300"
          >
            See the work
          </motion.a>
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
        <ScrollIndicator targetId="services" />
      </motion.div>

      {/* Horizon glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-particle-glow/20 to-transparent blur-[1px]" />
    </section>
  )
}
