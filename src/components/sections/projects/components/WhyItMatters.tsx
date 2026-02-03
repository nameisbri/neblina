'use client'

import type { ProjectTheme } from '@/data/projects'

interface WhyItMattersProps {
  content: string
  theme: ProjectTheme
}

export function WhyItMatters({ content, theme }: WhyItMattersProps) {
  return (
    <div
      className="relative pl-4 py-3 pr-4 rounded-r-lg"
      style={{
        borderLeft: `2px solid ${theme.primary}`,
        backgroundColor: `${theme.primary}08`,
      }}
    >
      <span
        className="block text-xs font-medium tracking-wider uppercase mb-1"
        style={{ color: theme.primary }}
      >
        Why It Matters
      </span>
      <p className="text-sm text-text-secondary leading-relaxed italic">{content}</p>
    </div>
  )
}
