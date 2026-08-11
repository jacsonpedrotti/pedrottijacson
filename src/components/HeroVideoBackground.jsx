import { useEffect, useRef } from "react"

function prepareVideo(el) {
  el.muted = true
  el.defaultMuted = true
  el.playsInline = true
  el.setAttribute("playsinline", "")
  el.setAttribute("webkit-playsinline", "")
  el.setAttribute("muted", "")
}

async function forcePlay(el) {
  if (!el) return false
  prepareVideo(el)
  try {
    await el.play()
    return !el.paused
  } catch {
    return false
  }
}

export default function HeroVideoBackground({ src }) {
  const videoRef = useRef(null)
  const playingRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let cancelled = false
    const cleanups = []

    const tryStart = async () => {
      if (cancelled || playingRef.current) return
      const ok = await forcePlay(video)
      if (ok) playingRef.current = true
    }

    const retry = () => {
      if (!playingRef.current) tryStart()
    }

    video.addEventListener("loadeddata", tryStart)
    video.addEventListener("canplay", retry)
    cleanups.push(() => {
      video.removeEventListener("loadeddata", tryStart)
      video.removeEventListener("canplay", retry)
    })

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryStart()
        else {
          video.pause()
          playingRef.current = false
        }
      },
      { threshold: 0.15 }
    )
    io.observe(video)
    cleanups.push(() => io.disconnect())

    ;["touchstart", "click", "orientationchange"].forEach((ev) => {
      document.addEventListener(ev, retry, { passive: true })
      cleanups.push(() => document.removeEventListener(ev, retry))
    })

    tryStart()

    return () => {
      cancelled = true
      playingRef.current = false
      cleanups.forEach((fn) => fn())
    }
  }, [src])

  return (
    <div className="hero-video-wrap absolute inset-0 overflow-hidden opacity-100">
      <div className="hero-video-kenburns absolute inset-0">
        <video
          ref={videoRef}
          className="hero-video-layer absolute inset-0 h-full w-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
