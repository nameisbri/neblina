import type { ProcessProject } from './types'

export const methodologyProject: ProcessProject = {
  type: 'process',
  id: 'ai-methodology',
  title: 'AI-Assisted Development',
  subtitle: 'Process Innovation',
  description:
    "A structured approach to AI-assisted development emphasizing fail-hard policies, comprehensive planning, and phase-based implementation — known internally as Alaina's Method.",
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
