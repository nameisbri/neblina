import type { StandardProject } from './types'

export const yellowBrollyProject: StandardProject = {
  type: 'standard',
  id: 'yellow-brolly',
  title: 'Yellow Brolly',
  subtitle: 'Web design · Custom CMS · SEO & analytics',
  projectType: 'Web design · Custom CMS · SEO & analytics',
  tagline: 'Strategy that sticks.',
  description:
    'Website for a tech consultancy that helps organizations adopt new tools without losing their culture. The design needed to feel as deliberate as their work. A custom CMS lets the team publish without touching code, and the analytics and search setup (GA4, Search Console, and PostHog) is tuned for both traditional SEO and the AI answer engines that increasingly send the first click.',
  status: 'live',
  statusLabel: 'Live',
  links: [
    {
      label: 'Visit site',
      url: 'https://yellow-brolly.vercel.app',
      type: 'external',
    },
  ],
  screenshots: [
    {
      src: '/projects/yellow-brolly/hero.jpeg',
      alt: 'Yellow Brolly homepage showing brand strategy and consulting services',
    },
  ],
  theme: {
    primary: '#eab308',
    secondary: '#f59e0b',
    glow: 'rgba(234, 179, 8, 0.25)',
  },
}
