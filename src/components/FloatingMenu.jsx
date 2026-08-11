import { useEffect, useState } from "react"
import { ArrowIcon, WhatsappIcon, SparkIcon, waLink } from "./ui"

export default function FloatingMenu() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let contactTop = Number.POSITIVE_INFINITY
    let raf = 0

    const measure = () => {
      const contact = document.getElementById("contato")
      if (!contact) return
      contactTop = contact.getBoundingClientRect().top + window.scrollY
    }

    const update = () => {
      raf = 0
      const past = window.scrollY > window.innerHeight * 0.9
      const nearBottom = contactTop - window.scrollY < 400
      const next = past && !nearBottom
      setShow((prev) => (prev === next ? prev : next))
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    measure()
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", measure, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", measure)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-5 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/90 p-1.5 shadow-2xl shadow-brand/30">
        <a
          href="#projetos"
          className="flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <SparkIcon className="h-4 w-4 text-brand-300" /> Projetos
        </a>
        <span className="h-5 w-px bg-white/10" />
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <WhatsappIcon className="h-4 w-4 text-green-400" /> WhatsApp
        </a>
        <span className="h-5 w-px bg-white/10" />
        <a
          href="#contato"
          className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white"
        >
          Contato
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  )
}
