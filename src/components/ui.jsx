import { useEffect, useRef } from "react"
import { contact } from "../data"

// ---------- helpers ----------
export const waLink = () =>
  `https://api.whatsapp.com/send?phone=${contact.whatsapp}&text=${encodeURIComponent(
    contact.whatsappMessage
  )}`

// ---------- icons ----------
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

export const ArrowIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const WhatsappIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 .144 11.9C.144 5.345 5.49 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.345 11.9-11.9 11.9a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.045zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
)

export const HeadsetIcon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p} aria-hidden="true">
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="2" y="14" width="5" height="7" rx="1.5" />
    <rect x="17" y="14" width="5" height="7" rx="1.5" />
    <path d="M20 19a3 3 0 0 1-3 3h-3" />
  </svg>
)
export const CameraIcon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p} aria-hidden="true">
    <path d="M2 7h4l2-3h8l2 3h4v12H2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)
export const GroupIcon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p} aria-hidden="true">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <path d="M16 5a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" />
  </svg>
)
export const ShieldIcon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p} aria-hidden="true">
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)
export const RocketIcon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p} aria-hidden="true">
    <path d="M5 13c-1.5 1.5-2 5-2 5s3.5-.5 5-2" />
    <path d="M9 11a14 14 0 0 1 8-8c1 0 3 0 3 0s0 2 0 3a14 14 0 0 1-8 8z" />
    <path d="M14 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
    <path d="M9 11l-3 3M13 15l-3 3" />
  </svg>
)
export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p} aria-hidden="true">
    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
  </svg>
)
export const ThumbsDownIcon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p} aria-hidden="true">
    <path d="M7 3h9a2 2 0 0 1 2 1.7l1.2 7A2 2 0 0 1 17.2 13H13l1 5a2 2 0 0 1-2 2.3l-3-7H4z" />
    <path d="M4 3h3v10H4z" />
  </svg>
)
export const SparkIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p} aria-hidden="true">
    <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z" />
  </svg>
)
export const InstagramIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
)
export const LinkedinIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3" />
  </svg>
)
export const GithubIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)
export const MailIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
)
export const YoutubeIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
  </svg>
)

export const socialIconMap = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
  GitHub: GithubIcon,
  YouTube: YoutubeIcon,
}
export const PlayIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
)
export const ChevronIcon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p} aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
)
export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p} aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p} aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const iconMap = {
  headset: HeadsetIcon,
  camera: CameraIcon,
  group: GroupIcon,
}

// ---------- Button ----------
export function Button({
  as = "a",
  href,
  onClick,
  variant = "brand",
  tone = "light", // "light" section or "dark" section — controls arrow color
  icon = "arrow",
  children,
  className = "",
  ...rest
}) {
  const Icon = icon === "wa" ? WhatsappIcon : ArrowIcon
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 active:scale-95"
  const styles = {
    brand:
      "bg-brand text-white hover:bg-brand-600 shadow-lg shadow-brand/30 hover:shadow-brand/50",
    solid:
      tone === "dark"
        ? "bg-white text-ink hover:bg-paper-2"
        : "bg-ink text-white hover:bg-ink-2",
    outline:
      tone === "dark"
        ? "border border-white/30 text-white hover:bg-white hover:text-ink"
        : "border border-ink/15 text-ink hover:bg-ink hover:text-white",
  }
  const Comp = as
  return (
    <Comp href={href} onClick={onClick} className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Comp>
  )
}

// ---------- Reveal on scroll ----------
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible")
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

// ---------- Scroll progress bar (o "0%" no topo da WebHub) ----------
export function ScrollProgress() {
  const barRef = useRef(null)
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    let raf = 0
    const update = () => {
      raf = 0
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0
      bar.style.width = `${pct}%`
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1">
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-brand to-sky"
      />
    </div>
  )
}
