import type { StandardProject } from './types'

export const ggymStyleGuideProject: StandardProject = {
  type: 'standard',
  id: 'ggym-style-guide',
  title: 'GGYM',
  subtitle: 'Brand identity · Product design · Development',
  projectType: 'Brand identity · Product design · Development',
  tagline: 'Strength training, made magical.',
  description:
    'Visual identity and workout tracking app. Playful typography, energetic colours, and a witchy-light aesthetic that makes logging sets feel less like a chore.',
  status: 'live',
  statusLabel: 'Live',
  links: [
    {
      label: 'Try the app',
      url: 'https://gabi-workouts.vercel.app',
      type: 'external',
    },
    {
      label: 'View style guide',
      url: 'https://claude.ai/public/artifacts/3baf873e-dfc3-4859-b3ed-83c9d3086e3e',
      type: 'external',
    },
  ],
  screenshots: [
    {
      src: '/projects/ggym/home-dashboard.png',
      alt: 'GGYM home dashboard showing weekly workout schedule with phase and intensity targets',
    },
    {
      src: '/projects/ggym/workout-tracking.png',
      alt: 'GGYM active workout tracking with set logging, rest timer, and exercise notes',
    },
  ],
  theme: {
    primary: '#8b5cf6',
    secondary: '#ec4899',
    glow: 'rgba(139, 92, 246, 0.25)',
  },
}
