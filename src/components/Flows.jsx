import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCheckCircle,
  FiCoffee,
  FiCpu,
  FiCreditCard,
  FiFileText,
  FiGrid,
  FiPlay,
  FiSmartphone,
  FiUserPlus,
} from 'react-icons/fi'
import { SectionHeading } from './ui/Shared'

const restaurantSteps = [
  { title: 'Scan QR', detail: 'Branded menu at the table', icon: FiSmartphone },
  { title: 'Order', detail: 'Cart, notes, filters', icon: FiCoffee },
  { title: 'Kitchen', detail: 'Live board + prep ETA', icon: FiGrid },
  { title: 'Prepare', detail: 'Pending → ready', icon: FiPlay },
  { title: 'Serve', detail: 'Clear the pass', icon: FiCheckCircle },
  { title: 'Settle', detail: 'GST · UPI · receipt', icon: FiCreditCard },
]

const gamingSteps = [
  { title: 'Arrive', detail: 'Name, station, party', icon: FiUserPlus },
  { title: 'Start', detail: 'Live timer + rates', icon: FiPlay },
  { title: 'Play', detail: 'Pause · extend · open', icon: FiCpu },
  { title: 'Add food', detail: 'Tab + stock sync', icon: FiCoffee },
  { title: 'Checkout', detail: 'GST · split · pay', icon: FiCreditCard },
  { title: 'Receipt', detail: 'Branded invoice', icon: FiFileText },
]

function FlowDiagram({ title, subtitle, steps, badge }) {
  return (
    <div className="rounded-3xl border border-line bg-foam p-5 sm:p-8 dark:border-line-dark dark:bg-ink-soft">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="mb-2 inline-flex rounded-lg bg-ink/5 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-mint-deep dark:bg-white/8 dark:text-mint">
            {badge}
          </span>
          <h3 className="font-display text-2xl font-bold text-ink dark:text-white">{title}</h3>
          <p className="mt-2 max-w-md text-sm text-slate dark:text-white/60">{subtitle}</p>
        </div>
      </div>

      {/* Desktop / tablet horizontal flow */}
      <div className="hidden md:block">
        <ol className="relative grid grid-cols-6 gap-2">
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-[28px] h-px bg-gradient-to-r from-mint via-cyan to-mint"
            aria-hidden
          />
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-mint shadow-lg shadow-mint/10 dark:bg-mint dark:text-ink">
                  <Icon size={22} aria-hidden />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-mint text-[10px] font-bold text-ink dark:bg-ink dark:text-mint">
                    {i + 1}
                  </span>
                </div>
                <p className="font-display text-sm font-bold text-ink dark:text-white">{step.title}</p>
                <p className="mt-1 text-[11px] leading-snug text-slate dark:text-white/50">{step.detail}</p>
                {i < steps.length - 1 && (
                  <FiArrowRight
                    className="absolute -right-1 top-[18px] z-20 hidden text-mint/70 lg:block"
                    size={14}
                    aria-hidden
                  />
                )}
              </motion.li>
            )
          })}
        </ol>
      </div>

      {/* Mobile vertical flow */}
      <ol className="space-y-0 md:hidden">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="relative flex gap-4 pb-6 last:pb-0"
            >
              {i < steps.length - 1 && (
                <span className="absolute left-[21px] top-12 h-[calc(100%-24px)] w-px bg-gradient-to-b from-mint/60 to-transparent" />
              )}
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-mint dark:bg-mint dark:text-ink">
                <Icon size={18} aria-hidden />
              </span>
              <div className="pt-1">
                <p className="font-semibold text-ink dark:text-white">
                  <span className="mr-2 text-xs font-bold text-mint-deep dark:text-mint">{i + 1}.</span>
                  {step.title}
                </p>
                <p className="mt-0.5 text-sm text-slate dark:text-white/55">{step.detail}</p>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}

export default function Flows() {
  return (
    <section id="flows" className="bg-mist py-20 dark:bg-ink lg:py-28">
      <div className="section-pad container-page">
        <SectionHeading
          eyebrow="How it works"
          title="See the floor flow — not a wall of features"
          subtitle="Two visual paths. Same idea: fewer handoffs, clear ownership, faster settlement."
        />
        <div className="grid gap-8 lg:grid-cols-1 xl:gap-10">
          <FlowDiagram
            badge="Food & QR"
            title="Restaurant flow"
            subtitle="Scan → kitchen → settle without shouting across the pass."
            steps={restaurantSteps}
          />
          <FlowDiagram
            badge="Sessions"
            title="Gaming flow"
            subtitle="Walk-in → timer → food tab → branded receipt in one checkout."
            steps={gamingSteps}
          />
        </div>
      </div>
    </section>
  )
}
