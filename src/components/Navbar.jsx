import { useEffect, useState } from "react"
import { Button, MenuIcon, CloseIcon } from "./ui"
import { profile } from "../data"

const links = [
  { label: "Como trabalho", href: "#suporte" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const next = window.scrollY > 40
        setScrolled((prev) => (prev === next ? prev : next))
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#topo" className="group flex items-center gap-2.5">
          <span className="h-9 w-9 overflow-hidden rounded-xl border-2 border-brand/30 shadow-lg shadow-brand/30">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="font-display text-lg font-bold text-white">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contato"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Contato
          </a>
          <Button href="#contato" variant="brand" className="px-5 py-2.5 text-xs">
            Trabalhar comigo
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white lg:hidden"
          aria-label="Abrir menu"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/80"
              >
                {l.label}
              </a>
            ))}
            <Button
              href="#contato"
              onClick={() => setOpen(false)}
              variant="brand"
              className="mt-2 w-full"
            >
              Trabalhar comigo
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
