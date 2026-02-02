'use client'

import { Section } from '@/components/layout'
import { Button } from '@/components/ui'
import { ScrollReveal } from '@/components/effects'

/**
 * Project spotlight section highlighting the Discloser app.
 *
 * Features:
 * - Two-column responsive layout (image + content)
 * - Gradient placeholder for app screenshot
 * - CTA button linking to app information
 * - Scroll reveal animations for visual interest
 *
 * The image placeholder uses a gradient with glow effect to maintain
 * visual interest until real app screenshots are available.
 */
export function ProjectSpotlight() {
  const handleLearnMore = () => {
    // Placeholder URL - replace with actual App Store or waitlist link
    window.open('#', '_blank')
  }

  return (
    <Section id="project" className="py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image/Visual placeholder */}
        <ScrollReveal>
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
            {/* Gradient background with glow effect */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-particle-glow/20 to-fog-deep border border-particle-glow/20"
              style={{
                boxShadow: '0 0 60px rgba(165, 180, 252, 0.15)',
              }}
              aria-hidden="true"
            />
            {/* Centered icon and label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-particle-glow/40 to-particle-glow/10 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <span className="text-text-secondary text-sm">App Preview</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={0.2}>
          <div className="text-center lg:text-left">
            <p className="text-particle-glow text-sm font-medium tracking-wider uppercase mb-4">
              Current Project
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
              Discloser
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
              A privacy-focused iOS app that puts you in control of your data.
              Built with intention, designed for trust. Currently in development
              and launching soon.
            </p>
            <Button variant="primary" size="lg" onClick={handleLearnMore}>
              Learn More
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
