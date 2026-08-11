import { Reveal, ShieldIcon, StarIcon } from "./ui"
import HexGridBackground from "./HexGridBackground"
import { testimonials, guarantee } from "../data"

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase()
}

export default function Testimonials() {
  return (
    <>
      <section id="depoimentos" className="relative overflow-hidden bg-paper py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-gradient-light absolute inset-0">
            <HexGridBackground variant="light" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
              Prova social
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-5xl">
              Resultados de quem confiou
            </h2>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-sm font-bold text-amber-700">
              <StarIcon className="h-4 w-4" /> 20+ projetos entregues
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.handle + i}
                delay={(i % 4) * 100}
                className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-sky text-sm font-bold text-white">
                    {initials(t.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display font-bold text-ink">
                      {t.name}
                    </p>
                    <p className="truncate text-sm text-brand-600">{t.handle}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/70">
                  {t.text}
                </p>
                <div className="mt-4 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <StarIcon key={k} className="h-4 w-4" />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-2 to-ink-3 p-8 text-center sm:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold">
                <ShieldIcon className="h-8 w-8" />
              </div>
              <span className="mt-6 inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                {guarantee.badge}
              </span>
              <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-white/75">
                {guarantee.text}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
