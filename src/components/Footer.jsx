import { ArrowIcon, WhatsappIcon, SparkIcon, socialIconMap, waLink } from "./ui"
import { profile, contact } from "../data"

const menu = [
  { label: "Trabalhar comigo", href: "#contato", Icon: SparkIcon },
  { label: "Tirar dúvidas", href: waLink(), ext: true, Icon: WhatsappIcon },
  { label: "Ver projetos", href: "#projetos", Icon: ArrowIcon },
]

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-32 text-white sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <a href="#topo" className="inline-flex items-center gap-2.5">
            <span className="h-10 w-10 overflow-hidden rounded-xl border-2 border-brand/30">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
            </span>
            <span className="font-display text-xl font-bold">{profile.name}</span>
          </a>

          <p className="mt-3 text-sm text-white/50">{profile.role}</p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-white/40">
            O que você deseja?
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {menu.map(({ label, href, Icon, ext }) => (
              <a
                key={label}
                href={href}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:bg-white/10"
              >
                <Icon className="h-4 w-4 text-brand-300" />
                {label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            {profile.social.map((s) => {
              const I = socialIconMap[s.label]
              return I ? (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-brand/40 hover:text-white"
                >
                  <I className="h-5 w-5" />
                </a>
              ) : null
            })}
          </div>

          <p className="mt-6 text-sm text-white/40">
            <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
              {contact.email}
            </a>
            {" · "}
            {contact.whatsappDisplay}
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
          <a href="#topo" className="transition-colors hover:text-white">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  )
}
