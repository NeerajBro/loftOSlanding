import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'White label', href: '#white-label' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Analytics', href: '#analytics' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Gaming lounges', href: '#industries' },
      { label: 'Restaurants', href: '#industries' },
      { label: 'Cafés', href: '#industries' },
      { label: 'Franchises', href: '#multi-branch' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Blog', href: '#faq' },
      { label: 'Privacy', href: '#footer' },
      { label: 'Terms', href: '#footer' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact', href: 'mailto:hello@loftos.app' },
      { label: 'Book demo', href: '#demo' },
      { label: 'Start trial', href: '#pricing' },
    ],
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-foam pb-10 pt-16 dark:border-line-dark dark:bg-ink">
      <div className="section-pad container-page">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#top" className="font-display text-2xl font-bold text-ink dark:text-white">
              Loft<span className="text-mint-deep dark:text-mint">OS</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate dark:text-white/55">
              The complete white-label platform for gaming cafés, restaurants, and entertainment
              businesses.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: FiTwitter, label: 'Twitter' },
                { Icon: FiLinkedin, label: 'LinkedIn' },
                { Icon: FiGithub, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#footer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-slate transition hover:border-mint hover:text-mint-deep dark:border-line-dark dark:text-white/60"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold uppercase tracking-wider text-ink dark:text-white">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-slate transition hover:text-ink dark:text-white/55 dark:hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-slate dark:border-line-dark dark:text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LoftOS. All rights reserved.</p>
          <p>Built for gaming floors, cafés, and restaurant operations.</p>
        </div>
      </div>
    </footer>
  )
}
