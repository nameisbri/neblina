'use client'

import type { ProjectTheme } from '@/data/projects'

interface FeatureHighlightProps {
  icon: string
  title: string
  description: string
  theme: ProjectTheme
}

const iconMap: Record<string, string> = {
  ai: '🤖',
  verify: '✓',
  share: '🔗',
  assessment: '📋',
  bell: '🔔',
  shield: '🛡️',
  code: '💻',
  rocket: '🚀',
  chart: '📊',
  lock: '🔒',
}

export function FeatureHighlight({ icon, title, description, theme }: FeatureHighlightProps) {
  const iconChar = iconMap[icon] || '•'

  return (
    <div className="flex gap-3">
      <div
        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg"
        style={{ backgroundColor: `${theme.primary}20` }}
      >
        {iconChar}
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-medium text-text-primary">{title}</h4>
        <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
