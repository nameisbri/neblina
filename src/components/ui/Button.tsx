'use client'

import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

/**
 * Button component with three visual variants and size options.
 * Uses Framer Motion for subtle hover/tap animations.
 *
 * Variants:
 * - primary: Glowing CTA button with particle-glow accent
 * - secondary: Subtle fog-themed button
 * - ghost: Minimal text-only button
 *
 * @example
 * <Button variant="primary" size="lg">Get Started</Button>
 * <Button variant="ghost">Learn More</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg ' +
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 ' +
      'focus-visible:ring-offset-deep-night disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
      primary:
        'bg-particle-glow/20 text-text-primary border border-particle-glow/30 ' +
        'hover:bg-particle-glow/30 hover:border-particle-glow/50 ' +
        'hover:shadow-[0_0_30px_rgba(165,180,252,0.3)]',
      secondary:
        'bg-fog-mid/20 text-text-primary border border-fog-mid/30 ' +
        'hover:bg-fog-mid/30 hover:border-fog-mid/50',
      ghost:
        'text-text-secondary hover:text-text-primary hover:bg-fog-mid/10',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
