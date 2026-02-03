'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects'
import { useReducedMotion } from '@/hooks'
import type { ProcessProject } from '@/data/projects'
import { StatusIndicator } from './components'

interface ProcessCardProps {
  project: ProcessProject
}

export function ProcessCard({ project }: ProcessCardProps) {
  const reducedMotion = useReducedMotion()

  return (
    <ScrollReveal>
      <div className="relative max-w-2xl mx-auto">
        {/* Background glow - subtle for process card */}
        <div
          className="absolute -inset-8 opacity-10 blur-2xl rounded-full"
          style={{ background: project.theme.glow }}
        />

        <motion.div
          className="relative p-6 lg:p-8 rounded-2xl bg-fog-deep/30 border border-fog-mid/10"
          whileHover={reducedMotion ? {} : { y: -4, borderColor: `${project.theme.primary}30` }}
          transition={{ duration: 0.3 }}
        >
          {/* Header with icon */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${project.theme.primary}20` }}
            >
              ⚙️
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="font-serif text-2xl text-text-primary">{project.title}</h3>
                <StatusIndicator
                  status={project.status}
                  label={project.statusLabel}
                  theme={project.theme}
                  animated={true}
                />
              </div>
              <span className="text-xs text-text-secondary tracking-wide uppercase">
                {project.subtitle}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed mb-6">{project.description}</p>

          {/* Principles */}
          <div className="mb-6">
            <h4
              className="text-xs font-medium tracking-wider uppercase mb-3"
              style={{ color: project.theme.primary }}
            >
              Key Principles
            </h4>
            <ul className="space-y-2">
              {project.principles.map((principle, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span style={{ color: project.theme.primary }} className="flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Artifacts */}
          {project.artifacts && project.artifacts.length > 0 && (
            <div>
              <h4
                className="text-xs font-medium tracking-wider uppercase mb-3"
                style={{ color: project.theme.primary }}
              >
                Documentation Artifacts
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.artifacts.map((artifact) => (
                  <span
                    key={artifact}
                    className="px-3 py-1.5 text-xs font-mono bg-fog-deep/60 rounded-lg border border-fog-mid/20 text-text-secondary"
                  >
                    {artifact}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </ScrollReveal>
  )
}
