import { useState, useEffect, useRef } from "react"

interface Line {
  text: string
  cls: string
  delay?: number
}

const panes: { id: string; label: string; lines: Line[] }[] = [
  {
    id: "cli",
    label: "CLI",
    lines: [
      { text: "$ ncss auth login --token ghp_ncss⏎", cls: "text-white/80" },
      { text: "✓ Authenticated as NCSS Admin", cls: "text-green-400", delay: 400 },
      { text: "", cls: "" },
      { text: "$ ncss event list --upcoming --limit 3⏎", cls: "text-white/80" },
      { text: "", cls: "" },
      { text: "  ┌──────────────────────────────────────────────┐", cls: "text-white/50" },
      { text: "  │  AI/ML Bootcamp         │  Apr 12 │ 42 reg │", cls: "text-cyan-300" },
      { text: "  │  Web Dev Hackathon     │  Apr 19 │ 78 reg │", cls: "text-cyan-300" },
      { text: "  │  CTF: Capture The Flag │  Apr 26 │ 56 reg │", cls: "text-cyan-300" },
      { text: "  └──────────────────────────────────────────────┘", cls: "text-white/50" },
      { text: "", cls: "" },
      { text: "$ ncss workshop join --id ai-bootcamp-01⏎", cls: "text-white/80" },
      { text: "✓ Registered · seat confirmed", cls: "text-green-400", delay: 300 },
    ],
  },
  {
    id: "api",
    label: "API",
    lines: [
      { text: "GET /api/v2/events?status=upcoming HTTP/1.1", cls: "text-cyan-300 font-semibold" },
      { text: "Authorization: Bearer ncss_sk_••••••••", cls: "text-white/40" },
      { text: "", cls: "" },
      { text: "HTTP/1.1 200 OK", cls: "text-green-400" },
      { text: "{", cls: "text-white/80" },
      { text: '  "events": [', cls: "text-white/80" },
      { text: '    { "title": "AI/ML Bootcamp",  "slots": 12 }', cls: "text-white/80" },
      { text: '    { "title": "Web Dev Hackathon", "slots": 5 }', cls: "text-white/80" },
      { text: '    { "title": "CTF Competition",   "slots": 20 }', cls: "text-white/80" },
      { text: '    { "title": "Cloud Workshop",     "slots": 8 }', cls: "text-white/80" },
      { text: "  ],", cls: "text-white/80" },
      { text: '  "meta": { "total": 12, "page": 1 }', cls: "text-white/80" },
      { text: "}", cls: "text-white/80" },
      { text: "", cls: "" },
      { text: "> showing 4 of 12 upcoming events", cls: "text-white/50" },
    ],
  },
  {
    id: "console",
    label: "Console",
    lines: [
      { text: "╭─────────────────────────────────────╮", cls: "text-white/40" },
      { text: "│  NCSS DASHBOARD  ·  v3.2.1         │", cls: "text-red-400 font-semibold" },
      { text: "╰─────────────────────────────────────╯", cls: "text-white/40" },
      { text: "", cls: "" },
      { text: "  Members       500+  ▲ 12% this month", cls: "text-white/80" },
      { text: "  Events         52   ● 4 upcoming", cls: "text-white/80" },
      { text: "  Workshops      18   ▲ 3 new this week", cls: "text-white/80" },
      { text: "  Departments     6   ● AI/ML · Web · Cloud", cls: "text-white/80" },
      { text: "", cls: "" },
      { text: "  Latest: Web Dev Hackathon registration", cls: "text-green-400" },
      { text: "  is now open — 78 signed up so far.", cls: "text-green-400" },
    ],
  },
]

function TypewriterLines({ lines, active }: { lines: Line[]; active: boolean }) {
  const [step, setStep] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval>>()
  const delayRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (!active) {
      setStep(0)
      setShowCursor(true)
      return
    }

    let charIdx = 0
    const fullText = lines.map((l) => l.text).join("\n")

    const tick = () => {
      charIdx++
      if (charIdx > fullText.length) {
        clearInterval(timerRef.current)
        setShowCursor(false)
        return
      }

      const sliced = fullText.slice(0, charIdx)
      const lineCount = sliced.split("\n").length
      setStep(lineCount)
    }

    timerRef.current = setInterval(tick, 18)

    return () => {
      clearInterval(timerRef.current)
      clearTimeout(delayRef.current)
    }
  }, [active, lines])

  if (!active) return null

  const fullText = lines.map((l) => l.text).join("\n")
  const displayed = fullText.slice(0, step)
  const lineParts = displayed.split("\n")
  const isDone = step >= fullText.length

  return (
    <>
      {lines.map((line, i) => {
        if (i >= lineParts.length) return null
        const isLast = i === lineParts.length - 1
        const partial = lineParts[i]
        const showCursorOnLine = isLast && !isDone && showCursor

        return (
          <div key={i} className="whitespace-pre font-mono text-[11px] sm:text-xs leading-[1.9]">
            <span className={line.cls}>
              {partial}
              {showCursorOnLine && <span className="inline-block w-[7px] h-[14px] bg-red-500 ml-[1px] align-text-bottom animate-pulse shadow-[0_0_6px_rgba(220,38,38,0.6)]" />}
            </span>
          </div>
        )
      })}
      {isDone && <div className="h-[14px]"><span className="inline-block w-[7px] h-[14px] bg-red-500 align-text-bottom animate-pulse shadow-[0_0_6px_rgba(220,38,38,0.6)]" /></div>}
    </>
  )
}

export default function NimbusConsole() {
  const [activeTab, setActiveTab] = useState("cli")

  return (
    <div className="relative w-full max-w-[420px] group">
      {/* Glow behind */}
      <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-b from-red-500/10 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

      <div className="relative bg-black/90 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.15] rounded-lg overflow-hidden shadow-2xl transition-all duration-500">
        {/* Title bar */}
        <div className="flex items-center border-b border-white/[0.06] bg-white/[0.02]">
          {panes.map((pane) => (
            <button
              key={pane.id}
              onClick={() => setActiveTab(pane.id)}
              className={`relative px-4 py-3 text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase transition-all duration-300 ${
                activeTab === pane.id
                  ? "text-red-400 bg-white/[0.04]"
                  : "text-white/30 hover:text-white/60"
              }`}
            >
              {pane.label}
              {activeTab === pane.id && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-red-500 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
              )}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1.5 pr-3">
            <span className="w-2 h-2 rounded-full bg-white/[0.08]" />
            <span className="w-2 h-2 rounded-full bg-white/[0.08]" />
            <span className="w-2 h-2 rounded-full bg-white/[0.08]" />
          </div>
        </div>

        {/* Terminal */}
        <div className="p-4 sm:p-5 min-h-[200px]">
          {panes.map((pane) => (
            <div key={pane.id} className={activeTab === pane.id ? "block" : "hidden"}>
              <TypewriterLines lines={pane.lines} active={activeTab === pane.id} />
            </div>
          ))}
        </div>

        {/* Scanline overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />
      </div>
    </div>
  )
}
