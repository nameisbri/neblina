'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { cn } from '@/lib'

interface GlowOrbProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'blue' | 'purple' | 'silver'
  className?: string
  delay?: number
}

const sizes = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
}

const colors = {
  blue: 'from-particle-glow/30 via-particle-glow/10 to-transparent',
  purple: 'from-indigo-500/20 via-purple-500/10 to-transparent',
  silver: 'from-fog-light/20 via-fog-light/5 to-transparent',
}

export function GlowOrb({ size = 'md', color = 'blue', className, delay = 0 }: GlowOrbProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(
        'absolute rounded-full bg-gradient-radial blur-3xl pointer-events-none',
        sizes[size],
        colors[color],
        className
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: reducedMotion ? 1 : [1, 1.1, 1],
      }}
      transition={{
        opacity: { duration: 1, delay },
        scale: {
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay
        },
      }}
      aria-hidden="true"
    />
  )
}
