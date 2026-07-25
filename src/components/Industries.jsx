import { motion } from 'framer-motion'
import { industries } from '../data/content'
import { SectionHeading } from './ui/Shared'

export default function Industries() {
  return (
    <section id="industries" className="bg-mist py-20 dark:bg-ink lg:py-28">
      <div className="section-pad container-page">
        <SectionHeading
          eyebrow="Industries"
          title="Purpose-built for entertainment-first businesses"
          subtitle="Whether you sell table time, console sessions, coffee, or full-service dining — LoftOS fits the floor you actually run."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.article
              key={ind.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-line bg-foam p-6 dark:border-line-dark dark:bg-ink-soft"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-mint to-cyan" />
              <h3 className="font-display text-xl font-bold text-ink dark:text-white">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate dark:text-white/60">{ind.blurb}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
