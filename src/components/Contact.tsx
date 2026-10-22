import { useState, type FormEvent } from 'react'
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import { SITE, openMail } from '../lib/site'

const field =
  'w-full rounded-2xl border-2 border-ink/15 bg-card px-4 py-3.5 outline-none transition focus:border-ink'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    openMail(`Message from ${name}`, `${message}\n\n— ${name}\n${email}`)
    setSent(true)
  }

  const rows = [
    { icon: MapPin, label: 'Visit', value: SITE.address.join(', '), href: SITE.mapHref },
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, label: 'Call', value: SITE.phone, href: SITE.phoneHref },
  ]

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 pb-24 pt-10 md:pb-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
              <span className="h-px w-10 bg-gold" /> Contact us
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Send us a <em className="text-hibiscus">postcard</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Questions, school and library inquiries, or just want to say hello? We’d love to
              hear from you.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === 'Visit' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-card p-4 transition hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-lg"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-gold-light transition group-hover:bg-hibiscus group-hover:text-paper">
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
            <div className="mt-6 flex gap-3">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-semibold transition hover:bg-ink hover:text-paper">
                <Instagram size={18} /> Instagram
              </a>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-semibold transition hover:bg-ink hover:text-paper">
                <Facebook size={18} /> Facebook
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="relative">
            {/* airmail envelope border */}
            <div className="rounded-[2rem] bg-card p-3 shadow-[0_30px_60px_-30px_rgba(14,36,68,0.6)]">
              <div className="rounded-[1.5rem] border-[10px] border-transparent p-6 md:p-9 [border-image:repeating-linear-gradient(-45deg,#e5506a_0_14px,#fffaf0_14px_28px,#0e2444_28px_42px,#fffaf0_42px_56px)_12]">
                {sent ? (
                  <div className="py-12 text-center">
                    <p className="font-hand text-4xl text-hibiscus">postcard on its way!</p>
                    <p className="mx-auto mt-3 max-w-sm text-ink-soft">
                      Your email app should open with your message ready. Just press send and we’ll
                      write back soon.
                    </p>
                    <button onClick={() => setSent(false)} className="mt-6 font-semibold underline underline-offset-4">
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
                      <label htmlFor="c-msg" className="mb-2 block text-sm font-semibold">Message</label>
                      <textarea id="c-msg" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className={`${field} resize-none`} placeholder="Tell us about your next adventure…" />
                    </div>
                    <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-navy-deep sm:w-auto">
                      Send message <Send size={17} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
