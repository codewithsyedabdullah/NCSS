import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import SectionWhoWeAre from './components/SectionWhoWeAre'
import SectionFeaturedWork from './components/SectionFeaturedWork'
import SectionServices from './components/SectionServices'
import SectionProcess from './components/SectionProcess'
import SectionTestimonials from './components/SectionTestimonials'
import SectionAwards from './components/SectionAwards'
import SectionCTA from './components/SectionCTA'
import Footer from './components/Footer'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${(e.clientX / window.innerWidth) * 100}%`)
      document.documentElement.style.setProperty('--y', `${(e.clientY / window.innerHeight) * 100}%`)
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return (
    <div className="bg-black text-white selection:bg-red-600 selection:text-white">
      <div className="spotlight" />
      <Hero menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SectionWhoWeAre />
      <SectionFeaturedWork />
      <SectionServices />
      <SectionProcess />
      <SectionTestimonials />
      <SectionAwards />
      <SectionCTA />
      <Footer />
    </div>
  )
}
