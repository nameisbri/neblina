'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib'

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

/**
 * Service card component for displaying service offerings.
 * Features a subtle hover effect with glow and lift animation.
 *
 * @example
 * <ServiceCard
 *   title="Web Development"
 *   description="Custom websites built with modern technologies"
 *   icon={<CodeIcon />}
 * />
 */
export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative p-6 rounded-xl',
        'bg-fog-deep/30 border border-fog-mid/20',
        'hover:bg-fog-deep/50 hover:border-particle-glow/30',
        'transition-all duration-300',
        'focus-within:ring-2 focus-within:ring-focus-ring',
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glow effect on hover */}
      <div
        className={
          'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 ' +
          'transition-opacity duration-300 pointer-events-none'
        }
        style={{
          background: 'radial-gradient(ellipse at center, rgba(165, 180, 252, 0.1) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-particle-glow">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-serif text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
