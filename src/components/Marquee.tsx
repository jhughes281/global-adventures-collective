const WORDS = ['Explore the World', 'Create Adventures', 'Inspire Imagination', 'Explore · Learn · Discover · Grow']

export default function Marquee() {
  const row = [...WORDS, ...WORDS]
  return (
    <div className="overflow-hidden py-3" aria-hidden><div className="relative -rotate-[0.8deg] scale-x-105 overflow-hidden bg-ink py-4 shadow-[0_10px_30px_-12px_rgba(8,26,52,0.6)]">
      <div className="marquee-track flex">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span key={i} className="font-display flex items-center whitespace-nowrap text-2xl italic text-gold-light md:text-3xl">
                <span className="px-8">{w}</span>
                <span className="text-hibiscus not-italic">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
