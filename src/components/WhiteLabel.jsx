import { motion } from 'framer-motion'
import { FiArrowDown, FiCheck } from 'react-icons/fi'
import { SectionHeading } from './ui/Shared'

const layers = [
  {
    title: 'Platform',
    detail: 'One LoftOS control plane — plans, feature flags, onboarding, and superadmin oversight.',
  },
  {
    title: 'Organization',
    detail: 'Each business is a tenant with isolated data, GST settings, hours, and module access.',
  },
  {
    title: 'Owner',
    detail: 'Full visibility into revenue, inventory, staff, bookings, and branding decisions.',
  },
  {
    title: 'Staff',
    detail: 'Role-based tools for sessions, kitchen, counter, and reports — nothing more than needed.',
  },
  {
    title: 'Customers',
    detail: 'QR menus, live order status, slot bookings, and a brand experience that feels native.',
  },
]

const perks = [
  'Own logo & theme colors',
  'Own receipts & invoice identity',
  'Own menu, QR & tables',
  'Own staff & permissions',
  'Own customers & bookings',
  'Database isolation per tenant',
  'Own domain-ready public surfaces',
  'Expansion-ready lead pipeline',
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
          subtitle="Instead of spending lakhs on custom development, launch a fully branded operating system for every outlet — logo, colors, receipts, menu, staff, and data included."
        />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
                  <p className="font-display text-lg font-bold text-white">{layer.title}</p>
                  <p className="mt-1 text-sm text-white/60">{layer.detail}</p>
                </div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-1 text-mint/70">
                    <FiArrowDown aria-hidden />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-8 backdrop-blur"
          >
            <p className="font-display text-2xl font-bold text-white">
              One platform. Unlimited businesses.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Powerful for multi-location brands: centralized plans and feature control upstairs, fully branded
              local operations downstairs. Every tenant looks like their own product — because it is.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-sm text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/20 text-mint">
                    <FiCheck size={12} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
