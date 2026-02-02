'use client'

import { Section } from '@/components/layout'
import { ContactForm } from '@/components/ui'
import { ScrollReveal, GlowOrb } from '@/components/effects'

export function Contact() {
  return (
    <Section id="contact" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <GlowOrb size="lg" color="blue" className="-left-32 top-1/4 opacity-20" />
      <GlowOrb size="md" color="purple" className="-right-20 bottom-1/4 opacity-15" />

      {/* Top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-particle-glow/30 to-transparent" />

      <div className="max-w-2xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-particle-glow text-sm tracking-[0.3em] uppercase font-light">
              Get In Touch
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary mt-4 mb-6">
              Let&apos;s Talk
            </h2>
            <p className="text-text-secondary text-lg max-w-lg mx-auto">
              Whether you&apos;re building something new or need a trusted technical partner,
              we&apos;d love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative">
            {/* Form container with subtle glow */}
            <div className="absolute -inset-4 bg-gradient-to-b from-particle-glow/5 via-transparent to-transparent rounded-3xl blur-xl pointer-events-none" />
            <div className="relative bg-fog-deep/30 backdrop-blur-sm border border-fog-mid/10 rounded-2xl p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
