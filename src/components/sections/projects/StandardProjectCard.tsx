'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects'
import { useReducedMotion } from '@/hooks'
import type { StandardProject } from '@/data/projects'

interface StandardProjectCardProps {
  project: StandardProject
  index: number
}

export function StandardProjectCard({ project, index }: StandardProjectCardProps) {
  const reducedMotion = useReducedMotion()
  const isEven = index % 2 === 0

  return (
    <ScrollReveal>
      <div className="relative">
        {/* Background glow */}
        <div
          className="absolute -inset-10 opacity-15 blur-3xl rounded-full"
          style={{ background: project.theme.glow }}
        />

        <motion.div
          className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 lg:p-10 rounded-3xl bg-fog-deep/30 border border-fog-mid/10"
          whileHover={reducedMotion ? {} : { scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Visual Side */}
          <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Gradient background */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${project.theme.primary}15, transparent 50%, ${project.theme.glow})`,
                }}
              />

              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: `${project.theme.primary}20` }}
                >
                  <span className="font-serif text-4xl text-white/80">{project.title[0]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
            {/* Scope label */}
            <p className="text-xs text-text-secondary tracking-widest uppercase mb-4">
              {project.subtitle}
            </p>

            {/* Title */}
            <h3 className="font-serif text-3xl lg:text-4xl text-text-primary mb-2">
              {project.title}
            </h3>

            {/* Tagline */}
            {project.tagline && (
              <p
                className="text-base lg:text-lg font-light mb-4"
                style={{ color: project.theme.primary }}
              >
                {project.tagline}
              </p>
            )}

            {/* Description */}
            <p className="text-text-secondary leading-relaxed mb-6">{project.description}</p>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm transition-opacity duration-200 hover:opacity-70"
                    style={{ color: project.theme.primary }}
                  >
                    {link.label}
                    <span className="text-xs">→</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  )
}
