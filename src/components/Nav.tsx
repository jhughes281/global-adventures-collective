import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Facebook, Instagram, Mail, Menu, X } from 'lucide-react'
import { NAV, SITE, navHref } from '../lib/site'

export function Logo({ onHome = true, light = false, className = 'h-14 md:h-16' }: { onHome?: boolean; light?: boolean; className?: string }) {
  return (
    <a href={onHome ? '#top' : './'} className="block shrink-0" aria-label="Global Adventures Collective, home">
      <img
        src={light ? 'img/brand/logo-light.webp' : 'img/brand/logo.webp'}
        alt="Global Adventures Collective"
        width={light ? 847 : 1695}
        height={light ? 405 : 811}
        className={`w-auto ${className}`}
      />
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
  const current = onHome ? 'Home' : location.pathname.endsWith('faq.html') ? 'FAQs' : ''

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b-[3px] border-gold bg-navy-deep transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_28px_-12px_rgba(8,26,52,0.85)]' : ''
      }`}
    >
      <div className="mx-auto flex h-[5.25rem] max-w-7xl items-center justify-between gap-4 px-5">
        <Logo onHome={onHome} light />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={link(n.href, n.home)}
              aria-current={n.label === current ? 'page' : undefined}
              className={`relative py-2 font-serif text-[1.02rem] text-white transition after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-gold-light after:transition-all hover:text-gold-light hover:after:w-full ${
                n.label === current ? 'after:w-full' : 'after:w-0'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-1 lg:flex">
          <a aria-label="Instagram" href={SITE.instagram} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-0.5">
            <Instagram size={24} className="text-white" />
          </a>
          <a aria-label="Facebook" href={SITE.facebook} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-0.5">
            <Facebook size={24} className="text-white" />
          </a>
          <a
            href={link('#newsletter', true)}
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-gold-light px-5 py-2.5 font-serif text-sm font-bold text-navy-deep transition hover:-translate-y-0.5 hover:bg-gold"
          >
            <Mail size={17} /> Join our newsletter
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
            className="overflow-hidden border-t border-gold/40 bg-navy-deep lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={link(n.href, n.home)}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-3 font-serif text-2xl text-white"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={link('#newsletter', true)}
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-gold-light px-5 py-3 text-center font-serif font-bold text-navy-deep"
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
