import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { useTrialSignup } from '../context/TrialSignupContext'
import { Button } from './ui/Shared'

const sectionLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#flows', label: 'How it works' },
  { to: '/solutions', label: 'Solutions' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const { openTrialSignup } = useTrialSignup()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !onHome
          ? 'border-b border-white/10 bg-ink/80 backdrop-blur-xl dark:bg-ink/85'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-pad container-page flex h-16 items-center justify-between lg:h-18">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="LOftPOS home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-mint to-cyan font-display text-sm font-bold text-ink shadow-lg shadow-mint/20">
            L
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            LOft<span className="text-mint">POS</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {sectionLinks.map((l) =>
            l.to ? (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition hover:text-white ${
                  pathname.startsWith(l.to) ? 'text-white' : 'text-white/70'
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {l.label}
              </a>
            ),
          )}
          <Link
            to="/blog"
            className={`text-sm font-medium transition hover:text-white ${
              pathname.startsWith('/blog') ? 'text-white' : 'text-white/70'
            }`}
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="rounded-xl p-2.5 text-white/80 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <div className="hidden sm:block">
            <Button
              href="#trial"
              variant="primary"
              className="!py-2.5 !text-xs"
              onClick={(e) => {
                e.preventDefault()
                openTrialSignup()
              }}
            >
              Book free demo
            </Button>
          </div>
          <button
            type="button"
            className="rounded-xl p-2.5 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {sectionLinks.map((l) =>
              l.to ? (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ),
            )}
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5"
            >
              Blog
            </Link>
            <Button
              href="#trial"
              variant="primary"
              onClick={(e) => {
                e.preventDefault()
                setOpen(false)
                openTrialSignup()
              }}
            >
              Book free demo
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
