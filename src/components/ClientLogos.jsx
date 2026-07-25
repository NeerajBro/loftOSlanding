import { motion } from 'framer-motion'
import { clientLogos } from '../data/content'

export default function ClientLogos() {
  return (
    <section className="border-y border-line bg-foam py-12 dark:border-line-dark dark:bg-ink-soft" aria-label="Trusted by">
      <div className="section-pad container-page">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate dark:text-white/45">
          Trusted by modern entertainment businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clientLogos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="font-display text-lg font-semibold tracking-tight text-ink/35 transition hover:text-ink/70 dark:text-white/30 dark:hover:text-white/60"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
