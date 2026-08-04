import { motion } from 'framer-motion'
import { useTrialSignup } from '../context/TrialSignupContext'
import { Button } from './ui/Shared'

export default function FinalCTA() {
  const { openTrialSignup } = useTrialSignup()

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
            Ready to run your gaming café on one OS?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            Book a free demo and see gaming café sessions, lounge bookings, membership check-in, QR
            kitchen flow, and live reports on a floor that looks like yours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              href="#trial"
              variant="primary"
              onClick={(e) => {
                e.preventDefault()
                openTrialSignup()
              }}
            >
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
