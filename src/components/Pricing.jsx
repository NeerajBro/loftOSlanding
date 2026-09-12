import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { useTrialSignup } from '../context/TrialSignupContext'
import { Button, SectionHeading } from './ui/Shared'
import { FALLBACK_PRICING, formatInr, posApiBase } from '../data/saasPricing'
import PaidCheckoutModal from './PaidCheckoutModal'

export default function Pricing() {
  const { openTrialSignup } = useTrialSignup()
  const [openFromHash, setOpenFromHash] = useState(false)
  const [cycle, setCycle] = useState('monthly')
  const [pricing, setPricing] = useState(FALLBACK_PRICING)
  const [checkout, setCheckout] = useState(null)

  useEffect(() => {
    if (openFromHash) return undefined
    if (window.location.hash === '#trial') {
      openTrialSignup()
      setOpenFromHash(true)
    }
    return undefined
  }, [openFromHash, openTrialSignup])

  useEffect(() => {
    let cancelled = false
    fetch(`${posApiBase()}/saas-billing/pricing`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.trial && Array.isArray(data.plans)) setPricing(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  const trial = pricing.trial
  const cards = [
    {
      ...trial,
      isTrial: true,
      monthlyPrice: 0,
      annualPrice: 0,
    },
    ...pricing.plans.map((plan) => ({ ...plan, isTrial: false })),
  ]

  return (
    <section id="pricing" className="bg-foam py-20 dark:bg-ink-soft lg:py-28">
      <div className="section-pad container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that grow with your floor"
          subtitle="Start free for 14 days, or pick a plan. Yearly billing shows the rupees you save versus paying every month."
        />

        <div className="mb-10 flex justify-center">
          <div className="grid w-full max-w-md grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setCycle('monthly')}
              className={`rounded-2xl border px-4 py-4 text-left transition ${
                cycle === 'monthly'
                  ? 'border-ink bg-ink text-white shadow-lg dark:border-white dark:bg-white dark:text-ink'
                  : 'border-line bg-mist text-ink dark:border-line-dark dark:bg-ink dark:text-white/80'
              }`}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] opacity-60">Monthly</p>
              <p className="mt-1 text-sm font-semibold">Pay as you go</p>
            </button>
            <button
              type="button"
              onClick={() => setCycle('annual')}
              className={`rounded-2xl border px-4 py-4 text-left transition ${
                cycle === 'annual'
                  ? 'border-ink bg-ink text-white shadow-lg dark:border-white dark:bg-white dark:text-ink'
                  : 'border-line bg-mist text-ink dark:border-line-dark dark:bg-ink dark:text-white/80'
              }`}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] opacity-60">Yearly</p>
              <p className="mt-1 text-sm font-semibold">Best value</p>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((plan, i) => {
            const yearlyIfMonthly = Number(plan.monthlyPrice || 0) * 12
            const annualSaving = Math.max(0, yearlyIfMonthly - Number(plan.annualPrice || 0))
            const amount = plan.isTrial ? 0 : cycle === 'annual' ? plan.annualPrice : plan.monthlyPrice
            const period = plan.isTrial ? `/${trial.durationDays || 14} days` : cycle === 'annual' ? '/year' : '/month'
            const highlighted = plan.id === 'business'
            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative flex min-w-0 flex-col overflow-hidden rounded-3xl border p-5 sm:p-6 ${
                  highlighted
                    ? 'border-mint/50 bg-ink text-white shadow-2xl shadow-mint/10'
                    : 'border-line bg-mist dark:border-line-dark dark:bg-ink'
                }`}
              >
                {highlighted && (
                  <span className="mb-3 w-fit rounded-full bg-mint px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
                    Most popular
                  </span>
                )}
                <h3
                  className={`font-display text-xl font-bold ${highlighted ? 'text-white' : 'text-ink dark:text-white'}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 min-h-[40px] text-sm leading-snug ${
                    highlighted ? 'text-white/60' : 'text-slate dark:text-white/55'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-5">
                  <div className="flex flex-wrap items-end gap-x-2 gap-y-0">
                    <span className="font-display text-3xl font-extrabold leading-none tracking-tight">
                      {formatInr(amount)}
                    </span>
                    <span className={`pb-0.5 text-sm ${highlighted ? 'text-white/50' : 'text-slate'}`}>{period}</span>
                  </div>

                  {plan.isTrial ? (
                    <p className={`mt-3 text-sm ${highlighted ? 'text-white/50' : 'text-slate'}`}>No payment required</p>
                  ) : cycle === 'annual' ? (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className={`text-sm line-through ${highlighted ? 'text-white/40' : 'text-slate/70'}`}>
                        {formatInr(yearlyIfMonthly)}/year
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                          highlighted ? 'bg-mint text-ink' : 'bg-mint/20 text-mint-deep dark:text-mint'
                        }`}
                      >
                        Save {formatInr(annualSaving)}
                      </span>
                    </div>
                  ) : (
                    <p className={`mt-3 text-sm ${highlighted ? 'text-white/50' : 'text-slate'}`}>
                      or {formatInr(plan.annualPrice)}/year
                    </p>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm leading-snug">
                      <FiCheck
                        className={`mt-0.5 shrink-0 ${highlighted ? 'text-mint' : 'text-mint-deep'}`}
                        size={15}
                      />
                      <span className={highlighted ? 'text-white/80' : 'text-slate-deep dark:text-white/70'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button
                    href={plan.isTrial ? '#trial' : '#pricing'}
                    variant={highlighted || plan.isTrial ? 'primary' : 'ghost'}
                    className="w-full"
                    onClick={(e) => {
                      e.preventDefault()
                      if (plan.isTrial) {
                        openTrialSignup()
                        return
                      }
                      setCheckout({
                        plan,
                        billingCycle: cycle,
                        displayPrice: formatInr(amount),
                        amountRupees: amount,
                      })
                    }}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-line dark:border-line-dark">
          <table className="min-w-full text-left text-sm">
            <caption className="sr-only">Feature comparison across LoftPOS plans</caption>
            <thead className="bg-mist dark:bg-ink">
              <tr>
                <th className="px-4 py-3 font-semibold text-ink dark:text-white">Capability</th>
                <th className="px-4 py-3 font-semibold">Free Trial</th>
                <th className="px-4 py-3 font-semibold">Starter</th>
                <th className="px-4 py-3 font-semibold">Pro</th>
                <th className="px-4 py-3 font-semibold text-mint-deep dark:text-mint">Business</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-foam dark:divide-line-dark dark:bg-ink-soft">
              {[
                ['Gaming café + Restaurant POS', true, true, true, true],
                ['Inventory & billing history', true, true, true, true],
                ['Reports & expenses', false, false, true, true],
                ['Memberships & prepaid packs', false, false, true, true],
                ['Lounge bookings & events', false, false, false, true],
                ['Expansion inquiry CRM', false, false, false, true],
              ].map(([name, t, a, b, c]) => (
                <tr key={name}>
                  <td className="px-4 py-3 text-ink dark:text-white/85">{name}</td>
                  {[t, a, b, c].map((ok, idx) => (
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
      {checkout ? (
        <PaidCheckoutModal
          open
          plan={checkout.plan}
          billingCycle={checkout.billingCycle}
          displayPrice={checkout.displayPrice}
          amountRupees={checkout.amountRupees}
          onClose={() => setCheckout(null)}
        />
      ) : null}
    </section>
  )
}
