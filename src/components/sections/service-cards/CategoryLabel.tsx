'use client'

import { ScrollReveal } from '@/components/effects'

interface CategoryLabelProps {
  label: string
  delay?: number
}

export function CategoryLabel({ label, delay = 0 }: CategoryLabelProps) {
  return (
    <ScrollReveal delay={delay}>
      <h3 className="text-sm uppercase tracking-[0.2em] text-particle-glow font-medium pt-2 pb-1">
        {label}
      </h3>
    </ScrollReveal>
  )
}
