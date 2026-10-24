import { useState, type FormEvent, type ReactNode } from 'react'
import { CircleHelp, Mail, Send } from 'lucide-react'
import FaqList from './FaqList'
import { HOME_FAQS } from '../content/faqs'
import { INQUIRY_TYPES, openMail } from '../lib/site'

const field =
  'w-full rounded-md border border-ink/20 bg-white px-3.5 py-2.5 text-[0.95rem] outline-none transition focus:border-gold'

function Panel({ id, icon, title, children }: { id?: string; icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div id={id} className="flex scroll-mt-28 flex-col rounded-xl border border-gold/40 bg-card p-6 shadow-[0_14px_30px_-22px_rgba(10,28,56,0.6)]">
      <h2 className="font-display flex items-center gap-3 text-2xl font-semibold text-ink">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-deep text-gold-light">{icon}</span>
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

  return (
    <section className="bg-paper py-14">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 xl:grid-cols-3">
        <div id="newsletter" className="flex scroll-mt-28 flex-col rounded-xl border-2 border-gold/60 bg-pine p-6 text-white shadow-[0_18px_36px_-20px_rgba(10,28,56,0.8)]">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-light text-pine">
              <Mail size={24} />
            </span>
            <h2 className="font-hand text-5xl leading-none text-white">Join Our Newsletter</h2>
          </div>
          <p className="mt-4 leading-relaxed text-white/85">
            Be the first to know about new book releases, activities, special offers, and exciting travel news!
          </p>
          {nlDone ? (
            <p className="mt-5 rounded-md bg-white/10 p-4 font-semibold">
              Your email app should open with your sign-up ready. Just hit send!
            </p>
          ) : (
            <form onSubmit={subscribe} className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row xl:flex-col 2xl:flex-row">
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input id="nl-email" type="email" required value={nlEmail} onChange={(e) => setNlEmail(e.target.value)} placeholder="Your email address" className={`${field} min-w-0 flex-1 text-ink`} />
              <button type="submit" className="btn-gold">Subscribe</button>
            </form>
          )}
        </div>

        <Panel id="faqs" icon={<CircleHelp size={22} />} title="Frequently Asked Questions">
          <div className="mt-4">
            <FaqList compact items={HOME_FAQS.slice(0, 5)} />
          </div>
          <a href="faq.html" className="btn-gold mt-5 self-center">View all FAQs</a>
        </Panel>

        <Panel id="contact" icon={<Send size={18} />} title="Contact Us">
          <p className="mt-3 text-ink-soft">We’d love to hear from you! For questions, partnerships, or general inquiries, use the form below.</p>
          {sent ? (
            <div className="mt-5 rounded-md bg-gold-light/30 p-4">
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
              <button type="submit" className="btn-gold w-full">Send message</button>
            </form>
          )}
        </Panel>
      </div>
    </section>
  )
}
