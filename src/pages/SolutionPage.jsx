import { Link, Navigate, useParams } from 'react-router-dom'
import { useTrialSignup } from '../context/TrialSignupContext'
import PageSEO, { breadcrumbJsonLd } from '../components/PageSEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/Shared'
import { SITE_URL } from '../config/seo'
import { getSolutionBySlug, solutions } from '../data/solutions'

export default function SolutionPage() {
  const { slug } = useParams()
  const solution = getSolutionBySlug(slug)
  const { openTrialSignup } = useTrialSignup()

  if (!solution) {
    return <Navigate to="/" replace />
  }

  const canonical = `${SITE_URL}/solutions/${solution.slug}`
  const related = solution.relatedSlugs
    .map((s) => getSolutionBySlug(s))
    .filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/solutions' },
        { name: solution.eyebrow, url: `/solutions/${solution.slug}` },
      ]),
      {
        '@type': 'WebPage',
        '@id': `${canonical}/#webpage`,
        url: canonical,
        name: solution.title,
        description: solution.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        inLanguage: 'en',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'LoftPOS',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: SITE_URL,
        description: solution.description,
        featureList: solution.features.map((f) => f.title),
      },
      {
        '@type': 'FAQPage',
        mainEntity: solution.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  }

  return (
    <>
      <PageSEO
        title={solution.title}
        description={solution.description}
        canonical={canonical}
        keywords={`${solution.keyword}, LoftPOS, billing software, inventory management, POS software`}
        jsonLd={jsonLd}
      />

      <Navbar />
      <main>
        <section className="relative overflow-hidden gradient-mesh pt-28 pb-16">
          <div className="section-pad container-page">
            <nav className="mb-5 text-sm text-white/55" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/solutions" className="hover:text-white">
                Solutions
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">{solution.eyebrow}</span>
            </nav>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-mint">
              {solution.eyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {solution.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              {solution.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="#trial"
                variant="primary"
                onClick={(e) => {
                  e.preventDefault()
                  openTrialSignup()
                }}
              >
                Start free trial
              </Button>
              <Button href="/#pricing" variant="secondary">
                View pricing
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-mist py-16 dark:bg-ink lg:py-20">
          <div className="section-pad container-page">
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white sm:text-3xl">
              How LoftPOS helps {solution.eyebrow.toLowerCase()} operators
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {solution.features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-line bg-foam p-6 dark:border-line-dark dark:bg-ink-soft"
                >
                  <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate dark:text-white/60">
                    {feature.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foam py-16 dark:bg-ink-soft lg:py-20">
          <div className="section-pad container-page max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white sm:text-3xl">
              Frequently asked questions
            </h2>
            <dl className="mt-8 space-y-6">
              {solution.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-line bg-mist p-5 dark:border-line-dark dark:bg-ink"
                >
                  <dt className="font-display text-base font-semibold text-ink dark:text-white">
                    {faq.q}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate dark:text-white/60">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-mist py-16 dark:bg-ink lg:py-20">
          <div className="section-pad container-page">
            <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
              Related solutions
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/solutions/${rel.slug}`}
                  className="rounded-2xl border border-line bg-foam p-6 transition hover:border-mint/40 dark:border-line-dark dark:bg-ink-soft"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-mint-deep dark:text-mint">
                    {rel.eyebrow}
                  </p>
                  <p className="mt-2 font-display text-lg font-bold text-ink dark:text-white">
                    {rel.h1}
                  </p>
                  <p className="mt-2 text-sm text-slate dark:text-white/55">
                    Learn more →
                  </p>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate dark:text-white/55">
              Explore all{' '}
              <Link to="/#features" className="font-semibold text-mint-deep dark:text-mint">
                LoftPOS features
              </Link>{' '}
              or read our{' '}
              <Link to="/blog" className="font-semibold text-mint-deep dark:text-mint">
                operator guides
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export function SolutionsIndexPage() {
  const canonical = `${SITE_URL}/solutions`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'LoftPOS Solutions',
    url: canonical,
    description:
      'Industry-specific POS and management software for gaming cafes, restaurants, and cafes.',
    hasPart: solutions.map((s) => ({
      '@type': 'WebPage',
      name: s.title,
      url: `${SITE_URL}/solutions/${s.slug}`,
    })),
  }

  return (
    <>
      <PageSEO
        title="POS Solutions for Gaming Cafes, Restaurants & Cafes"
        description="Explore LoftPOS solutions for gaming cafe POS, restaurant billing software, and cafe POS — sessions, bookings, inventory, and reports in one platform."
        canonical={canonical}
        keywords="gaming cafe POS, restaurant POS software, cafe POS software, LoftPOS solutions"
        jsonLd={jsonLd}
      />

      <Navbar />
      <main>
        <section className="relative overflow-hidden gradient-mesh pt-28 pb-16">
          <div className="section-pad container-page">
            <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              POS solutions for gaming cafes, restaurants, and cafes
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              LoftPOS adapts to how your venue sells time, food, and memberships — with billing,
              inventory, and reports under your brand.
            </p>
          </div>
        </section>

        <section className="bg-mist py-16 dark:bg-ink lg:py-20">
          <div className="section-pad container-page grid gap-5 md:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.slug}
                className="flex flex-col rounded-3xl border border-line bg-foam p-6 dark:border-line-dark dark:bg-ink-soft"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-mint-deep dark:text-mint">
                  {solution.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-xl font-bold leading-snug text-ink dark:text-white">
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className="hover:text-mint-deep dark:hover:text-mint"
                  >
                    {solution.h1}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate dark:text-white/60">
                  {solution.description}
                </p>
                <Link
                  to={`/solutions/${solution.slug}`}
                  className="mt-5 text-sm font-semibold text-mint-deep dark:text-mint"
                >
                  View {solution.eyebrow} solution →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
