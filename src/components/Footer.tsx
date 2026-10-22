import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { Logo } from './Nav'
import { NAV, SITE } from '../lib/site'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-paper">
      <div className="dotted-map absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="font-display mt-5 max-w-sm text-2xl italic leading-snug text-gold-light">
              Explore the World • Create Adventures • Inspire Imagination
            </p>
          </div>
          <nav className="md:col-span-3" aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-paper/85 transition hover:text-gold-light">{n.label}</a>
                </li>
              ))}
              <li><a href="#updates" className="text-paper/85 transition hover:text-gold-light">Launch updates</a></li>
            </ul>
          </nav>
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">Say hello</p>
            <ul className="mt-4 space-y-2.5 text-paper/85">
              <li className="flex items-center gap-2"><Mail size={16} className="text-gold-light" /><a className="break-all hover:text-gold-light" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-gold-light" /><a className="hover:text-gold-light" href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li className="pl-6">{SITE.address.join(', ')}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a aria-label="Instagram" href={SITE.instagram} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-paper/10 transition hover:bg-gold-light hover:text-ink"><Instagram size={19} /></a>
              <a aria-label="Facebook" href={SITE.facebook} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-paper/10 transition hover:bg-gold-light hover:text-ink"><Facebook size={19} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-paper/15 pt-6 text-sm text-paper/55 sm:flex-row">
          <p>© 2026 Global Adventures Collective. All rights reserved.</p>
          <p className="font-hand text-xl text-paper/70">made for little explorers ✈</p>
        </div>
      </div>
    </footer>
  )
}
