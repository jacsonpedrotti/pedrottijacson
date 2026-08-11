import { Reveal, Button, SparkIcon } from "./ui"
import { skills, skillsIntro, skillsClosing } from "../data"

export default function Skills() {
  return (
    <section id="habilidades" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-[64px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
            <SparkIcon className="h-3.5 w-3.5" />
            O que eu domino
          </div>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Tecnologias com as quais construo <span className="text-gradient">soluções modernas</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            {skillsIntro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 100}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-brand/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-300">
                  {s.tag}
                </span>
                <span className="font-display text-3xl font-extrabold text-white/10 transition-colors group-hover:text-brand/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {s.desc}
              </p>
              <div className="mt-5 h-px w-0 bg-gradient-to-r from-brand to-sky transition-all duration-500 group-hover:w-full" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-white/70">{skillsClosing}</p>
          <Button href="#projetos" variant="brand" tone="dark" className="mt-7">
            ver projetos
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
