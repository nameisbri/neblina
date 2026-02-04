'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects'
import { useReducedMotion } from '@/hooks'

const services = [
  { label: 'Product design', href: '#services' },
  { label: 'Web design', href: '#services' },
  { label: 'Frontend development', href: '#services' },
]

export function ServiceTags() {
  const reducedMotion = useReducedMotion()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="py-12 lg:py-16">
      <ScrollReveal delay={0.1}>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6"
          aria-label="Service offerings"
        >
          {services.map((service, index) => (
            <span key={service.label} className="flex items-center">
              <motion.a
                href={service.href}
                onClick={(e) => handleClick(e, service.href)}
                className="text-xs uppercase tracking-widest text-text-secondary/80 hover:text-particle-glow transition-colors duration-300 px-2 py-1"
                whileHover={
                  reducedMotion
                    ? {}
                    : {
                        textShadow: '0 0 20px rgba(165, 180, 252, 0.5)',
                      }
                }
                style={{ fontVariantCaps: 'all-small-caps' }}
              >
                {service.label}
              </motion.a>

              {index < services.length - 1 && (
                <span
                  className="text-fog-mid/50 text-xs ml-3"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </nav>
      </ScrollReveal>
    </div>
  )
}
