import { useState, type FormEvent, type ReactNode } from 'react'
import { ChevronRight, CircleHelp, Handshake, Mail, Send } from 'lucide-react'
import FaqList from './FaqList'
import { HOME_FAQS } from '../content/faqs'
import { INQUIRY_TYPES, openMail } from '../lib/site'

const field = 'w-full rounded-xl border-2 border-ink/15 bg-white px-3.5 py-2.5 outline-none transition focus:border-sky'
const btn = 'inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-sun px-6 py-2.5 font-extrabold uppercase tracking-wide text-ink transition hover:-translate-y-0.5 hover:bg-sun-deep'

function Panel({ id, icon, title, children }: { id?: string; icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div id={id} className="flex scroll-mt-28 flex-col rounded-[1.6rem] bg-white p-6 shadow-[0_12px_26px_-16px_rgba(19,40,79,0.55)]">
      <h2 className="font-display flex items-center gap-3 text-2xl font-bold text-ink">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-white">{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  )
}

type Props = { interest: string; inquiry: string; setInquiry: (v: string) => void }

export default function Connect({ interest, inquiry, setInquiry }: Props) {
  const [nlEmail, setNlEmail] = useState('')
  const [nlDone, setNlDone] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const subscribe = (e: FormEvent) => {
    e.preventDefault()
    openMail('Newsletter sign-up', `Please add me to the Global Adventures Collective newsletter.\n\nEmail: ${nlEmail}\nMost excited about: ${interest}`)
    setNlDone(true)
  }
  const send = (e: FormEvent) => {
    e.preventDefault()
    openMail(`${inquiry}: message from ${name}`, `${message}\n\n— ${name}\n${email}`)
    setSent(true)
  }
  const wholesale = () => {
    setInquiry('Wholesale')
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    document.getElementById('c-msg')?.focus({ preventScroll: true })
  }

  return (
    <section className="bg-paper py-14">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <Panel id="faqs" icon={<CircleHelp size={22} />} title="Frequently Asked Questions">
          <div className="mt-4">
            <FaqList compact items={HOME_FAQS.slice(0, 5)} />
          </div>
          <a href="faq.html" className={`${btn} mt-5 self-center`}>View all FAQs</a>
        </Panel>

        <Panel id="newsletter" icon={<Mail size={20} />} title="Join Our Newsletter">
          <p className="mt-3 leading-relaxed text-ink-soft">
            Be the first to know about new book releases, activities, special offers, and exciting travel news!
          </p>
          {nlDone ? (
            <p className="mt-5 rounded-xl bg-sky-light p-4 font-semibold text-ink">
              Your email app should open with your sign-up ready. Just hit send!
            </p>
          ) : (
            <form onSubmit={subscribe} className="mt-5 flex flex-col gap-3">
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input id="nl-email" type="email" required value={nlEmail} onChange={(e) => setNlEmail(e.target.value)} placeholder="Your email address" className={field} />
              <button type="submit" className={btn}>Subscribe</button>
            </form>
          )}
        </Panel>

        <Panel icon={<Handshake size={20} />} title="Wholesale & Partnerships">
          <p className="mt-3 leading-relaxed text-ink-soft">
            We welcome opportunities to work with bookstores, schools, libraries, airlines, retailers, and organizations that share our passion for reading, education, and cultural exploration.
          </p>
          <button onClick={wholesale} className={`${btn} mt-auto self-center`}>
            Inquire now <ChevronRight size={18} strokeWidth={3} />
          </button>
        </Panel>

        <Panel id="contact" icon={<Send size={18} />} title="Contact Us">
          <p className="mt-3 text-ink-soft">We’d love to hear from you! For questions, partnerships, or general inquiries, use the form below.</p>
          {sent ? (
            <div className="mt-5 rounded-xl bg-sky-light p-4">
              <p className="font-semibold text-ink">Your email app should open with your message ready. Press send and we’ll write back soon.</p>
              <button onClick={() => setSent(false)} className="mt-2 min-h-11 font-bold underline underline-offset-4">Write another</button>
            </div>
          ) : (
            <form onSubmit={send} className="mt-4 space-y-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <label className="sr-only" htmlFor="c-name">Your name</label>
                <input id="c-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
                <label className="sr-only" htmlFor="c-email">Your email</label>
                <input id="c-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className={field} />
              </div>
              <label className="sr-only" htmlFor="c-type">Inquiry type</label>
              <select id="c-type" value={inquiry} onChange={(e) => setInquiry(e.target.value)} className={field}>
                {INQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
              <label className="sr-only" htmlFor="c-msg">Your message</label>
              <textarea id="c-msg" required rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" className={`${field} resize-none`} />
              <button type="submit" className={`${btn} w-full`}>Send message</button>
            </form>
          )}
        </Panel>
      </div>
    </section>
  )
}
