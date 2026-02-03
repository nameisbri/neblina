'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import type { ProjectStatus, ProjectTheme } from '@/data/projects'

interface StatusIndicatorProps {
  status: ProjectStatus
  label: string
  theme: ProjectTheme
  animated?: boolean
}

const activeStatuses: ProjectStatus[] = ['beta', 'development', 'evolving']

export function StatusIndicator({ status, label, theme, animated = true }: StatusIndicatorProps) {
  const reducedMotion = useReducedMotion()
  const isActive = activeStatuses.includes(status)
  const shouldAnimate = animated && isActive && !reducedMotion

  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border backdrop-blur-sm"
      style={{
        background: `${theme.primary}15`,
        borderColor: `${theme.primary}40`,
        color: theme.primary,
      }}
    >
      {/* Status dot */}
      <span className="relative flex h-2 w-2">
        {shouldAnimate && (
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: theme.primary }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ backgroundColor: theme.primary }}
        />
      </span>
      {label}
    </span>
  )
}
