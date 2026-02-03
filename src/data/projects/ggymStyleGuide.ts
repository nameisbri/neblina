import type { StandardProject } from './types'

export const ggymStyleGuideProject: StandardProject = {
  type: 'standard',
  id: 'ggym-style-guide',
  title: 'GGYM Style Guide',
  subtitle: 'Brand Identity',
  projectType: 'Visual identity system',
  description:
    'A comprehensive style guide for a personal fitness tracking app, featuring a "Witchy Light" aesthetic—mystical lavenders, energetic accent colors, and playful typography that makes strength training feel magical.',
  status: 'live',
  statusLabel: 'Complete',
  features: [
    'Full color system with semantic states for workout tracking',
    'Typography pairing: Fraunces display + Space Grotesk + JetBrains Mono',
    'Glass card component patterns with blur effects',
    'Gradient library and shimmer animations',
    'Exercise category color coding',
    'Voice & tone guidelines with example copy',
  ],
  techStack: [
    { name: 'Figma', category: 'tool' },
    { name: 'Claude Artifacts', category: 'tool' },
    { name: 'Tailwind CSS', category: 'framework' },
  ],
  whyItMatters:
    'Demonstrates brand identity work as a deliverable—creating cohesive visual systems that balance personality with usability.',
  links: [
    {
      label: 'View Style Guide',
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
