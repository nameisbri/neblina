/**
 * Animation timing constants for consistent motion throughout the application.
 * Based on the blue hour aesthetic - smooth, ethereal transitions.
 */

// Duration constants (in seconds for Framer Motion)
export const DURATION = {
  /** Quick micro-interactions */
  fast: 0.15,
  /** Standard UI transitions */
  normal: 0.3,
  /** Emphasized transitions */
  slow: 0.5,
  /** Page-level transitions */
  page: 0.8,
  /** Atmospheric effects */
  ambient: 2,
  /** Fog layer movements */
  fog: 4,
} as const

// Easing curves
export const EASING = {
  /** Smooth ease out for natural deceleration */
  easeOut: [0.16, 1, 0.3, 1] as const,
  /** Ease in-out for symmetric transitions */
  easeInOut: [0.4, 0, 0.2, 1] as const,
  /** Subtle bounce for playful interactions */
  bounce: [0.34, 1.56, 0.64, 1] as const,
  /** Linear for continuous animations */
  linear: [0, 0, 1, 1] as const,
} as const

// Spring configurations for Framer Motion
export const SPRING = {
  /** Gentle spring for subtle movements */
  gentle: { type: 'spring', stiffness: 100, damping: 15 } as const,
  /** Bouncy spring for playful interactions */
  bouncy: { type: 'spring', stiffness: 300, damping: 20 } as const,
  /** Stiff spring for snappy responses */
  stiff: { type: 'spring', stiffness: 400, damping: 30 } as const,
} as const

// Scroll-based animation thresholds
export const SCROLL = {
  /** Viewport amount to trigger scroll animations */
  triggerAmount: 0.2,
  /** Threshold for parallax effects */
  parallaxThreshold: 0.5,
} as const

// Breakpoint values (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Z-index layers for consistent stacking
export const Z_INDEX = {
  /** Background effects like fog and particles */
  background: -10,
  /** Main content layer */
  content: 0,
  /** Floating elements */
  float: 10,
  /** Fixed navigation */
  nav: 50,
  /** Modal overlays */
  modal: 100,
  /** Toast notifications */
  toast: 150,
} as const
