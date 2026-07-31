import { Helmet } from 'react-helmet-async'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'LoftOS',
      url: 'https://loftos.app',
      logo: 'https://loftos.app/favicon.svg',
      description:
        'White-label multi-tenant SaaS for gaming cafés, restaurants, and entertainment centers.',
      email: 'loft64venture@gmail.com',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'LoftOS',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '2999',
        highPrice: '9999',
        priceCurrency: 'INR',
      },
      description:
        'Complete gaming, café and restaurant management platform with white-label branding, QR ordering, inventory, and analytics.',
    },
    {
      '@type': 'WebSite',
      name: 'LoftOS',
      url: 'https://loftos.app',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://loftos.app/#faq',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is LoftOS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LoftOS is a white-label, multi-tenant operating system for gaming cafés, PlayStation lounges, restaurants, and entertainment centers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I white-label LoftOS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Each business gets its own logo, colors, receipts, menu identity, and isolated data.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is GST supported?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Configure organization-level GST and optionally apply it per bill with invoice fields.',
          },
        },
      ],
    },
  ],
}

export default function SEO() {
  return (
    <Helmet>
      <html lang="en" />
      <title>LoftOS — Gaming, Café & Restaurant Management Platform</title>
      <meta
        name="description"
        content="White-label multi-tenant SaaS for gaming cafés, PlayStation lounges, restaurants & entertainment centers. Sessions, POS, QR ordering, inventory & reports."
      />
      <link rel="canonical" href="https://loftos.app/" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
