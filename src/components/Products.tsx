import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

type Props = { onNotify: (interest: string) => void }

const ITEMS = [
  {
    title: 'Adventures Around the World',
    sub: 'Children’s storybook series · Ages 5–12',
    img: 'img/products/storybooks.webp',
    alt: 'Adventures Around the World children’s series coming soon: a fan of illustrated storybooks with the Eiffel Tower, a giraffe and Big Ben, beside a globe, suitcase and camera',
    desc: 'Exciting destinations, diverse cultures, wildlife and memorable adventures, told through colorful illustrations and engaging stories.',
    interest: 'Children’s books',
  },
  {
    title: 'Activity & Coloring Books',
    sub: 'Coloring, puzzles, mazes and activities',
    img: 'img/products/activity-books.webp',
    alt: 'Adventures Around the World activity books coming soon: coloring pages, a word search, mazes and activity sheets around an open world map',
    desc: 'Hands-on pages that complement the stories and help children engage with global themes while building creativity.',
    interest: 'Activity & coloring books',
  },
  {
    title: 'Little Explorers Creative Collection',
    sub: 'Stickers, bookmarks, paint kits and stationery',
    img: 'img/products/creative-collection.webp',
    alt: 'Little Explorers Creative Collection coming soon: travel stickers, tasseled bookmarks, a paint kit and world-map stationery',
    desc: 'Creative products designed to encourage imagination, artistic expression, and exploration.',
    interest: 'Little Explorers Creative Collection',
  },
  {
    title: 'Travel-Inspired Products',
    sub: 'Backpacks, bottles, luggage and accessories',
    img: 'img/products/travel-gear.webp',
    alt: 'Adventures Around the World travel-related products coming soon: a world-map backpack, water bottle, lunch bag, neck pillow, suitcase, cap, sunglasses and luggage tag',
    desc: 'World-map gear for little travelers, for the trip itself or for dreaming about the next one.',
    interest: 'Travel-inspired products',
  },
]

export default function Products({ onNotify }: Props) {
  return (
    <section id="products" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
            <span className="h-px w-10 bg-gold" /> Our products
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Coming <span className="font-hand text-[1.25em] font-bold text-gold-deep">soon</span>
          </h2>
        </div>
        <p className="max-w-md text-lg leading-relaxed text-ink-soft">
          Our collections are in development. Tap “Notify me” on anything you love and we’ll
          let you know the day it launches.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.1}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-card">
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-gold-deep">{item.sub}</p>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.desc}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className="rounded-full bg-gold-light px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-navy-deep">
                    Coming soon
                  </span>
                  <button
                    onClick={() => onNotify(item.interest)}
                    className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold-deep"
                  >
                    Notify me <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
