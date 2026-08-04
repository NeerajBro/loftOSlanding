import { motion } from 'framer-motion'
import {
  FiCalendar,
  FiCpu,
  FiCreditCard,
  FiGrid,
  FiPackage,
  FiPieChart,
  FiShoppingCart,
  FiSmartphone,
  FiTarget,
  FiUsers,
} from 'react-icons/fi'
import { solutions, systemFlow } from '../data/content'
import { SectionHeading } from './ui/Shared'

const iconMap = {
  game: FiCpu,
  pos: FiShoppingCart,
  kitchen: FiGrid,
  inventory: FiPackage,
  staff: FiUsers,
  analytics: FiPieChart,
  calendar: FiCalendar,
  qr: FiSmartphone,
  expense: FiCreditCard,
  crm: FiTarget,
}

const flowIcons = {
  arrive: FiUsers,
  run: FiCpu,
  kitchen: FiGrid,
  checkout: FiCreditCard,
  owner: FiPieChart,
}

export default function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-60 gradient-mesh" />
      <div className="section-pad container-page relative">
        <SectionHeading
          light
          eyebrow="The solution"
          title="Gaming café software that also runs bookings and memberships"
          subtitle="LoftOS replaces fragmented timers, WhatsApp bookings, and spreadsheets with one white-label platform for lounges, cafés, and food floors."
        />

        {/* High-level system flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-8"
        >
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-mint">
            How LoftOS runs your floor
          </p>
          <div className="flex min-w-[640px] items-stretch justify-between gap-2 sm:min-w-0">
            {systemFlow.map((step, i) => {
              const Icon = flowIcons[step.icon] || FiCpu
              return (
                <div key={step.title} className="flex flex-1 items-center gap-2">
                  <div className="flex w-full flex-col items-center text-center">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-mint to-cyan text-ink shadow-[0_0_24px_-6px_rgba(46,230,166,0.55)]">
                      <Icon size={24} aria-hidden />
                    </div>
                    <p className="font-display text-sm font-bold sm:text-base">{step.title}</p>
                    <p className="mt-1 text-[11px] leading-snug text-white/55 sm:text-xs">{step.detail}</p>
                    <span className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-mint">
                      {i + 1}
                    </span>
                  </div>
                  {i < systemFlow.length - 1 && (
                    <div className="mt-[-2.5rem] hidden shrink-0 items-center self-center sm:flex" aria-hidden>
                      <div className="h-px w-6 bg-gradient-to-r from-mint/70 to-cyan/40 lg:w-10" />
                      <div className="h-0 w-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-cyan/50" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((s, i) => {
            const Icon = iconMap[s.icon] || FiCpu
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-mint/40 hover:bg-white/[0.07]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-mint/15 text-mint">
                  <Icon size={18} aria-hidden />
                </div>
                <h3 className="font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
