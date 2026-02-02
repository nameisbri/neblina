'use client'

import { Section } from '@/components/layout'
import { ServiceCard } from '@/components/ui'
import { ScrollReveal } from '@/components/effects'

/**
 * Service offering data for the four pillars.
 * Extracted as a constant for maintainability and potential future i18n.
 */
const services = [
  {
    title: 'Privacy-First Mobile Development',
    description:
      'We build iOS and Android apps that respect user data and earn trust. Currently launching Discloser, our own privacy-focused app.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Product Design & Development',
    description:
      'End-to-end product creation, from concept to launch. We move between strategy, design, and code fluently.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: 'Technology Consulting',
    description:
      'Strategic guidance for startups and agencies navigating technical decisions. We help you build the right thing, not just anything.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: 'Web Development',
    description:
      'Custom websites and web applications with a focus on performance, accessibility, and lasting quality.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
]

/**
 * Services section showcasing the four pillars of expertise.
 *
 * Features:
 * - Responsive 2-column grid layout
 * - Staggered scroll reveal animations for each card
 * - Uses Section wrapper for consistent spacing
 * - Anchor id for scroll navigation from hero
 */
export function Services() {
  return (
    <Section id="services" className="py-32">
      <ScrollReveal>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary text-center mb-16">
          How We Can Help
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.1}>
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
