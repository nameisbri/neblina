'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, motion, useSpring, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1.5,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(reducedMotion ? value : 0)

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  })

  useEffect(() => {
    if (isInView && !reducedMotion) {
      spring.set(value)
    } else if (reducedMotion) {
      setDisplayValue(value)
    }
  }, [isInView, value, spring, reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    const unsubscribe = spring.on('change', (latest) => {
      // Handle decimals properly
      if (value % 1 !== 0) {
        setDisplayValue(Math.round(latest * 10) / 10)
      } else {
        setDisplayValue(Math.round(latest))
      }
    })

    return unsubscribe
  }, [spring, value, reducedMotion])

  // Format the display value
  const formattedValue = value % 1 !== 0
    ? displayValue.toFixed(1)
    : displayValue.toLocaleString()

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: reducedMotion ? 1 : 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}{formattedValue}{suffix}
    </motion.span>
  )
}
