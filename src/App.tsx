import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

type Feature = {
  code: string
  title: string
  copy: string
  metric: string
}

type TimelineNode = {
  phase: string
  title: string
  copy: string
}

type Product = {
  name: string
  spec: string
  signal: string
}

const navItems = ['Systems', 'Materials', 'Architecture', 'Products']

const features: Feature[] = [
  {
    code: 'A01',
    title: 'Optical Command Surfaces',
    copy: 'Layered glass controls map machine state, human input, and environmental telemetry into one quiet interface.',
    metric: '0.08 ms',
  },
  {
    code: 'B14',
    title: 'Magnetic Modular Stack',
    copy: 'Industrial modules align through physical tolerances, live diagnostics, and self-registering hardware geometry.',
    metric: '12 um',
  },
  {
    code: 'C27',
    title: 'Silent Thermal Intelligence',
    copy: 'Predictive cooling keeps dense compute hardware stable without visual noise or mechanical drama.',
    metric: '41 dBA',
  },
  {
    code: 'D39',
    title: 'Transparent Security Mesh',
    copy: 'Every surface exposes its trust state through minimal light, encrypted movement, and local verification loops.',
    metric: '4096 bit',
  },
]

const timeline: TimelineNode[] = [
  {
    phase: '01',
    title: 'Perception Layer',
    copy: 'Glass sensors collect vibration, current, heat, acoustic pressure, and operator intent.',
  },
  {
    phase: '02',
    title: 'Material Logic',
    copy: 'Edge compute compresses the environment into deterministic instruction paths.',
  },
  {
    phase: '03',
    title: 'Actuation Core',
    copy: 'Modular hardware reacts with calibrated force, visible status, and reversible safety states.',
  },
  {
    phase: '04',
    title: 'Human Surface',
    copy: 'The operator sees only what matters: geometry, confidence, and the next precise action.',
  },
]

const products: Product[] = [
  { name: 'NF-01 Core', spec: 'transparent compute module', signal: 'LIVE' },
  { name: 'NF-02 Rail', spec: 'magnetic industrial bus', signal: 'SYNC' },
  { name: 'NF-03 Lens', spec: 'optical sensor stack', signal: 'SCAN' },
]

