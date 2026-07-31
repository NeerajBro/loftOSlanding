import { motion } from 'framer-motion'
import { Button } from './ui/Shared'

export default function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="section-pad container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to modernize your business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            Book a free demo and see gaming sessions, QR kitchen flow, white-label branding, and
            live reports on a floor that looks like yours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="mailto:loft64venture@gmail.com?subject=LoftOS%20Demo" variant="primary">
              Book a free demo
            </Button>
            <Button href="#pricing" variant="secondary">
              Compare plans
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
