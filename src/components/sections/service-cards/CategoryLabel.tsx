'use client'

import { ScrollReveal } from '@/components/effects'

interface CategoryLabelProps {
  label: string
  delay?: number
}

export function CategoryLabel({ label, delay = 0 }: CategoryLabelProps) {
  return (
    <ScrollReveal delay={delay}>
      <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-6 font-normal">
        {label}
      </h3>
    </ScrollReveal>
  )
}
