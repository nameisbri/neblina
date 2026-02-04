import type { FlagshipProject } from './types'

export const discloserProject: FlagshipProject = {
  type: 'flagship',
  id: 'discloser',
  title: 'Discloser',
  subtitle: 'Product design, Mobile development',
  projectType: 'Product design, Mobile development',
  tagline: 'Share your status. Protect your identity.',
  description:
    'A privacy-first iOS app that makes sharing health information feel safe, simple, and stigma-free.',
  status: 'beta',
  statusLabel: 'Build 17 — TestFlight Prep',
  features: [
    {
      icon: 'ai',
      title: 'AI Document Parsing',
      description: 'Google Cloud Vision OCR with LLM extraction for accurate result interpretation',
    },
    {
      icon: 'verify',
      title: 'Lab Verification',
      description: 'Document verification for recognized Canadian labs (LifeLabs, Public Health Ontario)',
    },
    {
      icon: 'share',
      title: 'Secure Sharing',
      description: 'Time-limited sharing links and QR codes that expire automatically',
    },
    {
      icon: 'assessment',
      title: 'Risk Assessment',
      description: 'Questionnaire based on CDC guidelines for personalized health insights',
    },
    {
      icon: 'bell',
      title: 'Testing Reminders',
      description: 'Personalized push notifications to stay on top of regular testing',
    },
    {
      icon: 'shield',
      title: 'Privacy First',
      description: 'Apple Sign-In authentication with known conditions tracking (HIV, Herpes, Hepatitis B/C)',
    },
  ],
  techStack: [
    { name: 'React Native', category: 'framework' },
    { name: 'Expo SDK 54', category: 'framework' },
    { name: 'NativeWind', category: 'tool' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Supabase', category: 'platform' },
    { name: 'PostgreSQL', category: 'platform' },
    { name: 'Google Cloud Vision', category: 'service' },
    { name: 'OpenRouter LLM', category: 'service' },
  ],
  whyItMatters:
    'Addresses a real gap in sexual health communication — reducing stigma, improving partner disclosure, and contributing to better public health outcomes.',
  theme: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    glow: 'rgba(99, 102, 241, 0.3)',
  },
  screenshots: [
    {
      src: '/projects/discloser/screenshot-1.png',
      alt: 'Discloser app main interface',
      caption: 'Dashboard',
    },
    {
      src: '/projects/discloser/screenshot-2.png',
      alt: 'Discloser app sharing screen',
      caption: 'Sharing',
    },
    {
      src: '/projects/discloser/screenshot-3.png',
      alt: 'Discloser app results screen',
      caption: 'Results',
    },
    {
      src: '/projects/discloser/screenshot-4.png',
      alt: 'Discloser app profile screen',
      caption: 'Profile',
    },
  ],
}
