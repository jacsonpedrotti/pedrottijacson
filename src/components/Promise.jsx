import { Reveal, Button } from "./ui"
import HexGridBackground from "./HexGridBackground"
import AutoPlayVideo from "./AutoPlayVideo"
import { promise } from "../data"

export default function PromiseSection() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-gradient-light absolute inset-0">
          <HexGridBackground variant="light" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Como trabalho
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-5xl">
            {promise.title}
          </h2>
          <p className="mt-4 text-lg text-ink/60">{promise.subtitle}</p>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-line bg-ink shadow-xl shadow-brand/15">
            <div className="flex items-center gap-2 border-b border-white/10 bg-ink-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 truncate text-xs text-white/55">
                jacsonpedrotti.com.br
              </span>
              <span className="ml-auto hidden text-[11px] font-semibold uppercase tracking-wider text-brand-300 sm:block">
                No estúdio
              </span>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden bg-ink">
              <AutoPlayVideo
                className="absolute inset-0 h-full w-full object-cover"
                src={promise.video}
                poster={promise.videoPoster}
                aria-label="Jacson desenvolvendo um produto digital no estúdio"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-ink/70">
            {promise.text}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#projetos" variant="brand" tone="light">
              Ver projetos
            </Button>
            <Button href="#contato" variant="solid" tone="light" icon="wa">
              Vamos conversar
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}