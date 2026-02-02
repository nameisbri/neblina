'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { Button } from '@/components/ui'
import { ScrollReveal, GlowOrb } from '@/components/effects'
import { useReducedMotion } from '@/hooks'

interface Project {
  title: string
  description: string
  tags: string[]
  featured?: boolean
  status?: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'Discloser',
    description: 'A privacy-focused iOS app that puts you in control of your data. Built with intention, designed for trust.',
    tags: ['iOS', 'SwiftUI', 'Privacy'],
    featured: true,
    status: 'Launching Soon',
  },
  {
    title: 'Project Aurora',
    description: 'End-to-end product design and development for a meditation and mindfulness platform.',
    tags: ['Mobile', 'Product Design', 'React Native'],
    featured: true,
    status: 'In Development',
  },
  {
    title: 'E-commerce Platform',
    description: 'Custom Shopify integration with headless CMS.',
    tags: ['Web', 'Next.js', 'Shopify'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Privacy-respecting analytics for a SaaS product.',
    tags: ['Web', 'Data Viz', 'React'],
  },
  {
    title: 'Brand Identity System',
    description: 'Complete brand refresh and design system.',
    tags: ['Design', 'Branding'],
  },
]

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const reducedMotion = useReducedMotion()
  const isEven = index % 2 === 0

  return (
    <ScrollReveal delay={index * 0.2}>
      <motion.div
        className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
        whileHover={reducedMotion ? {} : { scale: 1.01 }}
        transition={{ duration: 0.4 }}
      >
        {/* Visual */}
        <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-particle-glow/20 via-fog-deep to-purple-500/10" />

            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full border border-particle-glow/20" />
              <div className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full border border-particle-glow/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-particle-glow/20 flex items-center justify-center">
                <span className="font-serif text-2xl text-text-primary">{project.title[0]}</span>
              </div>
            </div>

            {/* Status badge */}
            {project.status && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs bg-deep-night/80 backdrop-blur-sm text-particle-glow rounded-full border border-particle-glow/30">
                  {project.status}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
          <h3 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
            {project.title}
          </h3>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm text-fog-mid border border-fog-mid/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button variant="secondary">View Project</Button>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

function SmallProject({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="group p-6 rounded-xl bg-fog-deep/20 border border-fog-mid/10 hover:border-particle-glow/20 transition-all duration-300"
      whileHover={reducedMotion ? {} : { y: -4 }}
    >
      <h4 className="font-serif text-xl text-text-primary mb-2 group-hover:text-white transition-colors">
        {project.title}
      </h4>
      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs text-fog-mid border border-fog-mid/20 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <GlowOrb size="xl" color="purple" className="-right-40 top-1/4 opacity-15" />
      <GlowOrb size="lg" color="blue" className="-left-32 bottom-1/3 opacity-10" />

      {/* Header */}
      <ScrollReveal>
        <div className="text-center mb-20">
          <span className="text-particle-glow text-sm tracking-[0.3em] uppercase font-light">
            Selected Work
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-primary mt-4">
            Projects
          </h2>
          <div className="w-16 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-fog-mid to-transparent" />
        </div>
      </ScrollReveal>

      {/* Featured Projects */}
      <div className="space-y-24 mb-24">
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <ScrollReveal>
            <h3 className="font-serif text-2xl text-text-secondary text-center mb-8">
              More Work
            </h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <SmallProject project={project} />
              </ScrollReveal>
            ))}
          </div>
        </>
      )}
    </Section>
  )
}
