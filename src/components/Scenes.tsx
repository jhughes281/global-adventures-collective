import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import Reveal from './Reveal'

const SCENES = [
  {
    key: 'balloon-safari',
    img: 'img/scenes/balloon-safari.webp',
    w: 1792,
    h: 964,
    tag: 'Destinations',
    caption: 'drifting over the elephant plains',
    alt: 'Patchwork hot-air balloons float above a savanna as a family of elephants walks below',
    span: 'lg:col-span-8',
    rot: -1.2,
    tape: 'left-10',
  },
  {
    key: 'savanna',
    img: 'img/scenes/savanna.webp',
    w: 500,
    h: 500,
    tag: 'Wildlife',
    caption: 'sunset at the watering hole',
    alt: 'Watercolor savanna at sunset with lions under an acacia tree, a giraffe, zebras, gazelles and elephants at a watering hole',
    span: 'lg:col-span-4 lg:mt-10',
    rot: 2.2,
    tape: 'right-8',
  },
  {
    key: 'rainforest',
    img: 'img/scenes/rainforest.webp',
    w: 1024,
    h: 1024,
    tag: 'Nature',
    caption: 'deep in the rainforest canopy',
    alt: 'A lush rainforest with a monkey swinging on a vine, two toucans, glowing flowers and a winding stream',
    span: 'lg:col-span-5',
    rot: -2,
    tape: 'left-1/2 -translate-x-1/2',
  },
  {
    key: 'balloon-village',
    img: 'img/scenes/balloon-village.webp',
    w: 1264,
    h: 848,
    tag: 'Friendship',
    caption: 'a gusty hello over the village',
    alt: 'A smiling red airplane swoops past a green and yellow hot-air balloon while woodland animals wave from a forest path',
    span: 'lg:col-span-7 lg:mt-14',
    rot: 1.4,
    tape: 'right-12',
  },
]

export default function Scenes() {
  const [open, setOpen] = useState<number | null>(null)
  const s = open === null ? null : SCENES[open]

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : (i + 1) % SCENES.length))
      if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : (i + SCENES.length - 1) % SCENES.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section id="scenes" className="relative overflow-hidden bg-paper-deep/60 py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
            <span className="h-px w-10 bg-gold" /> Story scenes <span className="h-px w-10 bg-gold" />
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Peek inside the <em className="text-lagoon">pages</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Savannas at sunset, rainforest canopies and skies full of balloons: a scrapbook of
            the places our young explorers visit. Tap any scene for a closer look.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          {SCENES.map((sc, i) => (
            <Reveal key={sc.key} delay={i * 0.08} className={sc.span}>
              <button
                onClick={() => setOpen(i)}
                aria-label={`Enlarge scene: ${sc.caption}`}
                className="group relative block w-full bg-card p-3 pb-4 text-left shadow-[0_24px_50px_-20px_rgba(14,36,68,0.55)] transition-transform duration-500 ease-out hover:!rotate-0 hover:scale-[1.02]"
                style={{ transform: `rotate(${sc.rot}deg)` }}
              >
                <span
                  aria-hidden
                  className={`absolute -top-3 z-10 h-7 w-24 rotate-[-4deg] bg-gold-light/75 shadow-sm ${sc.tape}`}
                />
                <div className="relative overflow-hidden">
                  <img
                    src={sc.img}
                    alt={sc.alt}
                    width={sc.w}
                    height={sc.h}
                    loading="lazy"
                    className="w-full transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ aspectRatio: `${sc.w} / ${sc.h}` }}
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink/70 text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Expand size={16} />
                  </span>
                </div>
                <span className="mt-3 flex items-baseline justify-between gap-3 px-1">
                  <span className="font-hand text-2xl leading-none text-ink md:text-[1.7rem]">{sc.caption}</span>
                  <span className="shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    {sc.tag}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-ink-soft/80">
          Illustrations show the look and spirit of the series; book titles will be announced soon.
        </p>
      </div>

      <AnimatePresence>
        {s && open !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.figure
              key={s.key}
              role="dialog"
              aria-modal="true"
              aria-label={s.caption}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl bg-card p-3 pb-4 shadow-2xl"
            >
              <img
                src={s.img}
                alt={s.alt}
                className="max-h-[78vh] w-auto max-w-full object-contain"
                style={{ aspectRatio: `${s.w} / ${s.h}` }}
              />
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 px-1">
                <span className="font-hand text-3xl leading-none text-ink">{s.caption}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  {open + 1} / {SCENES.length} · {s.tag}
                </span>
              </figcaption>
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute -right-3 -top-3 grid h-10 w-10 place-items-center rounded-full bg-ink text-paper shadow-lg"
              >
                <X size={18} />
              </button>
              <button
                onClick={() => setOpen((open + SCENES.length - 1) % SCENES.length)}
                aria-label="Previous scene"
                className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-paper/90 text-ink shadow-lg sm:-left-5"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setOpen((open + 1) % SCENES.length)}
                aria-label="Next scene"
                className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-paper/90 text-ink shadow-lg sm:-right-5"
              >
                <ChevronRight size={20} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
