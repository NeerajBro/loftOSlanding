import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { SectionHeading } from './ui/Shared'

const restaurantSteps = [
  { title: 'Scan QR', detail: 'Guest opens your branded menu from the table.' },
  { title: 'Order food', detail: 'Cart, notes, veg/non-veg filters — submitted in seconds.' },
  { title: 'Kitchen receives', detail: 'Live board updates with prep ETA and history.' },
  { title: 'Prepare', detail: 'Status moves pending → preparing → ready.' },
  { title: 'Serve', detail: 'Floor staff see ready tickets and clear the pass.' },
  { title: 'Settle bill', detail: 'Discount, GST, UPI/cash — printable receipt.' },
]

const gamingSteps = [
  { title: 'Customer arrives', detail: 'Name, phone, station, game type, party size.' },
  { title: 'Start session', detail: 'Weekday/weekend rates with live timer.' },
  { title: 'Play', detail: 'Pause, resume, extend, or open-ended billing.' },
  { title: 'Food added', detail: 'Inventory syncs as snacks land on the tab.' },
  { title: 'Checkout', detail: 'Discounts, GST, split game revenue, payment mode.' },
  { title: 'Receipt', detail: 'Branded invoice with sequential numbering.' },
]

function Flow({ title, subtitle, steps, accent }) {
  return (
    <div>
      <h3 className={`font-display text-2xl font-bold ${accent}`}>{title}</h3>
      <p className="mt-2 max-w-xl text-sm text-slate dark:text-white/60">{subtitle}</p>
      <ol className="mt-8 space-y-0">
        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative flex gap-4 pb-8 last:pb-0"
          >
            {i < steps.length - 1 && (
              <span className="absolute left-[15px] top-8 h-[calc(100%-16px)] w-px bg-gradient-to-b from-mint/50 to-transparent" />
            )}
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-mint dark:bg-mint dark:text-ink">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-ink dark:text-white">{step.title}</p>
              <p className="mt-1 text-sm text-slate dark:text-white/55">{step.detail}</p>
            </div>
            {i < steps.length - 1 && (
              <FiArrowRight className="ml-auto hidden shrink-0 text-mint/40 sm:block" aria-hidden />
            )}
          </motion.li>
        ))}
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
          title="Restaurant & gaming flows that match the real floor"
          subtitle="Fewer handoffs. Clear ownership. Faster settlement — whether guests are ordering from a QR or finishing a three-hour console session."
        />
        <div className="grid gap-12 rounded-3xl border border-line bg-foam p-6 sm:p-10 lg:grid-cols-2 dark:border-line-dark dark:bg-ink-soft">
          <Flow
            title="Restaurant flow"
            subtitle="From scan to settle — kitchen and counter stay in sync without shouting across the pass."
            steps={restaurantSteps}
            accent="text-ink dark:text-white"
          />
          <Flow
            title="Gaming flow"
            subtitle="From walk-in to receipt — timers, food tabs, and payments close in one checkout."
            steps={gamingSteps}
            accent="text-ink dark:text-white"
          />
        </div>
      </div>
    </section>
  )
}
