'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { ScrollReveal } from '@/components/effects'
import { useReducedMotion } from '@/hooks'

const principles = [
  'Products people actually want to use',
  'Brands that hold up across every touchpoint',
  'Code that scales without a rewrite',
  'Automation that saves real hours',
  'We stick around after launch',
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
              You have the idea and the audience. We turn that into a product people reach for and a brand they remember. Then we set up the systems so it keeps running without you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-xl">
              We handle strategy, design, and development in-house so nothing gets lost between handoffs. The result is work that ships on time and doesn&apos;t fall apart when your traffic doubles.
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
