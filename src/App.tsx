import { useState } from 'react'
import Cursor from './components/ui/inverted-cursor'
import LoadingScreen from './components/ui/loading-screen'
import Hero from './components/Hero'
import InfiniteRibbon from './components/ui/infinite-ribbon'
import SectionWhoWeAre from './components/SectionWhoWeAre'
import SectionFeaturedWork from './components/SectionFeaturedWork'
import SectionServices from './components/SectionServices'
import SectionProcess from './components/SectionProcess'
import SectionTestimonials from './components/SectionTestimonials'
import SectionAwards from './components/SectionAwards'
import SectionCTA from './components/SectionCTA'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}
      <div className="bg-black text-white selection:bg-red-600 selection:text-white" style={{ cursor: 'none' }}>
        <Cursor size={60} />
        <Hero menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <InfiniteRibbon duration={30} rotation={1.5}>
          Build · Innovate · Lead &nbsp;&nbsp;—&nbsp;&nbsp; NUST Computer Science Society &nbsp;&nbsp;✦&nbsp;&nbsp;
        </InfiniteRibbon>
        <InfiniteRibbon duration={30} reverse rotation={-1.5}>
          Join 500+ members · 15+ years · 50+ events yearly &nbsp;&nbsp;✦&nbsp;&nbsp;
        </InfiniteRibbon>
        <SectionWhoWeAre />
        <SectionFeaturedWork />
        <SectionServices />
        <SectionProcess />
        <SectionTestimonials />
        <SectionAwards />
        <SectionCTA />
        <Footer />
      </div>
    </>
  )
}
