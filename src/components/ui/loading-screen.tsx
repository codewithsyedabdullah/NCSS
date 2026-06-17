import { useEffect, useState, useRef } from "react"
import ShaderAnimation from "./shader-animation"
import LiquidLoading from "./liquid-loader"

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<"loading" | "text" | "done">("loading")
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "WELCOME TO NCSS</>"
  const [fadeOut, setFadeOut] = useState(false)
  const charIndex = useRef(0)
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setPhase("text")
    }, 3500)

    return () => clearTimeout(loadingTimer)
  }, [])

  useEffect(() => {
    if (phase !== "text") return

    charIndex.current = 0
    setDisplayedText("")

    timerRef.current = setInterval(() => {
      charIndex.current++
      setDisplayedText(fullText.slice(0, charIndex.current))

      if (charIndex.current >= fullText.length) {
        clearInterval(timerRef.current)
        setTimeout(() => {
          setFadeOut(true)
          setTimeout(onFinish, 800)
        }, 1200)
      }
    }, 80)

    return () => clearInterval(timerRef.current)
  }, [phase, onFinish])

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0">
        <ShaderAnimation />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        {phase === "loading" && <LiquidLoading />}

        {phase === "text" && (
          <h1 className="font-podium text-white text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight">
            {displayedText}
            <span className="inline-block w-[3px] h-[0.9em] bg-red-500 ml-1 animate-pulse align-middle" />
          </h1>
        )}

        <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-inter">
          NUST Computer Science Society
        </p>
      </div>
    </div>
  )
}
