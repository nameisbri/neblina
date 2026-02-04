import type { StandardProject } from './types'

export const ggymStyleGuideProject: StandardProject = {
  type: 'standard',
  id: 'ggym-style-guide',
  title: 'GGYM Style Guide',
  subtitle: 'Brand identity · Visual design',
  projectType: 'Brand identity · Visual design',
  tagline: 'Strength training, made magical.',
  description:
    'A comprehensive visual identity system for a fitness app. Playful typography, energetic colours, and a witchy-light aesthetic that makes workout tracking feel less like a chore.',
  status: 'live',
  statusLabel: 'Complete',
  links: [
    {
      label: 'View style guide',
      url: 'https://claude.ai/public/artifacts/3baf873e-dfc3-4859-b3ed-83c9d3086e3e',
      type: 'external',
    },
  ],
  theme: {
    primary: '#8b5cf6',
    secondary: '#ec4899',
    glow: 'rgba(139, 92, 246, 0.25)',
  },
}
