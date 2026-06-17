import { useEffect, useRef } from "react"

const fragmentShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time * 0.3)

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float smoothNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1,0)), f.x),
             mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 1.0;
  for (int i = 0; i < 4; i++) {
    v += a * smoothNoise(p);
    p = mat2(1.6, -1.2, 1.2, 1.6) * p;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = FC / R;
  float aspect = R.x / R.y;
  vec2 p = vec2(uv.x * aspect, uv.y) * 2.0;

  float n1 = fbm(p * 0.8 + vec2(T * 0.1, 0.0));
  float n2 = fbm(p * 1.2 - vec2(0.0, T * 0.08));
  float n3 = fbm(p * 1.6 + vec2(T * 0.05, T * 0.05));

  float dist = length(uv - 0.5);

  vec3 dark = vec3(0.02, 0.0, 0.0);
  vec3 deep = vec3(0.12, 0.0, 0.0);
  vec3 accent = vec3(0.35, 0.02, 0.02);
  vec3 glow = vec3(0.5, 0.05, 0.03);

  float blend = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
  blend = clamp(blend, 0.0, 1.0);

  vec3 col = mix(dark, deep, smoothstep(0.0, 0.4, blend));
  col = mix(col, accent, smoothstep(0.3, 0.7, blend));
  col = mix(col, glow, smoothstep(0.6, 1.0, blend));

  float vignette = 1.0 - dist * 0.7;
  col *= vignette;

  float glowEdge = exp(-dist * 3.0) * 0.15;
  col += vec3(0.3, 0.02, 0.0) * glowEdge;

  col = clamp(col, 0.0, 1.0);
  O = vec4(col, 1.0);
}`

class Renderer {
  private readonly vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`
  private readonly vertices = [-1, 1, -1, -1, 1, 1, 1, -1]

  private gl: WebGL2RenderingContext
  private canvas: HTMLCanvasElement
  private program: WebGLProgram | null = null
  private vs: WebGLShader | null = null
  private fs: WebGLShader | null = null
  private buffer: WebGLBuffer | null = null

  constructor(canvas: HTMLCanvasElement, fragmentSource: string) {
    this.canvas = canvas
    this.gl = canvas.getContext("webgl2") as WebGL2RenderingContext
    this.setup(fragmentSource)
    this.init()
  }

  updateScale() {
    const dpr = Math.max(1, window.devicePixelRatio)
    const { innerWidth: width, innerHeight: height } = window
    this.canvas.width = width * dpr
    this.canvas.height = height * dpr
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height)
  }

  private compile(shader: WebGLShader, source: string) {
    const gl = this.gl
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(`Shader: ${gl.getShaderInfoLog(shader)}`)
    }
  }

  reset() {
    const { gl, program, vs, fs } = this
    if (!program) return
    if (vs) { gl.detachShader(program, vs); gl.deleteShader(vs) }
    if (fs) { gl.detachShader(program, fs); gl.deleteShader(fs) }
    gl.deleteProgram(program)
    this.program = null
  }

  private setup(fragmentSource: string) {
    const gl = this.gl
    this.vs = gl.createShader(gl.VERTEX_SHADER)
    this.fs = gl.createShader(gl.FRAGMENT_SHADER)
    const program = gl.createProgram()
    if (!this.vs || !this.fs || !program) return
    this.compile(this.vs, this.vertexSrc)
    this.compile(this.fs, fragmentSource)
    this.program = program
    gl.attachShader(this.program, this.vs)
    gl.attachShader(this.program, this.fs)
    gl.linkProgram(this.program)
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error(`Program: ${gl.getProgramInfoLog(this.program)}`)
    }
  }

  private init() {
    const { gl, program } = this
    if (!program) return
    this.buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW)
    const position = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
    Object.assign(program, {
      resolution: gl.getUniformLocation(program, "resolution"),
      time: gl.getUniformLocation(program, "time"),
    })
  }

  render(now = 0) {
    const { gl, program, buffer, canvas } = this
    if (!program || !gl.isProgram(program)) return
    gl.clearColor(0, 0, 0, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.useProgram(program)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.uniform2f((program as any).resolution, canvas.width, canvas.height)
    gl.uniform1f((program as any).time, now * 1e-3)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  }
}

export default function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rendererRef = useRef<Renderer | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const renderer = new Renderer(canvas, fragmentShaderSource)
    rendererRef.current = renderer

    const handleResize = () => renderer.updateScale()
    handleResize()
    window.addEventListener("resize", handleResize)

    let id: number
    const loop = (now: number) => {
      renderer.render(now)
      id = requestAnimationFrame(loop)
    }
    loop(0)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(id)
      renderer.reset()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
