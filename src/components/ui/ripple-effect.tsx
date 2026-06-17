import { useRef, useState, useCallback, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
#define MAX 30

uniform vec2 uPositions[MAX];
uniform float uTimes[MAX];
uniform int uCount;
uniform vec2 uResolution;
uniform float uGlobalTime;

varying vec2 vUv;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float ripple = 0.0;

  for (int i = 0; i < MAX; i++) {
    if (i >= uCount) break;
    vec2 delta = uv - uPositions[i];
    float dist = length(delta);
    float age = uTimes[i];

    float wave = sin(60.0 * dist - 8.0 * age);
    float envelope = exp(-dist * 18.0) * exp(-age * 3.5);
    ripple += wave * envelope;
  }

  ripple = clamp(ripple, -1.0, 1.0);
  float alpha = abs(ripple) * 0.55;

  gl_FragColor = vec4(1.0, 0.06, 0.0, alpha);
}
`

function RippleScene({ getData }: { getData: () => RippleData }) {
  const meshRef = useRef<THREE.Mesh>(null)

  const uniforms = useRef({
    uPositions: { value: Array.from({ length: 30 }, () => new THREE.Vector2()) },
    uTimes: { value: new Float32Array(30) },
    uCount: { value: 0 },
    uResolution: { value: new THREE.Vector2(1920, 1080) },
    uGlobalTime: { value: 0 },
  })

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const data = getData()
    const u = uniforms.current
    const mat = meshRef.current.material as THREE.ShaderMaterial

    u.uGlobalTime.value = clock.getElapsedTime()
    u.uCount.value = data.count
    u.uResolution.value.set(data.resolution[0], data.resolution[1])

    for (let i = 0; i < data.count && i < 30; i++) {
      u.uPositions.value[i].set(data.positions[i].x, data.positions[i].y)
      u.uTimes.value[i] = data.ages[i]
    }

    mat.uniforms.uPositions.value = u.uPositions.value
    mat.uniforms.uTimes.value = u.uTimes.value
    mat.uniforms.uCount.value = u.uCount.value
    mat.uniforms.uResolution.value = u.uResolution.value
    mat.uniforms.uGlobalTime.value = u.uGlobalTime.value
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        uniforms={uniforms.current}
      />
    </mesh>
  )
}

interface RippleData {
  positions: Array<{ x: number; y: number }>
  ages: number[]
  count: number
  resolution: [number, number]
}

export default function RippleEffect({ children }: { children: React.ReactNode }) {
  const [isHovering, setIsHovering] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const rectRef = useRef<DOMRect | null>(null)
  const mouseHistoryRef = useRef<Array<{ x: number; y: number; time: number }>>([])
  const timeRef = useRef(0)
  const rafRef = useRef<number>()
  const dataRef = useRef<RippleData>({
    positions: [],
    ages: [],
    count: 0,
    resolution: [0, 0],
  })

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    rectRef.current = el.getBoundingClientRect()
    const updateRect = () => {
      if (wrapperRef.current) {
        rectRef.current = wrapperRef.current.getBoundingClientRect()
      }
    }
    window.addEventListener("resize", updateRect)
    return () => window.removeEventListener("resize", updateRect)
  }, [])

  useEffect(() => {
    if (!isHovering) {
      mouseHistoryRef.current = []
      return
    }

    let running = true
    const step = () => {
      if (!running) return
      timeRef.current += 0.016
      const now = timeRef.current
      const rect = rectRef.current

      mouseHistoryRef.current = mouseHistoryRef.current.filter((p) => now - p.time < 3)

      const count = Math.min(mouseHistoryRef.current.length, 30)
      const startIdx = Math.max(0, mouseHistoryRef.current.length - 30)
      const positions: Array<{ x: number; y: number }> = []
      const ages: number[] = []

      for (let i = startIdx; i < startIdx + count; i++) {
        positions.push(mouseHistoryRef.current[i])
        ages.push(now - mouseHistoryRef.current[i].time)
      }

      dataRef.current = {
        positions,
        ages,
        count,
        resolution: rect ? [rect.width, rect.height] : [0, 0],
      }

      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)

    return () => {
      running = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isHovering])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = rectRef.current
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = 1 - (e.clientY - rect.top) / rect.height
    mouseHistoryRef.current.push({ x, y, time: timeRef.current })

    if (mouseHistoryRef.current.length > 90) {
      mouseHistoryRef.current = mouseHistoryRef.current.slice(-90)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isHovering && (
        <Canvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 5,
          }}
          gl={{ alpha: true, preserveDrawingBuffer: true }}
          camera={{ position: [0, 0, 1] }}
        >
          <RippleScene getData={() => dataRef.current} />
        </Canvas>
      )}
    </div>
  )
}
