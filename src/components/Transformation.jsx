import { ThumbsDownIcon, StarIcon, RocketIcon } from "./ui"
import { transformation } from "../data"

const items = [
  { text: transformation[0], Icon: ThumbsDownIcon, dim: true },
  { text: transformation[1], Icon: StarIcon },
  { text: transformation[2], Icon: RocketIcon },
]

function Row({ reverse = false }) {
  const row = [...items, ...items, ...items, ...items]
  return (
    <div className="flex w-max">
      <div
        className={`flex items-center gap-8 pr-8 ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {row.map(({ text, Icon, dim }, i) => (
          <div key={i} className="flex shrink-0 items-center gap-5">
            <span
              className={`grid h-12 w-12 place-items-center rounded-full ${
                dim
                  ? "bg-white/5 text-white/40"
                  : "bg-gradient-to-br from-brand to-sky text-white"
              }`}
            >
              <Icon className="h-6 w-6" />
            </span>
            <span
              className={`font-display text-3xl font-extrabold tracking-tight sm:text-5xl ${
                dim ? "text-white/30 line-through decoration-white/20" : "text-white"
              }`}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Transformation() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="space-y-6">
        <Row />
        <Row reverse />
      </div>
    </section>
  )
}
