import { useCallback, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Series from './components/Series'
import Scenes from './components/Scenes'
import Products from './components/Products'
import Audience from './components/Audience'
import Updates from './components/Updates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RedesignNotes from './components/RedesignNotes'
import { INTERESTS } from './lib/site'

export default function App() {
  const [interest, setInterest] = useState(INTERESTS[0])

  const notify = useCallback((i: string) => {
    setInterest(i)
    document.getElementById('updates')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Series />
        <Scenes />
        <Products onNotify={notify} />
        <Audience />
        <Updates interest={interest} setInterest={setInterest} />
        <Contact />
      </main>
      <Footer />
      <RedesignNotes />
    </>
  )
}
