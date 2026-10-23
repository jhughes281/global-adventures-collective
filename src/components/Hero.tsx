import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Globe2, Plane, Users } from 'lucide-react'

const fade = (i: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
})

const PILLARS = [
  { icon: BookOpen, t: 'Children’s Books', s: 'Inspiring stories' },
  { icon: Globe2, t: 'Educational Activities', s: 'Fun learning' },
  { icon: Plane, t: 'Cultural Exploration', s: 'Discover the world' },
  { icon: Users, t: 'Family Connection', s: 'Memorable adventures' },
]

export default function Hero() {
  return (
    <section id="top" className="relative pt-[5.25rem]">
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden border-b-4 border-gold"
      >
        <img
          src="img/brand/hero-banner.webp"
          alt="Global Adventures Collective logo over a collage of Santorini, vintage suitcases, a camera, the Eiffel Tower, Big Ben and a tropical lagoon"
          width={2000}
          height={750}
          fetchPriority="high"
          className="aspect-[16/9] w-full object-cover object-center sm:aspect-[2000/750]"
        />
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-5 pt-12 text-center md:pt-16">
        <motion.h1
          {...fade(0)}
          className="font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[3.4rem]"
        >
          Explore the World. Create Adventures.{' '}
          <em className="text-gold-deep">Inspire Imagination.</em>
        </motion.h1>
        <motion.p {...fade(1)} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Engaging children’s books and travel-inspired products that spark curiosity, celebrate
          cultures, and encourage a lifelong love of learning.
        </motion.p>
        <motion.div {...fade(2)} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-light px-7 py-4 font-bold uppercase tracking-[0.06em] text-navy-deep shadow-[0_12px_28px_-12px_rgba(148,97,10,0.9)] transition hover:-translate-y-0.5 hover:bg-gold"
          >
            Explore our products
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink/80 px-7 py-[0.9rem] font-semibold text-ink transition hover:bg-ink hover:text-paper"
          >
            Meet the founder
          </a>
        </motion.div>
      </div>

      <motion.ul
        {...fade(3)}
        className="relative mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-y-8 px-5 md:mt-16 md:grid-cols-4 md:divide-x md:divide-gold/40"
      >
        {PILLARS.map(({ icon: Icon, t, s }) => (
          <li key={t} className="flex flex-col items-center px-3 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-gold text-gold-deep">
              <Icon size={28} strokeWidth={1.6} />
            </span>
            <span className="font-display mt-3 text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-ink">{t}</span>
            <span className="text-sm text-ink-soft">{s}</span>
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
