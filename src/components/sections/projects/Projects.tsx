'use client'

import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'
import { flagshipProject, standardProjects, type StandardProject } from '@/data/projects'
import { FlagshipProjectCard } from './FlagshipProjectCard'
import { StandardProjectCard } from './StandardProjectCard'

export function Projects() {
  return (
    <Section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Horizon glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-particle-glow/20 to-transparent blur-[1px]" />

      {/* Background elements */}
      <GlowOrb size="xl" color="purple" className="-right-40 top-1/4 opacity-10" />
      <GlowOrb size="lg" color="blue" className="-left-32 bottom-1/3 opacity-10" />

      {/* Header */}
      <ScrollReveal>
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary">
            Selected work
          </h2>
        </div>
      </ScrollReveal>

      {/* Flagship Project - Discloser */}
      <div className="mb-20 lg:mb-28">
        <FlagshipProjectCard project={flagshipProject} />
      </div>

      {/* Standard Projects */}
      <div className="space-y-16 lg:space-y-20 mb-16 lg:mb-20">
        {standardProjects.map((project: StandardProject, index: number) => (
          <StandardProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* See all work link */}
      <ScrollReveal>
        <div className="text-center">
          <a
            href="/work"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-300 group"
          >
            <span>See all work</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </ScrollReveal>
    </Section>
  )
}
