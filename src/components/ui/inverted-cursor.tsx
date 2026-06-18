"use client"

import { useState, useEffect, useRef, useCallback } from "react"

interface CursorProps {
  size?: number
}

interface Ripple {
  id: number
  x: number
  y: number
  startTime: number
}

let rippleId = 0

export const Cursor: React.FC<CursorProps> = ({ size = 32 }) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()
  const rippleRafRef = useRef<number>()
  const previousPos = useRef({ x: -size, y: -size })
  const targetPos = useRef({ x: -size, y: -size })
  const currentSize = useRef(size)
  const targetSize = useRef(size)
  const [visible, setVisible] = useState(false)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const ripplesRef = useRef<Ripple[]>([])

  const addRipple = useCallback((x: number, y: number) => {
    const r: Ripple = { id: rippleId++, x, y, startTime: performance.now() }
    ripplesRef.current = [...ripplesRef.current, r]
    setRipples(ripplesRef.current)
    setTimeout(() => {
      ripplesRef.current = ripplesRef.current.filter((p) => p.id !== r.id)
      setRipples(ripplesRef.current)
    }, 700)
  }, [])

  const animate = useCallback(() => {
    if (!cursorRef.current) return

    const currentX = previousPos.current.x
    const currentY = previousPos.current.y
    const targetX = targetPos.current.x - currentSize.current / 2
    const targetY = targetPos.current.y - currentSize.current / 2

    const deltaX = (targetX - currentX) * 0.2
    const deltaY = (targetY - currentY) * 0.2

    previousPos.current = { x: currentX + deltaX, y: currentY + deltaY }

    const sizeDelta = (targetSize.current - currentSize.current) * 0.15
    currentSize.current += sizeDelta

    cursorRef.current.style.width = `${currentSize.current}px`
    cursorRef.current.style.height = `${currentSize.current}px`
    cursorRef.current.style.transform = `translate(${previousPos.current.x}px, ${previousPos.current.y}px)`

    requestRef.current = requestAnimationFrame(animate)
  }, [])

  // ripple animation loop
  useEffect(() => {
    const tick = () => {
      if (ripplesRef.current.length > 0) {
        setRipples([...ripplesRef.current])
      }
      rippleRafRef.current = requestAnimationFrame(tick)
    }
    rippleRafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rippleRafRef.current!)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setVisible(true)
      targetPos.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseEnter = () => setVisible(true)
    const handleMouseLeave = () => {
      setVisible(false)
      ripplesRef.current = []
      setRipples([])
    }

    const handleMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.matches("button, a, input, select, textarea, [role=\"button\"]")) {
        targetSize.current = size * 1.5
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.matches("button, a, input, select, textarea, [role=\"button\"]")) {
        targetSize.current = size
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.matches("button, a, input, select, textarea, [role=\"button\"]")) {
        targetSize.current = size * 0.6
      }
      addRipple(e.clientX, e.clientY)
    }

    const handleMouseUp = () => {
      targetSize.current = size
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    document.body.style.cursor = "none"

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
      if (rippleRafRef.current) cancelAnimationFrame(rippleRafRef.current)
      document.body.style.cursor = "auto"
    }
  }, [animate, size, addRipple])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none rounded-full bg-white mix-blend-difference z-50 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
      {ripples.map((r) => {
        const elapsed = performance.now() - r.startTime
        const progress = Math.min(elapsed / 700, 1)
        const radius = 8 + progress * 48
        const opacity = 1 - progress
        return (
          <div
            key={r.id}
            className="fixed pointer-events-none rounded-full z-50"
            style={{
              left: r.x - radius,
              top: r.y - radius,
              width: radius * 2,
              height: radius * 2,
              border: "1.5px solid rgba(255,255,255,0.6)",
              opacity,
              transform: "translateZ(0)",
            }}
          />
        )
      })}
    </>
  )
}

export default Cursor
