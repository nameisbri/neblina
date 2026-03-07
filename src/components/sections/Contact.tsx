'use client'

import { Section } from '@/components/layout'
import { ContactForm } from '@/components/ui'
import { ScrollReveal } from '@/components/effects'

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-heading" className="py-32 relative">
      {/* Horizon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-fog-mid/15" />

      <div className="max-w-2xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 id="contact-heading" className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary mb-6">
              Have a project in mind?
            </h2>
            <p className="text-text-secondary text-lg max-w-lg mx-auto">
              Tell us about it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative bg-fog-deep/40 border border-fog-mid/10 rounded-2xl p-8 md:p-10">
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
