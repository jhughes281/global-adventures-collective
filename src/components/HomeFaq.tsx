import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import FaqList from './FaqList'
import { HOME_FAQS } from '../content/faqs'

export default function HomeFaq() {
  return (
    <section id="faqs" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
            <span className="h-px w-10 bg-gold" /> FAQs
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Answers for families, educators, retailers and partners.
          </p>
          <a
            href="faq.html"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gold-light px-6 py-3.5 font-bold uppercase tracking-[0.06em] text-navy-deep transition hover:-translate-y-0.5 hover:bg-gold"
          >
            View all FAQs <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <FaqList items={HOME_FAQS} />
        </Reveal>
      </div>
    </section>
  )
}
