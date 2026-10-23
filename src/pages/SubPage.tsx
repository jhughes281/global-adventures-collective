import { useEffect, type ReactNode } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SkipLink from '../components/SkipLink'

// Shared shell for the FAQ and policy pages: navy header, a short banner, then content.
export default function SubPage({ kicker, title, intro, children }: { kicker: string; title: ReactNode; intro?: ReactNode; children: ReactNode }) {
  // The page renders after load, so the browser's own jump to #section misses; redo it.
  useEffect(() => {
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView()
  }, [])

  return (
    <>
      <SkipLink />
      <Nav onHome={false} />
      <main id="main">
        <header className="relative overflow-hidden bg-ink pb-14 pt-[calc(5.25rem+3.5rem)] text-paper md:pb-20">
          <div className="dotted-map absolute inset-0" />
          <div className="relative mx-auto max-w-4xl px-5">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
              <span className="h-px w-10 bg-gold-light" /> {kicker}
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
            {intro && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/80">{intro}</div>}
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">{children}</div>
      </main>
      <Footer onHome={false} />
    </>
  )
}
