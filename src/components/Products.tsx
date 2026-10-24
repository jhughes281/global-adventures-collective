import { useState } from 'react'
import Reveal from './Reveal'
import StoryCard, { FounderLetter } from './About'

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
  const [letter, setLetter] = useState(false)

  return (
    <section className="relative bg-paper pb-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 xl:grid-cols-[1fr_20rem]">
        <div id="products" className="scroll-mt-24">
          <Reveal>
            <h2 className="font-display text-center text-4xl font-bold text-ink md:text-5xl">
              Our Products –{' '}
              <span className="font-hand text-[1.15em] font-bold text-coral">Coming Soon!</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-[1.4rem] bg-white p-2 text-center shadow-[0_12px_26px_-16px_rgba(19,40,79,0.55)]">
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.alt}
                      width={1536}
                      height={1024}
                      loading="lazy"
                      className="aspect-[3/2] w-full rounded-[1rem] object-cover"
                    />
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-sun px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-ink shadow">
                      Coming soon
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold leading-tight text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{item.sub}</p>
                  <button
                    onClick={() => onNotify(item.interest)}
                    className="mx-auto mt-auto min-h-11 pt-3 text-sm font-bold text-sky underline decoration-2 underline-offset-4 hover:text-ink"
                  >
                    Notify me at launch
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.1}>
          <StoryCard open={letter} onToggle={() => setLetter((v) => !v)} />
        </Reveal>
      </div>
      <FounderLetter open={letter} />
    </section>
  )
}
