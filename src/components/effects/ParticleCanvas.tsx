'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import { useMousePosition, useReducedMotion } from '@/hooks'

/**
 * Represents a single dewlight particle in the canvas.
 */
interface Particle {
  /** Current X position */
  x: number
  /** Current Y position */
  y: number
  /** Original X position for floating animation */
  baseX: number
  /** Original Y position for floating animation */
  baseY: number
  /** Particle radius in pixels */
  size: number
  /** Particle opacity from 0 to 1 */
  opacity: number
  /** Animation speed multiplier */
  speed: number
  /** Phase offset for sine wave animation */
  offset: number
}

/**
 * Canvas-based particle system for the dewlight effect.
 *
 * Creates an ethereal atmosphere with glowing particles that:
 * - Float gently using sine wave animations
 * - Respond to cursor proximity (drift toward mouse within 150px)
 * - Feature soft glow effects using radial gradients
 *
 * The particle system uses requestAnimationFrame for smooth 60fps animation
 * and automatically adjusts particle count and behavior based on the user's
 * reduced motion preference.
 *
 * Performance considerations:
 * - Uses a single canvas for all particles (batch rendering)
 * - RAF-based animation with proper cleanup
 * - Reduces particle count for reduced motion mode
 */
export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mousePosition = useMousePosition()
  const reducedMotion = useReducedMotion()
  const rafRef = useRef<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  /**
   * Detect mobile/touch devices for performance optimization.
   * Mobile devices get fewer particles and no cursor interaction.
   */
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

  /**
   * Initialize particles with random positions and properties.
   * Creates fewer particles on mobile and in reduced motion mode for performance.
   */
  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    // Reduce particle count: mobile gets 15, desktop gets 25, reduced motion gets 10
    const count = reducedMotion ? 10 : isMobile ? 15 : 25

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: 4 + Math.random() * 8, // 4-12px radius
        opacity: 0.3 + Math.random() * 0.5, // 0.3-0.8 opacity
        speed: 0.5 + Math.random() * 1, // Variable animation speed
        offset: Math.random() * Math.PI * 2, // Random phase for natural movement
      })
    }
    particlesRef.current = particles
  }, [reducedMotion, isMobile])

  /**
   * Renders a single particle with glow effect.
   * Uses two layers: outer glow gradient and bright core.
   */
  const drawParticle = useCallback((
    ctx: CanvasRenderingContext2D,
    particle: Particle
  ) => {
    const { x, y, size, opacity } = particle

    // Outer glow using radial gradient
    // Color: particle-glow (#a5b4fc) from the blue hour palette
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2)
    gradient.addColorStop(0, `rgba(165, 180, 252, ${opacity})`)
    gradient.addColorStop(0.5, `rgba(165, 180, 252, ${opacity * 0.3})`)
    gradient.addColorStop(1, 'rgba(165, 180, 252, 0)')

    ctx.beginPath()
    ctx.arc(x, y, size * 2, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()

    // Bright core for the dewlight effect
    // Color: Light blue (#e0f2fe) for contrast
    ctx.beginPath()
    ctx.arc(x, y, size * 0.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(224, 242, 254, ${opacity})`
    ctx.fill()
  }, [])

  /**
   * Main animation loop.
   * Updates particle positions and renders all particles each frame.
   */
  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas for fresh frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((particle) => {
      // Floating animation using sine/cosine waves
      // Creates organic, dreamy movement
      if (!reducedMotion) {
        const floatY = Math.sin(time * 0.001 * particle.speed + particle.offset) * 10
        const floatX = Math.cos(time * 0.0005 * particle.speed + particle.offset) * 5

        particle.y = particle.baseY + floatY
        particle.x = particle.baseX + floatX
      }

      // Mouse attraction effect (disabled on mobile/touch devices)
      // Particles gently drift toward cursor when within 150px
      if (mousePosition && !reducedMotion && !isMobile) {
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          // Force increases as particle gets closer to cursor
          const force = (150 - distance) / 150 * 0.03
          particle.x += dx * force
          particle.y += dy * force
        }
      }

      drawParticle(ctx, particle)
    })

    rafRef.current = requestAnimationFrame(animate)
  }, [mousePosition, reducedMotion, isMobile, drawParticle])

  /**
   * Canvas setup and resize handling.
   * Initializes particles and starts animation loop.
   */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles(canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [initParticles, animate])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  )
}
