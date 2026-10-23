import { useState, type FormEvent } from 'react'
import { Facebook, Handshake, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import { INQUIRY_TYPES, SITE, openMail } from '../lib/site'

const field =
  'w-full rounded-2xl border-2 border-ink/15 bg-card px-4 py-3.5 outline-none transition focus:border-ink'

type Props = { inquiry: string; setInquiry: (v: string) => void }

export default function Contact({ inquiry, setInquiry }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    openMail(`${inquiry}: message from ${name}`, `${message}\n\n— ${name}\n${email}`)
    setSent(true)
  }

  const wholesale = () => {
    setInquiry('Wholesale')
    document.getElementById('c-msg')?.focus({ preventScroll: true })
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const rows = [
    { icon: MapPin, label: 'Visit', value: SITE.address.join(', '), href: SITE.mapHref },
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, label: 'Call', value: SITE.phone, href: SITE.phoneHref },
  ]

  return (
    <section id="contact" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 pt-10 md:pb-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
              <span className="h-px w-10 bg-gold" /> Contact us
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              We’d love to <em className="text-gold-deep">hear from you</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              General questions, product inquiries, wholesale opportunities and partnership
              proposals are all welcome.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 rounded-[1.5rem] bg-ink p-6 text-paper md:p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-light/60 text-gold-light">
                  <Handshake size={22} />
                </span>
                <h3 className="font-display text-2xl font-semibold">Wholesale &amp; partnerships</h3>
              </div>
              <p className="mt-4 leading-relaxed text-paper/80">
                We welcome opportunities to work with bookstores, schools, libraries, retailers,
                airlines, and organizations that share our passion for reading, education, and
                cultural exploration.
              </p>
              <button
                onClick={wholesale}
                className="mt-5 rounded-full bg-gold-light px-6 py-3 font-bold uppercase tracking-[0.06em] text-navy-deep transition hover:-translate-y-0.5 hover:bg-paper"
              >
                Inquire now
              </button>
            </div>

            <ul className="mt-6 space-y-3">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === 'Visit' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-card p-4 transition hover:border-ink/30"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-gold-light">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">{label}</span>
                      <span className="block break-words font-medium">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-semibold transition hover:bg-ink hover:text-paper">
                <Instagram size={18} /> Follow on Instagram
              </a>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-semibold transition hover:bg-ink hover:text-paper">
                <Facebook size={18} /> Like on Facebook
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div id="contact-form" className="rounded-[2rem] bg-card p-3 shadow-[0_30px_60px_-30px_rgba(14,36,68,0.6)]">
            <div className="rounded-[1.5rem] border-[10px] border-transparent p-6 md:p-9 [border-image:repeating-linear-gradient(-45deg,#d49a2a_0_14px,#fffaf0_14px_28px,#0e2444_28px_42px,#fffaf0_42px_56px)_12]">
              {sent ? (
                <div className="py-12 text-center">
                  <p className="font-hand text-4xl text-gold-deep">message on its way!</p>
                  <p className="mx-auto mt-3 max-w-sm text-ink-soft">
                    Your email app should open with your message ready. Just press send and we’ll
                    write back soon.
                  </p>
                  <button onClick={() => setSent(false)} className="mt-6 min-h-11 font-semibold underline underline-offset-4">
                    Write another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-name" className="mb-2 block text-sm font-semibold">Name</label>
                      <input id="c-name" required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="mb-2 block text-sm font-semibold">Email</label>
                      <input id="c-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} placeholder="you@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-type" className="mb-2 block text-sm font-semibold">Inquiry type</label>
                    <select id="c-type" value={inquiry} onChange={(e) => setInquiry(e.target.value)} className={field}>
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-msg" className="mb-2 block text-sm font-semibold">Message</label>
                    <textarea id="c-msg" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className={`${field} resize-none`} placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-navy-deep sm:w-auto">
                    Send message <Send size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
