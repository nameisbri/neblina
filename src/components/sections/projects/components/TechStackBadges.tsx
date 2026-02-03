'use client'

import type { TechStackItem, ProjectTheme } from '@/data/projects'

interface TechStackBadgesProps {
  stack: TechStackItem[]
  theme: ProjectTheme
  variant?: 'default' | 'compact'
}

const categoryColors: Record<TechStackItem['category'], string> = {
  framework: 'rgba(59, 130, 246, 0.15)', // blue
  language: 'rgba(34, 197, 94, 0.15)', // green
  platform: 'rgba(168, 85, 247, 0.15)', // purple
  service: 'rgba(249, 115, 22, 0.15)', // orange
  tool: 'rgba(107, 114, 128, 0.15)', // gray
}

export function TechStackBadges({ stack, theme, variant = 'default' }: TechStackBadgesProps) {
  const isCompact = variant === 'compact'

  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <span
          key={item.name}
          className={`
            rounded-full border transition-colors duration-200
            ${isCompact ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'}
          `}
          style={{
            background: categoryColors[item.category],
            borderColor: `${theme.primary}30`,
            color: 'rgb(var(--text-secondary))',
          }}
        >
          {item.name}
        </span>
      ))}
    </div>
  )
}
