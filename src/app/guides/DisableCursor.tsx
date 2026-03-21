'use client'

import { useEffect } from 'react'
import { useCursor } from '@/components/cursor'

export function DisableCursor() {
  const { setIsActive } = useCursor()

  useEffect(() => {
    document.body.classList.remove('custom-cursor-active')
    setIsActive(false)
    return () => {
      document.body.classList.add('custom-cursor-active')
      setIsActive(true)
    }
  }, [setIsActive])

  return null
}
