import { Reveal, Button, iconMap } from "./ui"
import { support } from "../data"

export default function Services() {
  return (
    <section id="suporte" className="bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Como trabalho
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-5xl">
            {support.title}
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Da primeira mensagem à entrega final, você tem um parceiro — não só
            um contrato. Tudo pensado para ser simples, claro e humano.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {support.items.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <Reveal
                key={item.title}
                delay={i * 120}
                className="group rounded-3xl border border-line bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-sky text-white shadow-lg shadow-brand/30">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/60">
                  {item.text}
                </p>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-lg font-medium text-ink/70">
            Quer entender como seu projeto sai da ideia ao ar? Fale comigo agora.
          </p>
          <Button href="#contato" variant="solid" tone="light">
            tirar dúvidas
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
