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
      className={`fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_8px_24px_-12px_rgba(19,40,79,0.45)]' : ''
      }`}
    >
      <div className="mx-auto flex h-[5.25rem] max-w-7xl items-center justify-between gap-4 px-5">
        <Logo onHome={onHome} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={link(n.href, n.home)}
              aria-current={n.label === current ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-[0.95rem] font-bold transition ${
                n.label === current ? 'bg-sun text-ink' : 'text-ink hover:bg-sky-light'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-1 lg:flex">
          <a aria-label="Instagram" href={SITE.instagram} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-0.5">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#e1306c] text-white">
              <Instagram size={19} />
            </span>
          </a>
          <a aria-label="Facebook" href={SITE.facebook} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-0.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1877f2] text-white">
              <Facebook size={19} fill="currentColor" strokeWidth={0} />
            </span>
          </a>
          <a
            href={link('#newsletter', true)}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-sun px-5 py-2.5 text-sm font-extrabold text-ink shadow-[0_6px_14px_-6px_rgba(233,168,0,0.9)] transition hover:-translate-y-0.5 hover:bg-sun-deep"
          >
            <Mail size={17} /> Join our newsletter
          </a>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-sun text-ink lg:hidden"
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
            className="overflow-hidden border-t border-ink/10 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={link(n.href, n.home)}
                  onClick={() => setOpen(false)}
                  className="font-display border-b border-ink/10 py-3 text-2xl font-bold text-ink"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={link('#newsletter', true)}
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-sun px-5 py-3 text-center font-extrabold text-ink"
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
