import type { FlagshipProject } from './types'

export const discloserProject: FlagshipProject = {
  type: 'flagship',
  id: 'discloser',
  title: 'Discloser',
  subtitle: 'Product design · Mobile development',
  projectType: 'Product design · Mobile development',
  tagline: 'Share your status. Protect your identity.',
  description:
    'A privacy-first iOS app that makes sharing health information feel safe and stigma-free. Upload a document, verify the results, and share with a link or QR code. No accounts exchanged, no awkward conversations.',
  status: 'beta',
  statusLabel: 'Build 17',
  theme: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    glow: 'rgba(99, 102, 241, 0.3)',
  },
  screenshots: [
    {
      src: '/projects/discloser/dashboard.png',
      alt: 'Discloser app dashboard showing health test results overview with verification status and next checkup reminder',
    },
    {
      src: '/projects/discloser/upload.png',
      alt: 'Discloser upload screen with Smart Scan for adding results via photo or PDF',
    },
    {
      src: '/projects/discloser/results.png',
      alt: 'Discloser verified test result detail view showing full STI panel breakdown from a recognized lab',
    },
    {
      src: '/projects/discloser/share.png',
      alt: 'Discloser share screen with auto-expiring links and QR code for anonymous sharing',
    },
    {
      src: '/projects/discloser/status.png',
      alt: 'Discloser private status sharing preview with encrypted results and hidden identity',
    },
  ],
  links: [
    {
      label: 'Landing Page',
      url: 'https://discloser.app',
      type: 'external',
    },
  ],
}
