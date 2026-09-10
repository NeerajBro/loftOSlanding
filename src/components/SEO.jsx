import { faqs } from '../data/content'
import PageSEO from './PageSEO'
import { OG_IMAGE, SITE_NAME, SITE_URL } from '../config/seo'

const title = 'LoftPOS | POS Software for Gaming Cafes, Restaurants & Cafes'
const description =
  'LoftPOS helps gaming cafes, restaurants and cafes manage billing, sales, inventory, customers and daily operations from one powerful POS platform.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
      description:
        'POS and management software for gaming cafes, restaurants, and cafes — sessions, bookings, memberships, billing, inventory, and reports.',
      email: ['info@loftpos.com', 'loft64venture@gmail.com'],
      telephone: ['+91-9987762009', '+91-9819521816'],
      sameAs: ['https://www.instagram.com/loft64hq/'],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: SITE_NAME,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Point of Sale Software',
      operatingSystem: 'Web',
      url: SITE_URL,
      image: OG_IMAGE,
      description:
        'Cloud POS software for gaming cafes, restaurants, and cafes with session billing, lounge bookings, membership management, QR ordering, inventory, and analytics.',
      featureList: [
        'Gaming cafe session billing and timers',
        'Lounge booking software',
        'Membership and prepaid pack management',
        'Restaurant and cafe POS with GST',
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
      name: SITE_NAME,
      url: SITE_URL,
      description:
        'LoftPOS is POS software for gaming cafes, restaurants, and cafes — billing, inventory, customers, and daily operations in one platform.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: title,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#software` },
      description,
      inLanguage: 'en',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.slice(0, 12).map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
}

export default function SEO() {
  return (
    <PageSEO
      title={title}
      description={description}
      canonical={`${SITE_URL}/`}
      keywords="gaming cafe POS, restaurant POS software, cafe POS software, gaming cafe billing software, restaurant billing software, cafe billing software, inventory management software, cloud POS software, LoftPOS"
      jsonLd={jsonLd}
    />
  )
}
