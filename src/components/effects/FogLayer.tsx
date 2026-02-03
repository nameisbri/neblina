'use client'

import { useScrollPosition, useReducedMotion } from '@/hooks'
import { cn } from '@/lib'

interface FogLayerProps {
  /** Parallax multiplier (0.5 = slow, 1.5 = fast) */
  speed: number
  /** Layer opacity from 0 to 1 */
  opacity: number
  /** CSS blur amount in pixels */
  blur?: number
  /** Global density modifier (1 = normal, higher = denser) */
  density?: number
  /** Gradient color variant */
  variant?: 'cool' | 'warm' | 'neutral'
  /** Additional CSS classes */
  className?: string
}

// Gradient configurations for different variants
const gradientVariants = {
  cool: {
    color1: 'rgba(55, 65, 100, VAR)',   // Blueish gray
    color2: 'rgba(45, 55, 90, VAR)',    // Deeper blue
    color3: 'rgba(26, 26, 56, VAR)',    // Night blue
  },
  warm: {
    color1: 'rgba(75, 65, 81, VAR)',    // Purple tint
    color2: 'rgba(65, 55, 81, VAR)',    // Deeper purple
    color3: 'rgba(36, 26, 46, VAR)',    // Night purple
  },
  neutral: {
    color1: 'rgba(55, 65, 81, VAR)',    // Original gray
    color2: 'rgba(55, 65, 81, VAR)',    // Same gray
    color3: 'rgba(26, 26, 46, VAR)',    // Night
  },
}

/**
 * Single layer of animated fog using CSS gradients.
 *
 * The fog effect is created using multiple radial gradients that overlap
 * to create a natural, organic fog appearance. The layer responds to scroll
 * position with parallax movement based on the speed multiplier.
 *
 * Enhanced with:
 * - Density modifier for entrance/exit effects
 * - Color variants for atmospheric variety
 * - Improved gradient complexity for more organic look
 */
export function FogLayer({
  speed,
  opacity,
  blur = 0,
  density = 1,
  variant = 'neutral',
  className
}: FogLayerProps) {
  const scrollY = useScrollPosition()
  const reducedMotion = useReducedMotion()

  // Calculate parallax offset
  const translateY = reducedMotion ? 0 : scrollY * (speed - 1) * 0.3

  // Apply density modifier to opacity
  const effectiveOpacity = Math.min(opacity * density, 1)

  // Get gradient colors for variant
  const colors = gradientVariants[variant]
  const c1 = colors.color1.replace('VAR', String(effectiveOpacity * 0.6))
  const c2 = colors.color2.replace('VAR', String(effectiveOpacity * 0.5))
  const c3 = colors.color3.replace('VAR', String(effectiveOpacity * 0.8))

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-0',
        className
      )}
      style={{
        transform: `translateY(${translateY}px)`,
        opacity: effectiveOpacity,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
        transition: 'opacity 1s ease-out',
      }}
    >
      {/* Multiple gradient layers create depth and organic appearance */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, ${c1} 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 70%, ${c2} 0%, transparent 50%),
            radial-gradient(ellipse 100% 50% at 50% 100%, ${c3} 0%, transparent 40%),
            radial-gradient(ellipse 70% 50% at 60% 20%, ${c1} 0%, transparent 55%),
            radial-gradient(ellipse 50% 70% at 30% 80%, ${c2} 0%, transparent 45%)
          `,
        }}
      />
    </div>
  )
}
