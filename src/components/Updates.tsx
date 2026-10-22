import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Reveal from './Reveal'
import { INTERESTS, openMail } from '../lib/site'

type Props = { interest: string; setInterest: (v: string) => void }

export default function Updates({ interest, setInterest }: Props) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    openMail(
      'Launch list sign-up',
      `Please add me to the launch list.\n\nEmail: ${email}\nInterested in: ${interest}`,
    )
    setDone(true)
  }

  return (
    <section id="updates" className="relative mx-auto max-w-7xl scroll-mt-10 px-5 py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gold-light via-gold to-sunset p-8 text-ink shadow-[0_30px_60px_-30px_rgba(148,97,10,0.8)] md:p-14">
          <img
            src="img/mark.webp"
            alt=""
            aria-hidden
            className="spin-slow pointer-events-none absolute -right-24 -top-24 w-96 max-w-none opacity-20 mix-blend-multiply"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-hand text-3xl text-navy-deep">be first on the flight</p>
              <h2 className="font-display mt-1 text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
                Get launch updates
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-navy-deep/85">
                Our books, activity books and keepsakes are coming soon. Tell us what you’re
                most excited about and we’ll send word the moment they take off.
              </p>
            </div>

            {done ? (
              <div className="rounded-3xl bg-paper p-8 text-center">
                <CheckCircle2 className="mx-auto text-lagoon" size={46} />
                <h3 className="font-display mt-3 text-3xl font-semibold">You’re on the list!</h3>
                <p className="mt-2 text-ink-soft">
                  Your email app should open with your request, so just hit send. Thank you for
                  exploring with us.
                </p>
                <button onClick={() => setDone(false)} className="mt-5 font-semibold underline underline-offset-4">
                  Sign up another email
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="rounded-3xl bg-paper p-6 shadow-xl md:p-8">
                <fieldset>
                  <legend className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
                    I’m interested in
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map((i) => (
                      <label key={i} className="cursor-pointer">
                        <input
                          type="radio"
                          name="interest"
                          value={i}
                          checked={interest === i}
                          onChange={() => setInterest(i)}
                          className="peer sr-only"
                        />
                        <span className="block rounded-full border-2 border-ink/15 px-4 py-2 text-sm font-medium transition peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-hibiscus hover:border-ink/50">
                          {i}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label htmlFor="u-email" className="mt-6 block text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
                  Email address
                </label>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="u-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@family.com"
                    className="min-w-0 flex-1 rounded-full border-2 border-ink/15 bg-card px-5 py-3.5 outline-none transition focus:border-ink"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-navy-deep"
                  >
                    Notify me <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
