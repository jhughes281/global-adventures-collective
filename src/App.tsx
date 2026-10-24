import { useCallback, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Products from './components/Products'
import Learn from './components/Learn'
import Connect from './components/Connect'
import Footer from './components/Footer'
import SkipLink from './components/SkipLink'
import { INQUIRY_TYPES, INTERESTS } from './lib/site'

export default function App() {
  const [interest, setInterest] = useState(INTERESTS[0])
  const [inquiry, setInquiry] = useState(INQUIRY_TYPES[0])

  const notify = useCallback((i: string) => {
    setInterest(i)
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    document.getElementById('nl-email')?.focus({ preventScroll: true })
  }, [])

  return (
    <>
      <SkipLink />
      <Nav />
      <main id="main">
        <Hero />
        <Products onNotify={notify} />
        <Learn />
        <Connect interest={interest} inquiry={inquiry} setInquiry={setInquiry} />
      </main>
      <Footer />
    </>
  )
}
