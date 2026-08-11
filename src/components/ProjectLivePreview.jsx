import { useEffect, useRef, useState } from "react"

const PREVIEW_WIDTH = 1280
const PREVIEW_HEIGHT = 800

function hostnameOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

export default function ProjectLivePreview({ url, index, tags }) {
  const rootRef = useRef(null)
  const stageRef = useRef(null)
  const [active, setActive] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const [scale, setScale] = useState(0.25)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const measure = () => {
      const w = stage.clientWidth
      if (w > 0) setScale(w / PREVIEW_WIDTH)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(stage)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el || !url) return

    let leaveTimer = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(leaveTimer)
          setFailed(false)
          setActive(true)
          return
        }
        leaveTimer = window.setTimeout(() => {
          setActive(false)
          setLoaded(false)
        }, 1200)
      },
      { rootMargin: "180px 0px", threshold: 0.05 }
    )

    io.observe(el)
    return () => {
      io.disconnect()
      window.clearTimeout(leaveTimer)
    }
  }, [url])

  useEffect(() => {
    if (!active || !url) return
    const failTimer = window.setTimeout(() => {
      setFailed((prev) => (loaded ? prev : true))
    }, 9000)
    return () => window.clearTimeout(failTimer)
  }, [active, url, loaded])

  const showFallback = !url || failed

  return (
    <div
      ref={rootRef}
      className="relative aspect-[16/10] overflow-hidden bg-ink-2"
    >
      <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-1.5 border-b border-white/10 bg-ink/95 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <span className="h-2 w-2 rounded-full bg-green-400/80" />
        <span className="ml-2 truncate rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/50">
          {url ? hostnameOf(url) : "preview"}
        </span>
        {active && !loaded && !failed && (
          <span className="ml-auto text-[10px] font-medium text-brand-300">
            carregando…
          </span>
        )}
      </div>

      <div ref={stageRef} className="absolute inset-x-0 bottom-0 top-8 overflow-hidden">
        {showFallback ? (
          <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-ink-2 to-sky/10">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-4xl font-extrabold text-white/20 transition-colors group-hover:text-brand/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ) : (
          <>
            {!loaded && (
              <div className="absolute inset-0 z-[1] animate-pulse bg-gradient-to-br from-ink-2 via-ink-3 to-ink-2" />
            )}
            {active && (
              <div
                className={`absolute left-0 top-0 origin-top-left transition-opacity duration-500 ease-out ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  width: PREVIEW_WIDTH,
                  height: PREVIEW_HEIGHT,
                  transform: `scale(${scale})`,
                }}
              >
                <iframe
                  title={`Preview ${hostnameOf(url)}`}
                  src={url}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  className="pointer-events-none h-full w-full border-0 bg-white"
                  onLoad={() => setLoaded(true)}
                  onError={() => setFailed(true)}
                />
              </div>
            )}
          </>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent p-4 pt-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">
          {tags}
        </span>
      </div>

      <div className="absolute inset-0 z-10" aria-hidden="true" />
    </div>
  )
}
