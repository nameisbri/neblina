import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { MotionProvider } from '@/contexts'
import { CursorProvider, CustomCursor, CursorTrail } from '@/components/cursor'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://neblina.ca'),
  title: 'Neblina — Where Clarity Emerges',
  description:
    "A digital product studio based in Ontario, Canada. Strategy, design, and digital products for brands navigating what's next.",
  keywords: [
    'digital product studio',
    'product strategy',
    'product design',
    'software development',
    'mobile app development',
    'Ontario',
    'Canada',
  ],
  authors: [{ name: 'Neblina Digital Inc.' }],
  creator: 'Neblina Digital Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://neblina.ca',
    title: 'Neblina — Where Clarity Emerges',
    description:
      "Strategy, design, and digital products for brands navigating what's next.",
    siteName: 'Neblina',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Neblina — Where Clarity Emerges',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neblina — Where Clarity Emerges',
    description:
      "Strategy, design, and digital products for brands navigating what's next.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-deep-night font-sans text-text-primary antialiased">
        <CursorProvider>
          <MotionProvider>
            <CustomCursor />
            <CursorTrail />
            {children}
          </MotionProvider>
        </CursorProvider>
      </body>
    </html>
  )
}
