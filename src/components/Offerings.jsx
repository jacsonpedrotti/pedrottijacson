import { Reveal } from "./ui"
import HexGridBackground from "./HexGridBackground"
import { services } from "../data"

export default function Offerings() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-gradient-light absolute inset-0">
          <HexGridBackground variant="light" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Serviços
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-5xl">
            Soluções digitais pensadas para gerar impacto
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Do primeiro clique à conversão final, cada projeto é construído com
            estratégia, estética e performance.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 120}
              className="group rounded-3xl border border-line bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
            >
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">
                {s.badge}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/60">
                {s.desc}
              </p>
              <ul className="mt-6 space-y-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-ink/70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
