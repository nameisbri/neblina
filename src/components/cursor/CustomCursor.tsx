'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCursor } from './CursorContext'
import { CURSOR_CONFIG, Z_INDEX } from '@/lib/constants'

/**
 * Custom glow orb cursor that follows mouse movement with smooth interpolation.
 *
 * Features:
 * - Soft glow effect matching the particle aesthetic
 * - Morphs size based on cursor mode (hover, drag, etc.)
 * - Magnetic pull effect when near interactive elements
 * - Subtle pulse animation
 */
export function CustomCursor() {
  const { smoothPosition, mode, isActive, isPressed } = useCursor()

  if (!isActive) return null

  // Calculate size based on mode
  const getSize = () => {
    switch (mode) {
      case 'hover':
        return CURSOR_CONFIG.hoverSize
      case 'drag':
        return CURSOR_CONFIG.size * 0.8
      case 'hidden':
        return 0
      default:
        return CURSOR_CONFIG.size
    }
  }

  const size = getSize()
  const pressedScale = isPressed ? 0.85 : 1

  return (
    <AnimatePresence>
      {mode !== 'hidden' && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 mix-blend-screen"
          style={{
            zIndex: Z_INDEX.cursor,
            x: smoothPosition.x - size / 2,
            y: smoothPosition.y - size / 2,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: pressedScale,
            opacity: 1,
            width: size,
            height: size,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            scale: { type: 'spring', stiffness: 400, damping: 25 },
            opacity: { duration: 0.2 },
            width: { type: 'spring', stiffness: 300, damping: 20 },
            height: { type: 'spring', stiffness: 300, damping: 20 },
          }}
        >
          {/* Outer glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(165, 180, 252, 0.4) 0%, rgba(165, 180, 252, 0.1) 50%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Middle glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              top: '15%',
              left: '15%',
              right: '15%',
              bottom: '15%',
              background: `radial-gradient(circle, rgba(199, 210, 254, 0.6) 0%, rgba(165, 180, 252, 0.2) 60%, transparent 80%)`,
            }}
          />

          {/* Inner core */}
          <motion.div
            className="absolute rounded-full"
            style={{
              top: '35%',
              left: '35%',
              right: '35%',
              bottom: '35%',
              background: `radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(224, 231, 255, 0.5) 50%, transparent 80%)`,
            }}
            animate={
              mode === 'hover'
                ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.9, 1, 0.9],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
