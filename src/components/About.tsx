import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Heart } from 'lucide-react'

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
      <h2 className="font-display flex items-center gap-2 text-4xl font-bold text-ink">
        Our Story <Heart size={22} className="fill-coral text-coral" />
      </h2>
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
          <article className="mx-auto mt-10 max-w-3xl rounded-[1.75rem] border-2 border-sun/60 bg-white p-7 md:p-10">
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
          </article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
