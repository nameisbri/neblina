import type { Service, ServiceCategory } from '@/types'

export const SERVICES: Service[] = [
  // Design Services
  {
    id: 'product-design',
    title: 'Product Design',
    description:
      "Interfaces shaped around how people actually think and move. We design experiences that feel intuitive because they're built on real behaviour, not assumptions.",
    category: 'design',
  },
  {
    id: 'brand-visual-identity',
    title: 'Brand & Visual Identity',
    description:
      'Visual systems that hold together. Typography, color, components—each choice supporting the next. Style guides that teams actually use.',
    category: 'design',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description:
      'Websites that feel like you. They work hard while looking effortless—responsive, performant, built to grow with your brand.',
    category: 'design',
  },
  // Development Services
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description:
      'Clean, performant code that works everywhere. React, Next.js, and modern tools used with intention. Accessible, responsive, built to last.',
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
      'Backend systems that support your vision. APIs, databases, authentication—the infrastructure that makes everything else possible. Built for scale and maintainability.',
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
