'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

interface PhilosophyColumnProps {
  title: string
  subtitle: string
  points: string[]
  index: number
}

export function PhilosophyColumn({ title, subtitle, points, index }: PhilosophyColumnProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="group relative p-6 lg:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: reducedMotion ? 0 : index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-particle-glow/0 via-particle-glow/0 to-particle-glow/0 group-hover:from-particle-glow/5 group-hover:via-particle-glow/3 group-hover:to-transparent transition-all duration-500" />

      {/* Left accent line */}
      <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-fog-mid/30 to-transparent group-hover:via-particle-glow/40 transition-colors duration-500" />

      <div className="relative">
        {/* Subtitle */}
        <span className="text-particle-glow/70 text-xs tracking-[0.2em] uppercase font-light">
          {subtitle}
        </span>

        {/* Title */}
        <h3 className="font-serif text-2xl lg:text-3xl text-text-primary mt-2 mb-6 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Points */}
        <ul className="space-y-4">
          {points.map((point, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-text-secondary text-sm lg:text-base leading-relaxed"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: reducedMotion ? 0 : index * 0.15 + i * 0.1 + 0.2,
              }}
            >
              <span className="text-particle-glow/50 mt-1.5 text-xs">&#9670;</span>
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
