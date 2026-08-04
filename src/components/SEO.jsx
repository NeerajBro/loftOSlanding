import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://loftos.loftsixtyfour.com'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'LoftOS',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
      description:
        'Gaming café software and white-label OS for gaming lounges, restaurants, and entertainment centers — sessions, bookings, memberships, POS, and QR ordering.',
      email: 'loft64venture@gmail.com',
      telephone: '+91-9987762009',
      sameAs: ['https://www.instagram.com/loft64hq/'],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: 'LoftOS',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Gaming Café Software',
      operatingSystem: 'Web',
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      description:
        'Gaming café software with session timers, booking software for gaming lounges, membership management, restaurant POS, QR ordering, inventory, and analytics — white-label and multi-tenant.',
      featureList: [
        'Gaming café session billing and timers',
        'Booking software for gaming lounges',
        'Membership and prepaid pack management',
        'Restaurant POS with GST',
        'QR menu ordering and kitchen display',
        'Inventory and staff permissions',
        'White-label multi-tenant branding',
      ],
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '2999',
        highPrice: '9999',
        priceCurrency: 'INR',
        offerCount: '3',
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'LoftOS',
      url: SITE_URL,
      description:
        'LoftOS is gaming café software for lounges and arenas — bookings, memberships, POS, and floor operations in one platform.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'LoftOS — Gaming Café Software, Lounge Bookings & Memberships',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#software` },
      description:
        'Run gaming cafés and lounges with session POS, online slot bookings, membership management, QR ordering, inventory, and white-label branding.',
      inLanguage: 'en',
    },
  ],
}

export default function SEO() {
  const title = 'LoftOS — Gaming Café Software for Lounges & Memberships'
  const description =
    'Gaming café software with lounge booking tools and membership management. Run sessions, POS, QR ordering, inventory, and white-label branding from one platform.'

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="gaming cafe software, booking software for gaming lounge, membership management software, gaming POS, cafe management software, restaurant POS, PlayStation lounge software, QR menu ordering, white label POS, LoftOS"
      />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <link rel="canonical" href={`${SITE_URL}/`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
      <meta property="og:site_name" content="LoftOS" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
