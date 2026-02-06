'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects'
import { useReducedMotion } from '@/hooks'
import type { FlagshipProject } from '@/data/projects'

interface FlagshipProjectCardProps {
  project: FlagshipProject
}

export function FlagshipProjectCard({ project }: FlagshipProjectCardProps) {
  const reducedMotion = useReducedMotion()

  return (
    <ScrollReveal>
      <div className="relative">
        {/* Background glow - larger for flagship */}
        <div
          className="absolute -inset-20 opacity-25 blur-[100px] rounded-full"
          style={{ background: project.theme.glow }}
        />

        <motion.div
          className="relative p-8 lg:p-12 rounded-3xl bg-fog-deep/40 border border-fog-mid/20"
          whileHover={reducedMotion ? {} : { scale: 1.005 }}
          transition={{ duration: 0.3 }}
        >
          {/* Scope label */}
          <p className="text-xs text-text-secondary tracking-widest uppercase mb-6">
            {project.subtitle}
          </p>

          {/* Title */}
          <h3 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-text-primary mb-3">
            {project.title}
          </h3>

          {/* Tagline */}
          <p
            className="text-lg lg:text-xl font-light mb-6"
            style={{ color: project.theme.primary }}
          >
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-text-secondary text-lg leading-relaxed mb-6 max-w-3xl">
            {project.description}
          </p>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-10">
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

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-10">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={screenshot.src}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative overflow-hidden rounded-xl border border-fog-mid/30 bg-fog-deep/50">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={200}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Subtle glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                        style={{ background: project.theme.glow }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </ScrollReveal>
  )
}
