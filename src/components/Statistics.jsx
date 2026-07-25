import { motion } from 'framer-motion'
import CountUp from './CountUp'
import { stats } from '../data/content'
import { useInView } from '../hooks/useInView'

export default function Statistics() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <section className="border-y border-line bg-mist py-16 dark:border-line-dark dark:bg-ink" aria-label="Platform statistics">
      <div ref={ref} className="section-pad container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="text-center"
          >
            <p className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl dark:text-white">
              {inView ? (
                <CountUp
                  end={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                  duration={1.8}
                />
              ) : (
                `0${s.suffix}`
              )}
            </p>
            <p className="mt-2 text-sm text-slate dark:text-white/55">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
