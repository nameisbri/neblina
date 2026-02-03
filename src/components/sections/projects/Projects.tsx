'use client'

import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'
import { flagshipProject, standardProjects, processProject, type StandardProject } from '@/data/projects'
import { FlagshipProjectCard } from './FlagshipProjectCard'
import { StandardProjectCard } from './StandardProjectCard'
import { ProcessCard } from './ProcessCard'

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
            From fog to form
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Select projects where clarity emerged.
          </p>
        </div>
      </ScrollReveal>

      {/* Flagship Project - Discloser */}
      <div className="mb-20 lg:mb-28">
        <FlagshipProjectCard project={flagshipProject} />
      </div>

      {/* Standard Projects */}
      <div className="space-y-16 lg:space-y-20 mb-20 lg:mb-24">
        {standardProjects.map((project: StandardProject, index: number) => (
          <StandardProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Process & Innovation Section */}
      <ScrollReveal>
        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl lg:text-3xl text-text-secondary">
            Process & Innovation
          </h3>
        </div>
      </ScrollReveal>
      <ProcessCard project={processProject} />
    </Section>
  )
}
