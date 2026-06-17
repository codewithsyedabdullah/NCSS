import { useState } from 'react'
import Cursor from './components/ui/inverted-cursor'
import LoadingScreen from './components/ui/loading-screen'
import HeroScrollAnimation from './components/ui/hero-scroll-animation'
import SectionFeaturedWork from './components/SectionFeaturedWork'
import SectionServices from './components/SectionServices'
import SectionProcess from './components/SectionProcess'
import SectionTestimonials from './components/SectionTestimonials'
import SectionAwards from './components/SectionAwards'
import SectionCTA from './components/SectionCTA'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}
      <div className="bg-black text-white selection:bg-red-600 selection:text-white" style={{ cursor: 'none' }}>
        <Cursor size={60} />
        <HeroScrollAnimation />
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
