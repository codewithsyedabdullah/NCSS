import { useEffect, useState, useCallback } from "react";

interface Line {
  text: string;
  type: "command" | "output" | "success" | "info" | "error";
  delay?: number;
}

const lines: Line[] = [
  { text: "ncss@init:~$ ./society --info", type: "command", delay: 800 },
  { text: "> Initializing NUST Computer Science Society...", type: "info", delay: 1200 },
  { text: "> Loading departments...", type: "info", delay: 1600 },
  { text: "  ├── Development", type: "output", delay: 2000 },
  { text: "  ├── AI / Data Science", type: "output", delay: 2200 },
  { text: "  ├── Design (UI/UX, Graphics)", type: "output", delay: 2400 },
  { text: "  └── Marketing / Media", type: "output", delay: 2600 },
  { text: "> Status: ACTIVE", type: "success", delay: 3000 },
  { text: "> Members: 100+", type: "success", delay: 3200 },
  { text: "> Ready to innovate.", type: "success", delay: 3600 },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [done, setDone] = useState(false);

  const advance = useCallback(() => {
    setVisibleLines((prev) => {
      if (prev >= lines.length) {
        setDone(true);
        return prev;
      }
      return prev + 1;
    });
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((line, i) => {
      timers.push(setTimeout(advance, line.delay ?? 1000 + i * 200));
    });
    return () => timers.forEach(clearTimeout);
  }, [advance]);

  return (
    <div className="terminal-border rounded-[4px] bg-[#0a0b0e]/90 backdrop-blur-sm w-full max-w-[clamp(280px,80vw,600px)] mx-auto overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="font-mono text-[clamp(8px,1.5vw,11px)] text-white/40 ml-2 tracking-[1px] uppercase">
          terminal — ncss
        </span>
      </div>
      <div className="p-4 sm:p-5 md:p-6 font-mono text-[clamp(10px,2vw,13px)] leading-[1.6] space-y-1">
        {lines.slice(0, visibleLines).map((line, i) => {
          if (line.type === "command") {
            return (
              <div key={i} className="flex flex-wrap items-baseline gap-1">
                <span className="text-neon">$</span>
                <span className="text-cream">{line.text.replace("ncss@init:~$ ", "")}</span>
                {i === visibleLines - 1 && !done && <span className="text-neon animate-pulse">▊</span>}
              </div>
            );
          }
          const colorMap = {
            output: "text-cream/80",
            info: "text-cyan",
            success: "text-neon",
            error: "text-orange",
          };
          return (
            <div key={i} className={colorMap[line.type]}>
              {line.text}
              {i === visibleLines - 1 && !done && <span className="text-neon animate-pulse ml-0.5">▊</span>}
            </div>
          );
        })}
        {done && (
          <div className="flex items-baseline gap-1 pt-2 text-neon">
            <span>$</span>
            <span className="cursor-blink text-cream/60" />
          </div>
        )}
      </div>
    </div>
  );
}
