'use client'

import { useScrollPosition, useReducedMotion } from '@/hooks'

/**
 * Decorative crescent moon element with subtle parallax effect.
 *
 * The moon serves as a visual anchor in the upper-right area of the viewport,
 * reinforcing the "blue hour" aesthetic. It features:
 *
 * 1. A soft glow effect using radial gradient
 * 2. CSS-only crescent shape using overlapping circles
 * 3. Very slow parallax (0.3x scroll speed) for subtle depth
 *
 * The crescent is created by overlapping a shadow circle over the lit moon,
 * simulating the shadow cast by Earth during a crescent phase.
 *
 * For reduced motion, the moon remains static without parallax movement.
 */
export function Moon() {
  const scrollY = useScrollPosition()
  const reducedMotion = useReducedMotion()

  // Slow parallax for the moon - moves opposite to scroll direction
  // Multiplied by -0.1 for very subtle movement
  const translateY = reducedMotion ? 0 : scrollY * -0.1

  return (
    <div
      className="pointer-events-none fixed z-[5]"
      style={{
        top: '10%',
        right: '15%',
        transform: `translateY(${translateY}px)`,
      }}
      aria-hidden="true"
    >
      {/* Ambient glow around the moon */}
      <div
        className="absolute rounded-full"
        style={{
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(203, 213, 225, 0.15) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
        }}
      />

      {/* Crescent moon container */}
      <div
        className="relative"
        style={{
          width: '40px',
          height: '40px',
        }}
      >
        {/* Lit portion of the moon */}
        <div
          className="absolute rounded-full"
          style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, rgba(203, 213, 225, 0.6) 0%, rgba(203, 213, 225, 0.3) 100%)',
            boxShadow: '0 0 20px rgba(203, 213, 225, 0.3)',
          }}
        />
        {/* Shadow overlay creates the crescent shape */}
        <div
          className="absolute rounded-full"
          style={{
            width: '35px',
            height: '35px',
            // Use the same background as the night sky
            background: '#0f0f1e',
            top: '-5px',
            left: '10px',
          }}
        />
      </div>
    </div>
  )
}
