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
      'Websites that feel like you. Fast, responsive, and quietly built to grow with your brand.',
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
      'Native-quality iOS apps built with React Native. Smooth experiences that respect device conventions and user privacy. From concept to TestFlight to App Store.',
    category: 'development',
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    description:
      'APIs, databases, authentication. The stuff behind the screen that makes everything else work. Built to scale without becoming a mess.',
    category: 'development',
  },
]

export const SERVICE_CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'design', label: 'Design' },
  { id: 'development', label: 'Development' },
]

// Helper to get services by category
export const getServicesByCategory = (category: ServiceCategory): Service[] =>
  SERVICES.filter((s) => s.category === category)