function App() {
  const [precision, setPrecision] = useState(72)
  const [density, setDensity] = useState(38)
  const [transparentMode, setTransparentMode] = useState(true)
  const [selectedMode, setSelectedMode] = useState('Fabrication')

  usePointerVariables()
  useScrollVariable()

  const systemLoad = useMemo(() => Math.round((precision * 0.64 + density * 0.36) / 1.18), [precision, density])

  return (
    <main className="future-site">
      <div className="site-noise" aria-hidden="true" />
      <ShaderField />
      <header className="nav-shell">
        <a href="#top" className="brand" aria-label="NULLFORM home">
          <span className="brand-glyph">N</span>
          <span>NULLFORM</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <MagneticButton href="#contact" tone="quiet">
          Request Access
        </MagneticButton>
      </header>

      <section className="hero-section" id="top">
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="technical-line">NF/2032 - INDUSTRIAL INTERFACE SYSTEM</p>
          <h1>ENGINEERED FOR THE NEXT ERA</h1>
          <p className="hero-subcopy">Advanced industrial technology with human design.</p>
          <div className="hero-actions">
            <MagneticButton href="#experience">Explore System</MagneticButton>
            <MagneticButton href="#architecture" tone="ghost">
              View Architecture
            </MagneticButton>
          </div>
        </div>

        <div className="hero-device-wrap" aria-label="Transparent industrial hardware render">
          <HardwareCore />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="readout readout-left">
            <span>OPTICAL DEPTH</span>
            <strong>14.8 mm</strong>
          </div>
          <div className="readout readout-right">
            <span>THERMAL DRIFT</span>
            <strong>0.004</strong>
          </div>
        </div>

        <div className="hero-indicators" aria-label="Technical indicators">
          <Indicator label="Signal" value="99.97" />
          <Indicator label="Latency" value="0.8" />
          <Indicator label="Material" value="AL-G" />
        </div>
      </section>

      <section className="showcase-section section-frame" id="systems">
        <div className="section-heading">
          <p className="technical-line">SHOWCASE TECHNOLOGY</p>
          <h2>Invisible complexity. Physical clarity.</h2>
        </div>
        <div className="showcase-grid">
          <MagneticPanel className="showcase-main">
            <div className="spec-plate">
              <span>NULLFORM CONTROL SURFACE</span>
              <strong>Liquid hardware layer</strong>
            </div>
            <div className="glass-stack" aria-hidden="true">
              <span />
              <span />
              <span />
              <i />
            </div>
            <div className="spec-row">
              <span>Transmission</span>
              <strong>92.4%</strong>
            </div>
            <div className="spec-row">
              <span>Edge density</span>
              <strong>4.2 p/mm</strong>
            </div>
          </MagneticPanel>
          <div className="showcase-copy">
            <p>
              A modular physical interface for factories, labs, and autonomous infrastructure. It hides the noise of
              industrial systems behind luminous glass, measured motion, and exact feedback.
            </p>
            <div className="micro-list">
              <span>brushed aluminum frame</span>
              <span>dynamic optical blur</span>
              <span>red-line system state</span>
              <span>magnetic surface grammar</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section section-frame" id="materials">
        <div className="section-heading wide-heading">
          <p className="technical-line">INDUSTRIAL FEATURES</p>
          <h2>Machines that feel less like machines.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <MagneticPanel className="feature-card" key={feature.code}>
              <div className="card-topline">
                <span>{feature.code}</span>
                <strong>{feature.metric}</strong>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </MagneticPanel>
          ))}
        </div>
      </section>

      <section className="experience-section section-frame" id="experience">
        <div className="section-heading">
          <p className="technical-line">INTERACTIVE EXPERIENCE</p>
          <h2>Tactile parameters, zero visual noise.</h2>
        </div>
        <div className="console-grid">
          <MagneticPanel className="control-console">
            <div className="mode-switch" role="tablist" aria-label="Industrial mode">
              {['Fabrication', 'Inspection', 'Autonomy'].map((mode) => (
                <button
                  type="button"
                  className={mode === selectedMode ? 'active' : ''}
                  key={mode}
                  onClick={() => setSelectedMode(mode)}
                  role="tab"
                  aria-selected={mode === selectedMode}
                >
                  {mode}
                </button>
              ))}
            </div>
            <Toggle enabled={transparentMode} onChange={setTransparentMode} label="Transparent casing" />
            <GlassSlider label="Precision" value={precision} onChange={setPrecision} />
            <GlassSlider label="Surface density" value={density} onChange={setDensity} />
          </MagneticPanel>
          <MagneticPanel className="system-status">
            <div className="radial-meter" style={{ '--meter': `${systemLoad}%` } as React.CSSProperties}>
              <span>{systemLoad}</span>
            </div>
            <div>
              <p className="technical-line">ACTIVE MODE</p>
              <h3>{selectedMode}</h3>
              <p>
                {transparentMode
                  ? 'Layer visibility is enabled. Hardware geometry, thermal paths, and trust state remain readable.'
                  : 'Opaque focus mode reduces environmental reflection while preserving critical state markers.'}
              </p>
            </div>
          </MagneticPanel>
        </div>
      </section>

      <section className="timeline-section section-frame" id="architecture">
        <div className="section-heading wide-heading">
          <p className="technical-line">SYSTEM ARCHITECTURE</p>
          <h2>Four layers. One precise surface.</h2>
        </div>
        <div className="timeline-rail">
          {timeline.map((node) => (
            <article className="timeline-node" key={node.phase}>
              <span>{node.phase}</span>
              <h3>{node.title}</h3>
              <p>{node.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="products-section section-frame" id="products">
        <div className="section-heading">
          <p className="technical-line">FLOATING PRODUCTS</p>
          <h2>Hardware modules with a visible inner logic.</h2>
        </div>
        <div className="product-cloud">
          {products.map((product, index) => (
            <MagneticPanel className="product-card" key={product.name} style={{ '--delay': `${index * 180}ms` } as React.CSSProperties}>
              <div className="product-object" aria-hidden="true">
                <span />
                <i />
              </div>
              <div>
                <span>{product.signal}</span>
                <h3>{product.name}</h3>
                <p>{product.spec}</p>
              </div>
            </MagneticPanel>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-glass">
          <p className="technical-line">DEPLOYMENT WINDOW / 2032</p>
          <h2>Build the next industrial surface.</h2>
          <MagneticButton href="mailto:systems@nullform.example">Open Channel</MagneticButton>
        </div>
      </section>

      <footer className="footer-shell">
        <span>NULLFORM</span>
        <span>Industrial technology interface systems</span>
        <span>NF-OS / 2032</span>
      </footer>
    </main>
  )
}

function usePointerVariables() {
  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight
      document.documentElement.style.setProperty('--cursor-x', x.toFixed(4))
      document.documentElement.style.setProperty('--cursor-y', y.toFixed(4))
      document.documentElement.style.setProperty('--cursor-px', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-py', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', updatePointer, { passive: true })
    return () => window.removeEventListener('pointermove', updatePointer)
  }, [])
}

function useScrollVariable() {
  useEffect(() => {
    let frame = 0
    const update = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
        document.documentElement.style.setProperty('--scroll-progress', `${window.scrollY / max}`)
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
}

function ShaderField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas?.getContext('webgl', {
      antialias: false,
      alpha: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    })
    if (!canvas || !gl) return undefined

    const vertexShader = compileShader(
      gl,
      gl.VERTEX_SHADER,
      `
        attribute vec2 position;
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
    )
    const fragmentShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        uniform vec2 resolution;
        uniform vec2 pointer;
        uniform float time;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / resolution.xy;
          vec2 p = uv - 0.5;
          p.x *= resolution.x / resolution.y;

          float beam = smoothstep(0.006, 0.0, abs(p.y + sin(p.x * 4.0 + time * 0.28) * 0.018));
          float glass = noise(uv * 7.0 + vec2(time * 0.025, -time * 0.018));
          float cursor = 1.0 - smoothstep(0.0, 0.42, distance(uv, pointer));
          float vignette = smoothstep(0.9, 0.12, length(p));
          float scan = smoothstep(0.01, 0.0, abs(fract((uv.y + time * 0.018) * 22.0) - 0.5));

          vec3 base = vec3(0.012, 0.012, 0.014);
          vec3 led = vec3(1.0, 0.13, 0.11) * beam * 0.16;
          vec3 cold = vec3(0.72, 0.84, 0.9) * (glass * 0.075 + cursor * 0.11);
          vec3 color = base + led + cold + vec3(scan * 0.018);

          gl_FragColor = vec4(color, 0.84 * vignette);
        }
      `,
    )

    const program = gl.createProgram()
    const buffer = gl.createBuffer()
    if (!program || !buffer) return undefined

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    gl.useProgram(program)

    const positionLocation = gl.getAttribLocation(program, 'position')
    const resolutionLocation = gl.getUniformLocation(program, 'resolution')
    const pointerLocation = gl.getUniformLocation(program, 'pointer')
    const timeLocation = gl.getUniformLocation(program, 'time')
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1])
    const pointer = { x: 0.5, y: 0.42 }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.7)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const updatePointer = (event: PointerEvent) => {
      pointer.x = event.clientX / window.innerWidth
      pointer.y = 1 - event.clientY / window.innerHeight
    }

    let animation = 0
    const start = performance.now()
    const render = () => {
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform2f(pointerLocation, pointer.x, pointer.y)
      gl.uniform1f(timeLocation, (performance.now() - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      animation = window.requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', updatePointer, { passive: true })

    return () => {
      window.cancelAnimationFrame(animation)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', updatePointer)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
    }
  }, [])

  return <canvas className="shader-field" ref={canvasRef} aria-hidden="true" />
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) throw new Error('WebGL shader allocation failed.')
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader
}

function HardwareCore() {
  return (
    <div className="hardware-core">
      <div className="core-shadow" />
      <div className="core-body">
        <span className="core-plane plane-a" />
        <span className="core-plane plane-b" />
        <span className="core-plane plane-c" />
        <span className="core-beam beam-a" />
        <span className="core-beam beam-b" />
        <span className="core-led led-a" />
        <span className="core-led led-b" />
        <span className="core-led led-c" />
      </div>
    </div>
  )
}

function MagneticButton({
  children,
  href,
  tone = 'primary',
}: {
  children: React.ReactNode
  href: string
  tone?: 'primary' | 'quiet' | 'ghost'
}) {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const handleMove = useCallback((event: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    event.currentTarget.style.setProperty('--btn-x', `${x}px`)
    event.currentTarget.style.setProperty('--btn-y', `${y}px`)
  }, [])

  return (
    <a className={`liquid-button ${tone}`} href={href} ref={ref} onPointerMove={handleMove}>
      <span>{children}</span>
    </a>
  )
}

function MagneticPanel({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const handleMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rx = ((y / rect.height - 0.5) * -7).toFixed(2)
    const ry = ((x / rect.width - 0.5) * 7).toFixed(2)
    event.currentTarget.style.setProperty('--panel-x', `${x}px`)
    event.currentTarget.style.setProperty('--panel-y', `${y}px`)
    event.currentTarget.style.setProperty('--rotate-x', `${rx}deg`)
    event.currentTarget.style.setProperty('--rotate-y', `${ry}deg`)
  }, [])

  const reset = useCallback((event: React.PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--rotate-x', '0deg')
    event.currentTarget.style.setProperty('--rotate-y', '0deg')
  }, [])

  return (
    <article className={`magnetic-panel ${className}`} style={style} onPointerMove={handleMove} onPointerLeave={reset}>
      {children}
    </article>
  )
}

function Indicator({ label, value }: { label: string; value: string }) {
  return (
    <div className="indicator">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function Toggle({ enabled, onChange, label }: { enabled: boolean; onChange: (value: boolean) => void; label: string }) {
  return (
    <label className="glass-toggle">
      <span>{label}</span>
      <button type="button" aria-pressed={enabled} onClick={() => onChange(!enabled)}>
        <i />
      </button>
    </label>
  )
}

function GlassSlider({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <label className="glass-slider">
      <span>
        {label}
        <strong>{value}%</strong>
      </span>
      <input type="range" min="0" max="100" value={value} onChange={(event) => onChange(Number(event.target.value))} />
    </label>
  )
}

export default App
