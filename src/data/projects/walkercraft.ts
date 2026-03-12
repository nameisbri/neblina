import type { StandardProject } from './types'

export const walkercraftProject: StandardProject = {
  type: 'standard',
  id: 'walkercraft',
  title: 'Walkercraft',
  subtitle: 'Web design · Lead automation · AI workflows',
  projectType: 'Web design · Lead automation · AI workflows',
  tagline: 'Carpentry site with an automated brain.',
  description:
    'Website and automated lead system for a solo carpenter in Hamilton. When someone fills out the contact form, the system scores the lead, sends Brett an alert if it\'s urgent, drafts a reply, and follows up on its own over the next few weeks. He doesn\'t touch any of it.',
  status: 'live',
  statusLabel: 'Live',
  features: [
    'Leads scored automatically as hot, warm, or cold',
    'Urgent leads trigger an instant email with a draft reply',
    'Automated follow-up emails over days and weeks',
    'Morning recap of any leads that came in overnight',
    'Brett approves outgoing messages before they send',
  ],
  techStack: [
    { name: 'Astro', category: 'framework' },
    { name: 'FastAPI', category: 'framework' },
    { name: 'Python', category: 'language' },
    { name: 'Supabase', category: 'service' },
    { name: 'Gemini', category: 'service' },
    { name: 'Resend', category: 'service' },
    { name: 'Docker', category: 'tool' },
  ],
  links: [
    {
      label: 'Visit site',
      url: 'https://walkercraftcarpentry.ca',
      type: 'external',
    },
  ],
  screenshots: [
    {
      src: '/projects/walkercraft/website.png',
      alt: 'Walkercraft Carpentry website homepage featuring expert carpentry and handyman services in Hamilton',
      variant: 'browser',
    },
    {
      src: '/projects/walkercraft/carpentry.jpg',
      alt: 'Custom wood ceiling with recessed lighting and exposed brick wall by Walkercraft Carpentry',
      variant: 'photo',
    },
  ],
  theme: {
    primary: '#c9956b',
    secondary: '#8b6914',
    glow: 'rgba(201, 149, 107, 0.25)',
  },
}
