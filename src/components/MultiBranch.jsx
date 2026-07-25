import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { SectionHeading } from './ui/Shared'

const points = [
  {
    title: 'One owner, many outlets',
    detail: 'Onboard each branch or franchisee as a tenant with its own slug, staff, and data.',
  },
  {
    title: 'Unified branding control',
    detail: 'Keep the franchise look consistent — or let each outlet run its own white-label identity.',
  },
  {
    title: 'Centralized oversight',
    detail: 'Superadmin plans, feature flags, trial status, and onboarding without touching local data.',
  },
  {
    title: 'Local operational freedom',
    detail: 'Menus, rates, inventory, and bookings stay local so each floor can move at its own speed.',
  },
]

export default function MultiBranch() {
  return (
    <section id="multi-branch" className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(46,230,166,0.12),_transparent_55%)]" />
      <div className="section-pad container-page relative">
        <SectionHeading
          light
          eyebrow="Multi-tenant growth"
          title="Scale from one lounge to a franchise network"
          subtitle="LoftOS was built multi-tenant from day one. Grow outlets without rebuilding software — or losing control of features, billing plans, and brand standards."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <FiCheckCircle className="mb-4 text-mint" size={22} aria-hidden />
              <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{p.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
