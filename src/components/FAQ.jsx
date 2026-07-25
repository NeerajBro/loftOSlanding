import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { faqs } from '../data/content'
import { SectionHeading } from './ui/Shared'

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-line dark:border-line-dark">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-ink dark:text-white sm:text-lg">
          {item.q}
        </span>
        <FiChevronDown
          className={`shrink-0 text-slate transition-transform dark:text-white/50 ${open ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-slate dark:text-white/60">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-mist py-20 dark:bg-ink lg:py-28">
      <div className="section-pad container-page max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers owners ask before they switch"
          subtitle="Straight answers on gaming POS, QR ordering, white-label branding, GST, permissions, and multi-tenant growth."
        />
        <div className="rounded-3xl border border-line bg-foam px-5 sm:px-8 dark:border-line-dark dark:bg-ink-soft">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
