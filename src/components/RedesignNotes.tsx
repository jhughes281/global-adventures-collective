import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Palette, X } from 'lucide-react'

const CHANGES = [
  'A clear story arc: who we are, the signature series, the products, who it’s for, then contact',
  'Colors and type drawn from the logo’s navy and gold, with a travel-journal feel for a children’s book brand',
  'Postage-stamp destinations and a passport “Coming Soon” seal replace the busy, text-heavy artwork',
  'A launch-list sign-up, with a “Notify me” button on every product, turns “coming soon” into leads',
  'Tap-to-call, tap-to-email and a map link make contacting the team effortless on mobile',
  'Optimized WebP images, accessible contrast and focus states, and a mobile-first layout',
]

export default function RedesignNotes() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-hibiscus px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
      >
        <Palette size={16} /> Design notes
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-deep/70 p-3 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Design notes"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-paper p-6 shadow-2xl md:p-9"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink text-paper"
              >
                <X size={18} />
              </button>
              <p className="font-hand text-3xl text-hibiscus">redesign concept</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">What’s new in this design</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <figure>
                  <img src="img/logo-banner.webp" alt="Original homepage banner" className="aspect-[5/3] w-full rounded-2xl object-cover" />
                  <figcaption className="mt-2 text-sm font-semibold text-ink-soft">Before: one dense banner image</figcaption>
                </figure>
                <figure>
                  <img src="img/hero-art.webp" alt="New hero illustration" className="aspect-[5/3] w-full rounded-2xl object-cover" />
                  <figcaption className="mt-2 text-sm font-semibold text-ink-soft">After: warm, human storybook illustration</figcaption>
                </figure>
              </div>

              <ul className="mt-6 space-y-3">
                {CHANGES.map((c) => (
                  <li key={c} className="flex gap-3 leading-snug">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lagoon text-white"><Check size={14} /></span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl bg-gold-light/40 p-4 text-sm leading-relaxed">
                <strong>All original copy, contact details and social links are preserved.</strong>{' '}
                The product artwork is the original cover art. Next steps could include real
                book titles, a cover reveal and a shop.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
