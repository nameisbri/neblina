import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://neblina.tech'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/proposals/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: '/proposals/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: '/proposals/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: '/proposals/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: '/proposals/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
