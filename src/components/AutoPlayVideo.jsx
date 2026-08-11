import { useEffect, useRef } from "react"

export default function AutoPlayVideo({
  src,
  className = "",
  "aria-label": ariaLabel,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.2, rootMargin: "120px 0px" }
    )

    io.observe(video)
    return () => io.disconnect()
  }, [src])

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-label={ariaLabel}
    />
  )
}
