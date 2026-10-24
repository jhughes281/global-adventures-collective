import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Globe2, Heart, Lightbulb, PawPrint, Plane, Users } from 'lucide-react'
import Reveal from './Reveal'

// Founder letter: verbatim from "Founder info.pdf" (Oct 2026).
const LETTER = [
  'I created this business from my love of travel, storytelling, and the special memories that come from exploring the world with family.',
  'As a mother and entrepreneur, I wanted to create something meaningful that would inspire children to dream big, discover new places, and develop a lifelong love of learning.',
  'Through Global Adventures Collective, my goal is to bring families together through stories, imagination, and educational adventures that extend far beyond the pages of a book.',
  'Thank you for supporting my journey and helping bring this dream to life!',
]

const LEARN = [
  { icon: Globe2, t: 'Geography & World Cultures' },
  { icon: PawPrint, t: 'Amazing Wildlife' },
  { icon: Lightbulb, t: 'Reading & Creativity' },
  { icon: Users, t: 'Diversity & Inclusion' },
  { icon: Plane, t: 'Real-World Exploration' },
]

export default function Story() {
  const [open, setOpen] = useState(false)

  return (
    <section id="story" className="scroll-mt-24 border-y-[3px] border-gold/70 bg-[#f6efe0]">
      <div className="grid lg:grid-cols-2">
        {/* Our Story */}
        <div className="relative overflow-hidden">
          <div className="grid items-center gap-8 px-5 py-12 md:grid-cols-[minmax(0,15rem)_1fr] md:py-14 md:pl-8 md:pr-10">
          <Reveal>
            <figure className="mx-auto w-full max-w-[15rem] -rotate-2 bg-white p-2 pb-2.5 shadow-[0_18px_34px_-16px_rgba(10,28,56,0.6)] ring-1 ring-gold/50">
              <img
                src="img/brand/family-airport.webp"
                alt="Brittney Jackson and her son at the airport with their suitcases, a Departures sign and a plane taking off behind them"
                width={800}
                height={1202}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-[50%_18%]"
              />
              <figcaption className="font-hand mt-1.5 text-center text-2xl leading-none text-ink">
                Adventure awaits <Heart size={14} className="inline fill-coral text-coral" />
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="relative">
            <h2 className="font-hand text-6xl leading-none text-ink">Our Story</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Global Adventures Collective was created from a deep love for travel, a passion for
              children’s books, and a desire to help young minds explore the world. Through engaging
              stories and travel-inspired products, we aim to inspire curiosity, celebrate different
              cultures, and encourage families to explore, learn, and create unforgettable adventures
              together.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <img
                src="img/brand/brittney-round.webp"
                alt="Brittney Jackson, founder of Global Adventures Collective"
                width={360}
                height={360}
                loading="lazy"
                className="h-20 w-20 rounded-full object-cover ring-[3px] ring-gold ring-offset-2 ring-offset-[#f6efe0]"
              />
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="founder-letter"
                className="btn-gold"
              >
                {open ? 'Close the story' : 'Read our full story'}
                <ChevronRight size={18} strokeWidth={2.5} className={`transition-transform ${open ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </Reveal>
          </div>
        </div>

        {/* What Children Can Learn, over a lagoon scene */}
        <div className="relative overflow-hidden">
          <img
            src="img/scenery/learn-bg.webp"
            alt=""
            aria-hidden
            width={1080}
            height={700}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/45" />
          <Reveal className="relative px-5 py-12 md:py-14">
            <h2 className="font-display text-center text-3xl font-semibold text-white md:text-4xl">What Children Can Learn</h2>
            <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
              {LEARN.map(({ icon: Icon, t }) => (
                <li key={t} className="flex flex-col items-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-card text-navy-deep shadow-lg ring-2 ring-gold">
                    <Icon size={28} strokeWidth={1.8} />
                  </span>
                  <span className="mt-2 max-w-[8rem] text-sm font-semibold leading-snug text-white">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="founder-letter"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-paper"
          >
            <div className="mx-auto max-w-6xl px-5 py-12">
              <article className="grid items-start gap-8 rounded-2xl border border-gold/60 bg-card p-7 md:grid-cols-[22rem_1fr] md:gap-12 md:p-10">
                <figure className="relative mx-auto w-full max-w-[22rem] -rotate-2 bg-white p-2.5 pb-3 shadow-[0_18px_34px_-16px_rgba(10,28,56,0.6)] ring-1 ring-gold/40">
                  <img
                    src="img/brand/brittney.webp"
                    alt="Portrait of Brittney Jackson, smiling, in a red blouse"
                    width={900}
                    height={1195}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <figcaption className="font-hand mt-2 text-center text-3xl leading-none text-ink">
                    Brittney, mom &amp; founder <Heart size={16} className="inline fill-coral text-coral" />
                  </figcaption>
                </figure>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">Meet the founder</p>
                  <p className="font-display mt-3 text-2xl font-semibold leading-snug text-ink md:text-3xl">
                    Hello! I’m Brittney Jackson, Founder and Owner of Global Adventures Collective.
                  </p>
                  <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
                    {LETTER.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                  <p className="font-hand mt-6 text-5xl text-ink">Brittney Jackson</p>
                  <p className="text-sm italic text-ink-soft">Founder &amp; Owner, Global Adventures Collective</p>
                </div>
              </article>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
