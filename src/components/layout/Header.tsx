'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib'

const navLinks = [
  { href: '#projects', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      // Determine active section based on scroll position
      // Sections in page order (top to bottom)
      const sections = ['projects', 'services', 'contact']
      let currentSection = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Section is active if its top is at or above the middle of viewport
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-fog-deep focus:text-text-primary focus:rounded focus:outline-none focus:ring-2 focus:ring-focus-ring"
      >
        Skip to main content
      </a>

      {/* Sticky navigation */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            aria-label="Main navigation"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <div className="mx-auto max-w-6xl px-6 py-4">
              <div className="flex items-center justify-between bg-deep-night/80 backdrop-blur-md border border-fog-mid/10 rounded-full px-6 py-3">
                {/* Logo */}
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="font-serif text-xl text-text-primary hover:text-white transition-colors"
                >
                  Neblina
                </a>

                {/* Nav links */}
                <div className="flex items-center gap-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        'text-sm transition-colors relative',
                        activeSection === link.href.slice(1)
                          ? 'text-text-primary'
                          : 'text-text-secondary hover:text-text-primary'
                      )}
                    >
                      {link.label}
                      {activeSection === link.href.slice(1) && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute -bottom-1 left-0 right-0 h-px bg-particle-glow"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
