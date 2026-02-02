'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { cn } from '@/lib'
import { DURATION, EASING } from '@/lib/constants'

interface ScrollRevealProps {
  /** Content to animate on scroll */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Animation delay in seconds */
  delay?: number
}

/**
 * Wrapper component that reveals its children with a fade/slide animation
 * when they enter the viewport.
 *
 * Features:
 * - Uses Intersection Observer via Framer Motion's useInView
 * - Animates once when element enters viewport (not on exit)
 * - Supports staggered animations via delay prop
 * - Respects reduced motion preference
 *
 * The animation triggers when the element is 20% into the viewport,
 * providing a smooth reveal as users scroll through content.
 *
 * @example
 * // Basic usage
 * <ScrollReveal>
 *   <h2>This content fades in</h2>
 * </ScrollReveal>
 *
 * @example
 * // With staggered delay
 * <ScrollReveal delay={0}>
 *   <Card>First</Card>
 * </ScrollReveal>
 * <ScrollReveal delay={0.1}>
 *   <Card>Second</Card>
 * </ScrollReveal>
 */
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  // margin: '-20% 0px' triggers animation when element is 20% into viewport
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })
  const reducedMotion = useReducedMotion()

  // Skip animation for reduced motion preference
  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: DURATION.normal,
        delay,
        ease: EASING.easeOut,
      }}
    >
      {children}
    </motion.div>
  )
}
