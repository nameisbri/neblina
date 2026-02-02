'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { ScrollIndicator } from '@/components/ui'
import { GlowOrb } from '@/components/effects'
import { DURATION, EASING } from '@/lib/constants'

const offerings = ['Mobile Apps', 'Web Development', 'Product Design', 'Consulting']

export function Hero() {
  const reducedMotion = useReducedMotion()

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

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.slow, ease: EASING.easeOut },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: reducedMotion ? 0 : 0.3 + i * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  }

  const title = 'Neblina'

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Decorative glow orbs */}
      <GlowOrb size="xl" color="purple" className="-top-32 -left-32 opacity-50" delay={0.5} />
      <GlowOrb size="lg" color="blue" className="top-1/4 -right-20 opacity-40" delay={0.8} />
      <GlowOrb size="md" color="silver" className="bottom-1/4 left-1/4 opacity-30" delay={1.1} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl"
      >
        {/* Animated title with letter-by-letter reveal */}
        <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl mb-6 tracking-tight">
          {title.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block bg-gradient-to-b from-white via-text-primary to-text-secondary bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 80px rgba(165, 180, 252, 0.5)',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-2xl md:text-3xl text-text-secondary font-serif font-light max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Privacy-first software studio
        </motion.p>

        {/* What we offer - pills */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {offerings.map((offering, index) => (
            <motion.span
              key={offering}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: reducedMotion ? 0 : 1.5 + index * 0.1 }}
              className="px-4 py-2 text-sm text-text-secondary border border-fog-mid/30 rounded-full hover:border-particle-glow/50 hover:text-text-primary transition-colors"
            >
              {offering}
            </motion.span>
          ))}
        </motion.div>

        {/* Brief description */}
        <motion.p
          variants={item}
          className="text-fog-mid max-w-lg mx-auto text-base"
        >
          We craft thoughtful digital products with intention,
          building apps and experiences that respect users and stand the test of time.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reducedMotion ? 0 : 2.5, duration: 1 }}
        className="absolute bottom-12"
      >
        <ScrollIndicator targetId="services" />
      </motion.div>
    </section>
  )
}
