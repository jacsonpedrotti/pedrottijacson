import { Reveal, Button } from "./ui"

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[64px]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            Vamos criar algo <span className="text-gradient">incrível</span> juntos?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
            Sua ideia merece virar um produto digital completo. Dá o primeiro
            passo agora — o resto a gente desenha juntos.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contato" variant="brand" tone="dark">
              Trabalhar comigo
            </Button>
            <Button href="#contato" variant="solid" tone="dark" icon="wa">
              Contato
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
