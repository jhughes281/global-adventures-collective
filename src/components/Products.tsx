import { Plane } from 'lucide-react'
import Reveal from './Reveal'

type Props = { onNotify: (interest: string) => void }

const ITEMS = [
  {
    title: 'Adventures Around the World',
    sub: 'Children’s storybook series · Ages 5–12',
    img: 'img/products/storybooks.webp',
    alt: 'Adventures Around the World children’s series coming soon: a fan of illustrated storybooks with the Eiffel Tower, a giraffe and Big Ben',
    interest: 'Children’s books',
  },
  {
    title: 'Activity Books',
    sub: 'Coloring, puzzles, and educational activities',
    img: 'img/products/activity-books.webp',
    alt: 'Adventures Around the World activity books coming soon: coloring pages, a word search, mazes and activity sheets',
    interest: 'Activity & coloring books',
  },
  {
    title: 'Bookmarks',
    sub: 'Beautiful travel-inspired designs',
    img: 'img/products/creative-collection.webp',
    alt: 'Little Explorers Creative Collection coming soon: tasseled bookmarks, travel stickers, a paint kit and world-map stationery',
    interest: 'Little Explorers Creative Collection',
  },
  {
    title: 'Travel-Inspired Gifts',
    sub: 'Stickers, stationery and more',
    img: 'img/products/travel-gear.webp',
    alt: 'Adventures Around the World travel products coming soon: a world-map backpack, water bottle, neck pillow, suitcase and luggage tag',
    interest: 'Travel-inspired products',
  },
]

export default function Products({ onNotify }: Props) {
  return (
    <section id="products" className="relative scroll-mt-24 bg-paper pb-16">
      <Reveal className="mx-auto max-w-7xl px-5">
        <h2 className="font-display flex flex-wrap items-baseline justify-center gap-x-3 text-center text-4xl font-semibold text-ink md:text-5xl">
          Our Products –
          <span className="font-hand text-[1.3em] font-normal text-gold-deep">Coming Soon</span>
          <Plane aria-hidden size={26} className="hidden rotate-12 text-gold-deep sm:inline" strokeWidth={1.5} />
        </h2>
      </Reveal>
      <div className="mx-auto mt-10 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gold/50 bg-card text-center shadow-[0_14px_30px_-20px_rgba(10,28,56,0.6)]">
              <div className="overflow-hidden border-b border-gold/40">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-4 pb-5 pt-4">
                <h3 className="font-display text-xl font-semibold leading-tight text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{item.sub}</p>
                <span className="mt-4 rounded-full border border-gold bg-gold-light px-6 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-navy-deep">
                  Coming soon
                </span>
                <button
                  onClick={() => onNotify(item.interest)}
                  className="mt-auto min-h-11 pt-2 text-sm font-semibold text-gold-deep underline decoration-gold/60 underline-offset-4 hover:text-ink"
                >
                  Notify me at launch
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
