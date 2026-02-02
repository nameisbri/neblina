'use client'

import { createContext, useContext, useEffect, useState } from 'react'

/**
 * Context type for motion preferences.
 * Provides accessibility support for users who prefer reduced motion.
 */
interface MotionContextType {
  /** Whether the user has requested reduced motion */
  reducedMotion: boolean
}

const MotionContext = createContext<MotionContextType>({ reducedMotion: false })

/**
 * MotionProvider wraps the application and provides motion preference state.
 * It listens to the `prefers-reduced-motion` media query and updates accordingly.
 *
 * This follows the Single Responsibility Principle - it only handles motion preferences.
 * Components can consume this context to conditionally disable or simplify animations.
 *
 * @example
 * // In layout.tsx
 * <MotionProvider>
 *   {children}
 * </MotionProvider>
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Check the user's motion preference on mount
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    // Listen for changes to the preference (e.g., user changes system settings)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <MotionContext.Provider value={{ reducedMotion }}>
      {children}
    </MotionContext.Provider>
  )
}

/**
 * Custom hook to access motion preferences from MotionContext.
 * Use this in components that need to respect reduced motion settings.
 *
 * @returns Object containing `reducedMotion` boolean
 *
 * @example
 * const { reducedMotion } = useMotion()
 *
 * // Conditionally apply animations
 * const variants = reducedMotion
 *   ? { initial: {}, animate: {} }
 *   : { initial: { opacity: 0 }, animate: { opacity: 1 } }
 */
export function useMotion() {
  return useContext(MotionContext)
}
