import Link from 'next/link'
import { Button } from '@/components/ui'

/**
 * Custom 404 page that matches the fog aesthetic of the Neblina brand.
 * Provides a clear path back to the home page.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-6xl md:text-7xl text-text-primary mb-4">
        404
      </h1>
      <p className="text-xl text-text-secondary mb-8">
        Lost in the mist. This page doesn&apos;t exist.
      </p>
      <Link href="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  )
}
