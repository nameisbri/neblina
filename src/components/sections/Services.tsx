'use client'

import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'
import { CategoryLabel, ServiceGrid } from './service-cards'
import { SERVICE_CATEGORIES, getServicesByCategory } from '@/data/services'

export function Services() {
  return (
    <Section
      id="services"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Horizon glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-particle-glow/20 to-transparent blur-[1px]"
        aria-hidden="true"
      />

      {/* Background orbs */}
      <GlowOrb size="lg" color="blue" className="top-0 right-1/4 opacity-15" />
      <GlowOrb size="md" color="purple" className="bottom-1/4 -left-20 opacity-10" />

      {/* Section heading */}
      <ScrollReveal>
        <div className="text-center mb-16 lg:mb-20">
          <h2
            id="services-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary"
          >
            Services
          </h2>
        </div>
      </ScrollReveal>

      {/* Service categories */}
      <div className="space-y-16 lg:space-y-20">
        {(() => {
          let indexOffset = 0
          return SERVICE_CATEGORIES.map((category) => {
            const services = getServicesByCategory(category.id)
            const currentOffset = indexOffset
            indexOffset += services.length

            return (
              <div key={category.id}>
                <CategoryLabel label={category.label} delay={currentOffset * 0.1} />
                <ServiceGrid services={services} indexOffset={currentOffset} />
              </div>
            )
          })
        })()}
      </div>
    </Section>
  )
}
