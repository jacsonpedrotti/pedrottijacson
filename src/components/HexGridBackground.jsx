import { useEffect, useRef } from "react"

const BRAND_RGB = "16, 185, 129"
const SKY_RGB = "45, 212, 191"
const FRAME_MS = 1000 / 30

const VARIANTS = {
  dark: { strokeMul: 0.35, fillMul: 0.06, fillThreshold: 0.3, canvasOpacity: 0.85 },
  light: { strokeMul: 0.55, fillMul: 0.1, fillThreshold: 0.25, canvasOpacity: 0.65 },
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function drawHex(ctx, x, y, size, opacity, tint, variant) {
  const v = VARIANTS[variant] ?? VARIANTS.dark
  ctx.beginPath()
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i
    const px = x + size * Math.cos(angle)
    const py = y + size * Math.sin(angle)
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.closePath()

  const rgb = tint > 0.5 ? SKY_RGB : BRAND_RGB
  ctx.strokeStyle = `rgba(${rgb}, ${opacity * v.strokeMul})`
  ctx.lineWidth = 1
  ctx.stroke()

  if (opacity > v.fillThreshold) {
    ctx.fillStyle = `rgba(${rgb}, ${opacity * v.fillMul})`
    ctx.fill()
  }
}

export default function HexGridBackground({
  rows = 12,
  cols = 16,
  hexSize = 42,
  activePercentage = 0.28,
  variant = "dark",
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduced = prefersReducedMotion()
    let dpr = 1
    let visible = false
    let pageVisible = !document.hidden
    let animId = 0
    let lastPaint = 0
    let frame = 0
    let running = false

    const hexWidth = hexSize * Math.sqrt(3)
    const hexHeight = hexSize * 2
    const vertSpacing = hexHeight * 0.75

    const hexes = []
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * hexWidth + (row % 2) * (hexWidth / 2) + hexWidth
        const y = row * vertSpacing + hexHeight / 2
        const isActive = Math.random() < activePercentage

        hexes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          tint: Math.random(),
          opacity: isActive ? Math.random() * 0.5 + 0.3 : 0.1,
          targetOpacity: isActive ? Math.random() * 0.5 + 0.3 : 0.1,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
          velocityX: (Math.random() - 0.5) * 0.22,
          velocityY: (Math.random() - 0.5) * 0.22,
          mutateAt: (Math.random() * 400) | 0,
        })
      }
    }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      dpr = Math.min(window.devicePixelRatio || 1, 1.25)
      const w = parent.offsetWidth
      const h = parent.offsetHeight
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const paint = (staticOnly = false) => {
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < hexes.length; i++) {
        const hex = hexes[i]

        if (!staticOnly) {
          hex.x += hex.velocityX
          hex.y += hex.velocityY

          if (hex.x < -hexSize * 2) hex.x = width + hexSize
          if (hex.x > width + hexSize * 2) hex.x = -hexSize
          if (hex.y < -hexSize * 2) hex.y = height + hexSize
          if (hex.y > height + hexSize * 2) hex.y = -hexSize

          const pulse = Math.sin(frame * hex.pulseSpeed + hex.pulsePhase)
          hex.opacity = hex.targetOpacity + pulse * 0.2

          if (frame === hex.mutateAt) {
            const active = Math.random() < activePercentage
            hex.targetOpacity = active ? Math.random() * 0.5 + 0.3 : 0.1
            hex.mutateAt = frame + 280 + ((Math.random() * 220) | 0)
          }
        }

        drawHex(
          ctx,
          hex.x,
          hex.y,
          hexSize,
          Math.max(0.05, hex.opacity),
          hex.tint,
          variant
        )
      }
    }

    const tick = (now) => {
      if (!running) return
      animId = requestAnimationFrame(tick)
      if (now - lastPaint < FRAME_MS) return
      lastPaint = now
      frame += 1
      paint(false)
    }

    const start = () => {
      if (reduced || running || !visible || !pageVisible) return
      running = true
      lastPaint = 0
      animId = requestAnimationFrame(tick)
    }

    const stop = () => {
      running = false
      if (animId) cancelAnimationFrame(animId)
      animId = 0
    }

    const sync = () => {
      if (visible && pageVisible && !reduced) start()
      else stop()
    }

    resize()
    paint(true)

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio > 0.05
        sync()
      },
      { threshold: [0, 0.05, 0.15], rootMargin: "80px 0px" }
    )
    io.observe(canvas)

    const onVisibility = () => {
      pageVisible = !document.hidden
      sync()
    }

    let resizeRaf = 0
    const onResize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        resize()
        paint(!running)
      })
    }

    document.addEventListener("visibilitychange", onVisibility)
    window.addEventListener("resize", onResize, { passive: true })

    return () => {
      stop()
      io.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("resize", onResize)
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
    }
  }, [rows, cols, hexSize, activePercentage, variant])

  const v = VARIANTS[variant] ?? VARIANTS.dark

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{ opacity: v.canvasOpacity }}
      aria-hidden="true"
    />
  )
}
