'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects'
import { ImageLightbox } from '@/components/ui/ImageLightbox'
import type { FlagshipProject } from '@/data/projects'

interface FlagshipProjectCardProps {
  project: FlagshipProject
}

export function FlagshipProjectCard({ project }: FlagshipProjectCardProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <ScrollReveal>
      <div className="py-12 lg:py-20 border-t border-fog-mid/15">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Text column */}
          <div>
            <p className="text-xs text-text-secondary tracking-widest uppercase mb-6">
              {project.subtitle}
            </p>

            <h3 className="font-serif text-6xl md:text-7xl lg:text-8xl text-text-primary mb-4">
              {project.title}
            </h3>

            <p
              className="text-xl lg:text-2xl font-light mb-8"
              style={{ color: project.theme.primary }}
            >
              {project.tagline}
            </p>

            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl">
              {project.description}
            </p>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
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
          </div>

          {/* Screenshots column — staggered phones */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="grid grid-cols-3 gap-3 lg:gap-4 lg:pt-12">
              {project.screenshots.slice(0, 3).map((screenshot, index) => (
                <motion.div
                  key={screenshot.src}
                  className="relative group cursor-pointer"
                  style={{ marginTop: index === 1 ? '2rem' : 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setLightboxIndex(index)}
                >
                  <div className="rounded-lg overflow-hidden border border-fog-mid/15">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={220}
                      height={440}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </motion.div>
              ))}

              {/* Remaining screenshots below, smaller */}
              {project.screenshots.length > 3 && (
                <div className="col-span-3 grid grid-cols-5 gap-3 lg:gap-4 mt-2">
                  {project.screenshots.slice(0).map((screenshot, index) => (
                    <motion.div
                      key={screenshot.src}
                      className="relative group cursor-pointer"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
                      viewport={{ once: true }}
                      onClick={() => setLightboxIndex(index)}
                    >
                      <div className="rounded-lg overflow-hidden border border-fog-mid/15">
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={140}
                          height={280}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
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
