import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { MotionProvider } from '@/contexts'
import { CursorProvider, CustomCursor, CursorTrail } from '@/components/cursor'
import { OrganizationJsonLd, WebSiteJsonLd, GoogleAnalytics } from '@/components/seo'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://neblina.tech'

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Neblina — Digital Product Studio | Strategy, Design & Development',
    template: '%s | Neblina',
  },
  description:
    'Neblina is a digital product studio based in Ontario, Canada. We help brands find clarity through product strategy, design, and privacy-first software development.',
  keywords: [
    'digital product studio',
    'product strategy',
    'product design',
    'brand strategy consulting',
    'software development',
    'mobile app development',
    'React Native development',
    'privacy-first software',
    'Ontario Canada',
    'creative direction',
    'technical architecture',
  ],
  authors: [{ name: 'Neblina Digital Inc.' }],
  creator: 'Neblina Digital Inc.',
  publisher: 'Neblina Digital Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    title: 'Neblina — Digital Product Studio | Strategy, Design & Development',
    description:
      'A digital product studio based in Ontario, Canada. Strategy, design, and privacy-first digital products for brands navigating what\'s next.',
    siteName: 'Neblina',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Neblina — Digital Product Studio in Ontario, Canada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neblina — Digital Product Studio',
    description:
      'Strategy, design, and privacy-first digital products. Based in Ontario, Canada.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL,
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
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <CursorProvider>
          <MotionProvider>
            <CustomCursor />
            <CursorTrail />
            {children}
          </MotionProvider>
        </CursorProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
