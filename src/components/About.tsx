import { Compass, Heart, Lightbulb, Globe2 } from 'lucide-react'
import Reveal from './Reveal'

const MISSION = [
  { icon: Lightbulb, t: 'Inspire curiosity' },
  { icon: Compass, t: 'Encourage imagination' },
  { icon: Heart, t: 'Strengthen family connections' },
  { icon: Globe2, t: 'Introduce the wonders of the world' },
]

// Founder letter: verbatim from "Founder info.pdf" (Oct 2026).
const LETTER = [
  'I created this business from my love of travel, storytelling, and the special memories that come from exploring the world with family.',
  'As a mother and entrepreneur, I wanted to create something meaningful that would inspire children to dream big, discover new places, and develop a lifelong love of learning.',
  'Through Global Adventures Collective, my goal is to bring families together through stories, imagination, and educational adventures that extend far beyond the pages of a book.',
  'Thank you for supporting my journey and helping bring this dream to life!',
]

export default function About() {
  return (
    <section id="story" className="relative scroll-mt-20 overflow-hidden bg-paper-deep/60 py-24 md:py-32">
      <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-5 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <Reveal>
            <p className="font-hand text-6xl leading-none text-ink md:text-7xl">Our Story</p>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl">
              A passion for travel. A love for children. <em className="text-gold-deep">A brighter tomorrow.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto mt-10 max-w-md rotate-[-2.5deg] bg-card p-3 pb-12 shadow-[0_24px_50px_-18px_rgba(14,36,68,0.55)]">
              <span className="absolute -left-2 -top-2 h-8 w-8 border-l-[10px] border-t-[10px] border-gold/80" />
              <span className="absolute -right-2 -top-2 h-8 w-8 border-r-[10px] border-t-[10px] border-gold/80" />
              <img
                src="img/about.webp"
                alt="A stack of travel books beside a globe, camera, straw hat, map and vintage suitcase"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="font-hand absolute inset-x-0 bottom-2.5 text-center text-3xl text-ink">
                explore · learn · discover · grow
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <article className="relative rounded-[1.75rem] border border-gold/40 bg-card p-7 md:p-11">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">Meet the founder</p>
              <p className="font-display mt-4 text-2xl font-semibold leading-snug md:text-[1.75rem]">
                Hello! I’m Brittney Jackson, Founder and Owner of Global Adventures Collective.
              </p>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
                {LETTER.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="mt-8 border-t border-gold/40 pt-5">
                <p className="font-hand text-4xl leading-none text-ink">Brittney Jackson</p>
                <p className="mt-1 text-sm italic text-ink-soft">Founder &amp; Owner, Global Adventures Collective</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="font-display mt-10 border-l-4 border-gold pl-6 text-2xl italic leading-snug text-ink md:text-[1.65rem]">
              “Every child deserves the opportunity to discover the world, even if their journey
              begins with a book.”
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-3xl bg-ink p-6 text-paper md:p-8">
              <p className="font-hand text-3xl text-gold-light">Our mission</p>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {MISSION.map(({ icon: Icon, t }) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-light/60 text-gold-light">
                      <Icon size={20} />
                    </span>
                    <span className="font-medium leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
