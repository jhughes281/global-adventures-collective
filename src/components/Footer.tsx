import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { Logo } from './Nav'
import { NAV, POLICIES, SITE, navHref } from '../lib/site'

export default function Footer({ onHome = true }: { onHome?: boolean }) {
  return (
    <footer className="relative overflow-hidden border-t-4 border-gold bg-navy-deep text-paper">
      <div className="dotted-map absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo onHome={onHome} className="h-24" />
            <p className="font-display mt-5 max-w-sm text-xl italic leading-snug text-gold-light">
              Explore the World · Create Adventures · Inspire Imagination
            </p>
          </div>
          <nav className="md:col-span-2" aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/60">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={navHref(n.href, n.home, onHome)} className="text-paper/85 transition hover:text-gold-light">{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="md:col-span-2" aria-label="Policies">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/60">Policies</p>
            <ul className="mt-4 space-y-2.5">
              {POLICIES.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="text-paper/85 transition hover:text-gold-light">{p.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/60">Say hello</p>
            <ul className="mt-4 space-y-2.5 text-paper/85">
              <li className="flex items-center gap-2"><Mail size={16} className="shrink-0 text-gold-light" /><a className="text-[0.92rem] [overflow-wrap:anywhere] hover:text-gold-light" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li className="flex items-center gap-2"><Phone size={16} className="shrink-0 text-gold-light" /><a className="hover:text-gold-light" href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li className="pl-6">{SITE.address.join(', ')}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a aria-label="Instagram" href={SITE.instagram} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-paper/10 transition hover:bg-gold-light hover:text-ink"><Instagram size={19} /></a>
              <a aria-label="Facebook" href={SITE.facebook} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-paper/10 transition hover:bg-gold-light hover:text-ink"><Facebook size={19} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-paper/15 pt-6 text-sm text-paper/60 sm:flex-row">
          <p>© 2026 Global Adventures Collective. All rights reserved.</p>
          <p className="font-hand text-xl text-paper/75">one story at a time ✈</p>
        </div>
      </div>
    </footer>
  )
}
