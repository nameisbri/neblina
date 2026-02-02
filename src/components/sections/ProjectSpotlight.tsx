'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { Button } from '@/components/ui'
import { ScrollReveal, GlowOrb } from '@/components/effects'
import { useReducedMotion } from '@/hooks'

export function ProjectSpotlight() {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="project" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <GlowOrb size="xl" color="purple" className="-right-40 top-1/4 opacity-20" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(165, 180, 252, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(165, 180, 252, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center relative z-10">
        {/* Content - takes 3 cols */}
        <div className="lg:col-span-3 order-2 lg:order-1">
          <ScrollReveal>
            <span className="text-particle-glow text-sm tracking-[0.3em] uppercase font-light">
              Featured Project
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-text-primary mt-4 mb-6">
              Discloser
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-xl leading-relaxed mb-8 max-w-xl">
              A privacy-focused iOS app that puts you in control of your data.
              Built with intention, designed for trust.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-4 mb-8">
              {['Privacy-First', 'iOS', 'SwiftUI', 'Launching Soon'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm text-text-secondary border border-fog-mid/30 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </ScrollReveal>
        </div>

        {/* Visual - takes 2 cols */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <ScrollReveal delay={0.2}>
            <motion.div
              className="relative aspect-square max-w-sm mx-auto"
              whileHover={reducedMotion ? {} : { scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-particle-glow/20 via-transparent to-purple-500/20 blur-xl" />

              {/* Main container */}
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-fog-deep/80 to-deep-night border border-particle-glow/20 overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-particle-glow/10 via-transparent to-transparent" />

                {/* Decorative circles */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-particle-glow/10" />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border border-particle-glow/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-particle-glow/5" />

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-particle-glow/30 to-particle-glow/10 flex items-center justify-center"
                    animate={reducedMotion ? {} : {
                      boxShadow: [
                        '0 0 20px rgba(165, 180, 252, 0.3)',
                        '0 0 40px rgba(165, 180, 252, 0.5)',
                        '0 0 20px rgba(165, 180, 252, 0.3)',
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <svg className="w-12 h-12 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}
