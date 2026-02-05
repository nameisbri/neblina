import dynamic from 'next/dynamic'
import { Header, Footer } from '@/components/layout'
import { Hero, Philosophy, ServiceTags, Services, Projects, Testimonial, Contact } from '@/components/sections'

// Lazy-load visual effects — they don't contain content, only decoration
const StarField = dynamic(
  () => import('@/components/effects').then(m => ({ default: m.StarField })),
  { ssr: false }
)
const FogSystem = dynamic(
  () => import('@/components/effects').then(m => ({ default: m.FogSystem })),
  { ssr: false }
)
const InteractiveFog = dynamic(
  () => import('@/components/effects').then(m => ({ default: m.InteractiveFog })),
  { ssr: false }
)
const ParticleCanvas = dynamic(
  () => import('@/components/effects').then(m => ({ default: m.ParticleCanvas })),
  { ssr: false }
)
const Moon = dynamic(
  () => import('@/components/effects').then(m => ({ default: m.Moon })),
  { ssr: false }
)

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
        <ServiceTags />
        <Projects />
        <Services />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
