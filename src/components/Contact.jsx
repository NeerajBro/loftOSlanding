import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiInstagram, FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { SectionHeading } from './ui/Shared'

const CONTACT_EMAIL = 'info@loftpos.com'

const contactItems = [
  {
    Icon: FiInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/loft64hq/',
    text: '@loft64hq',
    external: true,
  },
  {
    Icon: FiPhone,
    label: 'Phone',
    href: 'tel:+919987762009',
    text: '+91 9987762009',
  },
  {
    Icon: FiPhone,
    label: 'Phone (alt)',
    href: 'tel:+919819521816',
    text: '+91 9819521816',
  },
  {
    Icon: FiMail,
    label: 'Email',
    href: `mailto:${CONTACT_EMAIL}`,
    text: CONTACT_EMAIL,
  },
  {
    Icon: FiMail,
    label: 'Email (alt)',
    href: 'mailto:loft64venture@gmail.com',
    text: 'loft64venture@gmail.com',
  },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  function updateField(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const phone = form.phone.trim()
    const message = form.message.trim()

    const subject = encodeURIComponent(`Contact from ${name || 'website visitor'}`)
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        '',
        message,
      ]
        .filter((line) => line !== null)
        .join('\n'),
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="bg-foam py-20 dark:bg-ink-soft lg:py-28">
      <div className="section-pad container-page">
        <SectionHeading
          eyebrow="Contact us"
          title="Talk to the LOftPOS team"
          subtitle="Questions about gaming café POS, restaurant billing, or a white-label setup? Reach out — we usually reply within one business day."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <p className="text-sm leading-relaxed text-slate dark:text-white/60">
              Prefer email or a quick call? Use the details below, or send a message with the form.
            </p>
            <ul className="space-y-3">
              {contactItems.map(({ Icon, label, href, text, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-3 text-sm text-slate transition hover:text-ink dark:text-white/65 dark:hover:text-white"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line dark:border-line-dark">
                      <Icon size={16} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate/70 dark:text-white/40">
                        {label}
                      </span>
                      <span className="font-medium text-ink dark:text-white">{text}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line bg-mist p-6 sm:p-8 dark:border-line-dark dark:bg-ink"
          >
            {status === 'sent' ? (
              <div className="rounded-2xl border border-mint/40 bg-mint/10 px-4 py-5 text-center">
                <p className="font-display text-lg font-bold text-ink dark:text-white">
                  Opening your email app…
                </p>
                <p className="mt-2 text-sm text-slate dark:text-white/65">
                  Your message is ready to send to {CONTACT_EMAIL}. You can also write us directly at
                  that address.
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm font-semibold text-mint-deep underline-offset-2 hover:underline dark:text-mint"
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-white">
                      Name
                    </span>
                    <input
                      type="text"
                      required
                      minLength={2}
                      maxLength={80}
                      value={form.name}
                      onChange={updateField('name')}
                      className="w-full rounded-xl border border-line bg-foam px-3 py-2.5 text-sm outline-none transition focus:border-mint dark:border-line-dark dark:bg-ink-soft"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-white">
                      Email
                    </span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={updateField('email')}
                      className="w-full rounded-xl border border-line bg-foam px-3 py-2.5 text-sm outline-none transition focus:border-mint dark:border-line-dark dark:bg-ink-soft"
                      placeholder="you@business.com"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-white">
                    Phone <span className="font-normal text-slate dark:text-white/45">(optional)</span>
                  </span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={updateField('phone')}
                    className="w-full rounded-xl border border-line bg-foam px-3 py-2.5 text-sm outline-none transition focus:border-mint dark:border-line-dark dark:bg-ink-soft"
                    placeholder="+91 …"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink dark:text-white">
                    Message
                  </span>
                  <textarea
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={5}
                    value={form.message}
                    onChange={updateField('message')}
                    className="w-full resize-y rounded-xl border border-line bg-foam px-3 py-2.5 text-sm outline-none transition focus:border-mint dark:border-line-dark dark:bg-ink-soft"
                    placeholder="Tell us about your venue and what you need help with"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-mint px-5 py-3 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgba(46,230,166,0.3),0_12px_40px_-12px_rgba(46,230,166,0.55)] transition hover:bg-mint-deep hover:text-white sm:w-auto"
                >
                  <FiSend size={16} />
                  Send message
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
