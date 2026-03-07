'use client'

import { ScrollReveal } from '@/components/effects'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-2 md:gap-12 py-7 lg:py-9 border-t border-fog-mid/15">
        <h3 className="font-serif text-2xl lg:text-3xl text-text-primary">
          {service.title}
        </h3>
        <p className="text-text-secondary leading-relaxed text-base lg:text-lg">
          {service.description}
        </p>
      </div>
    </ScrollReveal>
  )
}
