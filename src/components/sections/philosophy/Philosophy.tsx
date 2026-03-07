'use client'

import { Section } from '@/components/layout'
import { ScrollReveal } from '@/components/effects'

export function Philosophy() {
  return (
    <Section id="about" aria-labelledby="philosophy-heading" className="pt-24 pb-12 lg:pt-32 lg:pb-16 relative">
      <h2 id="philosophy-heading" className="sr-only">Our Philosophy</h2>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="font-serif font-light text-text-secondary text-xl md:text-2xl leading-relaxed text-center">
            We design and build digital products where nothing is accidental. If you&apos;re starting something new or rethinking what you have, we&apos;ll help you get it right.
          </p>
        </ScrollReveal>
      </div>
    </Section>
  )
}
