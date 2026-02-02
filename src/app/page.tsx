import { Header, Footer } from '@/components/layout'
import { FogSystem, ParticleCanvas, Moon, StarField } from '@/components/effects'
import { Hero, Services, Projects, Contact } from '@/components/sections'

export default function Home() {
  return (
    <>
      {/* Visual effects layer */}
      <StarField />
      <FogSystem />
      <ParticleCanvas />
      <Moon />

      <Header />
      <main id="main-content" className="relative z-20">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
