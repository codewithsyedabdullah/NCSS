import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

export default function ParallaxScrolling() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]')

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0,
        },
      })

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 },
      ]

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          { yPercent: layerObj.yPercent, ease: "none" },
          idx === 0 ? undefined : "<"
        )
      })
    }

    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => { lenis.raf(time * 1000) })
    gsap.ticker.lagSmoothing(0)

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      if (triggerElement) gsap.killTweensOf(triggerElement)
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={parallaxRef} className="parallax">
      <section className="relative h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />
        <div data-parallax-layers className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
            loading="eager"
            data-parallax-layer="1"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1200&q=80"
            loading="eager"
            data-parallax-layer="2"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div data-parallax-layer="3" className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-podium text-white text-[clamp(4rem,15vw,12rem)] uppercase leading-none tracking-tight select-none">
              NCSS
            </h2>
          </div>
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
            loading="eager"
            data-parallax-layer="4"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      </section>

      <section className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 160 160" fill="none" className="mx-auto mb-8 text-red-500">
            <path d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z" fill="currentColor" />
          </svg>
          <h3 className="font-podium text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            NUST Computer<br />Science Society
          </h3>
          <p className="text-white/50 font-inter text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            A community of builders, creators, and problem solvers shaping the future through technology.
          </p>
        </div>
      </section>
    </div>
  )
}
