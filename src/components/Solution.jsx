import { motion } from 'framer-motion'
import { solutions } from '../data/content'
import { SectionHeading } from './ui/Shared'

export default function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-60 gradient-mesh" />
      <div className="section-pad container-page relative">
        <SectionHeading
          light
          eyebrow="The solution"
          title="One operating system for gaming, food, and floor operations"
          subtitle="LoftOS replaces fragmented tools with a single white-label platform that bills faster, tracks stock honestly, and shows owners what’s actually working."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-mint/40 hover:bg-white/[0.07]"
            >
              <p className="mb-2 text-xs font-semibold text-mint">0{i + 1}</p>
              <h3 className="font-display text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
