import { motion } from 'framer-motion'
import {
  FiArrowDown,
  FiBriefcase,
  FiCheck,
  FiLayers,
  FiServer,
  FiShield,
  FiSmartphone,
  FiUsers,
} from 'react-icons/fi'
import { SectionHeading } from './ui/Shared'

const layers = [
  {
    title: 'Platform',
    detail: 'Plans, feature flags, onboarding, superadmin.',
    icon: FiServer,
  },
  {
    title: 'Organization',
    detail: 'Isolated tenant — GST, hours, modules.',
    icon: FiBriefcase,
  },
  {
    title: 'Owner',
    detail: 'Revenue, stock, staff, branding control.',
    icon: FiShield,
  },
  {
    title: 'Staff',
    detail: 'Role-based sessions, kitchen, counter.',
    icon: FiUsers,
  },
  {
    title: 'Customers',
    detail: 'QR menus, live status, slot bookings.',
    icon: FiSmartphone,
  },
]

const perks = [
  { label: 'Own logo & theme colors', icon: FiLayers },
  { label: 'Own receipts & invoices', icon: FiCheck },
  { label: 'Own menu, QR & tables', icon: FiSmartphone },
  { label: 'Own staff & permissions', icon: FiUsers },
  { label: 'Own customers & bookings', icon: FiBriefcase },
  { label: 'Database isolation', icon: FiServer },
  { label: 'Own domain-ready surfaces', icon: FiLayers },
  { label: 'Expansion lead pipeline', icon: FiShield },
]

export default function WhiteLabel() {
  return (
    <section id="white-label" className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-mint/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan/15 blur-[90px]" />

      <div className="section-pad container-page relative">
        <SectionHeading
          light
          eyebrow="White label"
          title="Your brand. Your software. Without building it from scratch."
          subtitle="Launch a fully branded OS for every outlet — logo, colors, receipts, menu, staff, and isolated data."
        />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Stack diagram */}
          <div>
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-mint lg:text-left">
              Brand stack
            </p>
            <div className="space-y-2">
              {layers.map((layer, i) => {
                const Icon = layer.icon
                return (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative"
                  >
                    <div
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur"
                      style={{ marginLeft: `${i * 8}px`, marginRight: `${(layers.length - 1 - i) * 8}px` }}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-mint">
                        <Icon size={20} aria-hidden />
                      </div>
                      <div>
                        <p className="font-display text-base font-bold text-white">{layer.title}</p>
                        <p className="text-sm text-white/55">{layer.detail}</p>
                      </div>
                      <span className="ml-auto hidden text-[10px] font-bold text-white/30 sm:block">
                        L{i + 1}
                      </span>
                    </div>
                    {i < layers.length - 1 && (
                      <div className="flex justify-center py-0.5 text-mint/60">
                        <FiArrowDown size={14} aria-hidden />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-8 backdrop-blur"
          >
            <p className="font-display text-2xl font-bold text-white">One platform. Unlimited businesses.</p>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Central plans upstairs. Fully branded local ops downstairs. Every tenant looks like their own product.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {perks.map((perk) => {
                const Icon = perk.icon
                return (
                  <li key={perk.label} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-mint/20 text-mint">
                      <Icon size={13} aria-hidden />
                    </span>
                    {perk.label}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
