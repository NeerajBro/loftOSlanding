import { useEffect, useState } from 'react'
import { useTrialSignup } from '../context/TrialSignupContext'
import { posApiBase } from '../data/saasPricing'

const THANK_YOU_MESSAGE =
  'Thank you for your interest in LoftPOS. Your account has been created. Please check your email for the activation link. Click that link to activate your account, then sign in  to start your free trial.'

export default function TrialSignupModal() {
  const { open, closeTrialSignup } = useTrialSignup()
  const [organizationName, setOrganizationName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const trialApiBase = posApiBase()

  useEffect(() => {
    if (open) {
      setSuccess(false)
      setError('')
    }
  }, [open])

  function resetForm() {
    setOrganizationName('')
    setEmail('')
    setPassword('')
    setError('')
    setLoading(false)
  }

  function handleClose() {
    if (loading) return
    closeTrialSignup()
    resetForm()
    setSuccess(false)
  }

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

      resetForm()
      closeTrialSignup()
      setSuccess(true)
    } catch (err) {
      setError(err.message || 'Unable to start free trial')
    } finally {
      setLoading(false)
    }
  }

  if (!open && !success) return null

  if (success) {
    return (
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
            Check your email
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate dark:text-white/70">
            {THANK_YOU_MESSAGE}
          </p>
          <button
            type="button"
            className="mt-5 w-full rounded-xl bg-mint px-4 py-2.5 text-sm font-semibold text-ink hover:bg-mint-deep hover:text-white"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-ink/70 px-4 py-8">
      <div
        className="w-full max-w-md rounded-2xl border border-line bg-white p-6 text-ink shadow-2xl dark:border-line-dark dark:bg-ink-soft dark:text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="trial-signup-title"
      >
        <h3 id="trial-signup-title" className="font-display text-2xl font-bold">
          Start Your 14-Day Free Trial
        </h3>
        <p className="mt-2 text-sm text-slate dark:text-white/70">
          Create your trial account. We will send an activation link to your email so you can start your free trial.
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
              onClick={handleClose}
              disabled={loading}
            >
              Close
            </button>
            <button
              type="submit"
              className="rounded-xl bg-mint px-4 py-2 text-sm font-semibold text-ink hover:bg-mint-deep hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
              disabled={loading}
            >
              {loading ? 'Submitting…' : 'Create Free Trial'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
