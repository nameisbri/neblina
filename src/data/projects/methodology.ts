import type { ProcessProject } from './types'

export const methodologyProject: ProcessProject = {
  type: 'process',
  id: 'ai-methodology',
  title: 'AI-Assisted Development',
  subtitle: 'Process Innovation',
  description:
    "How we use AI without letting it run unsupervised. We plan before we code, errors stop the process instead of hiding, and a person reviews every step.",
  status: 'evolving',
  statusLabel: 'Active & Evolving',
  principles: [
    'Nothing gets built until the plan is written down',
    'Errors stop the process — no silent failures',
    'Four phases: Analyze, Plan, Implement, Document',
    'A person reviews every step',
  ],
  artifacts: ['.cursor-plans directory', '.ai-context directory'],
  theme: {
    primary: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.2)',
  },
}
