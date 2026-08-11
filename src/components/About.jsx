import { Reveal, Button, socialIconMap } from "./ui"
import { about, profile } from "../data"

export default function About() {
  return (
    <section id="sobre" className="bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-1 mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-brand/15 via-white to-sky/10 p-1.5 shadow-xl shadow-brand/10">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full rounded-[1.35rem] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-lg">
              {profile.social.map((s) => {
                const I = socialIconMap[s.label]
                return I ? (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink transition-colors hover:text-brand"
                    aria-label={s.label}
                  >
                    <I className="h-6 w-6" />
                  </a>
                ) : null
              })}
            </div>
          </Reveal>

          <Reveal delay={120} className="order-2">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
              Sobre mim
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              {about.intro}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/65">
              <p>{about.story}</p>
              <p>{about.decision}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Landing Pages", "Estratégia", "UX", "Desenvolvimento"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button href="#contato" variant="brand" tone="light" className="mt-8">
              Vamos conversar
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
