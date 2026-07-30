import { motion } from 'framer-motion'
import {
  FiCalendar,
  FiCpu,
  FiFileText,
  FiGrid,
  FiLayers,
  FiPackage,
  FiPieChart,
  FiShoppingCart,
  FiUsers,
  FiBriefcase,
} from 'react-icons/fi'
import { featureCards } from '../data/content'
import { SectionHeading } from './ui/Shared'

const iconMap = {
  game: FiCpu,
  pos: FiShoppingCart,
  kitchen: FiGrid,
  inventory: FiPackage,
  invoice: FiFileText,
  reports: FiPieChart,
  staff: FiUsers,
  calendar: FiCalendar,
  brand: FiLayers,
  vendor: FiBriefcase,
}

export default function Features() {
  return (
    <section id="features" className="bg-foam py-20 dark:bg-ink-soft lg:py-28">
      <div className="section-pad container-page">
        <SectionHeading
          eyebrow="Feature showcase"
          title="Built for the floor — not just the back office"
          subtitle="Every module is designed around real entertainment workflows: timed play, kitchen pressure, multi-location branding, and rupee-level accountability."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((f, i) => {
            const Icon = iconMap[f.icon] || FiLayers
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.5 }}
                className="flex flex-col rounded-3xl border border-line bg-mist/80 p-6 transition hover:border-mint/35 hover:shadow-xl hover:shadow-ink/5 dark:border-line-dark dark:bg-ink/60"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-mint to-cyan text-ink">
                    <Icon size={22} aria-hidden />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-ink dark:text-white">{f.title}</h3>
                <p className="mt-2 inline-flex items-start gap-1.5 text-xs font-semibold text-rose dark:text-rose/90">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden />
                  {f.problem}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate dark:text-white/65">
                  {f.benefit}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-ink/[0.06] px-2.5 py-1 text-[11px] font-semibold text-ink/70 dark:bg-white/8 dark:text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
