'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/layout'
import { ScrollReveal, GlowOrb } from '@/components/effects'
import { useReducedMotion } from '@/hooks'
import { philosophy } from '@/data/philosophy'
import { PhilosophyColumn } from './PhilosophyColumn'

export function Philosophy() {
  const reducedMotion = useReducedMotion()

  const columns = [
    { ...philosophy.why, key: 'why' },
    { ...philosophy.how, key: 'how' },
    { ...philosophy.what, key: 'what' },
  ]

  return (
    <Section id="philosophy" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background orbs - lighter, suggesting dawn */}
      <GlowOrb size="lg" color="blue" className="top-0 left-1/4 opacity-15" />
      <GlowOrb size="md" color="purple" className="bottom-1/3 right-1/4 opacity-10" />

      {/* Section header */}
      <ScrollReveal>
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-particle-glow text-sm tracking-[0.3em] uppercase font-light">
            Our Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary mt-4">
            Through the Mist
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Clarity emerges when you know what you stand for
          </p>
          <div className="w-16 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-fog-mid to-transparent" />
        </div>
      </ScrollReveal>

      {/* Three columns */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
        {columns.map((column, index) => (
          <PhilosophyColumn
            key={column.key}
            title={column.title}
            subtitle={column.subtitle}
            points={column.points}
            index={index}
          />
        ))}
      </div>

      {/* Manifesto quote */}
      <motion.div
        className="relative max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.3 }}
      >
        {/* Quote marks */}
        <span className="absolute -top-6 -left-4 text-6xl text-particle-glow/10 font-serif select-none">
          &ldquo;
        </span>

        <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-text-secondary/90 italic leading-relaxed">
          {philosophy.manifesto}
        </blockquote>

        <span className="absolute -bottom-8 -right-4 text-6xl text-particle-glow/10 font-serif select-none">
          &rdquo;
        </span>
      </motion.div>
    </Section>
  )
}
