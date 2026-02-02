'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import { useMousePosition, useReducedMotion } from '@/hooks'

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  size: number
  opacity: number
  baseOpacity: number
  speed: number
  offset: number
  pulseOffset: number
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mousePosition = useMousePosition()
  const mousePosRef = useRef<{ x: number; y: number } | null>(null)
  const reducedMotion = useReducedMotion()
  const rafRef = useRef<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Keep mouse position in ref for animation loop
  useEffect(() => {
    mousePosRef.current = mousePosition
  }, [mousePosition])

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

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const count = reducedMotion ? 10 : isMobile ? 18 : 30

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const baseOpacity = 0.2 + Math.random() * 0.4
      particles.push({
        x,
        y,
        targetX: x,
        targetY: y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        size: 3 + Math.random() * 6,
        opacity: baseOpacity,
        baseOpacity,
        speed: 0.3 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
        pulseOffset: Math.random() * Math.PI * 2,
      })
    }
    particlesRef.current = particles
  }, [reducedMotion, isMobile])

  const drawParticle = useCallback((
    ctx: CanvasRenderingContext2D,
    particle: Particle
  ) => {
    const { x, y, size, opacity } = particle

    // Outer ethereal glow - larger, softer
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
    gradient.addColorStop(0, `rgba(165, 180, 252, ${opacity * 0.8})`)
    gradient.addColorStop(0.3, `rgba(165, 180, 252, ${opacity * 0.4})`)
    gradient.addColorStop(0.6, `rgba(165, 180, 252, ${opacity * 0.1})`)
    gradient.addColorStop(1, 'rgba(165, 180, 252, 0)')

    ctx.beginPath()
    ctx.arc(x, y, size * 3, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()

    // Inner glow
    const innerGradient = ctx.createRadialGradient(x, y, 0, x, y, size)
    innerGradient.addColorStop(0, `rgba(224, 242, 254, ${opacity})`)
    innerGradient.addColorStop(0.5, `rgba(199, 210, 254, ${opacity * 0.5})`)
    innerGradient.addColorStop(1, 'rgba(165, 180, 252, 0)')

    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = innerGradient
    ctx.fill()

    // Tiny bright core
    ctx.beginPath()
    ctx.arc(x, y, size * 0.2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`
    ctx.fill()
  }, [])

  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const mouse = mousePosRef.current

    particlesRef.current.forEach((particle) => {
      if (!reducedMotion) {
        // Smooth floating animation
        const floatY = Math.sin(time * 0.0008 * particle.speed + particle.offset) * 15
        const floatX = Math.cos(time * 0.0006 * particle.speed + particle.offset) * 10

        // Gentle opacity pulse
        const pulse = Math.sin(time * 0.001 + particle.pulseOffset) * 0.15
        particle.opacity = particle.baseOpacity + pulse

        // Calculate target position (base + float)
        particle.targetX = particle.baseX + floatX
        particle.targetY = particle.baseY + floatY

        // Mouse attraction with smooth approach
        if (mouse && !isMobile) {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const strength = (200 - distance) / 200
            const attraction = strength * strength * 0.5 // Quadratic falloff for smoother feel
            particle.targetX += dx * attraction * 0.3
            particle.targetY += dy * attraction * 0.3
            // Brighten particles near cursor
            particle.opacity = Math.min(particle.baseOpacity + 0.3 * strength, 1)
          }
        }

        // Smooth interpolation using velocity with damping
        const ease = 0.02 // Lower = smoother/slower
        const damping = 0.95 // Higher = more momentum

        particle.vx = (particle.vx + (particle.targetX - particle.x) * ease) * damping
        particle.vy = (particle.vy + (particle.targetY - particle.y) * ease) * damping

        particle.x += particle.vx
        particle.y += particle.vy
      }

      drawParticle(ctx, particle)
    })

    rafRef.current = requestAnimationFrame(animate)
  }, [reducedMotion, isMobile, drawParticle])

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
