import type { StandardProject } from './types'

export const discloserMarketingProject: StandardProject = {
  type: 'standard',
  id: 'discloser-marketing',
  title: 'Discloser Marketing',
  subtitle: 'Supporting Product',
  projectType: 'Next.js landing page with waitlist',
  description:
    'The marketing site for Discloser. Animated visuals, a waitlist, and analytics hooked up to track what\u0027s working.',
  status: 'live',
  statusLabel: 'Live at discloser.app',
  features: [
    'Animated parallax glow blobs with Framer Motion',
    'Waitlist signup with honeypot spam protection',
    'Structured data (JSON-LD) for SEO optimization',
    'PostHog analytics and Microsoft Clarity integration',
    'Survey integration via Tally for user research',
  ],
  techStack: [
    { name: 'Next.js', category: 'framework' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Framer Motion', category: 'tool' },
    { name: 'Tailwind CSS', category: 'framework' },
    { name: 'PostHog', category: 'service' },
    { name: 'Tally', category: 'service' },
  ],
  whyItMatters:
    'Gets the word out for Discloser and collects early interest before the full launch.',
  links: [
    {
      label: 'Visit Site',
      url: 'https://discloser.app',
      type: 'external',
    },
  ],
  theme: {
    primary: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.25)',
  },
}
