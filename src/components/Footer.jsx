import { Link } from 'react-router-dom'
import { FiInstagram, FiMail, FiPhone } from 'react-icons/fi'
import { useTrialSignup } from '../context/TrialSignupContext'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'White label', href: '/#white-label' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Analytics', href: '/#analytics' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Gaming cafe POS', to: '/solutions/gaming-cafe' },
      { label: 'Restaurant POS', to: '/solutions/restaurant' },
      { label: 'Cafe POS', to: '/solutions/cafe' },
      { label: 'All solutions', to: '/solutions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/#faq' },
      { label: 'Blog', to: '/blog' },
      { label: 'Gaming café software', to: '/blog/gaming-cafe-software' },
      { label: 'QR menu guide', to: '/blog/qr-menu-management-software' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact', href: '/#contact' },
      { label: 'Book demo', href: '#trial', trial: true },
      { label: 'Start trial', href: '#trial', trial: true },
    ],
  },
]

const contactItems = [
  {
    Icon: FiInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/loft64hq/',
    text: '@loft64hq',
    external: true,
  },
  {
    Icon: FiPhone,
    label: 'Phone',
    href: 'tel:+919987762009',
    text: '+91 9987762009',
  },
  {
    Icon: FiPhone,
    label: 'Phone (alt)',
    href: 'tel:+919819521816',
    text: '+91 9819521816',
  },
  {
    Icon: FiMail,
    label: 'Email',
    href: 'mailto:info@loftpos.com',
    text: 'info@loftpos.com',
  },
  {
    Icon: FiMail,
    label: 'Email (alt)',
    href: 'mailto:loft64venture@gmail.com',
    text: 'loft64venture@gmail.com',
  },
]

export default function Footer() {
  const { openTrialSignup } = useTrialSignup()

  return (
    <footer id="footer" className="border-t border-line bg-foam pb-10 pt-16 dark:border-line-dark dark:bg-ink">
      <div className="section-pad container-page">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-display text-2xl font-bold text-ink dark:text-white">
              Loft<span className="text-mint-deep dark:text-mint">POS</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate dark:text-white/55">
              POS software for gaming cafes, restaurants, and cafes — billing, inventory, bookings,
              and reports under your brand.
            </p>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-ink dark:text-white">
                Contact us
              </p>
              <ul className="mt-3 space-y-2.5">
                {contactItems.map(({ Icon, label, href, text, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      {...(external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="inline-flex items-center gap-2.5 text-sm text-slate transition hover:text-ink dark:text-white/55 dark:hover:text-white"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line dark:border-line-dark">
                        <Icon size={15} />
                      </span>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
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
                      {l.to ? (
                        <Link
                          to={l.to}
                          className="text-sm text-slate transition hover:text-ink dark:text-white/55 dark:hover:text-white"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          className="text-sm text-slate transition hover:text-ink dark:text-white/55 dark:hover:text-white"
                          onClick={
                            l.trial
                              ? (e) => {
                                  e.preventDefault()
                                  openTrialSignup()
                                }
                              : undefined
                          }
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-slate dark:border-line-dark dark:text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LoftPOS. All rights reserved.</p>
          <p>Built for gaming cafes, restaurants, cafes, and entertainment venues.</p>
        </div>
      </div>
    </footer>
  )
}
