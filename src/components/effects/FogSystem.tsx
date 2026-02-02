'use client'

import { useState, useEffect } from 'react'
import { useReducedMotion } from '@/hooks'
import { FogLayer } from './FogLayer'

/**
 * Orchestrates multiple fog layers to create an immersive atmospheric effect.
 *
 * The system uses three layers with different parallax speeds to create
 * depth perception:
 *
 * 1. Background layer (0.5x speed): Slowest movement, appears farthest
 * 2. Midground layer (1.0x speed): Neutral movement, middle depth
 * 3. Foreground layer (1.5x speed): Fastest movement, appears closest
 *
 * Each layer has different opacity and blur values to enhance the depth effect.
 * The blur increases on closer layers, mimicking how atmospheric haze
 * appears in real photography.
 *
 * For users with reduced motion preferences, a static gradient fallback
 * is rendered instead of the animated layers.
 */
export function FogSystem() {
  const reducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  /**
   * Detect mobile devices to reduce fog layers for performance.
   */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      )
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (reducedMotion) {
    // Static gradient fallback for accessibility
    // Maintains the visual atmosphere without motion
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 50%, #1a1a2e 100%)',
        }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* Base gradient establishes the night sky foundation */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0f0f1e 0%, #1a1a2e 50%, #0f0f1e 100%)',
        }}
      />

      {/* Background fog - slowest parallax, highest blur for depth */}
      <FogLayer speed={0.5} opacity={0.4} blur={20} />

      {/* Midground fog - neutral speed, medium blur */}
      <FogLayer speed={1.0} opacity={0.5} blur={10} />

      {/* Foreground fog - fastest parallax, lowest blur */}
      {/* Skip on mobile for performance (2 layers instead of 3) */}
      {!isMobile && <FogLayer speed={1.5} opacity={0.3} blur={5} />}
    </div>
  )
}
