import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import RubberStamp from './RubberStamp'

type Props = { onNotify: (interest: string) => void }

const ITEMS = [
  {
    n: '01',
    title: 'Children’s Adventure Books',
    img: 'img/p1.webp',
    alt: 'Adventures Around the World series: a stack of colorful storybooks with a suitcase, camera and globe',
    desc: 'Engaging stories from our signature Adventures Around the World series that introduce children ages 5–12 to different cultures, destinations, and wildlife. Each book encourages exploration, appreciation for diversity, and a love for reading.',
    interest: 'Children’s books',
  },
  {
    n: '02',
    title: 'Activity & Coloring Books',
    img: 'img/p2.webp',
    alt: 'Activity books with coloring pages, word searches, mazes and connect-the-dots',
    desc: 'Interactive educational products including activity books and coloring books that complement our stories. These hands-on resources help children engage with global themes while developing creativity and learning skills.',
    interest: 'Activity & coloring books',
  },
  {
    n: '03',
    title: 'Travel-Inspired Educational Products',
    img: 'img/p3.webp',
    alt: 'Tasseled bookmarks featuring elephants, a tropical beach and London',
    desc: 'A collection of bookmarks and other travel-inspired educational materials designed to extend the learning experience beyond reading. These products reinforce cultural awareness and inspire children’s curiosity about the world.',
    interest: 'Bookmarks & keepsakes',
  },
]

function Card({
  item,
  onNotify,
  big = false,
}: {
  item: (typeof ITEMS)[number]
  onNotify: Props['onNotify']
  big?: boolean
}) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-card shadow-[0_20px_40px_-24px_rgba(14,36,68,0.5)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-22px_rgba(14,36,68,0.55)]`}
    >
      <div className={`relative overflow-hidden ${big ? 'min-h-[18rem] flex-1' : 'aspect-[3/2]'}`}>
        <img
          src={item.img}
          alt={item.alt}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${big ? 'absolute inset-0' : ''}`}
        />
        <span className="font-display absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-paper text-lg font-semibold italic text-ink shadow">
          {item.n}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight md:text-[1.7rem]">
          {item.title}
        </h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{item.desc}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-light/50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-deep">
            <span className="h-2 w-2 animate-pulse rounded-full bg-hibiscus" /> Coming soon
          </span>
          <button
            onClick={() => onNotify(item.interest)}
            className="inline-flex items-center gap-1.5 font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 transition hover:text-hibiscus"
          >
            Notify me <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Products({ onNotify }: Props) {
  return (
    <section id="books" className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
          <span className="h-px w-10 bg-gold" /> Our books &amp; products <span className="h-px w-10 bg-gold" />
        </p>
        <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Everything a young explorer needs <em className="text-hibiscus">to pack</em>
        </h2>
      </Reveal>

      <div className="relative mt-16 grid gap-8 lg:grid-cols-12 lg:grid-rows-2">
        <Reveal className="lg:col-span-7 lg:row-span-2">
          <Card item={ITEMS[0]} onNotify={onNotify} big />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <Card item={ITEMS[1]} onNotify={onNotify} />
        </Reveal>
        <Reveal delay={0.2} className="lg:col-span-5">
          <Card item={ITEMS[2]} onNotify={onNotify} />
        </Reveal>
        <RubberStamp
          top="WATCH THIS SPACE ✦ NEW ARRIVALS ✦ "
          line1="NEW"
          line2="SOON"
          className="bob pointer-events-none absolute -right-3 -top-24 hidden h-32 w-32 rotate-12 text-lagoon md:block [--r:12deg]"
        />
      </div>
    </section>
  )
}
