import { useEffect, useState } from "react"
import SmokeBackground from "./smoke-background"
import TextTypewriter from "./the-typewriter"

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<"loading" | "text" | "done">("loading")
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setPhase("text"), 1000)
    return () => {
      clearTimeout(t1)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (phase !== "text") return
    const t2 = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        document.body.style.overflow = ''
        onFinish()
      }, 1000)
    }, 5000)
    return () => clearTimeout(t2)
  }, [phase, onFinish])

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 ease-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0">
        <SmokeBackground smokeColor="#FF0000" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: phase === "text" ? 1 : 0,
            transform: phase === "text" ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <h1 className="font-podium text-white text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight">
            <TextTypewriter duration={2.5}>
              WELCOME TO NCSS
            </TextTypewriter>
          </h1>
        </div>

        <p
          className="text-white/40 text-[22px] tracking-[0.3em] uppercase font-inter"
          style={{
            opacity: phase !== "loading" ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.3s",
          }}
        >
          NUST Computer Science Society
        </p>
      </div>
    </div>
  )
}
