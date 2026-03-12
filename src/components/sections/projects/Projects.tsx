'use client'

import { Section } from '@/components/layout'
import { ScrollReveal } from '@/components/effects'
import { flagshipProject, standardProjects, walkercraftProject, type StandardProject } from '@/data/projects'
import { FlagshipProjectCard } from './FlagshipProjectCard'
import { StandardProjectCard } from './StandardProjectCard'
import { HighlightedProjectCard } from './HighlightedProjectCard'

export function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Horizon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-fog-mid/15" />

      {/* Header — left-aligned */}
      <ScrollReveal>
        <h2 id="projects-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary mb-16 lg:mb-20">
          Selected work
        </h2>
      </ScrollReveal>

      {/* Flagship Project */}
      <FlagshipProjectCard project={flagshipProject} />

      {/* Highlighted Project — Walkercraft (full-width, two-column) */}
      <HighlightedProjectCard project={walkercraftProject} />

      {/* Standard Projects — side by side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8 lg:mt-12">
        {standardProjects.map((project: StandardProject, index: number) => (
          <StandardProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    </Section>
  )
}
