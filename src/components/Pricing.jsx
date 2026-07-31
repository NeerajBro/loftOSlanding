import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { pricingPlans } from '../data/content'
import { Button, SectionHeading } from './ui/Shared'

export default function Pricing() {
  const [signupOpen, setSignupOpen] = useState(false)
  const [organizationName, setOrganizationName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successInfo, setSuccessInfo] = useState(null)

  const trialApiBase = useMemo(() => {
    if (import.meta.env.VITE_POS_API_BASE) {
      return String(import.meta.env.VITE_POS_API_BASE).replace(/\/$/, '')
    }
    if (import.meta.env.DEV) return 'http://127.0.0.1:7777/api'
    return 'https://pos-api.loftsixtyfour.com/api'
  }, [])

  const posAppBase = useMemo(() => {
    if (import.meta.env.VITE_POS_APP_URL) {
      return String(import.meta.env.VITE_POS_APP_URL).replace(/\/$/, '')
    }
    if (import.meta.env.DEV) {
      try {
        const u = new URL(window.location.origin)
        const isLocal = u.hostname === 'localhost' || u.hostname === '127.0.0.1'
        if (isLocal) {
          const port = Number(u.port || 5173)
          return `${u.protocol}//${u.hostname}:${port + 1}`
        }
      } catch {
        // ignore fallback errors
      }
      return 'http://localhost:5174'
    }
    return 'https://pos.loftsixtyfour.com'
  }, [])

  async function handleTrialSignup(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const trimmedOrgName = String(organizationName || '').trim()
      if (!trimmedOrgName) {
        throw new Error('Organization name is required')
      }

      const res = await fetch(`${trialApiBase}/auth/trial-signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: String(email || '').trim().toLowerCase(),
          password,
          organizationName: trimmedOrgName,
          businessName: trimmedOrgName,
          timezone: 'Asia/Kolkata',
        }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok) {
        throw new Error(data?.message || data?.error || `Signup failed (${res.status})`)
      }
      const token = data?.token
      const fallback = token
        ? `${posAppBase}/login?token=${encodeURIComponent(token)}`
        : `${posAppBase}/login`
      const redirectUrl = data?.redirectToPos || fallback

      setSignupOpen(false)
      setSuccessInfo({
        organizationName: data?.organization?.name || trimmedOrgName,
        slug: data?.organization?.slug || '',
        redirectUrl,
      })
    } catch (err) {
      setError(err.message || 'Unable to start free trial')
    } finally {
      setLoading(false)
    }
  }

  function goToPos(redirectUrl) {
    if (redirectUrl) window.location.assign(redirectUrl)
  }

  useEffect(() => {
    if (!successInfo?.redirectUrl) return undefined
    const timer = window.setTimeout(() => {
      goToPos(successInfo.redirectUrl)
    }, 3500)
    return () => window.clearTimeout(timer)
  }, [successInfo])

  return (
    <>
      <section id="pricing" className="bg-foam py-20 dark:bg-ink-soft lg:py-28">
        <div className="section-pad container-page">
          <SectionHeading
            eyebrow="Pricing"
            title="Plans that grow with your floor"
            subtitle="Start with sessions and POS. Unlock analytics, vendors, bookings, events, and multi-location tools as you scale."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative flex flex-col rounded-3xl border p-7 ${
                  plan.highlighted
                    ? 'border-mint/50 bg-ink text-white shadow-2xl shadow-mint/10 lg:-translate-y-2'
                    : 'border-line bg-mist dark:border-line-dark dark:bg-ink'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-7 rounded-full bg-mint px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                    Most popular
                  </span>
                )}
                <h3
                  className={`font-display text-2xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-ink dark:text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? 'text-white/60' : 'text-slate dark:text-white/55'
                  }`}
                >
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-white/50' : 'text-slate'}>{plan.period}</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <FiCheck
                        className={`mt-0.5 shrink-0 ${plan.highlighted ? 'text-mint' : 'text-mint-deep'}`}
                        size={16}
                      />
                      <span className={plan.highlighted ? 'text-white/80' : 'text-slate-deep dark:text-white/70'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {plan.id === 'starter' ? (
                    <Button
                      href="#pricing"
                      variant={plan.highlighted ? 'primary' : 'ghost'}
                      className="w-full"
                      onClick={(e) => {
                        e.preventDefault()
                        setSignupOpen(true)
                      }}
                    >
                      {plan.cta}
                    </Button>
                  ) : (
                    <Button
                      href="#demo"
                      variant={plan.highlighted ? 'primary' : 'ghost'}
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-line dark:border-line-dark">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">Feature comparison across LoftOS plans</caption>
              <thead className="bg-mist dark:bg-ink">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ink dark:text-white">Capability</th>
                  <th className="px-4 py-3 font-semibold">Starter</th>
                  <th className="px-4 py-3 font-semibold">Pro</th>
                  <th className="px-4 py-3 font-semibold text-mint-deep dark:text-mint">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-foam dark:divide-line-dark dark:bg-ink-soft">
                {[
                  ['Gaming + Restaurant POS', true, true, true],
                  ['Inventory & billing history', true, true, true],
                  ['Reports & expenses', false, true, true],
                  ['Vendor sessions', false, true, true],
                  ['Slot bookings & events', false, false, true],
                  ['Expansion inquiry CRM', false, false, true],
                ].map(([name, a, b, c]) => (
                  <tr key={name}>
                    <td className="px-4 py-3 text-ink dark:text-white/85">{name}</td>
                    {[a, b, c].map((ok, idx) => (
                      <td key={idx} className="px-4 py-3">
                        {ok ? (
                          <FiCheck className="text-mint-deep dark:text-mint" aria-label="Included" />
                        ) : (
                          <span className="text-slate/40" aria-label="Not included">
                            —
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {signupOpen ? (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-ink/70 px-4 py-8">
          <div className="w-full max-w-md rounded-2xl border border-line bg-white p-6 text-ink shadow-2xl dark:border-line-dark dark:bg-ink-soft dark:text-white">
            <h3 className="font-display text-2xl font-bold">Start Your 14-Day Free Trial</h3>
            <p className="mt-2 text-sm text-slate dark:text-white/70">
              Create your trial account to access LoftCashReceipt POS instantly.
            </p>

            {error ? (
              <div className="mt-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            ) : null}

            <form className="mt-5 space-y-4" onSubmit={handleTrialSignup}>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold">Organization name</span>
                <input
                  type="text"
                  required
                  minLength={2}
                  maxLength={80}
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  className="w-full rounded-xl border border-line bg-foam px-3 py-2 text-sm outline-none focus:border-mint dark:border-line-dark dark:bg-ink"
                  placeholder="e.g. GameZone Mumbai"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm font-semibold">Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-line bg-foam px-3 py-2 text-sm outline-none focus:border-mint dark:border-line-dark dark:bg-ink"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-sm font-semibold">Password</span>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-line bg-foam px-3 py-2 text-sm outline-none focus:border-mint dark:border-line-dark dark:bg-ink"
                  placeholder="At least 8 characters"
                />
              </label>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  className="rounded-xl border border-line px-4 py-2 text-sm font-semibold hover:bg-mist dark:border-line-dark dark:hover:bg-ink"
                  onClick={() => setSignupOpen(false)}
                  disabled={loading}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-mint px-4 py-2 text-sm font-semibold text-ink hover:bg-mint-deep hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={loading}
                >
                  {loading ? 'Creating trial...' : 'Create Free Trial'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {successInfo ? (
        <div className="fixed inset-0 z-[95] grid place-items-center bg-ink/75 px-4 py-8">
          <div
            className="w-full max-w-md rounded-2xl border border-mint/40 bg-white p-6 text-center text-ink shadow-2xl dark:bg-ink-soft dark:text-white"
            role="dialog"
            aria-modal="true"
            aria-labelledby="trial-success-title"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-mint/15 text-2xl">
              ✓
            </div>
            <h3 id="trial-success-title" className="font-display text-2xl font-bold">
              Trial account created!
            </h3>
            <p className="mt-3 text-sm text-slate dark:text-white/70">
              Redirecting in a moment…
            </p>
            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-mint px-4 py-2.5 text-sm font-semibold text-ink hover:bg-mint-deep hover:text-white"
              onClick={() => goToPos(successInfo.redirectUrl)}
            >
              Open POS now
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
