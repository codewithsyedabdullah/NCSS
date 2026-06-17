import { useEffect, useState, useRef } from "react"
import SmokeBackground from "./smoke-background"

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<"loading" | "text" | "done">("loading")
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "WELCOME TO NCSS"
  const [fadeOut, setFadeOut] = useState(false)
  const charIndex = useRef(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 1000)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (phase !== "text") return

    charIndex.current = 0
    setDisplayedText("")

    const interval = setInterval(() => {
      charIndex.current++
      setDisplayedText(fullText.slice(0, charIndex.current))
      if (charIndex.current >= fullText.length) {
        clearInterval(interval)
        setTimeout(() => {
          setFadeOut(true)
          setTimeout(onFinish, 1000)
        }, 1400)
      }
    }, 70)

    return () => clearInterval(interval)
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
            {displayedText}
            <span className="inline-block w-[3px] h-[0.9em] bg-red-500 ml-1 animate-pulse align-middle" />
          </h1>
        </div>

        <p
          className="text-white/40 text-xs sm:text-sm tracking-[0.3em] uppercase font-inter"
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
