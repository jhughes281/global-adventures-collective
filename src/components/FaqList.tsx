import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import type { QA } from '../content/faqs'

export default function FaqList({ items, compact = false }: { items: QA[]; compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(null)
  const base = useId()

  return (
    <ul className="divide-y divide-ink/10 rounded-[1.5rem] border border-ink/10 bg-card">
      {items.map((it, i) => {
        const on = open === i
        const id = `${base}-${i}`
        return (
          <li key={it.q}>
            <h3>
              <button
                aria-expanded={on}
                aria-controls={id}
                onClick={() => setOpen(on ? null : i)}
                className={`flex w-full items-center justify-between gap-3 text-left font-semibold text-ink transition hover:text-sky ${compact ? 'min-h-11 px-3.5 py-2 text-sm' : 'min-h-14 px-5 py-4 md:px-6'}`}
              >
                {it.q}
                <Plus
                  size={20}
                  className={`shrink-0 text-sky transition-transform duration-300 ${on ? 'rotate-45' : ''}`}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  id={id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={`leading-relaxed text-ink-soft ${compact ? 'px-3.5 pb-3 text-sm' : 'px-5 pb-5 md:px-6'}`}>{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
