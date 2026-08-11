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

        <Reveal delay={120} className="relative mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-paper-2 to-white p-2 shadow-xl shadow-brand/10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-ink">
              <AutoPlayVideo
                className="absolute inset-0 h-full w-full object-cover"
                src={promise.video}
                aria-label="Demonstração de produtos digitais"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 flex items-center gap-2 border-b border-white/10 bg-black/50 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 hidden truncate rounded-md bg-white/10 px-3 py-1 text-xs text-white/60 sm:block">
                  jacsonpedrotti.com.br
                </span>
              </div>
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