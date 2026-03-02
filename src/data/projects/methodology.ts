import type { ProcessProject } from './types'

export const methodologyProject: ProcessProject = {
  type: 'process',
  id: 'ai-methodology',
  title: 'AI-Assisted Development',
  subtitle: 'Process Innovation',
  description:
    "How we work with AI without letting it run unsupervised. Fail-hard policies, planning before code, and human review at every step. We call it Alaina's Method.",
  status: 'evolving',
  statusLabel: 'Active & Evolving',
  principles: [
    'No implementation until complete planning is documented',
    'Fail-hard error handling policies',
    'Four-phase workflow: Analyze → Plan → Implement → Document',
    'Human-in-the-loop oversight at every stage',
  ],
  artifacts: ['.cursor-plans directory', '.ai-context directory'],
  theme: {
    primary: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.2)',
  },
}
