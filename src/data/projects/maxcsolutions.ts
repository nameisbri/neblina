import type { StandardProject } from './types'

export const maxcsolutionsProject: StandardProject = {
  type: 'standard',
  id: 'maxc-solutions',
  title: 'Maxc Solutions',
  subtitle: 'Web design · Custom CMS · Analytics & SEO',
  projectType: 'Web design · Custom CMS · Analytics & SEO',
  tagline: 'Pool care, built to book.',
  client: 'Maxc Solutions Inc.',
  description:
    'Website and custom CMS for a certified pool leak-detection specialist serving the Greater Toronto and Hamilton area. The site leads with their real edge, finding leaks without guesswork, and points every section toward a quote. A custom CMS lets the client update content without a developer, and a full analytics and local-search setup (Google Business Profile, GA4, Search Console, and PostHog) shows where the leads come from.',
  status: 'live',
  statusLabel: 'Live',
  links: [
    {
      label: 'Visit site',
      url: 'https://maxcsolutions.ca',
      type: 'external',
    },
  ],
  screenshots: [
    {
      src: '/projects/maxcsolutions/hero.png',
      alt: 'Maxc Solutions homepage with the headline "Stop the Leak. Save Your Summer." and a photo of a technician inspecting a backyard pool',
      variant: 'browser',
    },
  ],
  theme: {
    primary: '#2078a0',
    secondary: '#0e3b5e',
    glow: 'rgba(32, 120, 160, 0.25)',
  },
}
