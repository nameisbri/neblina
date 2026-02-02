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
  /** Additional CSS classes */
  className?: string
}

/**
 * Single layer of animated fog using CSS gradients.
 *
 * The fog effect is created using multiple radial gradients that overlap
 * to create a natural, organic fog appearance. The layer responds to scroll
 * position with parallax movement based on the speed multiplier.
 *
 * Parallax behavior:
 * - speed < 1: Layer moves slower than scroll (appears farther)
 * - speed = 1: Layer moves with scroll (no parallax)
 * - speed > 1: Layer moves faster than scroll (appears closer)
 */
export function FogLayer({ speed, opacity, blur = 0, className }: FogLayerProps) {
  const scrollY = useScrollPosition()
  const reducedMotion = useReducedMotion()

  // Calculate parallax offset
  // The (speed - 1) factor determines direction and magnitude
  // Multiplying by 0.3 dampens the effect for subtlety
  const translateY = reducedMotion ? 0 : scrollY * (speed - 1) * 0.3

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-0',
        className
      )}
      style={{
        transform: `translateY(${translateY}px)`,
        opacity,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
        // Optimize for animations when motion is enabled
        willChange: reducedMotion ? 'auto' : 'transform',
      }}
    >
      {/* Multiple gradient layers create depth and organic appearance */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, rgba(55, 65, 81, ${opacity * 0.6}) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 70%, rgba(55, 65, 81, ${opacity * 0.5}) 0%, transparent 50%),
            radial-gradient(ellipse 100% 50% at 50% 100%, rgba(26, 26, 46, ${opacity * 0.8}) 0%, transparent 40%)
          `,
        }}
      />
    </div>
  )
}
