import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { MotionProvider } from '@/contexts'
import { CursorProvider, CustomCursor, CursorTrail } from '@/components/cursor'
import { OrganizationJsonLd, WebSiteJsonLd, GoogleAnalytics } from '@/components/seo'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://neblina.tech'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
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
    'Neblina is a product studio that does strategy, design, and development for teams who care about privacy and getting the details right.',
  keywords: [
    'digital product studio',
    'product strategy',
    'product design',
    'brand strategy consulting',
    'software development',
    'mobile app development',
    'React Native development',
    'privacy-first software',
    'remote studio',
    'creative direction',
    'technical architecture',
  ],
  authors: [{ name: 'Neblina Digital Inc.' }],
  creator: 'Neblina Digital Inc.',
  publisher: 'Neblina Digital Inc.',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: SITE_URL,
    title: 'Neblina — Digital Product Studio | Strategy, Design & Development',
    description:
      'Product studio. We design and build privacy-first digital products.',
    siteName: 'Neblina',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Neblina — Digital Product Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neblina — Digital Product Studio',
    description:
      'Product studio. Strategy, design, and privacy-first development.',
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
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
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
