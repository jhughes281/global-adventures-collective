import { motion } from 'framer-motion'
import { BookOpen, ChevronRight, Globe2, Plane, Users } from 'lucide-react'

const PILLARS = [
  { icon: BookOpen, t: 'Children’s Books', s: 'Inspiring stories' },
  { icon: Globe2, t: 'Educational Activities', s: 'Fun learning' },
  { icon: Plane, t: 'Cultural Exploration', s: 'Discover the world' },
  { icon: Users, t: 'Family Connection', s: 'Memorable adventures' },
]

const fade = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
})

// Side art fades into the cream centre so the real logo and copy sit on a calm field.
const fadeRight = '[mask-image:linear-gradient(90deg,#000_62%,transparent)]'
const fadeLeft = '[mask-image:linear-gradient(270deg,#000_62%,transparent)]'

export default function Hero() {
  return (
    <section id="top" className="relative bg-paper pt-[5.25rem]">
      <div className="relative overflow-hidden border-b-[3px] border-gold/70 bg-[#f6efe0]">
        <img
          src="img/scenery/hero-left.webp"
          alt=""
          aria-hidden
          width={1060}
          height={512}
          className={`absolute inset-y-0 left-0 hidden h-full w-[33%] object-cover object-left xl:block ${fadeRight}`}
        />
        <img
          src="img/scenery/hero-right.webp"
          alt=""
          aria-hidden
          width={1122}
          height={512}
          className={`absolute inset-y-0 right-0 hidden h-full w-[33%] object-cover object-right xl:block ${fadeLeft}`}
        />

        <div className="relative mx-auto max-w-xl px-5 pb-10 pt-8 text-center xl:max-w-[34%] xl:py-12">
          <motion.h1 {...fade(0)}>
            <img
              src="img/brand/logo.webp"
              alt="Global Adventures Collective"
              width={1695}
              height={811}
              fetchPriority="high"
              className="mx-auto w-full max-w-[22rem]"
            />
          </motion.h1>
          <motion.p {...fade(1)} className="font-display mt-4 text-xl font-semibold text-ink md:text-[1.4rem]">
            Explore the World. Create Adventures. Inspire Imagination.
          </motion.p>
          <motion.p {...fade(2)} className="mx-auto mt-3 max-w-md leading-relaxed text-ink-soft">
            Engaging children’s books and travel-inspired products that spark curiosity, celebrate
            cultures, and encourage a lifelong love of learning.
          </motion.p>
          <motion.div {...fade(3)} className="mt-6">
            <a href="#products" className="btn-gold">
              Explore our products <ChevronRight size={18} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>

        {/* On phones the two scenes sit side by side under the copy */}
        <div className="grid grid-cols-2 xl:hidden">
          <img src="img/scenery/hero-left.webp" alt="" aria-hidden className="h-36 w-full object-cover object-left sm:h-56 lg:h-72" />
          <img src="img/scenery/hero-right.webp" alt="" aria-hidden className="h-36 w-full object-cover object-right sm:h-56 lg:h-72" />
        </div>
      </div>

      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-4 md:divide-x md:divide-gold/50">
        {PILLARS.map(({ icon: Icon, t, s }) => (
          <li key={t} className="flex flex-col items-center px-3 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-gold text-gold-deep">
              <Icon size={28} strokeWidth={1.5} />
            </span>
            <span className="font-display mt-3 text-[0.95rem] font-semibold uppercase tracking-[0.06em] text-ink">{t}</span>
            <span className="text-sm text-ink-soft">{s}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
