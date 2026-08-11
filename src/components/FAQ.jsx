import { useState } from "react"
import { Reveal, ChevronIcon } from "./ui"
import HexGridBackground from "./HexGridBackground"
import { faq } from "../data"

function Item({ qa, open, onToggle, index }) {
  return (
    <Reveal delay={index * 70}>
      <div
        className={`overflow-hidden rounded-2xl border transition-colors ${
          open
            ? "border-brand/40 bg-brand/[0.04] shadow-md shadow-brand/5"
            : "border-line bg-white"
        }`}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-base font-bold text-ink sm:text-lg">
            {qa.q}
          </span>
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all ${
              open ? "rotate-180 border-brand bg-brand text-white" : "border-line text-brand"
            }`}
          >
            <ChevronIcon className="h-5 w-5" />
          </span>
        </button>
        <div
          className={`grid transition-all duration-300 ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-6 text-base leading-relaxed text-ink/65">
              {qa.a}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-gradient-light absolute inset-0">
          <HexGridBackground variant="light" />
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Dúvidas
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-ink/60">
            As perguntas mais comuns que recebo antes de começar um projeto.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faq.map((qa, i) => (
            <Item
              key={i}
              index={i}
              qa={qa}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
