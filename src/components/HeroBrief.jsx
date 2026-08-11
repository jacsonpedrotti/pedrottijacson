import { useEffect, useState } from "react"
import { ArrowIcon, WhatsappIcon } from "./ui"
import { projectBrief, contact } from "../data"

const terminalLines = (type, goal) => [
  { text: "> Iniciando análise do projeto...", delay: 0 },
  { text: `> Tipo: ${type.label}`, delay: 400 },
  { text: `> Objetivo: ${goal.label}`, delay: 800 },
  { text: `> Foco: ${type.focus}`, delay: 1200 },
  { text: `> Prazo estimado: ${type.timeline}`, delay: 1600 },
  { text: "> Plano gerado com sucesso ✓", delay: 2000, accent: true },
]

function waLink(message) {
  return `https://api.whatsapp.com/send?phone=${contact.whatsapp}&text=${encodeURIComponent(message)}`
}

export default function HeroBrief() {
  const [typeId, setTypeId] = useState(projectBrief.types[0].id)
  const [goalId, setGoalId] = useState(projectBrief.goals[0].id)
  const [visibleLines, setVisibleLines] = useState(0)
  const [key, setKey] = useState(0)

  const type = projectBrief.types.find((t) => t.id === typeId) ?? projectBrief.types[0]
  const goal = projectBrief.goals.find((g) => g.id === goalId) ?? projectBrief.goals[0]
  const lines = terminalLines(type, goal)

  useEffect(() => {
    setVisibleLines(0)
    setKey((k) => k + 1)
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [typeId, goalId])

  return (
    <div className="relative mx-auto mt-16 max-w-4xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-2/90 shadow-2xl shadow-brand/20">
        <div className="border-b border-white/10 px-5 py-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-300">
            Briefing rápido
          </p>
          <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
            {projectBrief.title}
          </h3>
          <p className="mt-1 text-sm text-white/55">{projectBrief.subtitle}</p>
        </div>

        <div className="grid gap-6 p-5 sm:grid-cols-2 sm:p-6">
          <div className="space-y-5">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                Tipo de projeto
              </p>
              <div className="flex flex-wrap gap-2">
                {projectBrief.types.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTypeId(t.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      typeId === t.id
                        ? "bg-brand text-white shadow-lg shadow-brand/30"
                        : "border border-white/15 bg-white/5 text-white/70 hover:border-brand/40 hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                Seu objetivo
              </p>
              <div className="flex flex-wrap gap-2">
                {projectBrief.goals.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoalId(g.id)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      goalId === g.id
                        ? "border border-sky/50 bg-sky/15 text-sky"
                        : "border border-white/10 bg-white/5 text-white/60 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            <ul className="space-y-2">
              {type.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/75"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-sm">
            <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs text-white/40">jacsonpedrotti.com.br</span>
            </div>
            <div key={key} className="min-h-[168px] space-y-1.5">
              {lines.slice(0, visibleLines).map((line, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    line.accent ? "text-brand-300 font-semibold" : "text-white/65"
                  }`}
                >
                  {line.text}
                </p>
              ))}
              {visibleLines < lines.length && (
                <span className="inline-block h-4 w-2 animate-pulse bg-brand/80" />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 bg-white/[0.03] px-5 py-5 sm:flex-row sm:px-6">
          <div className="text-center sm:text-left">
            <p className="text-xs uppercase tracking-wider text-white/45">
              Resposta em até 24h
            </p>
            <p className="mt-1 font-display text-lg font-bold text-white">
              Disponível para novos projetos
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Ver formulário
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={waLink(type.waMessage)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-600"
            >
              <WhatsappIcon className="h-4 w-4" />
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
