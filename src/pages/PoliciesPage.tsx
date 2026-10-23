import SubPage from './SubPage'
import { POLICY_LIST, POLICY_STATUS, POLICY_UPDATED } from '../content/policies'

export default function PoliciesPage() {
  return (
    <SubPage
      kicker="Policies & information"
      title={<>Shipping, returns <em className="text-gold-light">&amp; privacy</em></>}
      intro={<p>Last updated {POLICY_UPDATED}</p>}
    >
      <p className="rounded-[1.25rem] border-l-4 border-gold bg-gold-light/40 p-5 leading-relaxed">{POLICY_STATUS}</p>

      <nav aria-label="Policies" className="mt-10 flex flex-wrap gap-2">
        {POLICY_LIST.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="inline-flex min-h-11 items-center rounded-full border-2 border-ink/15 px-4 text-sm font-semibold transition hover:border-ink"
          >
            {p.title}
          </a>
        ))}
      </nav>

      {POLICY_LIST.map((p, i) => (
        <section key={p.id} id={p.id} className="mt-16 scroll-mt-28">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">Policy {i + 1} of {POLICY_LIST.length}</p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{p.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{p.intro}</p>
          <div className="mt-8 space-y-7">
            {p.sections.map((s) => (
              <div key={s.h}>
                <h3 className="text-lg font-semibold text-ink">{s.h}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.p}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </SubPage>
  )
}
