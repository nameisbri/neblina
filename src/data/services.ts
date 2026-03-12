import type { Service, ServiceCategory } from '@/types'

export const SERVICES: Service[] = [
  // Design Services
  {
    id: 'product-design',
    title: 'Product Design',
    description:
      "Interfaces shaped around how people actually think and move. We watch real behaviour and design from there, not from guesswork.",
    category: 'design',
  },
  {
    id: 'brand-visual-identity',
    title: 'Brand & Visual Identity',
    description:
      'Visual systems that hold together. Typography, color, and components that support each other. Style guides that teams actually use.',
    category: 'design',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description:
      'Websites that feel like you. Fast, responsive, and built to keep up as your brand changes.',
    category: 'design',
  },
  // Development Services
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description:
      'Code that works everywhere and ages well. React, Next.js, and whatever else the project actually needs. Accessible and responsive by default.',
    category: 'development',
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description:
      'iOS apps that feel like they belong on your phone. We handle the full cycle from concept through the App Store, with privacy built in from day one.',
    category: 'development',
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    description:
      'The backend plumbing that makes everything else work. Login systems, databases, server logic. We write it clean so you\'re not rewriting it in six months.',
    category: 'development',
  },
  // Automation Services
  {
    id: 'business-automation',
    title: 'Business Automation',
    description:
      'Workflows that handle the repetitive stuff: lead scoring, customer follow-ups, reporting. Scripts and integrations that run on their own so your team doesn\'t have to.',
    category: 'automation',
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    description:
      'AI plugged into the tools you already use. Routing support tickets to the right person, drafting content from your existing data, summarizing threads so nobody has to. Practical stuff, not gimmicks.',
    category: 'automation',
  },
]

export const SERVICE_CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'design', label: 'Design' },
  { id: 'development', label: 'Development' },
  { id: 'automation', label: 'Automation' },
]

// Helper to get services by category
export const getServicesByCategory = (category: ServiceCategory): Service[] =>
  SERVICES.filter((s) => s.category === category)
