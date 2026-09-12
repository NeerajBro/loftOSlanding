import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiCalendar,
  FiCpu,
  FiMaximize2,
  FiMinimize2,
  FiPause,
  FiPieChart,
  FiPlay,
  FiShoppingCart,
  FiVolume2,
  FiVolumeX,
} from 'react-icons/fi'
import { SectionHeading } from './ui/Shared'

const demos = [
  {
    id: 'gaming',
    title: 'Gaming sessions',
    subtitle: 'Timers, rates, food tabs, and checkout in one flow.',
    badge: 'Gaming café',
    icon: FiCpu,
    src: '/videos/gaming.mp4',
    accent: 'from-mint/20 via-cyan/10 to-transparent',
  },
  {
    id: 'restaurant',
    title: 'Restaurant POS',
    subtitle: 'Counter orders, kitchen sync, GST, and branded receipts.',
    badge: 'Food & QR',
    icon: FiShoppingCart,
    src: '/videos/restaurant.mp4',
    accent: 'from-cyan/20 via-mint/10 to-transparent',
  },
  {
    id: 'booking',
    title: 'Lounge bookings',
    subtitle: 'Online slots, capacity rules, and admin confirm flows.',
    badge: 'Bookings',
    icon: FiCalendar,
    src: '/videos/booking.mp4',
    accent: 'from-amber/15 via-mint/10 to-transparent',
  },
  {
    id: 'reports',
    title: 'Analytics & reports',
    subtitle: 'Revenue, peak hours, station analytics, and export-ready summaries.',
    badge: 'Reports',
    icon: FiPieChart,
    src: '/videos/reports.mp4',
    accent: 'from-rose/15 via-mint/10 to-transparent',
  },
]

const DEFAULT_ASPECT = 1916 / 890

function BrowserChrome({ title }) {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 bg-ink/90 px-4 py-3">
      <div className="flex shrink-0 gap-1.5" aria-hidden>
        <span className="h-3 w-3 rounded-full bg-rose/80" />
        <span className="h-3 w-3 rounded-full bg-amber/80" />
        <span className="h-3 w-3 rounded-full bg-mint/80" />
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center">
        <div className="flex w-full max-w-md items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
          <span className="h-2 w-2 shrink-0 rounded-full bg-mint/70" aria-hidden />
          <span className="truncate text-xs text-white/50">app.loftpos.com · {title}</span>
        </div>
      </div>
      <span className="hidden w-[52px] shrink-0 sm:block" aria-hidden />
    </div>
  )
}

export default function ProductDemo() {
  const [active, setActive] = useState(demos[0].id)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [aspect, setAspect] = useState(DEFAULT_ASPECT)
  const videoRef = useRef(null)
  const activeDemo = demos.find((d) => d.id === active) ?? demos[0]

  const pauseVideo = useCallback(() => {
    videoRef.current?.pause()
    setPlaying(false)
  }, [])

  useEffect(() => {
    pauseVideo()
    setAspect(DEFAULT_ASPECT)
  }, [active, pauseVideo])

  useEffect(() => {
    if (!expanded) return
    const onKey = (e) => {
      if (e.key === 'Escape') setExpanded(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [expanded])

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      try {
        await video.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  const handleMetadata = (e) => {
    const video = e.currentTarget
    if (video.videoWidth > 0 && video.videoHeight > 0) {
      setAspect(video.videoWidth / video.videoHeight)
    }
  }

  const player = (
    <div className="relative w-full overflow-hidden rounded-[1.35rem]">
      <BrowserChrome title={activeDemo.badge} />
      <div
        className="relative w-full bg-ink"
        style={{ aspectRatio: aspect }}
      >
        <AnimatePresence mode="wait">
          <motion.video
            key={activeDemo.id}
            ref={videoRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 h-full w-full object-contain"
            src={activeDemo.src}
            muted={muted}
            playsInline
            preload="metadata"
            onLoadedMetadata={handleMetadata}
            onEnded={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        </AnimatePresence>

        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent transition-opacity ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
        />

        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
          aria-label={playing ? 'Pause demo video' : 'Play demo video'}
        >
          {!playing && (
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-mint text-ink shadow-[0_0_0_12px_rgba(46,230,166,0.2)] backdrop-blur-sm transition hover:scale-105"
            >
              <FiPlay size={24} className="ml-1" aria-hidden />
            </motion.span>
          )}
        </button>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-10">
          <p className="text-sm font-semibold text-white">{activeDemo.title}</p>
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setMuted((v) => !v)
              }}
              className="rounded-lg p-2 text-white/80 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
              aria-label={muted ? 'Unmute video' : 'Mute video'}
            >
              {muted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                togglePlay()
              }}
              className="rounded-lg p-2 text-white/80 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
              aria-label={playing ? 'Pause' : 'Play'}
            >
              {playing ? <FiPause size={16} /> : <FiPlay size={16} />}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setExpanded((v) => !v)
              }}
              className="rounded-lg p-2 text-white/80 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
              aria-label={expanded ? 'Close expanded video' : 'Expand video'}
            >
              {expanded ? <FiMinimize2 size={16} /> : <FiMaximize2 size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="demo" className="relative bg-ink py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-90" />
      <div className="section-pad container-page relative">
        <SectionHeading
          light
          eyebrow="Product demo"
          title="See LoftPOS in action"
          subtitle="Real screen recordings from gaming sessions, restaurant checkout, lounge booking, and analytics — the same flows your floor runs every night."
        />

        <div className="flex flex-col gap-8 xl:grid xl:grid-cols-[minmax(0,300px)_minmax(0,1fr)] xl:items-start xl:gap-10">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1">
            {demos.map((demo) => {
              const Icon = demo.icon
              const isActive = demo.id === active
              return (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => setActive(demo.id)}
                  className={`group flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition-all duration-300 sm:p-4 ${
                    isActive
                      ? 'border-mint/40 bg-white/10 shadow-lg shadow-mint/10'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition sm:h-11 sm:w-11 ${
                      isActive
                        ? 'bg-gradient-to-br from-mint to-cyan text-ink'
                        : 'bg-white/8 text-mint group-hover:bg-white/12'
                    }`}
                  >
                    <Icon size={18} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="mb-1 inline-flex rounded-md bg-white/8 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-mint">
                      {demo.badge}
                    </span>
                    <span className="mt-1 block font-display text-sm font-bold text-white sm:text-base">
                      {demo.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-white/55 sm:text-sm">
                      {demo.subtitle}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="min-w-0 w-full">
            {!expanded ? (
              <div
                className={`w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-soft/80 shadow-2xl shadow-black/50 backdrop-blur-xl`}
              >
                <div className={`bg-gradient-to-br ${activeDemo.accent} p-1`}>{player}</div>
              </div>
            ) : (
              <div
                className="w-full rounded-3xl border border-white/10 bg-white/[0.03]"
                style={{ aspectRatio: aspect }}
                aria-hidden
              />
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeDemo.title} demo`}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="flex max-h-[92vh] w-full max-w-[min(96vw,1400px)] flex-col overflow-hidden rounded-3xl border border-white/15 shadow-2xl"
            >
              <div className={`min-h-0 flex-1 bg-gradient-to-br ${activeDemo.accent} p-1`}>
                {player}
              </div>
            </motion.div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="absolute right-4 top-4 rounded-xl p-3 text-white/80 ring-1 ring-white/20 transition hover:bg-white/10 hover:text-white sm:right-6 sm:top-6"
              aria-label="Close expanded video"
            >
              <FiMinimize2 size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
