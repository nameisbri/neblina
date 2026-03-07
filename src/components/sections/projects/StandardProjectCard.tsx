'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/effects'
import { ImageLightbox } from '@/components/ui/ImageLightbox'
import { DeviceFrame } from '@/components/ui/DeviceFrame'
import type { StandardProject } from '@/data/projects'

interface StandardProjectCardProps {
  project: StandardProject
  index: number
}

export function StandardProjectCard({ project, index }: StandardProjectCardProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const hasScreenshots = project.screenshots && project.screenshots.length > 0

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="pt-10 lg:pt-12 border-t border-fog-mid/15">
        <p className="text-xs text-text-secondary tracking-widest uppercase mb-3">
          {project.subtitle}
        </p>

        <h3 className="font-serif text-3xl lg:text-4xl text-text-primary mb-2">
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

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
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

        {/* Screenshots — adapts to portrait (phone) or landscape (web) */}
        {hasScreenshots && (
          <div className="flex gap-3 mt-2">
            {project.screenshots!.map((screenshot, idx) => {
              const isLandscape = screenshot.src.includes('hero') || screenshot.src.includes('web')
              return (
                <motion.div
                  key={screenshot.src}
                  className={`relative group cursor-pointer flex-shrink-0 ${isLandscape ? 'w-full' : 'w-28 lg:w-32'}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  onClick={() => setLightboxIndex(idx)}
                >
                  <DeviceFrame variant={isLandscape ? 'browser' : 'phone'}>
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={isLandscape ? 600 : 128}
                      height={isLandscape ? 375 : 256}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </DeviceFrame>
                </motion.div>
              )
            })}
          </div>
        )}
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
