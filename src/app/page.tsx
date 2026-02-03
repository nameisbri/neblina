import { Header, Footer } from '@/components/layout'
import { FogSystem, ParticleCanvas, Moon, StarField, InteractiveFog } from '@/components/effects'
import { Hero, Philosophy, Services, Projects, Contact } from '@/components/sections'

export default function Home() {
  return (
    <>
      {/* Visual effects layer */}
      <StarField />
      <FogSystem />
      <InteractiveFog />
      <ParticleCanvas />
      <Moon />

      <Header />
      <main id="main-content" className="relative z-20">
        <Hero />
        <Philosophy />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
