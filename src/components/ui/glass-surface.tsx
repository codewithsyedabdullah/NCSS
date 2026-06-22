import { cn } from "../../lib/utils"

/**
 * GlassSurface — applies the liquid-glass backdrop filter to any container.
 * Wrap any section, card, or panel to give its background a liquid distortion effect.
 *
 * The filter reference #container-glass is provided by <GlassFilter /> (rendered in App.tsx).
 */
interface GlassSurfaceProps {
  children: React.ReactNode
  className?: string
  /** Intensity of the glass distortion (default: false = normal) */
  intense?: boolean
  as?: "div" | "section" | "article" | "span"
}

export function GlassSurface({
  children,
  className,
  intense = false,
  as: Tag = "div",
}: GlassSurfaceProps) {
  return (
    <Tag
      className={cn("relative overflow-hidden", className)}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: intense
            ? 'url("#container-glass") blur(2px)'
            : 'url("#container-glass")',
        }}
      />
      <div className="relative z-10">{children}</div>
    </Tag>
  )
}

/**
 * GlassOverlay — a thin absolutely-positioned layer with the liquid-glass filter.
 * Place this inside a section, over its background, but under its content.
 */
interface GlassOverlayProps {
  className?: string
  /** Extra CSS filter on top of the glass distortion */
  extraFilter?: string
}

export function GlassOverlay({ className, extraFilter = "" }: GlassOverlayProps) {
  const filter = extraFilter
    ? `url("#container-glass") ${extraFilter}`
    : 'url("#container-glass")'

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none z-[1]", className)}
      style={{ backdropFilter: filter }}
    />
  )
}
