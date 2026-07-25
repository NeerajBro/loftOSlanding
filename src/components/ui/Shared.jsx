import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, subtitle, light = false, align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignCls}`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-mint' : 'text-mint-deep dark:text-mint'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-ink dark:text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/70' : 'text-slate dark:text-white/65'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export function Button({ children, variant = 'primary', href = '#demo', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint'

  const variants = {
    primary:
      'bg-mint text-ink shadow-[0_0_0_1px_rgba(46,230,166,0.3),0_12px_40px_-12px_rgba(46,230,166,0.55)] hover:bg-mint-deep hover:text-white',
    secondary:
      'bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/16',
    ghost:
      'bg-transparent text-ink ring-1 ring-ink/15 hover:bg-ink/5 dark:text-white dark:ring-white/20 dark:hover:bg-white/8',
    dark: 'bg-ink text-white hover:bg-ink-soft dark:bg-white dark:text-ink dark:hover:bg-mist',
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
