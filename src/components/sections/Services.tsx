'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'
import { useReducedMotion } from '@/hooks'
import { SERVICE_COLORS } from '@/lib/constants'

type ServiceKey = keyof typeof SERVICE_COLORS

interface Service {
  id: ServiceKey
  title: string
  subtitle: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    id: 'mobile',
    title: 'Mobile',
    subtitle: 'Privacy-First Development',
    description: 'iOS and Android apps that respect user data and earn trust.',
    features: ['SwiftUI & Kotlin', 'Privacy by design', 'App Store optimization'],
  },
  {
    id: 'product',
    title: 'Product',
    subtitle: 'Design & Development',
    description: 'End-to-end creation, from concept to launch. Strategy, design, and code.',
    features: ['User research', 'Prototyping', 'Full-stack development'],
  },
  {
    id: 'consulting',
    title: 'Consulting',
    subtitle: 'Technology Strategy',
    description: 'Guidance for startups navigating technical decisions.',
    features: ['Architecture review', 'Tech stack selection', 'Team mentoring'],
  },
  {
    id: 'web',
    title: 'Web',
    subtitle: 'Custom Development',
    description: 'Websites and applications built for performance and accessibility.',
    features: ['Next.js & React', 'Performance tuning', 'SEO optimization'],
  },
]

function ServicePortal({ service, index }: { service: Service; index: number }) {
  const reducedMotion = useReducedMotion()
  const colors = SERVICE_COLORS[service.id]

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        className="group relative"
        whileHover={reducedMotion ? {} : { y: -8 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Card with gradient border */}
        <div
          className="relative p-[1px] rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.glow}, transparent 50%, ${colors.glow})`,
          }}
        >
          {/* Animated border glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}40, transparent 40%, transparent 60%, ${colors.primary}40)`,
              backgroundSize: '200% 200%',
              animation: 'flow 3s ease infinite',
            }}
          />

          {/* Card content */}
          <div className="relative bg-fog-deep/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 h-full">
            {/* Accent glow in corner */}
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-3xl"
              style={{ background: colors.primary }}
            />

            {/* Number badge */}
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium mb-4 transition-colors duration-300"
              style={{
                background: `${colors.primary}15`,
                color: colors.primary,
                borderColor: `${colors.primary}30`,
                borderWidth: '1px',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Title */}
            <h3 className="font-serif text-3xl lg:text-4xl text-text-primary mb-2 group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>

            {/* Subtitle */}
            <p
              className="text-sm tracking-wider uppercase mb-4 transition-colors duration-300"
              style={{ color: colors.primary }}
            >
              {service.subtitle}
            </p>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-text-secondary/80"
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: colors.primary }}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.primary}50, transparent)`,
              }}
            />
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
          <span className="text-particle-glow text-sm tracking-[0.3em] uppercase font-light">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary mt-4">
            Craft & Code
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Four ways we bring ideas to life
          </p>
          <div className="w-16 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-fog-mid to-transparent" />
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServicePortal key={service.id} service={service} index={index} />
        ))}
      </div>
    </Section>
  )
}
