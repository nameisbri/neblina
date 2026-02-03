'use client'

import { useEffect } from 'react'
import { useReducedMotion } from '@/hooks'
import { ENTRANCE } from '@/lib/constants'

interface HeroEntranceProps {
  /** Callback when entrance animation completes */
  onComplete?: () => void
  /** Children to render after entrance */
  children: React.ReactNode
}

/**
 * Simplified hero entrance wrapper.
 * Content is always visible - no opacity hiding.
 * The existing FogSystem provides the atmospheric backdrop.
 */
export function HeroEntrance({ onComplete, children }: HeroEntranceProps) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      onComplete?.()
      return
    }

    // Brief delay before signaling completion
    const timer = setTimeout(() => {
      onComplete?.()
    }, ENTRANCE.titleDelay)

    return () => clearTimeout(timer)
  }, [reducedMotion, onComplete])

  // Content is always visible - no opacity wrapper that hides content
  return <>{children}</>
}
