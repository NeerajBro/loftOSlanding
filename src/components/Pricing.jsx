import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { pricingPlans } from '../data/content'
import { useTrialSignup } from '../context/TrialSignupContext'
import { Button, SectionHeading } from './ui/Shared'

export default function Pricing() {
  const { openTrialSignup } = useTrialSignup()
  const [openFromHash, setOpenFromHash] = useState(false)

  useEffect(() => {
    if (openFromHash) return undefined
    if (window.location.hash === '#trial') {
      openTrialSignup()
      setOpenFromHash(true)
    }
    return undefined
  }, [openFromHash, openTrialSignup])

  return (
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
                <Button
                  href="#trial"
                  variant={plan.highlighted ? 'primary' : 'ghost'}
                  className="w-full"
                  onClick={(e) => {
                    e.preventDefault()
                    openTrialSignup()
                  }}
                >
                  {plan.cta}
                </Button>
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
  )
}
