'use client'

import type { ProjectTheme } from '@/data/projects'

interface FeatureListProps {
  features: string[]
  theme: ProjectTheme
}

export function FeatureList({ features, theme }: FeatureListProps) {
  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
          <span
            className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: theme.primary }}
          />
          <span className="leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
  )
}
