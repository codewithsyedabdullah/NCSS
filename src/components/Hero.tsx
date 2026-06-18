import { useRef, useEffect, useState } from 'react'
import { ArrowUpRight, Award, Crown, X } from 'lucide-react'
import NimbusConsole from './ui/nimbus-console'
import MeshBackground from './ui/mesh-background'
import { Perspective, Highlight } from './ui/perspective-highlight'

const JOIN_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSe2D8ffYSC9e6NxWQN09ViwsiV6TifENeM0_qPt5NxNC-NHxA/viewform?usp=header'

const navLinks: { label: string; href: string }[] = [
  { label: 'Events', href: '#events' },
  { label: 'Departments', href: '#departments' },
  { label: 'About', href: '#about' },
  { label: 'Join', href: JOIN_LINK },
]

interface Props {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
}

export default function Hero({ menuOpen, setMenuOpen }: Props) {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentScale, setContentScale] = useState(1)

  useEffect(() => {
    const fit = () => {
      const hero = heroRef.current
      const content = contentRef.current
      if (!hero || !content) return
      requestAnimationFrame(() => {
        const nav = hero.querySelector('nav') as HTMLElement | null
        const navH = nav ? nav.offsetHeight : 0
        const avail = hero.clientHeight - navH - 20
        const natural = content.scrollHeight
        if (natural > avail) {
          setContentScale(avail / natural)
        } else {
          setContentScale(1)
        }
      })
    }
    fit()
    window.addEventListener('resize', fit)
    const ro = new ResizeObserver(fit)
    if (heroRef.current) ro.observe(heroRef.current)
    return () => {
      window.removeEventListener('resize', fit)
      ro.disconnect()
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen w-full overflow-x-hidden flex flex-col">
      <MeshBackground />
      <div className="absolute inset-0 bg-black/20 z-0" />

      <nav className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
        <div className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">NCSS</div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>
          <a href={JOIN_LINK} className="hidden md:flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/10 transition-colors text-white group">
            <span>JOIN NCSS</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        <button className="md:hidden flex flex-col items-end gap-1.5 z-50 group" onClick={() => setMenuOpen(true)}>
          <div className="w-6 h-0.5 bg-white transition-all group-hover:w-8" />
          <div className="w-6 h-0.5 bg-white transition-all group-hover:w-8" />
          <div className="w-4 h-0.5 bg-white transition-all group-hover:w-8" />
        </button>
      </nav>

      <div className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 flex flex-col md:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
<div className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">NCSS</div>
          <button onClick={() => setMenuOpen(false)} className="text-white hover:text-white/70 transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          {navLinks.map((l, i) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl sm:text-5xl text-white uppercase transition-all duration-500 ease-out hover:text-red-500"
              style={{ transitionDelay: `${i * 80 + 100}ms`, opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)' }}>
              {l.label}
            </a>
          ))}
          <a href={JOIN_LINK} onClick={() => setMenuOpen(false)}
            className="mt-8 border border-white/30 px-8 py-4 text-sm tracking-widest uppercase text-white hover:bg-white/10 transition-all duration-500 ease-out"
            style={{ transitionDelay: `${navLinks.length * 80 + 100}ms`, opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)' }}>
            JOIN NCSS
          </a>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 pb-20">
        <div ref={contentRef} className="w-full max-w-7xl" style={{ transform: `scale(${contentScale})`, transformOrigin: 'center center' }}>
        <div className="animate-fade-up mb-6 lg:mb-8 flex items-center gap-2">
          <Crown className="w-4 h-4 text-white/70" />
          <span className="text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase">NUST Computer Science Society</span>
        </div>

        <div className="flex items-start justify-between gap-8">
          <div>
            <h1 className="font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.8rem,8vw,7rem)]">
              <div className="animate-fade-up">Build.</div>
              <div className="animate-fade-up-delay-1">Innovate.</div>
              <div className="animate-fade-up-delay-2">Lead.</div>
            </h1>
            <div className="mt-5">
              <div className="flex flex-col gap-4 sm:gap-7 max-w-xl">
                <div className="text-white/70 text-sm sm:text-base font-inter leading-relaxed">
                  The official computing society of NUST.<br />
                  A community of builders and <strong className="text-white font-semibold">innovators.</strong>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <a href="#events" className="group flex items-center gap-2 bg-black hover:bg-neutral-900 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase text-white transition-colors">
                    <span>OUR EVENTS</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <div className="hidden sm:flex items-center gap-3">
                    <Award className="w-8 h-8 text-white/50" />
                    <div className="flex flex-col text-white/60 text-xs tracking-wider uppercase">
                      <span>Official</span>
                      <span>Student Society</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
                  {[
                    { val: '500+', label: 'Active Members' },
                    { val: '15+', label: 'Years Established' },
                    { val: '50+', label: 'Events per Year' },
                  ].map(s => (
                    <div key={s.label} className="flex flex-col">
                      <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{s.val}</span>
                      <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-4 mt-1">
            <Perspective className="flex-shrink-0">
              <p className="font-inter text-white/60 text-sm leading-relaxed text-right max-w-[320px]">
                <Highlight color="red">The future of computing</Highlight>{" "}
                isn't built in silence — it's forged in a{" "}
                <Highlight color="purple">community</Highlight> of
                builders and dreamers who won't wait their turn for
                someone else to lead. <br />
                <Highlight color="green">NCSS</Highlight> is where that
                begins now — a space where curious minds collide, bold
                ideas take shape, and the next generation of
                technologists rise.
              </p>
              <p className="font-podium text-white/40 text-xs tracking-[0.2em] uppercase mt-3 text-right">
                Syed Abdullah Yaqoob, President
              </p>
            </Perspective>
            <NimbusConsole />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
