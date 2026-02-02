'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib'

interface ServiceCardProps {
  title: string
  description: string
  className?: string
}

export function ServiceCard({ title, description, className }: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative p-8 rounded-2xl',
        'bg-fog-deep/20 border border-fog-mid/10',
        'hover:bg-fog-deep/40 hover:border-particle-glow/20',
        'transition-all duration-500 ease-out',
        'focus-within:ring-2 focus-within:ring-focus-ring',
        className
      )}
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Subtle glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(165, 180, 252, 0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <h3 className="text-xl font-serif text-text-primary mb-3">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
