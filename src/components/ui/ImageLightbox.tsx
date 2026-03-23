'use client'

import { useEffect, useCallback, useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks'
import { Z_INDEX, DURATION } from '@/lib/constants'
import type { ProjectScreenshot } from '@/data/projects'

interface ImageLightboxProps {
  images: ProjectScreenshot[]
  selectedIndex: number
  onClose: () => void
}

export function ImageLightbox({ images, selectedIndex, onClose }: ImageLightboxProps) {
  const reducedMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(selectedIndex)
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    // Save current focus to restore on close
    previousFocusRef.current = document.activeElement as HTMLElement

    // Focus the close button when lightbox opens
    closeButtonRef.current?.focus()

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()

      // Focus trap — keep Tab within the dialog
      if (e.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll(
          'button:not([disabled])'
        )
        if (!focusable?.length) return

        const first = focusable[0] as HTMLElement
        const last = focusable[focusable.length - 1] as HTMLElement

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      // Restore focus to the element that opened the lightbox
      previousFocusRef.current?.focus()
    }
  }, [onClose, goNext, goPrev])

  const current = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Image viewer: ${current.alt} (${currentIndex + 1} of ${images.length})`}
        className="fixed inset-0 flex items-center justify-center"
        style={{ zIndex: Z_INDEX.modal }}
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reducedMotion ? { opacity: 0 } : { opacity: 0 }}
        transition={{ duration: DURATION.normal }}
      >
        {/* Backdrop — click to close */}
        <div
          className="absolute inset-0 bg-deep-night/90 backdrop-blur-sm cursor-pointer"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="fixed top-6 right-6 text-text-secondary hover:text-text-primary transition-colors duration-200 p-2"
          style={{ zIndex: Z_INDEX.modal + 1 }}
          aria-label="Close lightbox"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors duration-200 p-2"
              style={{ zIndex: Z_INDEX.modal + 1 }}
              aria-label="Previous image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors duration-200 p-2"
              style={{ zIndex: Z_INDEX.modal + 1 }}
              aria-label="Next image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </>
        )}

        {/* Image */}
        <motion.div
          key={currentIndex}
          className="relative flex items-center justify-center max-w-[90vw] md:max-w-[500px] cursor-default"
          onClick={(e) => e.stopPropagation()}
          initial={reducedMotion ? {} : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={reducedMotion ? {} : { scale: 0.9, opacity: 0 }}
          transition={{ duration: DURATION.normal }}
        >
          <Image
            src={current.src}
            alt={current.alt}
            width={500}
            height={1000}
            className="w-auto max-h-[85vh] rounded-2xl object-contain"
            priority
          />
        </motion.div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-6 text-text-secondary text-sm" aria-live="polite">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
