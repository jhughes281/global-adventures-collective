import { motion } from 'framer-motion'
import { ChevronRight, BookOpen, Palette, Globe2, Users, Heart } from 'lucide-react'

const PILLARS = [
  { icon: BookOpen, t: 'Children’s Books', s: 'Inspiring stories', c: 'bg-sky' },
  { icon: Palette, t: 'Educational Activities', s: 'Fun learning', c: 'bg-coral' },
  { icon: Globe2, t: 'Cultural Exploration', s: 'Discover the world', c: 'bg-leaf' },
  { icon: Users, t: 'Family Connection', s: 'Memorable adventures', c: 'bg-teal' },
]

export default function Hero() {
  return (
    <section id="top" className="sky relative overflow-hidden pt-[5.25rem]">
      <div className="relative grid items-stretch lg:grid-cols-[1fr_26rem] xl:grid-cols-[1fr_26rem_1fr]">
        <img
          src="img/brand/hero-family.webp"
          alt="A smiling mom and her son on an adventure, the boy pointing toward an airplane, beside signposts reading New Places, Big Dreams, Bright Futures and One Story at a Time"
          width={1090}
          height={558}
          fetchPriority="high"
          className="order-2 w-full lg:order-1 lg:h-full lg:object-cover lg:object-[42%_40%]"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 px-5 pb-8 pt-6 text-center lg:order-2 lg:self-center lg:pb-9 lg:pt-1"
        >
          <h1>
            <img
              src="img/brand/logo.webp"
              alt="Global Adventures Collective"
              width={1695}
              height={811}
              className="mx-auto w-full max-w-[16rem] xl:max-w-[13rem] drop-shadow-[0_6px_14px_rgba(255,255,255,0.9)]"
            />
          </h1>
          <p className="mx-auto mt-3 max-w-[22rem] text-base font-bold xl:text-[0.95rem] leading-snug text-ink">
            Children’s books &amp; travel-inspired products that spark curiosity, celebrate
            cultures, and encourage a lifelong love of learning.
          </p>
          <a
            href="#products"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-sun px-7 py-3 text-base xl:py-2.5 font-extrabold uppercase tracking-wide text-ink shadow-[0_10px_22px_-10px_rgba(233,168,0,1)] transition hover:-translate-y-0.5 hover:bg-sun-deep"
          >
            Explore our products <ChevronRight size={22} strokeWidth={3} />
          </a>
        </motion.div>

        <img
          src="img/brand/hero-world.webp"
          alt="A globe with an elephant, giraffe, passport and suitcases, beside a wooden sign reading Explore the World, Create Adventures, Inspire Imagination"
          width={1062}
          height={558}
          className="order-3 hidden w-full xl:block lg:h-full lg:object-cover lg:object-[65%_40%]"
        />
      </div>

      {/* Pillars on a cloud strip */}
      <div className="cloud-top relative -mt-6 bg-paper pb-8 pt-12">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 md:grid-cols-4">
          {PILLARS.map(({ icon: Icon, t, s, c }) => (
            <li key={t} className="flex flex-col items-center rounded-[2rem] bg-white px-3 py-5 text-center shadow-[0_10px_24px_-14px_rgba(19,40,79,0.45)]">
              <span className={`grid h-14 w-14 place-items-center rounded-full text-white ${c}`}>
                <Icon size={28} strokeWidth={2.2} />
              </span>
              <span className="mt-3 font-extrabold leading-tight text-ink">{t}</span>
              <span className="text-sm text-ink-soft">{s}</span>
            </li>
          ))}
        </ul>
        <p className="font-hand mx-auto mt-5 flex max-w-6xl items-center justify-center gap-2 px-5 text-3xl text-ink md:justify-end">
          One mom, one son, endless adventures. <Heart size={22} className="fill-coral text-coral" />
        </p>
      </div>
    </section>
  )
}
