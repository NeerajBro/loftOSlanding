import PageSEO, { breadcrumbJsonLd } from '../components/PageSEO'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useTrialSignup } from '../context/TrialSignupContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/Shared'
import { SITE_URL } from '../config/seo'
import {
  getPostBySlug,
  getRelatedPosts,
  blogPosts,
} from '../data/blogPosts'

function SectionBlock({ block }) {
  const { openTrialSignup } = useTrialSignup()

  if (block.type === 'p') {
    return <p className="mb-4 text-base leading-relaxed text-slate dark:text-white/65">{block.text}</p>
  }
  if (block.type === 'h2') {
    return (
      <h2
        id={block.id}
        className="mb-3 mt-10 scroll-mt-28 font-display text-2xl font-bold tracking-tight text-ink dark:text-white sm:text-3xl"
      >
        {block.text}
      </h2>
    )
  }
  if (block.type === 'h3') {
    return (
      <h3 className="mb-2 mt-7 font-display text-xl font-bold text-ink dark:text-white">
        {block.text}
      </h3>
    )
  }
  if (block.type === 'ul') {
    return (
      <ul className="mb-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate dark:text-white/65">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  if (block.type === 'ol') {
    return (
      <ol className="mb-5 list-decimal space-y-2 pl-5 text-base leading-relaxed text-slate dark:text-white/65">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    )
  }
  if (block.type === 'quote') {
    return (
      <blockquote className="my-6 rounded-r-2xl border-l-4 border-mint bg-mint/10 px-5 py-4 text-base leading-relaxed text-ink dark:text-white/85">
        {block.text}
      </blockquote>
    )
  }
  if (block.type === 'table') {
    return (
      <div className="mb-6 overflow-x-auto rounded-2xl border border-line dark:border-line-dark">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-mist dark:bg-ink">
            <tr>
              {block.headers.map((h) => (
                <th key={h} className="px-4 py-3 font-semibold text-ink dark:text-white">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line dark:divide-line-dark">
            {block.rows.map((row) => (
              <tr key={row.join('|')}>
                {row.map((cell) => (
                  <td key={cell} className="px-4 py-3 text-slate dark:text-white/65">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  if (block.type === 'cta') {
    return (
      <div className="mt-10 rounded-3xl border border-mint/30 bg-gradient-to-br from-mint/15 via-transparent to-cyan/10 p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-white">{block.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-slate dark:text-white/65">{block.text}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            href="#trial"
            variant="primary"
            onClick={(e) => {
              e.preventDefault()
              openTrialSignup()
            }}
          >
            Book free demo
          </Button>
          <Button href="/" variant="ghost">
            Explore LOftPOS
          </Button>
        </div>
      </div>
    )
  }
  return null
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const related = getRelatedPosts(post)
  const url = `${SITE_URL}/blog/${post.slug}`
  const toc = post.sections.filter((s) => s.type === 'h2')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: `/blog/${post.slug}` },
      ]),
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: {
          '@type': 'Organization',
          name: post.author,
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: 'LoftPOS',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/favicon.svg`,
          },
        },
        mainEntityOfPage: url,
        keywords: [
          post.keyword,
          'LoftPOS',
          'gaming cafe POS',
          'QR menu',
          'menu management',
        ].join(', '),
        articleSection: post.eyebrow,
      },
    ],
  }

  return (
    <>
      <PageSEO
        title={post.title}
        description={post.description}
        canonical={url}
        ogType="article"
        keywords={`${post.keyword}, LoftPOS, gaming cafe POS, QR menu, menu management`}
        articlePublished={post.datePublished}
        articleModified={post.dateModified}
        jsonLd={jsonLd}
      />

      <Navbar />
      <main>
        <section className="relative overflow-hidden gradient-mesh pt-28 pb-14">
          <div className="section-pad container-page">
            <nav className="mb-5 text-sm text-white/55" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">{post.keyword}</span>
            </nav>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-mint">
              {post.eyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              {post.description}
            </p>
            <p className="mt-5 text-sm text-white/50">
              By {post.author} · {post.datePublished} · {post.readingMinutes} min read
            </p>
          </div>
        </section>

        <section className="bg-mist py-12 dark:bg-ink lg:py-16">
          <div className="section-pad container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
            <article className="rounded-3xl border border-line bg-foam p-6 dark:border-line-dark dark:bg-ink-soft sm:p-10">
              {post.sections.map((block, i) => (
                <SectionBlock key={`${block.type}-${i}`} block={block} />
              ))}
            </article>

            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-line bg-foam p-5 dark:border-line-dark dark:bg-ink-soft">
                <p className="font-display text-sm font-bold text-ink dark:text-white">On this page</p>
                <ul className="mt-3 space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-slate transition hover:text-ink dark:text-white/55 dark:hover:text-white"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-foam p-5 dark:border-line-dark dark:bg-ink-soft">
                <p className="font-display text-sm font-bold text-ink dark:text-white">Related guides</p>
                <ul className="mt-3 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/blog/${r.slug}`}
                        className="text-sm font-semibold text-ink transition hover:text-mint-deep dark:text-white dark:hover:text-mint"
                      >
                        {r.title}
                      </Link>
                    </li>
                  ))}
                  {blogPosts
                    .filter((p) => p.slug !== post.slug && !related.find((r) => r.slug === p.slug))
                    .slice(0, 1)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/blog/${p.slug}`}
                          className="text-sm font-semibold text-ink transition hover:text-mint-deep dark:text-white dark:hover:text-mint"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-foam p-5 dark:border-line-dark dark:bg-ink-soft">
                <p className="font-display text-sm font-bold text-ink dark:text-white">Try LOftPOS</p>
                <p className="mt-2 text-sm text-slate dark:text-white/55">
                  POS software for gaming cafes, restaurants, and cafes with menus, QR ordering,
                  bookings, and memberships.
                </p>
                <Link
                  to="/"
                  className="mt-3 inline-flex text-sm font-semibold text-mint-deep dark:text-mint"
                >
                  Back to product →
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
