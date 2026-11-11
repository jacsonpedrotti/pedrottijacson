import { useEffect, useRef } from "react"

function prepareVideo(el) {
  el.muted = true
  el.defaultMuted = true
  el.playsInline = true
  el.setAttribute("playsinline", "")
  el.setAttribute("webkit-playsinline", "")
  el.setAttribute("muted", "")
}

export default function AutoPlayVideo({
  src,
  poster,
  className = "",
  "aria-label": ariaLabel,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    prepareVideo(video)

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    let cancelled = false

    const play = () => {
      if (cancelled) return
      prepareVideo(video)
      video.play().catch(() => {})
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play()
        else video.pause()
      },
      { threshold: 0.25, rootMargin: "80px 0px" }
    )

    io.observe(video)
    video.addEventListener("canplay", play)
    play()

    return () => {
      cancelled = true
      io.disconnect()
      video.removeEventListener("canplay", play)
    }
  }, [src])

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={ariaLabel}
    />
  )
}
