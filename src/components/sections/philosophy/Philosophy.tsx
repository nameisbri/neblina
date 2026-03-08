'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { ScrollReveal } from '@/components/effects'
import { useReducedMotion } from '@/hooks'

const principles = [
  'Privacy as foundation, not feature',
  'Intentional design over trend-chasing',
  'Code that ages well',
  'Honest communication throughout',
  'Partnership beyond launch',
]

export function Philosophy() {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="about" aria-labelledby="philosophy-heading" className="pt-24 pb-16 lg:pt-32 lg:pb-20 relative">
      <h2 id="philosophy-heading" className="sr-only">Our Philosophy</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start">
        {/* Left — manifesto statement */}
        <div>
          <ScrollReveal>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary leading-[1.2] mb-8">
              In a world of surveillance capitalism and dark patterns, we choose a different path.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-xl">
              We build technology that serves humans, not the other way around. That means starting from privacy, designing with intention, and writing code we&apos;d stake our name on. We don&apos;t ship and disappear — we stay.
            </p>
          </ScrollReveal>
        </div>

        {/* Right — condensed principles */}
        <div className="lg:pt-4">
          <ScrollReveal delay={0.15}>
            <span className="text-text-secondary/60 text-xs tracking-[0.2em] uppercase block mb-6">
              How we work
            </span>
          </ScrollReveal>

          <ul className="space-y-0">
            {principles.map((principle, i) => (
              <motion.li
                key={i}
                className="py-3 border-b border-fog-mid/10 text-text-primary text-base lg:text-lg font-light"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: reducedMotion ? 0 : 0.2 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {principle}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
