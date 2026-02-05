'use client'

import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'

export function Testimonial() {
  return (
    <Section id="testimonials" aria-labelledby="testimonial-heading" className="py-24 lg:py-32 relative overflow-hidden">
      <h2 id="testimonial-heading" className="sr-only">Client Testimonial</h2>
      {/* Subtle background orb */}
      <GlowOrb
        size="lg"
        color="purple"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
      />

      <ScrollReveal>
        <div className="max-w-4xl mx-auto px-6">
          {/* Testimonial card */}
          <div className="relative bg-fog-deep/40 backdrop-blur-md border border-fog-mid/20 rounded-2xl p-8 md:p-12 lg:p-16">
            {/* Decorative quotation mark */}
            <span
              className="absolute top-4 left-6 md:top-6 md:left-8 text-6xl md:text-8xl font-serif text-particle-glow/20 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Quote */}
            <blockquote className="relative z-10">
              <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-text-primary leading-relaxed text-center">
                They brought clarity to a process that felt overwhelming. We ended up with something we&apos;re proud to share.
              </p>

              {/* Attribution */}
              <footer className="mt-8 md:mt-10 text-center">
                <cite className="not-italic text-base md:text-lg text-text-secondary">
                  – Abbey, Yellow Brolly
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
