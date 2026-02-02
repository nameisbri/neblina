'use client'

import { Section } from '@/components/layout'
import { ServiceCard } from '@/components/ui'
import { ScrollReveal } from '@/components/effects'

const services = [
  {
    title: 'Privacy-First Mobile Development',
    description:
      'We build iOS and Android apps that respect user data and earn trust. Currently launching Discloser, our own privacy-focused app.',
  },
  {
    title: 'Product Design & Development',
    description:
      'End-to-end product creation, from concept to launch. We move between strategy, design, and code fluently.',
  },
  {
    title: 'Technology Consulting',
    description:
      'Strategic guidance for startups and agencies navigating technical decisions. We help you build the right thing, not just anything.',
  },
  {
    title: 'Web Development',
    description:
      'Custom websites and web applications with a focus on performance, accessibility, and lasting quality.',
  },
]

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
            />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
