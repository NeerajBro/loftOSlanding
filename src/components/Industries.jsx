import { motion } from 'framer-motion'
import {
  FiCoffee,
  FiCpu,
  FiGrid,
  FiHeadphones,
  FiMonitor,
  FiShare2,
  FiShoppingBag,
  FiTarget,
  FiZap,
} from 'react-icons/fi'
import { industries } from '../data/content'
import { SectionHeading } from './ui/Shared'

const iconMap = {
  lounge: FiMonitor,
  restaurant: FiShoppingBag,
  cafe: FiCoffee,
  console: FiCpu,
  pool: FiTarget,
  esports: FiHeadphones,
  foodcourt: FiZap,
  network: FiShare2,
  center: FiGrid,
}

export default function Industries() {
  return (
    <section id="industries" className="bg-mist py-20 dark:bg-ink lg:py-28">
      <div className="section-pad container-page">
        <SectionHeading
          eyebrow="Industries"
          title="Built for gaming cafés, lounges, and member-driven floors"
          subtitle="From gaming café software to lounge booking and membership management — LoftOS fits how entertainment venues actually sell time and food."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] || FiGrid
            return (
              <motion.article
                key={ind.name}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-line bg-foam p-6 dark:border-line-dark dark:bg-ink-soft"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-mint to-cyan text-ink">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold text-ink dark:text-white">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate dark:text-white/60">{ind.blurb}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
