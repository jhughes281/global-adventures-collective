import { GraduationCap, HeartHandshake, Home, Library, School, Store, Users } from 'lucide-react'
import Reveal from './Reveal'

const WHO = [
  { icon: Users, t: 'Families', d: 'Cozy read-aloud adventures for kids ages 5–12.', tint: 'bg-hibiscus/15 text-hibiscus' },
  { icon: HeartHandshake, t: 'Grandparents', d: 'Gifts that grow a child’s world.', tint: 'bg-sunset/20 text-sunset' },
  { icon: GraduationCap, t: 'Educators', d: 'Stories that spark global learning.', tint: 'bg-lagoon/15 text-lagoon' },
  { icon: Home, t: 'Homeschool', d: 'Hands-on geography and culture.', tint: 'bg-gold/20 text-gold-deep' },
  { icon: School, t: 'Schools', d: 'Diversity and discovery in the classroom.', tint: 'bg-ink/10 text-ink' },
  { icon: Library, t: 'Libraries', d: 'Shelf-ready reading for curious minds.', tint: 'bg-hibiscus/15 text-hibiscus' },
  { icon: Store, t: 'Bookstores', d: 'A fresh series with a travel-lover’s charm.', tint: 'bg-lagoon/15 text-lagoon' },
]

export default function Audience() {
  return (
    <section className="relative bg-paper-deep/60 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
              <span className="h-px w-10 bg-gold" /> Who we serve
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Made for every kind of <em className="text-lagoon">explorer</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-soft">
              We serve families with children ages 5–12, as well as grandparents, educators,
              homeschool families, schools, libraries, and bookstores.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHO.map(({ icon: Icon, t, d, tint }, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-ink/10 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}>
                  <Icon size={22} />
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold">{t}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <div className="relative flex h-full min-h-[10rem] flex-col justify-between overflow-hidden rounded-3xl bg-ink p-6 text-paper">
              <span className="font-display text-6xl font-semibold italic leading-none text-gold-light">5–12</span>
              <p className="font-hand text-2xl leading-tight">the perfect ages to start dreaming of faraway places</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
