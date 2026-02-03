'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects'
import { useReducedMotion } from '@/hooks'
import type { StandardProject } from '@/data/projects'
import { StatusIndicator, TechStackBadges, FeatureList, WhyItMatters } from './components'

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
          className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-start p-6 lg:p-10 rounded-3xl bg-fog-deep/30 border border-fog-mid/10"
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
                  background: `linear-gradient(135deg, ${project.theme.primary}20, transparent 50%, ${project.theme.glow})`,
                }}
              />

              {/* Decorative elements */}
              <div className="absolute inset-0">
                {/* Floating circles */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full border"
                  style={{ borderColor: `${project.theme.primary}30` }}
                  animate={reducedMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full border"
                  style={{ borderColor: `${project.theme.primary}20` }}
                  animate={reducedMotion ? {} : { scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Center logo */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: `${project.theme.primary}30` }}
                >
                  <span className="font-serif text-3xl text-white">{project.title[0]}</span>
                </div>
              </div>

              {/* Status badge */}
              <div className="absolute top-4 left-4">
                <StatusIndicator
                  status={project.status}
                  label={project.statusLabel}
                  theme={project.theme}
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
            {/* Subtitle + Client */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-text-secondary tracking-wide uppercase">
                {project.subtitle}
              </span>
              {project.client && (
                <>
                  <span className="text-text-secondary/40">•</span>
                  <span className="text-xs text-text-secondary">{project.client}</span>
                </>
              )}
            </div>

            {/* Project type */}
            <p
              className="text-sm font-medium tracking-wide mb-2"
              style={{ color: project.theme.primary }}
            >
              {project.projectType}
            </p>

            {/* Title */}
            <h3 className="font-serif text-3xl lg:text-4xl text-text-primary mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed mb-6">{project.description}</p>

            {/* Features */}
            <div className="mb-6">
              <FeatureList features={project.features} theme={project.theme} />
            </div>

            {/* Tech stack */}
            <div className="mb-6">
              <TechStackBadges stack={project.techStack} theme={project.theme} variant="compact" />
            </div>

            {/* Why it matters */}
            <WhyItMatters content={project.whyItMatters} theme={project.theme} />

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-6">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 hover:scale-105"
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
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  )
}
