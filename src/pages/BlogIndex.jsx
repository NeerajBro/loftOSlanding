import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts, SITE_URL } from '../data/blogPosts'

export default function BlogIndex() {
  const title = 'LoftOS Blog — Gaming Café Software, Menus & QR Ordering'
  const description =
    'Guides on gaming café software, menu management software, and QR menu management for lounge and café operators.'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'LoftOS Blog',
    url: `${SITE_URL}/blog`,
    description,
    publisher: {
      '@type': 'Organization',
      name: 'LoftOS',
      url: SITE_URL,
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.datePublished,
      description: post.description,
    })),
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <section className="relative overflow-hidden gradient-mesh pt-28 pb-16">
          <div className="section-pad container-page">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-mint">LoftOS Blog</p>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Operators’ guides for gaming cafés, menus, and QR ordering
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Practical articles on gaming café software, menu management software, and QR menu
              management — written for how entertainment floors actually run.
            </p>
          </div>
        </section>

        <section className="bg-mist py-16 dark:bg-ink lg:py-20">
          <div className="section-pad container-page grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-3xl border border-line bg-foam p-6 transition hover:border-mint/40 hover:shadow-xl hover:shadow-ink/5 dark:border-line-dark dark:bg-ink-soft"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-mint-deep dark:text-mint">
                  {post.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-xl font-bold leading-snug text-ink dark:text-white">
                  <Link to={`/blog/${post.slug}`} className="hover:text-mint-deep dark:hover:text-mint">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate dark:text-white/60">
                  {post.description}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-slate dark:text-white/45">
                  <span>
                    {post.datePublished} · {post.readingMinutes} min
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-semibold text-mint-deep dark:text-mint"
                  >
                    Read guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
