import { Compass, Heart, Lightbulb, Globe2 } from 'lucide-react'
import Reveal from './Reveal'

const MISSION = [
  { icon: Lightbulb, t: 'Inspire curiosity', c: 'text-sunset' },
  { icon: Compass, t: 'Encourage imagination', c: 'text-lagoon' },
  { icon: Heart, t: 'Strengthen family connections', c: 'text-hibiscus' },
  { icon: Globe2, t: 'Introduce the wonders of the world', c: 'text-gold' },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-lg rotate-[-3deg] bg-card p-3 pb-14 shadow-[0_24px_50px_-18px_rgba(14,36,68,0.55)]">
            {/* photo corners */}
            <span className="absolute -left-2 -top-2 h-8 w-8 border-l-[10px] border-t-[10px] border-gold/80" />
            <span className="absolute -right-2 -top-2 h-8 w-8 border-r-[10px] border-t-[10px] border-gold/80" />
            <img
              src="img/about.webp"
              alt="A stack of travel books beside a globe, camera, straw hat, map and vintage suitcase"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <p className="font-hand absolute inset-x-0 bottom-3 text-center text-3xl text-ink">
              explore · learn · discover · grow
            </p>
          </div>
          <div className="font-hand absolute -top-5 right-0 hidden rotate-6 rounded-xl bg-gold-light px-4 py-2 text-2xl text-ink shadow-lg sm:block lg:-right-4">
            mom + son + a big world
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-8">
          <Reveal>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
              <span className="h-px w-10 bg-gold" /> Our story
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              A mother, her son, and a <em className="text-lagoon">very big</em> world.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-lg leading-relaxed text-ink-soft">
              Global Adventures Collective is a family-inspired children’s publishing and
              educational brand dedicated to inspiring young minds through storytelling,
              creativity, and global exploration. Inspired by the special bond between a
              mother and son, our signature series,{' '}
              <strong className="font-semibold text-ink">Adventures Around the World</strong>, encourages
              children to explore new places, appreciate diversity, and develop a love for reading.
            </p>
            <blockquote className="font-display mt-8 border-l-4 border-gold pl-6 text-2xl italic leading-snug text-ink md:text-[1.7rem]">
              “Every child deserves the opportunity to discover the world, even if their journey
              begins with a book.”
            </blockquote>
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              By combining family-centered storytelling with education, travel, and cultural
              discovery, we’re committed to becoming a trusted children’s publishing brand that
              connects families, celebrates cultures, and inspires the next generation of global
              explorers.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-3xl bg-ink p-6 text-paper md:p-8">
              <p className="font-hand text-3xl text-gold-light">Our mission</p>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {MISSION.map(({ icon: Icon, t, c }) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-paper/10 ${c}`}>
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
