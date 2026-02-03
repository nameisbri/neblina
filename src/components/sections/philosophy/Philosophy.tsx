'use client'

import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'

export function Philosophy() {
  return (
    <Section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background orbs */}
      <GlowOrb size="lg" color="blue" className="top-0 left-1/4 opacity-15" />
      <GlowOrb size="md" color="purple" className="bottom-1/3 right-1/4 opacity-10" />

      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12">
            We work in the in-between.
          </h2>
        </ScrollReveal>

        {/* Body copy */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              Neblina (Portuguese for &ldquo;mist&rdquo;) is a design and technology studio for ideas still taking shape.
            </p>
            <p>
              We partner with founders and organizations doing meaningful work—and we build our own products. Our focus: digital experiences that require care. Where privacy, trust, and dignity aren&apos;t afterthoughts but foundations.
            </p>
            <p className="text-fog-mid">
              Based between Canada and Portugal. Working wherever the work matters.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
