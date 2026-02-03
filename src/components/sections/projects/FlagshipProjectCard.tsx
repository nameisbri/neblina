'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects'
import { useReducedMotion } from '@/hooks'
import type { FlagshipProject } from '@/data/projects'
import { StatusIndicator, TechStackBadges, FeatureHighlight, WhyItMatters } from './components'

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
          {/* Header row: Status + Type */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <StatusIndicator
              status={project.status}
              label={project.statusLabel}
              theme={project.theme}
            />
            <span className="text-xs text-text-secondary tracking-wide uppercase">
              {project.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-text-primary mb-3">
            {project.title}
          </h3>

          {/* Tagline */}
          <p
            className="text-lg lg:text-xl font-light mb-4"
            style={{ color: project.theme.primary }}
          >
            {project.tagline}
          </p>

          {/* Project type */}
          <p className="text-sm text-text-secondary mb-6">{project.projectType}</p>

          {/* Description */}
          <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-3xl">
            {project.description}
          </p>

          {/* Feature highlights grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {project.features.map((feature) => (
              <FeatureHighlight
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                theme={project.theme}
              />
            ))}
          </div>

          {/* Tech stack */}
          <div className="mb-8">
            <h4 className="text-xs text-text-secondary tracking-wider uppercase mb-3">
              Tech Stack
            </h4>
            <TechStackBadges stack={project.techStack} theme={project.theme} />
          </div>

          {/* Why it matters */}
          <div className="max-w-2xl">
            <WhyItMatters content={project.whyItMatters} theme={project.theme} />
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border transition-all duration-200 hover:scale-105"
                  style={{
                    borderColor: `${project.theme.primary}40`,
                    color: project.theme.primary,
                  }}
                >
                  {link.label}
                  <span className="text-xs">↗</span>
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </ScrollReveal>
  )
}
