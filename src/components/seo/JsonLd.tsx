const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://neblina.tech'

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'Neblina Digital Inc.',
    alternateName: 'Neblina',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    description:
      'A digital product studio based in Ontario, Canada specializing in product strategy, design, creative direction, and privacy-first software development.',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Gabriela Moreira',
      jobTitle: 'Founder & Product Designer',
      url: `${SITE_URL}/about`,
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Ontario',
      addressCountry: 'CA',
    },
    areaServed: [
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'United States' },
    ],
    knowsAbout: [
      'Product Strategy',
      'Product Design',
      'Brand Strategy',
      'Creative Direction',
      'Mobile App Development',
      'React Native',
      'Privacy-First Software',
      'Technical Architecture',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Product Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Product Strategy & Brand Consulting',
            description:
              'Brand strategy, product positioning, and creative direction for teams building with intention.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Product Design',
            description:
              'User experience design, interface design, and design systems for digital products.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software Development',
            description:
              'Mobile app development with React Native, web development with Next.js, and privacy-first technical architecture.',
          },
        },
      ],
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Neblina',
    description: 'Digital product studio — strategy, design, and development.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-CA',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
