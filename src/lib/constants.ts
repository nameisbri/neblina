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
  /** Custom cursor */
  cursor: 9999,
} as const

// Hero entrance sequence timing (in milliseconds)
export const ENTRANCE = {
  /** Duration for fog to clear */
  fogClear: 1200,
  /** Duration for title reveal */
  titleReveal: 800,
  /** Duration for content fade in */
  contentFade: 600,
  /** Total entrance duration */
  totalDuration: 2500,
  /** Delay before title starts appearing */
  titleDelay: 400,
} as const

// Fog system configuration
export const FOG_CONFIG = {
  /** Layer configurations for 3-layer system (reduced for performance) */
  layers: [
    { speed: 0.5, opacity: 0.3, blur: 25 },   // Background
    { speed: 1.0, opacity: 0.4, blur: 12 },   // Middle ground
    { speed: 1.5, opacity: 0.25, blur: 5 },   // Near
  ],
  /** Entrance mode starts with dense fog */
  entranceDensity: 1.5,
  /** Normal operating density */
  normalDensity: 1.0,
} as const

// Service accent colors for portals
export const SERVICE_COLORS = {
  mobile: { primary: '#6366f1', glow: 'rgba(99, 102, 241, 0.3)' },
  product: { primary: '#a855f7', glow: 'rgba(168, 85, 247, 0.3)' },
  consulting: { primary: '#3b82f6', glow: 'rgba(59, 130, 246, 0.3)' },
  web: { primary: '#06b6d4', glow: 'rgba(6, 182, 212, 0.3)' },
} as const

// Particle counts by device capability tier (reduced for performance)
export const PARTICLE_COUNTS = {
  high: { stars: 60, dust: 30, glow: 12 },
  medium: { stars: 40, dust: 20, glow: 8 },
  low: { stars: 20, dust: 10, glow: 4 },
} as const

// Cursor configuration
export const CURSOR_CONFIG = {
  /** Base size of cursor orb */
  size: 20,
  /** Expanded size on hover */
  hoverSize: 30,
  /** Smoothing factor (higher = more responsive, lower = smoother) */
  smoothing: 0.6,
  /** Trail particle count (0 = disabled for performance) */
  trailLength: 0,
  /** Magnetic pull radius */
  magnetRadius: 80,
} as const
