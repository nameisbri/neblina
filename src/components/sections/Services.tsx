'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'
import { useReducedMotion } from '@/hooks'

const services = [
  {
    title: 'Product design',
    description:
      'Interfaces shaped around how people actually think and move. Clear, intuitive, and built to support real behaviour.',
  },
  {
    title: 'Web design',
    description:
      'Websites that feel like you. They work hard while looking effortless.',
  },
  {
    title: 'Frontend development',
    description:
      'Clean code that performs beautifully across every device and context. Accessible, responsive, built to last.',
  },
]

function ServiceCard({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index: number
}) {
  const reducedMotion = useReducedMotion()

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        className="group relative"
        whileHover={reducedMotion ? {} : { y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-b from-fog-mid/20 to-transparent">
          <div className="relative bg-fog-deep/60 backdrop-blur-sm rounded-2xl p-8 lg:p-10 h-full">
            {/* Accent glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-3xl bg-particle-glow" />

            <h3 className="font-serif text-2xl lg:text-3xl text-text-primary mb-4">
              {title}
            </h3>

            <p className="text-text-secondary leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export function Services() {
  return (
    <Section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Horizon glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-particle-glow/20 to-transparent blur-[1px]" />

      {/* Background orbs */}
      <GlowOrb size="lg" color="blue" className="top-0 right-1/4 opacity-15" />
      <GlowOrb size="md" color="purple" className="bottom-1/4 -left-20 opacity-10" />

      <ScrollReveal>
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary">
            Services
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
