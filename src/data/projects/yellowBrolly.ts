import type { StandardProject } from './types'

export const yellowBrollyProject: StandardProject = {
  type: 'standard',
  id: 'yellow-brolly',
  title: 'Yellow Brolly',
  subtitle: 'Web design, Frontend development',
  projectType: 'Web design, Frontend development',
  client: 'Yellow Brolly',
  description:
    'A refined digital presence for a technology strategy consultancy helping organizations adopt tools without losing their culture.',
  status: 'development',
  statusLabel: 'Homepage Complete',
  features: [
    'Interactive 3D hero with particles, grid, and mouse-following glow',
    'GSAP ScrollTrigger animations throughout',
    '4-stage methodology timeline (Assess → Align → Activate → Amplify)',
    'Client transformation case studies',
    'Accessibility-first with reduced motion support',
    'Floating CTA widget across all pages',
  ],
  techStack: [
    { name: 'React 19', category: 'framework' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Vite', category: 'tool' },
    { name: 'Tailwind CSS', category: 'framework' },
    { name: 'GSAP', category: 'tool' },
    { name: 'Three.js', category: 'tool' },
    { name: 'React Three Fiber', category: 'framework' },
    { name: 'React Router', category: 'framework' },
  ],
  whyItMatters:
    'Demonstrates full-stack React development, complex animations, 3D graphics integration, and collaborative stakeholder management.',
  theme: {
    primary: '#eab308',
    secondary: '#f59e0b',
    glow: 'rgba(234, 179, 8, 0.25)',
  },
}
