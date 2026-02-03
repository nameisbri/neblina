'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

export function Footer() {
  const reducedMotion = useReducedMotion()

  return (
    <footer className="relative w-full px-6 py-16 md:px-12 lg:px-24 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-fog-mid/30 to-transparent" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Logo mark */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 rounded-full border border-fog-mid/30 flex items-center justify-center">
            <span className="font-serif text-2xl text-text-secondary">N</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-center text-text-secondary font-serif text-lg mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Emerging clarity.
        </motion.p>

        {/* Info */}
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-fog-mid">
            &copy; 2026 Neblina Digital Inc.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
