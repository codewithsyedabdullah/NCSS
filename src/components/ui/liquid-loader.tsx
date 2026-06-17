import { useState, useEffect, useRef } from 'react'

const LiquidLoading = () => {
  const [heights, setHeights] = useState([0, 0, 0, 0, 0, 0, 0])
  const timeRef = useRef(0)
  const rafRef = useRef<number>()

  const colors = [
    'from-red-500 to-red-700',
    'from-red-600 to-red-800',
    'from-rose-500 to-red-600',
    'from-red-500 to-rose-700',
    'from-rose-600 to-red-500',
    'from-red-700 to-rose-500',
    'from-rose-400 to-red-600',
  ]

  useEffect(() => {
    const step = () => {
      timeRef.current += 0.04
      const t = timeRef.current

      setHeights(prev => prev.map((_, index) => {
        const delay = index * 0.8
        const primary = Math.sin(t + delay)
        const bounce = Math.sin(t * 4 + delay) * 0.15
        const ripple = Math.sin(t * 8 + delay) * 0.05
        return 80 * (primary + bounce + ripple)
      }))

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current!)
  }, [])

  return (
    <div className="flex items-end gap-4" style={{ willChange: 'transform' }}>
      {heights.map((height, index) => {
        const absH = Math.abs(height)
        const isNeg = height < 0
        const t = timeRef.current
        const delay = index * 0.8
        const dropletVisible = Math.sin(t + delay) > 0.8

        return (
          <div key={index} className="relative flex flex-col items-center" style={{ willChange: 'transform' }}>
            <div
              className="w-4 h-4 rounded-full bg-gradient-to-r mb-3"
              style={{
                background: `linear-gradient(to right, ${['#ef4444','#dc2626','#f43f5e','#ef4444','#f43f5e','#dc2626','#f43f5e'][index]}, ${['#b91c1c','#991b1b','#be123c','#be123c','#ef4444','#f43f5e','#dc2626'][index]})`,
                opacity: dropletVisible ? 1 : 0,
                transform: dropletVisible
                  ? `translateY(${Math.sin(t * 0.008 + delay) * 3}px) scale(${0.8 + Math.sin(t * 0.006 + delay) * 0.4})`
                  : 'translateY(10px) scale(0.5)',
                boxShadow: dropletVisible ? '0 0 15px #ef444440' : 'none',
                transition: 'opacity 0.3s ease-out',
                willChange: 'transform, opacity',
              }}
            />

            <div
              className="w-10 bg-gradient-to-t rounded-full relative overflow-hidden"
              style={{
                height: `${absH}px`,
                background: `linear-gradient(to top, ${['#b91c1c','#991b1b','#be123c','#be123c','#ef4444','#f43f5e','#dc2626'][index]}, ${['#ef4444','#dc2626','#f43f5e','#ef4444','#f43f5e','#dc2626','#f43f5e'][index]})`,
                transform: isNeg ? 'scaleY(-1)' : 'scaleY(1)',
                transformOrigin: 'bottom',
                boxShadow: '0 0 20px #ef444450, inset 0 0 20px rgba(255,255,255,0.1)',
                willChange: 'transform, height',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/40 to-transparent rounded-full"
                style={{
                  transform: `translateY(${Math.sin(t * 0.003 + delay) * 1}px) scaleY(${0.8 + Math.sin(t * 0.004 + delay) * 0.3})`,
                  willChange: 'transform',
                }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  transform: `translateY(${Math.sin(t * 0.002 + delay) * 2}px)`,
                  background: 'linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                  willChange: 'transform',
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                style={{
                  transform: `translateX(${Math.sin(t * 0.0015 + delay * 0.7) * 8}px)`,
                  width: '140%',
                  left: '-20%',
                  willChange: 'transform',
                }}
              />
              <div
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  top: `${20 + Math.sin(t * 0.003 + delay * 0.8) * 10}%`,
                  left: `${30 + Math.sin(t * 0.002 + delay * 0.6) * 20}%`,
                  transform: `scale(${0.5 + Math.sin(t * 0.004 + delay * 0.4) * 0.5})`,
                  opacity: Math.sin(t * 0.005 + delay * 0.9) * 0.3 + 0.3,
                  willChange: 'transform, opacity',
                }}
              />
            </div>

            <div
              className="w-3 h-3 rounded-full bg-gradient-to-r mt-2"
              style={{
                background: `linear-gradient(to right, ${['#ef4444','#dc2626','#f43f5e','#ef4444','#f43f5e','#dc2626','#f43f5e'][index]}, ${['#b91c1c','#991b1b','#be123c','#be123c','#ef4444','#f43f5e','#dc2626'][index]})`,
                opacity: Math.sin(t * 0.003 + delay * 0.9) * 0.4 + 0.6,
                transform: `scale(${0.6 + Math.sin(t * 0.002 + delay * 0.6) * 0.4}) translateY(${Math.sin(t * 0.004 + delay * 0.8) * 1}px)`,
                boxShadow: '0 2px 8px #ef444440',
                willChange: 'transform, opacity',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default LiquidLoading
