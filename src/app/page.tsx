import { Header, Footer } from '@/components/layout'
import { FogSystem, ParticleCanvas, Moon } from '@/components/effects'
import { Hero, Services, ProjectSpotlight, Contact } from '@/components/sections'

/**
 * Landing page for Neblina Digital.
 *
 * Composition:
 * - Visual effects layer (fog, particles, moon) for atmospheric "Veil" experience
 * - Header with navigation
 * - Hero section with company name and tagline
 * - Services section showcasing the four pillars
 * - Project spotlight highlighting Discloser app
 * - Contact section with form
 * - Footer with company information
 */
export default function Home() {
  return (
    <>
      {/* Visual effects layer - creates the atmospheric "Veil" experience */}
      <FogSystem />
      <ParticleCanvas />
      <Moon />

      <Header />
      <main id="main-content" className="relative z-20">
        <Hero />
        <Services />
        <ProjectSpotlight />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
