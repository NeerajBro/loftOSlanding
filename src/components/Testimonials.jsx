import { motion } from 'framer-motion'
import { testimonials } from '../data/content'
import { SectionHeading } from './ui/Shared'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-foam py-20 dark:bg-ink-soft lg:py-28">
      <div className="section-pad container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="Owners who stopped guessing and started measuring"
          subtitle="Realistic outcomes from lounges, cafés, restaurants, and multi-location operators running entertainment floors every day."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col rounded-3xl border border-line bg-mist p-7 dark:border-line-dark dark:bg-ink"
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-mint-deep dark:text-mint">
                {t.metric}
              </p>
              <p className="flex-1 text-base leading-relaxed text-ink/90 dark:text-white/80">
                “{t.quote}”
              </p>
              <footer className="mt-6 border-t border-line pt-4 dark:border-line-dark">
                <cite className="not-italic">
                  <span className="block font-semibold text-ink dark:text-white">{t.name}</span>
                  <span className="text-sm text-slate dark:text-white/50">{t.role}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
