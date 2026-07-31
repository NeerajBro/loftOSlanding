import { useEffect } from 'react'

const NAV_OFFSET = 80

function scrollToHash(hash, { retries = 20 } = {}) {
  const id = String(hash || '').replace(/^#/, '')
  if (!id) return

  const el = document.getElementById(id)
  if (!el) {
    if (retries > 0) {
      window.setTimeout(() => scrollToHash(hash, { retries: retries - 1 }), 50)
    }
    return
  }

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top: Math.max(0, top), behavior: 'auto' })
}

/**
 * Browser hash scroll runs before React paints sections.
 * Re-scroll after mount so /#pricing works on first navigation (e.g. from POS Upgrade).
 */
export default function ScrollToHash() {
  useEffect(() => {
    const run = () => scrollToHash(window.location.hash)
    // After first paint + a couple frames for layout
    const t0 = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(run)
    })
    const t1 = window.setTimeout(run, 100)
    const t2 = window.setTimeout(run, 400)

    const onHashChange = () => scrollToHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.cancelAnimationFrame(t0)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  return null
}
