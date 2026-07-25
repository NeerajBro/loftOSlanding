import { motion } from 'framer-motion'
import CountUp from './CountUp'
import { useInView } from '../hooks/useInView'
import { SectionHeading } from './ui/Shared'

const charts = [
  { label: 'Revenue', values: [42, 55, 48, 70, 88, 76, 95], color: 'from-mint to-cyan' },
  { label: 'Sessions', values: [30, 44, 52, 48, 66, 72, 80], color: 'from-cyan to-mint' },
  { label: 'Orders', values: [50, 40, 62, 58, 74, 68, 90], color: 'from-amber to-mint' },
]

export default function Analytics() {
  const { ref, inView } = useInView()

  return (
    <section id="analytics" className="bg-foam py-20 dark:bg-ink-soft lg:py-28">
      <div className="section-pad container-page">
        <SectionHeading
          eyebrow="Analytics"
          title="Know exactly where every rupee comes from"
          subtitle="Real-time revenue analytics, top-selling products, peak gaming hours, station performance, and staff-aware summaries — so pricing and staffing stop being guesses."
        />

        <div ref={ref} className="grid gap-6 lg:grid-cols-3">
          {charts.map((chart, i) => (
            <motion.div
              key={chart.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-line bg-mist p-6 dark:border-line-dark dark:bg-ink"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">{chart.label}</h3>
                <span className="text-sm font-semibold text-mint-deep dark:text-mint">
                  {inView && <CountUp end={18 + i * 4} suffix="%" duration={1.4} />} this week
                </span>
              </div>
              <div className="flex h-36 items-end gap-2">
                {chart.values.map((v, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${v}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.05, duration: 0.55 }}
                    className={`flex-1 rounded-t-lg bg-gradient-to-t ${chart.color} opacity-90`}
                  />
                ))}
              </div>
              <p className="mt-4 text-xs text-slate dark:text-white/45">
                Filter by today, week, month, year, or custom range — including inventory and expense context.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
