'use client'

import { Section } from '@/components/layout'
import { ScrollReveal } from '@/components/effects'
import { CategoryLabel, ServiceGrid } from './service-cards'
import { SERVICE_CATEGORIES, getServicesByCategory } from '@/data/services'

export function Services() {
  return (
    <Section
      id="services"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Horizon line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-fog-mid/15"
        aria-hidden="true"
      />

      {/* Section heading — left-aligned */}
      <ScrollReveal>
        <h2
          id="services-heading"
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary mb-16 lg:mb-20"
        >
          Services
        </h2>
      </ScrollReveal>

      {/* Service categories */}
      <div className="space-y-20 lg:space-y-28">
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
