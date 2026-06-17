import type { ReactNode } from "react"

interface InfiniteRibbonProps {
  repeat?: number
  duration?: number
  reverse?: boolean
  rotation?: number
  children: ReactNode
  className?: string
}

const styles = `
@keyframes iconiq-infinite-ribbon {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes iconiq-infinite-ribbon-reverse {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
@media (prefers-reduced-motion: reduce) {
  .iconiq-infinite-ribbon-track {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
  }
}
`

export default function InfiniteRibbon({
  repeat = 5,
  duration = 10,
  reverse = false,
  rotation = 0,
  children,
  className = "",
}: InfiniteRibbonProps) {
  const repeatCount = Math.max(1, Math.floor(repeat))
  const animationName = reverse
    ? "iconiq-infinite-ribbon-reverse"
    : "iconiq-infinite-ribbon"

  return (
    <div
      className={`w-full max-w-full overflow-hidden bg-red-600 py-3 text-white text-sm sm:text-base font-semibold tracking-wider uppercase ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <span className="sr-only">{children}</span>
      <div
        aria-hidden="true"
        className="iconiq-infinite-ribbon-track flex w-max whitespace-nowrap"
        style={{
          "--ribbon-duration": `${Math.max(0.1, duration)}s`,
          animation: `${animationName} var(--ribbon-duration) linear infinite`,
        } as React.CSSProperties}
      >
        {Array.from({ length: repeatCount * 2 }, (_, index) => (
          <span className="mr-8 inline-block select-none" key={index}>
            {children}
          </span>
        ))}
      </div>
      <style>{styles}</style>
    </div>
  )
}
