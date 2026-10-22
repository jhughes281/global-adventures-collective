import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'
import RubberStamp from './RubberStamp'

const fade = (i: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-14 pt-28 md:pb-24 md:pt-36">
      {/* decorative spinning mark */}
      <img
        src="img/mark.webp"
        alt=""
        aria-hidden
        className="spin-slow pointer-events-none absolute -left-40 top-10 w-[34rem] max-w-none opacity-[0.05]"
      />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold-light/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card/70 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-gold-deep"
          >
            <Sparkles size={14} /> Children’s publishing · Ages 5–12
          </motion.div>

          <motion.h1
            {...fade(1)}
            className="font-display mt-6 text-[2.9rem] font-semibold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[3.9rem] xl:text-[4.3rem]"
          >
            Explore the world.
            <br />
            Create{' '}
            <span className="relative inline-block italic text-gold-deep">
              adventures.
              <svg
                viewBox="0 0 300 14"
                className="absolute -bottom-2 left-0 w-full"
                fill="none"
                aria-hidden
              >
                <motion.path
                  d="M3 9c40-8 90-8 140-3s100 5 154-2"
                  stroke="#D49A2A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.9, ease: 'easeInOut' }}
                />
              </svg>
            </span>
            <br />
            Inspire imagination.
          </motion.h1>

          <motion.p {...fade(2)} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            Family-inspired storybooks, activity books and travel-themed keepsakes that
            carry curious kids to new places, new cultures and a lifelong love of reading.
          </motion.p>

          <motion.div {...fade(3)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#books"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-paper shadow-[0_10px_30px_-10px_rgba(14,36,68,0.7)] transition hover:-translate-y-0.5"
            >
              <BookOpen size={18} /> Discover our books
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#updates"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/80 px-7 py-[0.9rem] font-semibold text-ink transition hover:bg-ink hover:text-paper"
            >
              Join the launch list
            </a>
          </motion.div>

          <motion.p {...fade(4)} className="font-hand mt-8 text-2xl text-hibiscus">
            ✈ every child deserves to see the world, one page at a time
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-6"
        >
          <img
            src="img/hero-art.webp"
            alt="A mother and her young son explore a vintage globe together, surrounded by a travel suitcase, straw hat and tropical flowers"
            width={1400}
            height={933}
            className="relative w-full mix-blend-multiply lg:scale-[1.1] [mask-image:radial-gradient(ellipse_at_center,#000_42%,transparent_71%)]"
          />
          <RubberStamp className="bob absolute -top-2 right-0 h-28 w-28 -rotate-12 text-hibiscus sm:h-36 sm:w-36 [--r:-12deg]" />
        </motion.div>
      </div>
    </section>
  )
}
