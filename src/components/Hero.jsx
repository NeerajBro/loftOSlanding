import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import { Button } from './ui/Shared'

const floatCards = [
  { label: 'Live session', value: 'PS-04 · 48m', tone: 'from-mint/30 to-transparent', delay: 0.2 },
  { label: 'Kitchen', value: '12 orders · prep', tone: 'from-cyan/30 to-transparent', delay: 0.35 },
  { label: 'Today revenue', value: '₹42,680', tone: 'from-amber/30 to-transparent', delay: 0.5 },
  { label: 'Inventory', value: '3 low-stock', tone: 'from-rose/30 to-transparent', delay: 0.65 },
  { label: 'QR tables', value: '8 active', tone: 'from-mint/20 to-transparent', delay: 0.8 },
]

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden gradient-mesh pt-24 pb-16 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><path d=%22M40 0H0V40%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.03)%22 stroke-width=%221%22/></svg>')]" />

      <div className="section-pad container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="relative z-10 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Loft<span className="text-gradient">OS</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-mint"
          >
            The complete gaming, café & restaurant management platform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            Run your entertainment business from one white-label platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Manage gaming sessions, restaurant billing, QR ordering, inventory, reports, staff, and
            bookings — with your logo, colors, receipts, and data isolation built in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="#demo" variant="primary">
              Book free demo
            </Button>
            <Button href="#pricing" variant="secondary">
              Start free trial
            </Button>
            <a
              href="#flows"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                <FiPlay size={14} />
              </span>
              Watch demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-white/50"
          >
            <span>White-label ready</span>
            <span>·</span>
            <span>GST & UPI</span>
            <span>·</span>
            <span>Multi-tenant</span>
            <span>·</span>
            <span>14-day trial</span>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/45">Operations dashboard</p>
                <p className="font-display text-lg font-bold text-white">Tonight at a glance</p>
              </div>
              <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-semibold text-mint">
                Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { k: 'Active sessions', v: '18' },
                { k: 'Open tables', v: '6' },
                { k: 'Kitchen queue', v: '9' },
                { k: 'Net today', v: '₹42.6k' },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl bg-white/[0.04] p-3 ring-1 ring-white/8"
                >
                  <p className="text-[11px] text-white/45">{item.k}</p>
                  <p className="mt-1 font-display text-xl font-bold text-white">{item.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl bg-gradient-to-br from-mint/15 via-transparent to-cyan/10 p-4 ring-1 ring-white/10">
              <div className="mb-3 flex items-end justify-between">
                <p className="text-sm font-semibold text-white">Revenue pulse</p>
                <p className="text-xs text-mint">+18% vs yesterday</p>
              </div>
              <div className="flex h-20 items-end gap-1.5">
                {[40, 55, 48, 70, 62, 85, 78, 92, 88, 96, 84, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.4 + i * 0.04, duration: 0.5 }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-mint/40 to-cyan"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {floatCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.5 }}
              className={`absolute hidden rounded-2xl border border-white/10 bg-ink/70 px-3.5 py-2.5 shadow-xl backdrop-blur-md sm:block ${
                i === 0
                  ? '-left-6 top-8 lg:-left-10'
                  : i === 1
                    ? '-right-4 top-16 lg:-right-8'
                    : i === 2
                      ? '-left-4 bottom-24 lg:-left-12'
                      : i === 3
                        ? '-right-2 bottom-10 lg:-right-6'
                        : 'left-1/2 top-[-1.25rem] -translate-x-1/2'
              }`}
            >
              <p className="text-[10px] uppercase tracking-wider text-white/45">{card.label}</p>
              <p className="text-sm font-semibold text-white">{card.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
