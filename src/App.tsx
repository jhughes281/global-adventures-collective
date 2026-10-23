import { useCallback, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Series from './components/Series'
import Scenes from './components/Scenes'
import Updates from './components/Updates'
import HomeFaq from './components/HomeFaq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SkipLink from './components/SkipLink'
import { INQUIRY_TYPES, INTERESTS } from './lib/site'

export default function App() {
  const [interest, setInterest] = useState(INTERESTS[0])
  const [inquiry, setInquiry] = useState(INQUIRY_TYPES[0])

  const notify = useCallback((i: string) => {
    setInterest(i)
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  return (
    <>
      <SkipLink />
      <Nav />
      <main id="main">
        <Hero />
        <Products onNotify={notify} />
        <About />
        <Series />
        <Scenes />
        <Updates interest={interest} setInterest={setInterest} />
        <HomeFaq />
        <Contact inquiry={inquiry} setInquiry={setInquiry} />
      </main>
      <Footer />
    </>
  )
}
