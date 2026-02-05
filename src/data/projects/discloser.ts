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
      src: '/projects/discloser/screenshot-1.png',
      alt: 'Discloser app dashboard showing health test results overview with verification status indicators',
    },
    {
      src: '/projects/discloser/screenshot-2.png',
      alt: 'Discloser sharing screen with QR code generation for anonymous health status sharing',
    },
    {
      src: '/projects/discloser/screenshot-3.png',
      alt: 'Discloser test results detail view showing individual STI test outcomes',
    },
    {
      src: '/projects/discloser/screenshot-4.png',
      alt: 'Discloser user profile settings for managing privacy and sharing preferences',
    },
  ],
}
