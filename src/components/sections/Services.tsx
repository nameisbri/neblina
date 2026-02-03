'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'
import { useReducedMotion } from '@/hooks'

const consultingServices = [
  'Brand strategy',
  'Product design',
  'Creative direction',
  'Technical architecture',
]

function ServiceBlock({
  title,
  children,
  index,
}: {
  title: string
  children: React.ReactNode
  index: number
}) {
  const reducedMotion = useReducedMotion()

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        className="group relative"
        whileHover={reducedMotion ? {} : { y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-b from-fog-mid/20 to-transparent">
          <div className="relative bg-fog-deep/60 backdrop-blur-sm rounded-2xl p-8 lg:p-10 h-full">
            {/* Accent glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-3xl bg-particle-glow" />

            <h3 className="font-serif text-3xl lg:text-4xl text-text-primary mb-6">
              {title}
            </h3>

            {children}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export function Services() {
  return (
    <Section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background orbs */}
      <GlowOrb size="lg" color="blue" className="top-0 right-1/4 opacity-15" />
      <GlowOrb size="md" color="purple" className="bottom-1/4 -left-20 opacity-10" />

      <ScrollReveal>
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary">
            What emerges
          </h2>
          <div className="w-16 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-fog-mid to-transparent" />
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Consulting Block */}
        <ServiceBlock title="Clarity for others" index={0}>
          <p className="text-text-secondary leading-relaxed mb-6">
            Strategy and design partnerships for teams building with intention. We help you find the signal in the noise—then craft the path forward.
          </p>
          <p className="text-fog-mid text-sm">
            {consultingServices.join(' · ')}
          </p>
        </ServiceBlock>

        {/* Products Block */}
        <ServiceBlock title="Clarity for ourselves" index={1}>
          <p className="text-text-secondary leading-relaxed mb-6">
            We develop our own software—tools for the conversations people struggle to have. Private by design. Built to earn trust.
          </p>
          <p className="text-fog-mid text-sm">
            Currently building: <span className="text-text-secondary">Discloser</span>, a privacy-first app for sharing health information on your own terms.
          </p>
        </ServiceBlock>
      </div>
    </Section>
  )
}
