import { Facebook, Instagram } from 'lucide-react'
import { Logo } from './Nav'
import { NAV, POLICIES, SITE, navHref } from '../lib/site'

export default function Footer({ onHome = true }: { onHome?: boolean }) {
  return (
    <footer className="border-t-[3px] border-gold bg-navy-deep text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-8 lg:flex-row lg:justify-between">
        <Logo onHome={onHome} light className="h-14" />
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold">
          {NAV.map((n) => (
            <a key={n.label} href={navHref(n.href, n.home, onHome)} className="text-white/85 hover:text-gold-light">{n.label}</a>
          ))}
          <span className="hidden text-white/30 sm:inline">|</span>
          {POLICIES.map((p) => (
            <a key={p.href} href={p.href} className="text-white/85 hover:text-gold-light">{p.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a aria-label="Instagram" href={SITE.instagram} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-gold-light hover:text-navy-deep"><Instagram size={19} /></a>
          <a aria-label="Facebook" href={SITE.facebook} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-gold-light hover:text-navy-deep"><Facebook size={19} /></a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-4 text-center text-xs text-white/65 sm:flex-row sm:text-left">
          <p>
            <a href={`mailto:${SITE.email}`} className="hover:text-gold-light">{SITE.email}</a> · <a href={SITE.phoneHref} className="hover:text-gold-light">{SITE.phone}</a>
          </p>
          <p>© 2026 Global Adventures Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
