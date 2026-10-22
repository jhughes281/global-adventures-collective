import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV } from '../lib/site'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5 group" aria-label="Global Adventures Collective, home">
      <img
        src="img/mark.webp"
        alt=""
        className="h-11 w-11 object-contain transition-transform duration-500 group-hover:rotate-[14deg]"
      />
      <span className="leading-none">
        <span
          className={`font-display block text-[1.18rem] font-semibold tracking-tight ${light ? 'text-paper' : 'text-ink'}`}
        >
          Global Adventures
        </span>
        <span
          className={`mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.42em] ${light ? 'text-gold-light' : 'text-gold-deep'}`}
        >
          Collective
        </span>
      </span>
    </a>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md shadow-[0_1px_0_rgba(14,36,68,0.1)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#updates"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-navy-deep hover:shadow-lg"
          >
            Get launch updates
          </a>
        </nav>
        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-ink text-paper md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-paper md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-display border-b border-ink/10 py-3 text-2xl text-ink"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#updates"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-ink px-5 py-3 text-center font-semibold text-paper"
              >
                Get launch updates
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
