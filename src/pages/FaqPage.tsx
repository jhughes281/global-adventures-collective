import SubPage from './SubPage'
import FaqList from '../components/FaqList'
import { FAQ_GROUPS } from '../content/faqs'

export default function FaqPage() {
  return (
    <SubPage
      kicker="FAQs"
      title={<>Frequently asked <em className="text-gold-light">questions</em></>}
      intro="Information for families, educators, customers, retailers, and potential partners."
    >
      <nav aria-label="FAQ topics" className="mb-12 flex flex-wrap gap-2">
        {FAQ_GROUPS.map((g, i) => (
          <a
            key={g.title}
            href={`#faq-${i}`}
            className="inline-flex min-h-11 items-center rounded-full border-2 border-ink/15 px-4 text-sm font-semibold transition hover:border-ink"
          >
            {g.title}
          </a>
        ))}
      </nav>
      <div className="space-y-14">
        {FAQ_GROUPS.map((g, i) => (
          <section key={g.title} id={`faq-${i}`} className="scroll-mt-28">
            <h2 className="font-display mb-5 text-2xl font-semibold tracking-tight md:text-3xl">{g.title}</h2>
            <FaqList items={g.items} />
          </section>
        ))}
      </div>
      <div className="mt-16 rounded-[1.5rem] bg-gold-light p-7 md:p-9">
        <h2 className="font-display text-2xl font-semibold">Still have a question?</h2>
        <p className="mt-2 text-navy-deep/85">We welcome general questions, product inquiries, wholesale opportunities, and partnership proposals.</p>
        <a href="./#contact" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-ink px-6 font-semibold text-paper transition hover:bg-navy-deep">
          Contact us
        </a>
      </div>
    </SubPage>
  )
}
