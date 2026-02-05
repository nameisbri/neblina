'use client'

import { motion } from 'framer-motion'

const navLinks = [
  { href: '#projects', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative w-full px-6 py-16 md:px-12 lg:px-24 overflow-hidden">
      {/* Horizon glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-particle-glow/20 to-transparent blur-[1px]" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Circled N logo */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/"
            aria-label="Return to top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-text-secondary/30 hover:border-text-secondary/60 transition-colors"
          >
            <span className="font-serif text-2xl text-text-secondary">N</span>
          </a>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          aria-label="Footer navigation"
          className="flex justify-center gap-8 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>

        {/* Legal */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-fog-mid">
            &copy; 2026 Neblina
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
