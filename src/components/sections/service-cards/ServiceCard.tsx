'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects'
import { useReducedMotion } from '@/hooks'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const reducedMotion = useReducedMotion()

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.article
        className="group relative h-full"
        whileHover={reducedMotion ? {} : { y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Border gradient wrapper with hover enhancement */}
        <div
          className="relative p-[1px] rounded-2xl overflow-hidden h-full
                     bg-gradient-to-b from-fog-mid/20 to-transparent
                     transition-all duration-500
                     group-hover:from-particle-glow/30"
        >
          <div className="relative bg-fog-deep/60 backdrop-blur-sm rounded-2xl p-8 lg:p-10 h-full">
            {/* Accent glow */}
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full
                         opacity-10 group-hover:opacity-20
                         transition-opacity duration-500 blur-3xl bg-particle-glow"
              aria-hidden="true"
            />

            {/* Title with hover glow */}
            <h3
              className="font-serif text-2xl lg:text-3xl text-text-primary mb-4
                        transition-all duration-300
                        group-hover:[text-shadow:0_0_30px_rgba(165,180,252,0.4)]"
            >
              {service.title}
            </h3>

            <p className="text-text-secondary leading-relaxed">{service.description}</p>
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  )
}
