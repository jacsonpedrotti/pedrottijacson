import { Button, StarIcon } from "./ui"
import HeroVideoBackground from "./HeroVideoBackground"
import HeroBrief from "./HeroBrief"
import { hero, profile, stats } from "../data"

export default function Hero() {
  const parts = hero.headline.split(". ").filter(Boolean)

  return (
    <section
      id="topo"
      className="relative min-h-screen overflow-hidden bg-ink pt-28 pb-20 text-white sm:pt-36 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <HeroVideoBackground src={profile.heroVideo} />
        <div className="absolute inset-0 bg-ink/50 transition-opacity duration-[1800ms]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/25 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/15 via-transparent to-sky/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,15,13,0.5)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {profile.tagline}
          </div>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-sm font-bold text-gold">
            <StarIcon className="h-3.5 w-3.5" /> {hero.badge}
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight drop-shadow-lg sm:text-6xl">
            {parts.map((part, i) => (
              <span key={i} className="block">
                {part.endsWith(".") ? part : `${part}.`}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 drop-shadow-md">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projetos" variant="brand" tone="dark">
              Ver projetos
            </Button>
            <Button href="#contato" variant="solid" tone="dark" icon="wa">
              Vamos conversar
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-white/55">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-sm font-medium text-brand-300">
            {hero.descriptor}
          </p>
        </div>

        <HeroBrief />
      </div>
    </section>
  )
}
