import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe2, Lightbulb, PawPrint, Plane, Users } from 'lucide-react'
import Reveal from './Reveal'

const LEARN = [
  { icon: Globe2, t: 'Geography & World Cultures' },
  { icon: PawPrint, t: 'Amazing Wildlife' },
  { icon: Lightbulb, t: 'Reading & Creativity' },
  { icon: Users, t: 'Diversity & Inclusion' },
  { icon: Plane, t: 'Real-World Exploration' },
]

const PLACES = [
  {
    key: 'safari',
    name: 'The Savanna',
    tag: 'Wildlife',
    img: 'img/stamp-safari.webp',
    rot: -4,
    text: 'Wide golden skies, acacia shade and the animal families who call the savanna home.',
  },
  {
    key: 'island',
    name: 'Island Lagoons',
    tag: 'Cultures',
    img: 'img/stamp-island.webp',
    rot: 3,
    text: 'Turquoise water, palm-shaded beaches and the island traditions found along the way.',
  },
  {
    key: 'london',
    name: 'London',
    tag: 'Destinations',
    img: 'img/stamp-london.webp',
    rot: -2,
    text: 'Clock towers, castles, bridges and red buses: a city that’s packed with stories.',
  },
  {
    key: 'falls',
    name: 'Rainforest Falls',
    tag: 'Nature',
    img: 'img/stamp-falls.webp',
    rot: 4,
    text: 'Rainbow mist, roaring rivers and leafy trails for little explorers to follow.',
  },
]

export default function Series() {
  const [active, setActive] = useState(0)
  const p = PLACES[active]

  return (
    <section id="series" className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <div className="dotted-map absolute inset-0" />

      <Reveal className="relative mx-auto mb-16 max-w-7xl px-5 md:mb-20">
        <img
          src="img/brand/books-banner.webp"
          alt="Five storybooks titled Wildlife Adventures, Beach Destinations, Iconic Cities, Natural Wonders and Global Cultures beside a camera, compass and map, with the Global Adventures Collective logo over a sunset coastline"
          width={2000}
          height={744}
          loading="lazy"
          className="aspect-[2000/744] w-full rounded-2xl border-4 border-gold/70 object-cover sm:rounded-[1.75rem]"
        />
      </Reveal>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
              <span className="h-px w-10 bg-gold-light" /> Our signature series
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Adventures <em className="text-gold-light">Around the World</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-paper/80">
              Engaging stories that introduce children ages 5–12 to different cultures,
              destinations, and wildlife. Each book encourages exploration, an appreciation
              for diversity, and a love for reading.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-8 min-h-[9.5rem] rounded-2xl border border-paper/15 bg-paper/5 p-6 backdrop-blur">
              <AnimatePresence mode="wait">
                <motion.div
                  key={p.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-hand text-2xl text-gold-light">Stamp {active + 1} of 4 · {p.tag}</p>
                  <h3 className="font-display mt-1 text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-2 leading-relaxed text-paper/80">{p.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="mt-4 text-sm text-paper/55">
              Tap a stamp to browse. Illustrated destinations show the spirit of the series;
              book titles will be announced soon.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 lg:col-span-3 lg:grid-cols-4">
          {PLACES.map((pl, i) => {
            const on = i === active
            return (
              <Reveal key={pl.key} delay={i * 0.08} className={i % 2 ? 'lg:translate-y-10' : ''}>
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={on}
                  aria-label={`Show ${pl.name}`}
                  className="block w-full text-left transition-transform duration-500 ease-out"
                  style={{ transform: `rotate(${on ? 0 : pl.rot}deg) scale(${on ? 1.06 : 1})` }}
                >
                  <div className="stamp-shadow">
                    <div className="stamp">
                      <div className="relative aspect-[4/5.4] overflow-hidden">
                        <img src={pl.img} alt={pl.name} loading="lazy" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                        <span className="font-display absolute bottom-2 left-2 right-2 text-center text-[0.95rem] font-semibold leading-tight text-gold-light">
                          {pl.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-7xl px-5">
        <Reveal>
          <h3 className="font-hand text-center text-5xl text-gold-light md:text-6xl">What children can learn</h3>
        </Reveal>
        <div role="list" className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {LEARN.map(({ icon: Icon, t }, i) => (
            <Reveal key={t} delay={i * 0.06} className={i === 4 ? 'col-span-2 sm:col-span-1' : ''}>
              <div role="listitem" className="flex flex-col items-center text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full border-2 border-gold-light bg-navy-deep/60 text-gold-light">
                  <Icon size={32} strokeWidth={1.6} />
                </span>
                <span className="mt-3 max-w-[10rem] font-semibold leading-snug">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
