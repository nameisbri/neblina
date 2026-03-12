'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects'
import { ImageLightbox } from '@/components/ui/ImageLightbox'
import { DeviceFrame } from '@/components/ui/DeviceFrame'
import type { StandardProject } from '@/data/projects'

interface HighlightedProjectCardProps {
  project: StandardProject
}

export function HighlightedProjectCard({ project }: HighlightedProjectCardProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const hasScreenshots = project.screenshots && project.screenshots.length > 0

  return (
    <ScrollReveal>
      <div className="mt-8 lg:mt-12 pt-10 lg:pt-12 border-t border-fog-mid/15">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12">
          {/* Left — text content */}
          <div>
            <p className="text-xs text-text-secondary tracking-widest uppercase mb-3">
              {project.subtitle}
            </p>

            <h3 className="font-serif text-4xl lg:text-5xl text-text-primary mb-2">
              {project.title}
            </h3>

            {project.tagline && (
              <p
                className="text-lg font-light mb-4"
                style={{ color: project.theme.primary }}
              >
                {project.tagline}
              </p>
            )}

            <p className="text-text-secondary leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Automation features */}
            {project.features && project.features.length > 0 && (
              <ul className="space-y-2 mb-6">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span
                      className="mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: project.theme.primary }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="text-xs px-2 py-1 rounded border border-fog-mid/20 text-text-secondary"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            )}

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-x-5 gap-y-2">
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
                    <span className="text-xs">&rarr;</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right — screenshots */}
          {hasScreenshots && (
            <div className="flex flex-col gap-4">
              {project.screenshots!.map((screenshot, index) => (
                <motion.div
                  key={screenshot.src}
                  className="relative group cursor-pointer w-full"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setLightboxIndex(index)}
                >
                  {screenshot.variant === 'photo' ? (
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={700}
                        height={438}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : (
                    <DeviceFrame variant="browser">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={700}
                        height={438}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </DeviceFrame>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {lightboxIndex !== null && project.screenshots && (
        <ImageLightbox
          images={project.screenshots}
          selectedIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </ScrollReveal>
  )
}
