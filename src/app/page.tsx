import { Header, Footer } from '@/components/layout'
import { FogSystem, ParticleCanvas, Moon, StarField } from '@/components/effects'
import { Hero, Services, ProjectSpotlight, Contact } from '@/components/sections'

export default function Home() {
  return (
    <>
      {/* Visual effects layer - creates the atmospheric "Veil" experience */}
      <StarField />
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
