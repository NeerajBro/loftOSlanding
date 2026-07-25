import { motion } from 'framer-motion'
import {
  FiBox,
  FiClock,
  FiGitBranch,
  FiPieChart,
  FiShare2,
  FiShoppingBag,
  FiSmartphone,
  FiTrendingDown,
  FiUsers,
} from 'react-icons/fi'
import { problems } from '../data/content'
import { SectionHeading } from './ui/Shared'

const icons = {
  receipt: FiShoppingBag,
  box: FiBox,
  chart: FiPieChart,
  users: FiUsers,
  qr: FiSmartphone,
  puzzle: FiShare2,
  leak: FiTrendingDown,
  clock: FiClock,
  branches: FiGitBranch,
}

export default function Problem() {
  return (
    <section id="problem" className="bg-mist py-20 dark:bg-ink lg:py-28">
      <div className="section-pad container-page">
        <SectionHeading
          eyebrow="The problem"
          title="Running an entertainment business shouldn’t feel like juggling five broken tools"
          subtitle="Most lounges and cafés still stitch together timers, paper menus, WhatsApp bookings, and guesswork — and lose money in the gaps."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => {
            const Icon = icons[p.icon] || FiBox
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.04, duration: 0.45 }}
                className="group rounded-2xl border border-line bg-foam p-6 transition hover:-translate-y-1 hover:border-mint/40 hover:shadow-lg hover:shadow-mint/5 dark:border-line-dark dark:bg-ink-soft"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-mint dark:bg-white/5">
                  <Icon size={20} aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate dark:text-white/60">{p.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
