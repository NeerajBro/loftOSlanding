import { useEffect, useState } from 'react'
import { posApiBase, razorpayKeyId } from '../data/saasPricing'

function loadRazorpay() {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve(window.Razorpay)
      return
    }
    const el = document.createElement('script')
    el.src = 'https://checkout.razorpay.com/v1/checkout.js'
    el.onload = () => resolve(window.Razorpay)
    el.onerror = () => reject(new Error('Unable to load Razorpay Checkout'))
    document.body.appendChild(el)
  })
}

export default function PaidCheckoutModal({ open, onClose, plan, billingCycle, displayPrice, amountRupees }) {
  const [organizationName, setOrganizationName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (open) {
      setError('')
      setSuccess(false)
    }
  }, [open])

  function handleClose() {
    if (loading) return
    onClose()
    setOrganizationName('')
    setEmail('')
    setPassword('')
    setError('')
    setSuccess(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const key = razorpayKeyId()
      if (!key) {
        throw new Error(
          'Razorpay Key ID is invalid or still a placeholder. Set VITE_RAZORPAY_KEY_ID in loftOSlanding/.env and loftOSlanding/.env.development, then restart the landing server.'
        )
      }

      const rupees = Number(amountRupees)
      if (!Number.isFinite(rupees) || rupees <= 0) {
        throw new Error('Invalid plan amount')
      }

      const orgName = String(organizationName || '').trim()
      if (orgName.length < 2) {
        throw new Error('Organization name is required')
      }

      const Razorpay = await loadRazorpay()
      await new Promise((resolve, reject) => {
        const rzp = new Razorpay({
          key,
          amount: Math.round(rupees * 100),
          currency: 'INR',
          name: 'LoftPOS',
          description: `${plan.name} ${billingCycle === 'annual' ? 'annual' : 'monthly'}`,
          prefill: {
            email: String(email || '').trim().toLowerCase(),
            name: orgName,
          },
          notes: {
            plan: plan.id,
            billingCycle,
          },
          theme: { color: '#0f766e' },
          handler: async (response) => {
            try {
              const confirmRes = await fetch(`${posApiBase()}/saas-billing/complete-paid-signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  plan: plan.id,
                  billingCycle: billingCycle === 'annual' ? 'annual' : 'monthly',
                  email: String(email || '').trim().toLowerCase(),
                  password,
                  organizationName: orgName,
                  razorpay_payment_id: response.razorpay_payment_id,
                }),
              })
              const confirmData = await confirmRes.json().catch(() => null)
              if (!confirmRes.ok) {
                throw new Error(confirmData?.error || 'Payment received but account setup failed')
              }
              setSuccess(true)
              resolve()
            } catch (err) {
              reject(err)
            }
          },
          modal: {
            ondismiss: () => reject(new Error('Payment cancelled')),
          },
        })
        rzp.on('payment.failed', () => reject(new Error('Payment failed')))
        rzp.open()
      })
    } catch (err) {
      setError(err.message || 'Unable to start checkout')
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
          aria-labelledby="paid-success-title"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-mint/15 text-2xl">
            ✓
          </div>
          <h3 id="paid-success-title" className="font-display text-2xl font-bold">
            Payment done
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate dark:text-white/70">
            Thank you. Your payment was successful and your LoftPOS account is ready. Please check your email for the
            login link, then sign in with the email and password you just used.
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
      >
        <h3 className="font-display text-2xl font-bold">Choose {plan.name}</h3>
        <p className="mt-2 text-sm text-slate dark:text-white/70">
          {displayPrice} {billingCycle === 'annual' ? '/year' : '/month'}. Fill your details, pay, then sign in to
          LoftPOS.
        </p>
        {error ? (
          <div className="mt-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
        ) : null}
        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold">Organization name</span>
            <input
              type="text"
              required
              minLength={2}
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
            />
          </label>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" className="rounded-xl border border-line px-4 py-2 text-sm font-semibold" onClick={handleClose} disabled={loading}>
              Close
            </button>
            <button
              type="submit"
              className="rounded-xl bg-mint px-4 py-2 text-sm font-semibold text-ink disabled:opacity-70"
              disabled={loading}
            >
              {loading ? 'Opening checkout…' : 'Pay now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
