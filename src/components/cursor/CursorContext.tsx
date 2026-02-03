'use client'

import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks'
import { CURSOR_CONFIG } from '@/lib/constants'

export type CursorMode = 'default' | 'hover' | 'drag' | 'hidden'

interface CursorPosition {
  x: number
  y: number
}

interface CursorContextValue {
  /** Raw cursor position */
  position: CursorPosition
  /** Smoothed cursor position for visual rendering */
  smoothPosition: CursorPosition
  /** Current cursor mode */
  mode: CursorMode
  /** Whether custom cursor is active (not on touch devices) */
  isActive: boolean
  /** Set the cursor mode */
  setCursorMode: (mode: CursorMode) => void
  /** Current magnetic target element (if any) */
  magnetTarget: HTMLElement | null
  /** Set the magnetic target */
  setMagnetTarget: (el: HTMLElement | null) => void
  /** Whether cursor is currently being pressed */
  isPressed: boolean
}

const CursorContext = createContext<CursorContextValue | null>(null)

export function useCursor() {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider')
  }
  return context
}

interface CursorProviderProps {
  children: React.ReactNode
}

export function CursorProvider({ children }: CursorProviderProps) {
  const reducedMotion = useReducedMotion()
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [mode, setMode] = useState<CursorMode>('default')
  const [isActive, setIsActive] = useState(false)
  const [magnetTarget, setMagnetTarget] = useState<HTMLElement | null>(null)
  const [isPressed, setIsPressed] = useState(false)

  const rafRef = useRef<number | null>(null)
  const targetPosRef = useRef<CursorPosition>({ x: 0, y: 0 })
  const smoothPosRef = useRef<CursorPosition>({ x: 0, y: 0 })

  // Detect if we should show custom cursor
  useEffect(() => {
    if (reducedMotion) {
      setIsActive(false)
      return
    }

    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches

    setIsActive(!isTouchDevice)

    // Add/remove body class for hiding system cursor
    if (!isTouchDevice) {
      document.body.classList.add('custom-cursor-active')
    }

    return () => {
      document.body.classList.remove('custom-cursor-active')
    }
  }, [reducedMotion])

  // Track raw mouse position
  useEffect(() => {
    if (!isActive) return

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY }
      setPosition(newPos)
      targetPosRef.current = newPos
    }

    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isActive])

  // Smooth cursor animation loop
  useEffect(() => {
    if (!isActive) return

    const animate = () => {
      const smoothing = CURSOR_CONFIG.smoothing

      // Lerp toward target position
      smoothPosRef.current = {
        x: smoothPosRef.current.x + (targetPosRef.current.x - smoothPosRef.current.x) * smoothing,
        y: smoothPosRef.current.y + (targetPosRef.current.y - smoothPosRef.current.y) * smoothing,
      }

      setSmoothPosition({ ...smoothPosRef.current })
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isActive])

  const setCursorMode = useCallback((newMode: CursorMode) => {
    setMode(newMode)
  }, [])

  const value: CursorContextValue = {
    position,
    smoothPosition,
    mode,
    isActive,
    setCursorMode,
    magnetTarget,
    setMagnetTarget,
    isPressed,
  }

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  )
}
