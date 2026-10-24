import { Plane } from 'lucide-react'
import Reveal from './Reveal'

export default function Banner() {
  return (
    <section className="relative bg-paper pb-16" aria-label="Adventures Around the World">
      <Reveal className="relative mx-auto max-w-7xl px-5">
        <p className="font-hand mb-3 flex items-center justify-center gap-2 text-center text-3xl text-ink md:text-4xl">
          Pack your bags, little explorers! <Plane size={26} className="-rotate-12 fill-sky text-sky" />
        </p>
        <div className="relative rounded-[2rem] bg-white p-2 shadow-[0_16px_34px_-18px_rgba(19,40,79,0.6)] md:p-3">
          <img
            src="img/brand/books-banner.webp"
            alt="Five storybooks titled Wildlife Adventures, Beach Destinations, Iconic Cities, Natural Wonders and Global Cultures beside a camera, compass and map, with the Global Adventures Collective logo over a sunset coastline"
            width={2000}
            height={744}
            loading="lazy"
            className="aspect-[2000/744] w-full rounded-[1.5rem] object-cover"
          />
          <span className="absolute -top-3 left-6 rotate-[-4deg] rounded-full bg-sun px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-ink shadow md:left-10 md:text-sm">
            Adventures Around the World
          </span>
        </div>
      </Reveal>
    </section>
  )
}
