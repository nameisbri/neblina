'use client'

import { Section } from '@/components/layout'
import { ContactForm } from '@/components/ui'
import { ScrollReveal } from '@/components/effects'

/**
 * Contact section with invitation text and contact form.
 *
 * Features:
 * - Centered layout with constrained width for readability
 * - Engaging copy that reflects the brand voice
 * - Animated content reveal on scroll
 * - Accessible form component
 */
export function Contact() {
  return (
    <Section id="contact" className="py-32">
      <div className="max-w-xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
              Let&apos;s Talk
            </h2>
            <p className="text-text-secondary text-lg">
              Working with Neblina means partnering with a studio that cares about
              craft, privacy, and intention. Whether you&apos;re building something new
              or need a trusted technical partner, we&apos;d love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </Section>
  )
}
