import { Reveal, Button, ArrowIcon } from "./ui"
import { projects } from "../data"
import ProjectLivePreview from "./ProjectLivePreview"

export default function Projects() {
  return (
    <section id="projetos" className="bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Portfólio
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-5xl">
            Projetos destacados
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Cada projeto foi pensado para mostrar não só o resultado, mas a
            experiência completa: interface, fluxo, performance e estratégia.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 100}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
            >
              <div className="relative">
                <ProjectLivePreview url={p.url} index={i} tags={p.tags} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                  {p.desc}
                </p>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    Ver projeto real
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href="#contato" variant="solid" tone="light">
            Quero um projeto assim
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
