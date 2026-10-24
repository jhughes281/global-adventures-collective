import { Globe2, Lightbulb, PawPrint, Plane, Users } from 'lucide-react'
import Reveal from './Reveal'

const LEARN = [
  { icon: Globe2, t: 'Geography & World Cultures', c: 'bg-sky' },
  { icon: PawPrint, t: 'Amazing Wildlife', c: 'bg-sun-deep' },
  { icon: Lightbulb, t: 'Reading & Creativity', c: 'bg-leaf' },
  { icon: Users, t: 'Diversity & Inclusion', c: 'bg-teal' },
  { icon: Plane, t: 'Real-World Exploration', c: 'bg-coral' },
]

export default function Learn() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#9fdcff_0%,#5cc3e6_60%,#2fa7c9_100%)] py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[16rem_1fr]">
        <Reveal className="mx-auto w-full max-w-[16rem] -rotate-3">
          <div className="wood rounded-2xl px-6 py-5 text-center">
            <p className="font-display text-2xl font-bold leading-tight text-[#fff4dc]">
              Different Places
              <br />
              Different People
              <br />A Brighter World
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[2rem] bg-white/85 px-5 py-8 backdrop-blur-sm">
          <h2 className="font-display text-center text-4xl font-bold text-ink md:text-5xl">What Children Can Learn</h2>
          <ul className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {LEARN.map(({ icon: Icon, t, c }) => (
              <li key={t} className="flex flex-col items-center text-center">
                <span className={`grid h-16 w-16 place-items-center rounded-full border-4 border-white text-white shadow-md ${c}`}>
                  <Icon size={30} strokeWidth={2.2} />
                </span>
                <span className="mt-2 max-w-[9rem] font-extrabold leading-tight text-ink">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
