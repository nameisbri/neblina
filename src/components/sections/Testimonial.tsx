'use client'

import { Section } from '@/components/layout'
import { ScrollReveal } from '@/components/effects'

export function Testimonial() {
  return (
    <Section id="testimonials" aria-labelledby="testimonial-heading" className="py-32 lg:py-40 relative">
      <h2 id="testimonial-heading" className="sr-only">Client Testimonial</h2>

      <ScrollReveal>
        <div className="max-w-5xl mx-auto px-6">
          {/* Large decorative quotation mark */}
          <span
            className="block font-serif text-[10rem] md:text-[12rem] leading-none text-particle-glow/25 -mb-20 md:-mb-24 select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Quote — large, commanding, no card */}
          <blockquote>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary leading-snug">
              They brought clarity to a process that felt overwhelming. We ended up with something we&apos;re proud to share.
            </p>

            <footer className="mt-10">
              <cite className="not-italic text-lg text-text-secondary">
                Abbey, Yellow Brolly
              </cite>
            </footer>
          </blockquote>
        </div>
      </ScrollReveal>
    </Section>
  )
}
