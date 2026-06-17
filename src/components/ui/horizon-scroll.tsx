import { useEffect, useRef, useState } from "react"
import ShaderAnimation from "./shader-animation"

const sections = [
  {
    id: "horizon",
    title: "NCSS",
    subtitle: ["Where code meets", "community"],
  },
  {
    id: "cosmos",
    title: "BUILD",
    subtitle: ["From idea to execution,", "we craft the future"],
  },
  {
    id: "infinity",
    title: "INNOVATE",
    subtitle: ["Push boundaries,", "break limits"],
  },
  {
    id: "lead",
    title: "LEAD",
    subtitle: ["Shape tomorrow,", "today"],
  },
]

export default function HorizonScroll() {
  const [currentSection, setCurrentSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const maxScroll = scrollHeight - clientHeight
      const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0
      setScrollProgress(progress)
      setCurrentSection(Math.min(Math.floor(progress * sections.length), sections.length - 1))
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="relative">
      <div className="fixed inset-0 z-0">
        <ShaderAnimation />
      </div>

      <div className="relative z-10">
        {sections.map((section, i) => {
          const isActive = currentSection === i
          const progressInSection = (scrollProgress * sections.length) % 1
          const offset = i - (scrollProgress * sections.length)
          const isVisible = Math.abs(offset) < 1.5

          return (
            <section
              key={section.id}
              ref={(el) => { sectionRefs.current[i] = el }}
              className="relative min-h-screen flex flex-col items-center justify-center px-6"
              style={{
                opacity: isVisible ? 1 : 0.3,
                transition: "opacity 0.6s ease-out",
              }}
            >
              <div className="text-center max-w-5xl">
                <p className="text-red-500 text-xs tracking-[0.3em] uppercase mb-6 font-inter font-bold">
                  {String(i + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
                </p>

                <h1
                  className="font-podium text-white uppercase leading-[0.88] tracking-tight text-[clamp(4rem,12vw,12rem)]"
                  style={{
                    transform: isActive ? "translateY(0)" : `translateY(${(i - currentSection) * 40}px)`,
                    opacity: isActive ? 1 : 0,
                    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: isActive ? "0.1s" : "0s",
                  }}
                >
                  {section.title}
                </h1>

                <div
                  className="mt-6"
                  style={{
                    transform: isActive ? "translateY(0)" : `translateY(${(i - currentSection) * 30}px)`,
                    opacity: isActive ? 1 : 0,
                    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: isActive ? "0.3s" : "0s",
                  }}
                >
                  {section.subtitle.map((line, j) => (
                    <p
                      key={j}
                      className="text-white/50 text-lg sm:text-xl lg:text-2xl font-inter leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.6s ease-out",
                  transitionDelay: isActive ? "0.6s" : "0s",
                }}
              >
                <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-inter">
                  Scroll
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
              </div>
            </section>
          )
        })}
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
        {sections.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              currentSection === i ? "bg-red-500 w-3" : "bg-white/20"
            }`}
          />
        ))}
      </div>

      <div className="fixed bottom-8 right-8 z-20 font-inter text-white/30 text-xs tracking-wider">
        {String(currentSection + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
      </div>
    </div>
  )
}
