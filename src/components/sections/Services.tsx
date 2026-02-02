'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'
import { useReducedMotion } from '@/hooks'

const services = [
  {
    title: 'Mobile',
    subtitle: 'Privacy-First Development',
    description:
      'iOS and Android apps that respect user data and earn trust.',
  },
  {
    title: 'Product',
    subtitle: 'Design & Development',
    description:
      'End-to-end creation, from concept to launch. Strategy, design, and code.',
  },
  {
    title: 'Consulting',
    subtitle: 'Technology Strategy',
    description:
      'Guidance for startups navigating technical decisions.',
  },
  {
    title: 'Web',
    subtitle: 'Custom Development',
    description:
      'Websites and applications built for performance and accessibility.',
  },
]

export function Services() {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="services" className="py-32 relative overflow-hidden">
      {/* Background orbs */}
      <GlowOrb size="lg" color="blue" className="top-0 right-1/4 opacity-20" />
      <GlowOrb size="md" color="purple" className="bottom-1/4 -left-20 opacity-15" />

      <ScrollReveal>
        <div className="text-center mb-20">
          <span className="text-particle-glow text-sm tracking-[0.3em] uppercase font-light">
            What We Do
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary mt-4">
            Craft & Code
          </h2>
          <div className="w-16 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-fog-mid to-transparent" />
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.15}>
            <motion.div
              className="group relative p-8 lg:p-10"
              whileHover={reducedMotion ? {} : { x: 8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover glow line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-particle-glow/0 to-transparent group-hover:via-particle-glow/50 transition-all duration-500" />

              {/* Number */}
              <span className="text-7xl lg:text-8xl font-serif text-fog-deep/50 absolute -top-4 -left-2 select-none pointer-events-none group-hover:text-particle-glow/20 transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                <h3 className="font-serif text-4xl lg:text-5xl text-text-primary mb-2 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-particle-glow/70 text-sm tracking-wider uppercase mb-4">
                  {service.subtitle}
                </p>
                <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
