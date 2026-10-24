import { Facebook, Instagram } from 'lucide-react'
import { SITE } from '../lib/site'

// Scenes cut from the brand banners; a travel-inspiration strip, not Instagram posts.
const LEFT = [
  { src: 'img/journey/lagoon.webp', alt: 'Overwater huts in a turquoise lagoon below green peaks' },
  { src: 'img/journey/savanna.webp', alt: 'An elephant and giraffes on the savanna below Table Mountain' },
  { src: 'img/journey/santorini.webp', alt: 'Blue-domed white houses of Santorini above the sea' },
  { src: 'img/journey/colosseum.webp', alt: 'The Colosseum in Rome glowing at sunset' },
]
const RIGHT = [
  { src: 'img/journey/london.webp', alt: 'Big Ben and Westminster Bridge at sunset' },
  { src: 'img/journey/table-mountain.webp', alt: 'Table Mountain rising over Cape Town' },
  { src: 'img/journey/cliffs.webp', alt: 'Green sea cliffs above a tropical beach' },
  { src: 'img/journey/sunset-sea.webp', alt: 'A brass compass on a world map as the sun sets over the sea' },
]

function Tiles({ items, className = '' }: { items: typeof LEFT; className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-1.5 ${className}`}>
      {items.map((t) => (
        <img key={t.src} src={t.src} alt={t.alt} width={480} height={360} loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
      ))}
    </div>
  )
}

export default function Journey() {
  return (
    <section className="border-t border-gold/40 bg-[#f6efe0] py-5">
      <div className="mx-auto grid max-w-[96rem] items-center gap-4 px-3 lg:grid-cols-[1fr_auto_1fr]">
        <Tiles items={LEFT} className="hidden lg:grid" />
        <div className="px-4 py-2 text-center">
          <p className="font-hand flex items-center justify-center gap-2 text-4xl leading-none text-ink">
            <Instagram size={26} className="text-[#e1306c]" /> Follow Our Journey
          </p>
          <p className="mt-1.5 text-sm text-ink-soft">Travel inspiration, behind the scenes, new releases, and more!</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-navy-deep px-4 text-sm font-semibold text-white transition hover:bg-ink">
              <Instagram size={17} /> Follow on Instagram
            </a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#1877f2] px-4 text-sm font-semibold text-white transition hover:brightness-110">
              <Facebook size={17} /> Like on Facebook
            </a>
          </div>
        </div>
        <Tiles items={RIGHT} className="hidden lg:grid" />
        <Tiles items={[...LEFT.slice(0, 2), ...RIGHT.slice(0, 2)]} className="lg:hidden" />
      </div>
    </section>
  )
}
