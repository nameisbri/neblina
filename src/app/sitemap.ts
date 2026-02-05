import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://neblina.tech'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: '2026-02-05',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]

  return staticPages
}
