import { useState, useEffect, useRef } from "react"

const panes = [
  {
    id: "cli",
    label: "CLI",
    lines: [
      { text: "$ ncss member add \\", cls: "text-white/80" },
      { text: "  --name \"Your Name\" \\", cls: "text-white/80" },
      { text: "  --department dev \\", cls: "text-white/80" },
      { text: "  --batch 2026", cls: "text-white/80" },
      { text: "", cls: "" },
      { text: "> member added to NCSS · welcome aboard", cls: "text-red-400" },
    ],
  },
  {
    id: "api",
    label: "API",
    lines: [
      { text: "POST /api/ncss/members", cls: "text-red-400 font-semibold" },
      { text: "{", cls: "text-white/80" },
      { text: '  "name": "Your Name",', cls: "text-white/80" },
      { text: '  "department": "dev",', cls: "text-white/80" },
      { text: '  "batch": 2026', cls: "text-white/80" },
      { text: "}", cls: "text-white/80" },
      { text: "", cls: "" },
      { text: "> 201 Created · member registered", cls: "text-red-400" },
    ],
  },
  {
    id: "console",
    label: "Console",
    lines: [
      { text: "NCSS Member Portal v2.0", cls: "text-white/50 text-xs tracking-wider uppercase" },
      { text: "", cls: "" },
      { text: "Name:              _______________", cls: "text-white/80" },
      { text: "Department:        [Development]", cls: "text-white/80" },
      { text: "Batch:             2026", cls: "text-white/80" },
      { text: "Status:            Active", cls: "text-red-400" },
    ],
  },
]

function TypewriterLines({ lines, active }: { lines: typeof panes[0]["lines"]; active: boolean }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [typedChars, setTypedChars] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    if (!active) {
      setVisibleLines(0)
      setTypedChars(0)
      return
    }

    const fullText = lines.map((l) => l.text).join("\n")
    let idx = 0
    setVisibleLines(0)
    setTypedChars(0)

    timerRef.current = setInterval(() => {
      idx++
      if (idx > fullText.length) {
        clearInterval(timerRef.current)
        return
      }
      const sliced = fullText.slice(0, idx)
      const lineCount = sliced.split("\n").length
      setVisibleLines(lineCount)
      setTypedChars(idx)
    }, 25)

    return () => clearInterval(timerRef.current)
  }, [active, lines])

  if (!active) return null

  const fullText = lines.map((l) => l.text).join("\n")
  const displayed = fullText.slice(0, typedChars)
  const linesDisplayed = displayed.split("\n")

  return (
    <>
      {lines.map((line, i) => {
        if (i >= linesDisplayed.length) return null
        const isLast = i === linesDisplayed.length - 1
        const charCount = isLast ? linesDisplayed[i].length : line.text.length
        const showCursor = isLast && typedChars < fullText.length

        return (
          <div key={i} className="whitespace-pre font-mono text-[11px] sm:text-xs leading-[1.8]">
            <span className={line.cls}>
              {linesDisplayed[i]}
              {showCursor && <span className="inline-block w-[2px] h-[1em] bg-red-500 ml-[1px] align-middle animate-pulse" />}
            </span>
          </div>
        )
      })}
    </>
  )
}

export default function NimbusConsole() {
  const [activeTab, setActiveTab] = useState("cli")

  return (
    <div className="w-full max-w-[380px] bg-black/80 backdrop-blur-md border border-white/10 rounded-md overflow-hidden shadow-2xl">
      <div className="flex border-b border-white/10">
        {panes.map((pane) => (
          <button
            key={pane.id}
            onClick={() => setActiveTab(pane.id)}
            className={`flex-1 py-2.5 text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-colors ${
              activeTab === pane.id
                ? "text-red-400 border-b-2 border-red-500 bg-white/5"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {pane.label}
          </button>
        ))}
        <div className="flex items-center gap-1.5 px-3">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="p-4 min-h-[160px]">
        {panes.map((pane) => (
          <div key={pane.id} className={activeTab === pane.id ? "block" : "hidden"}>
            <TypewriterLines lines={pane.lines} active={activeTab === pane.id} />
          </div>
        ))}
      </div>
    </div>
  )
}
