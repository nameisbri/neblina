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
      'iOS apps built with React Native that feel native. We handle the full cycle — concept through App Store — and bake privacy in from the start.',
    category: 'development',
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    description:
      'APIs, databases, authentication — the stuff behind the screen that makes everything else work. We keep it clean so it doesn\'t fall apart at scale.',
    category: 'development',
  },
  // Automation Services
  {
    id: 'business-automation',
    title: 'Business Automation',
    description:
      'Workflows that handle the repetitive stuff — lead scoring, customer follow-ups, reporting. Python scripts and API integrations that run on their own so your team doesn\'t have to.',
    category: 'automation',
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    description:
      'Connecting AI models to the tools you already use. Smart routing for support tickets, content drafts from your CMS data, summaries that actually save time. Practical uses, not gimmicks.',
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
