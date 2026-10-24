import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Heart, Plane } from 'lucide-react'

// Founder letter: verbatim from "Founder info.pdf" (Oct 2026).
const LETTER = [
  'I created this business from my love of travel, storytelling, and the special memories that come from exploring the world with family.',
  'As a mother and entrepreneur, I wanted to create something meaningful that would inspire children to dream big, discover new places, and develop a lifelong love of learning.',
  'Through Global Adventures Collective, my goal is to bring families together through stories, imagination, and educational adventures that extend far beyond the pages of a book.',
  'Thank you for supporting my journey and helping bring this dream to life!',
]

export default function StoryCard({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <aside id="story" className="relative flex h-full scroll-mt-24 flex-col overflow-hidden rounded-[1.6rem] border-2 border-sun/60 bg-white p-6 shadow-[0_12px_26px_-16px_rgba(19,40,79,0.55)]">
      <div className="flex items-center gap-4">
        <span className="relative shrink-0">
          <img
            src="img/brand/brittney-round.webp"
            alt="Brittney Jackson, founder of Global Adventures Collective"
            width={360}
            height={360}
            loading="lazy"
            className="h-20 w-20 rounded-full object-cover ring-4 ring-sun ring-offset-2"
          />
          <span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-coral text-white ring-2 ring-white">
            <Heart size={15} className="fill-white" />
          </span>
        </span>
        <p className="leading-tight">
          <span className="font-hand block text-3xl text-ink">Meet Brittney</span>
          <span className="text-sm font-semibold text-ink-soft">Founder, owner &amp; mom</span>
        </p>
      </div>
      <h2 className="font-display mt-5 text-4xl font-bold text-ink">Our Story</h2>
      <p className="mb-5 mt-3 leading-relaxed text-ink-soft">
        Global Adventures Collective was created from a deep love for travel, a passion for
        children’s books, and a desire to help young minds explore the world. Through engaging
        stories and travel-inspired products, we aim to inspire curiosity, celebrate different
        cultures, and encourage families to explore, learn, and create unforgettable adventures
        together.
      </p>
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls="founder-letter"
        className="mt-auto inline-flex items-center justify-center gap-1 self-center rounded-full bg-sun px-6 py-3 font-extrabold uppercase tracking-wide text-ink transition hover:-translate-y-0.5 hover:bg-sun-deep"
      >
        {open ? 'Close the story' : 'Read our full story'}
        <ChevronRight size={18} strokeWidth={3} className={`transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
    </aside>
  )
}

export function FounderLetter({ open }: { open: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id="founder-letter"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="mx-auto mt-10 max-w-5xl px-5">
            <article className="relative grid items-start gap-8 rounded-[1.75rem] border-2 border-sun/60 bg-white p-7 md:grid-cols-[16rem_1fr] md:gap-10 md:p-10">
              {/* little dashed flight path across the top corner */}
              <svg aria-hidden viewBox="0 0 220 60" className="pointer-events-none absolute -top-7 right-8 hidden w-56 text-sky md:block" fill="none">
                <path d="M4 52 C 60 8, 130 60, 196 16" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 7" strokeLinecap="round" />
              </svg>
              <Plane aria-hidden size={30} className="absolute -top-9 right-4 hidden -rotate-12 fill-sky text-sky md:block" />

              <figure className="relative mx-auto w-full max-w-[16rem] -rotate-3 bg-white p-2.5 pb-3 shadow-[0_18px_34px_-16px_rgba(19,40,79,0.6)]">
                <span aria-hidden className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-sun/80" />
                <img
                  src="img/brand/brittney.webp"
                  alt="Portrait of Brittney Jackson, smiling, in a red blouse"
                  width={900}
                  height={1195}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <figcaption className="font-hand mt-2 text-center text-2xl leading-none text-ink">
                  Brittney, mom &amp; founder <Heart size={16} className="inline fill-coral text-coral" />
                </figcaption>
              </figure>

              <div>
                <p className="font-display text-2xl font-bold leading-snug text-ink md:text-3xl">
                  Hello! I’m Brittney Jackson, Founder and Owner of Global Adventures Collective.
                </p>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
                  {LETTER.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <p className="font-hand mt-6 text-4xl text-ink">Brittney Jackson</p>
                <p className="text-sm italic text-ink-soft">Founder &amp; Owner, Global Adventures Collective</p>
              </div>
            </article>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
