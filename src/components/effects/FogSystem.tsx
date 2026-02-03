'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { FogLayer } from './FogLayer'
import { FOG_CONFIG, ENTRANCE } from '@/lib/constants'

interface FogSystemProps {
  /** Enable entrance mode with dense fog that clears */
  entranceMode?: boolean
  /** Global density modifier (0-2, where 1 is normal) */
  density?: number
  /** Callback when entrance animation completes */
  onEntranceComplete?: () => void
}

/**
 * Orchestrates multiple fog layers to create an immersive atmospheric effect.
 *
 * 3-layer system optimized for performance with entrance mode:
 *
 * 1. Background layer (0.5x speed): Main atmosphere
 * 2. Midground layer (1.0x speed): Neutral, medium blur
 * 3. Near layer (1.5x speed): Closer wisps
 *
 * Mobile uses 2 layers for better performance.
 * Entrance mode starts with 150% density fog that clears over 3 seconds.
 */
export function FogSystem({
  entranceMode = false,
  density: externalDensity = 1,
  onEntranceComplete
}: FogSystemProps) {
  const reducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [entranceComplete, setEntranceComplete] = useState(!entranceMode)

  // Spring-based density for smooth entrance animation
  const densitySpring = useSpring(
    entranceMode ? FOG_CONFIG.entranceDensity : FOG_CONFIG.normalDensity,
    { stiffness: 20, damping: 15 }
  )

  // Combine spring density with external density control
  const effectiveDensity = useTransform(
    densitySpring,
    (springVal) => springVal * externalDensity
  )

  // Track current density value for non-motion components
  const [currentDensity, setCurrentDensity] = useState<number>(
    entranceMode ? FOG_CONFIG.entranceDensity : FOG_CONFIG.normalDensity
  )

  useEffect(() => {
    return effectiveDensity.on('change', (v) => setCurrentDensity(v))
  }, [effectiveDensity])

  // Detect mobile devices for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      )
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle entrance animation
  useEffect(() => {
    if (entranceMode && !reducedMotion) {
      // Start clearing fog after a brief moment
      const clearTimer = setTimeout(() => {
        densitySpring.set(FOG_CONFIG.normalDensity)
      }, 500)

      // Mark entrance complete after full duration
      const completeTimer = setTimeout(() => {
        setEntranceComplete(true)
        onEntranceComplete?.()
      }, ENTRANCE.fogClear)

      return () => {
        clearTimeout(clearTimer)
        clearTimeout(completeTimer)
      }
    }
  }, [entranceMode, reducedMotion, densitySpring, onEntranceComplete])

  // Determine which layers to render based on device
  const layersToRender = useMemo(() => {
    if (isMobile) {
      // Mobile: 2 layers for better performance
      return [
        FOG_CONFIG.layers[0], // Background
        FOG_CONFIG.layers[1], // Midground
      ]
    }
    // Desktop: all 3 layers
    return FOG_CONFIG.layers
  }, [isMobile])

  // Variant assignment for visual variety
  const layerVariants: Array<'cool' | 'warm' | 'neutral'> = [
    'cool', 'neutral', 'warm', 'neutral', 'cool'
  ]

  if (reducedMotion) {
    // Static gradient fallback for accessibility
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 50%, #1a1a2e 100%)',
        }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* Base gradient establishes the night sky foundation */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0f0f1e 0%, #1a1a2e 50%, #0f0f1e 100%)',
        }}
        initial={entranceMode ? { opacity: 0.3 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Render fog layers with density control */}
      {layersToRender.map((config, index) => (
        <FogLayer
          key={index}
          speed={config.speed}
          opacity={config.opacity}
          blur={config.blur}
          density={currentDensity}
          variant={layerVariants[index] || 'neutral'}
        />
      ))}

      {/* Entrance overlay for extra dense fog at start */}
      {entranceMode && !entranceComplete && (
        <motion.div
          className="absolute inset-0 bg-deep-night"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ duration: ENTRANCE.fogClear / 1000, ease: 'easeOut' }}
        />
      )}
    </div>
  )
}
