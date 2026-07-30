import { motion } from 'framer-motion'
import {
  FiFlag,
  FiGitBranch,
  FiHome,
  FiLayers,
  FiMapPin,
  FiSettings,
  FiShare2,
} from 'react-icons/fi'
import { SectionHeading } from './ui/Shared'

const points = [
  {
    title: 'One owner, many outlets',
    detail: 'Each branch is a tenant with its own slug, staff, and data.',
    icon: FiGitBranch,
  },
  {
    title: 'Unified branding control',
    detail: 'Keep brand look consistent — or let outlets run their own white-label.',
    icon: FiLayers,
  },
  {
    title: 'Centralized oversight',
    detail: 'Plans, feature flags, trials, and onboarding from one console.',
    icon: FiSettings,
  },
  {
    title: 'Local operational freedom',
    detail: 'Menus, rates, inventory, and bookings stay local to each floor.',
    icon: FiFlag,
  },
]

const networkNodes = [
  { label: 'HQ / Superadmin', icon: FiHome, hub: true },
  { label: 'Outlet A', icon: FiMapPin },
  { label: 'Outlet B', icon: FiMapPin },
  { label: 'Outlet C', icon: FiMapPin },
]

export default function MultiBranch() {
  return (
    <section id="multi-branch" className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(46,230,166,0.12),_transparent_55%)]" />
      <div className="section-pad container-page relative">
        <SectionHeading
          light
          eyebrow="Multi-tenant growth"
          title="Scale from one lounge to a multi-location network"
          subtitle="Grow outlets without rebuilding software — or losing control of features, plans, and brand standards."
        />

        {/* Network diagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
        >
          <p className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mint">
            <FiShare2 size={14} aria-hidden />
            Multi-branch map
          </p>
          <div className="flex min-w-[520px] flex-col items-center gap-6 sm:min-w-0">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-mint to-cyan text-ink shadow-[0_0_28px_-8px_rgba(46,230,166,0.6)]">
                <FiHome size={26} aria-hidden />
              </div>
              <p className="mt-2 text-sm font-bold text-white">{networkNodes[0].label}</p>
              <p className="text-[11px] text-white/45">Plans · flags · onboarding</p>
            </div>

            <div className="flex h-8 w-px bg-gradient-to-b from-mint to-mint/20" aria-hidden />

            <div className="relative flex w-full max-w-2xl items-start justify-between gap-4 px-2">
              <div className="absolute left-[16%] right-[16%] top-7 h-px bg-gradient-to-r from-mint/40 via-cyan/50 to-mint/40" aria-hidden />
              {networkNodes.slice(1).map((node, i) => {
                const Icon = node.icon
                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="relative z-10 flex flex-1 flex-col items-center text-center"
                  >
                    <div className="mb-1 h-6 w-px bg-mint/40" aria-hidden />
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-mint">
                      <Icon size={22} aria-hidden />
                    </div>
                    <p className="mt-2 text-sm font-semibold text-white">{node.label}</p>
                    <p className="text-[11px] text-white/45">Own brand · menu · staff</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-mint">
                  <Icon size={20} aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{p.detail}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
