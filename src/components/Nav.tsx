import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Facebook, Instagram, Menu, X } from 'lucide-react'
import { NAV, SITE, navHref } from '../lib/site'

export function Logo({ onHome = true, className = 'h-16 md:h-[4.5rem]' }: { onHome?: boolean; className?: string }) {
  return (
    <a href={onHome ? '#top' : './'} className="block shrink-0" aria-label="Global Adventures Collective, home">
      <img src="img/brand/logo-light.webp" alt="Global Adventures Collective" width={847} height={405} className={`w-auto ${className}`} />
    </a>
  )
}

export default function Nav({ onHome = true }: { onHome?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const link = (href: string, home: boolean) => navHref(href, home, onHome)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-gold/30 bg-navy-deep transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_30px_-12px_rgba(8,26,52,0.8)]' : ''
      }`}
    >
      <div className="mx-auto flex h-[5.25rem] max-w-7xl items-center justify-between gap-6 px-5">
        <Logo onHome={onHome} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={link(n.href, n.home)}
              className="relative py-2 text-[0.95rem] font-medium text-paper/85 transition-colors hover:text-gold-light after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-light after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a aria-label="Instagram" href={SITE.instagram} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full text-paper/85 transition hover:text-gold-light">
            <Instagram size={20} />
          </a>
          <a aria-label="Facebook" href={SITE.facebook} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full text-paper/85 transition hover:text-gold-light">
            <Facebook size={20} />
          </a>
          <a
            href={link('#newsletter', true)}
            className="ml-2 rounded-full bg-gold-light px-5 py-2.5 text-sm font-bold text-navy-deep transition hover:-translate-y-0.5 hover:bg-paper"
          >
            Join our newsletter
          </a>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-gold-light text-navy-deep lg:hidden"
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
            className="overflow-hidden bg-navy-deep lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={link(n.href, n.home)}
                  onClick={() => setOpen(false)}
                  className="font-display border-b border-paper/10 py-3 text-2xl text-paper"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={link('#newsletter', true)}
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-gold-light px-5 py-3 text-center font-bold text-navy-deep"
              >
                Join our newsletter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
