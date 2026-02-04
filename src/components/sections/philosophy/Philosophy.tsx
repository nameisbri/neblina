'use client'

import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'

export function Philosophy() {
  return (
    <Section id="about" className="pt-24 pb-12 lg:pt-32 lg:pb-16 relative overflow-hidden">
      {/* Background orbs */}
      <GlowOrb size="lg" color="blue" className="top-0 left-1/4 opacity-15" />
      <GlowOrb size="md" color="purple" className="bottom-1/3 right-1/4 opacity-10" />

      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="font-serif font-light text-text-secondary text-xl md:text-2xl leading-relaxed text-center">
            We design and build digital products that feel considered. Every detail serves a purpose. Whether you&apos;re starting fresh or evolving what you have, we&apos;ll help you create something you&apos;re proud of.
          </p>
        </ScrollReveal>
      </div>
    </Section>
  )
}
