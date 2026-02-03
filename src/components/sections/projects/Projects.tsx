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
      {/* Background elements */}
      <GlowOrb size="xl" color="purple" className="-right-40 top-1/4 opacity-10" />
      <GlowOrb size="lg" color="blue" className="-left-32 bottom-1/3 opacity-10" />

      {/* Header */}
      <ScrollReveal>
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-particle-glow text-sm tracking-[0.3em] uppercase font-light">
            Selected Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary mt-4">
            Projects
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Real products, real clients, real impact
          </p>
          <div className="w-16 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-fog-mid to-transparent" />
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
          <div className="w-12 h-px mx-auto mt-4 bg-gradient-to-r from-transparent via-fog-mid to-transparent" />
        </div>
      </ScrollReveal>
      <ProcessCard project={processProject} />
    </Section>
  )
}
