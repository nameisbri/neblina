'use client'

import { useEffect } from 'react'

export function DisableCursor() {
  useEffect(() => {
    document.body.classList.remove('custom-cursor-active')
    return () => {
      document.body.classList.add('custom-cursor-active')
    }
  }, [])

  return null
}
