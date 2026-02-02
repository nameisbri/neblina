'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { ScrollIndicator } from '@/components/ui'
import { DURATION, EASING } from '@/lib/constants'

export function Hero() {
  const reducedMotion = useReducedMotion()

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.3,
        delayChildren: reducedMotion ? 0 : 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.slow, ease: EASING.easeOut },
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
          className="font-serif text-6xl md:text-7xl lg:text-8xl text-text-primary mb-8 tracking-tight"
        >
          Neblina
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed"
        >
          Clarity through the mist
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reducedMotion ? 0 : 2, duration: 0.8 }}
        className="absolute bottom-12"
      >
        <ScrollIndicator targetId="services" />
      </motion.div>
    </section>
  )
}
