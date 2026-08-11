import { useState } from "react"
import { Reveal, Button, ArrowIcon, WhatsappIcon, waLink } from "./ui"
import { contact } from "../data"

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: conecte a um serviço (Formspree, EmailJS, Netlify Forms, API própria).
    setSent(true)
  }

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/40 transition-colors focus:border-brand focus:bg-white/10 focus:outline-none"

  return (
    <section id="contato" className="relative overflow-hidden bg-ink-2 py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-brand/20 blur-[64px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* copy */}
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-300">
              Contato
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Pronto para lançar sua <span className="text-gradient">próxima</span> landing page?
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/65">
              Se você precisa de uma landing page, site ou produto digital, posso
              ajudar do planejamento à entrega final — com estratégia, design e
              desenvolvimento.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-green-400/40 hover:bg-green-400/10"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-green-500 text-white">
                  <WhatsappIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-white/55">Falar agora</span>
                  <span className="font-display font-bold">{contact.whatsappDisplay}</span>
                </span>
                <ArrowIcon className="ml-1 h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-ink to-ink-3 p-6 shadow-2xl shadow-brand/20 sm:p-8">
              {sent ? (
                <div className="grid place-items-center py-16 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-green-500/15 text-green-400">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-2 text-sm text-white/55">
                    Obrigado pelo contato. Em breve eu respondo.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }) }}
                    className="mt-6 text-sm font-semibold text-brand-300 hover:text-brand-200"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required value={form.name} onChange={set("name")} placeholder="Seu nome" className={inputCls} />
                    <input required type="email" value={form.email} onChange={set("email")} placeholder="Seu e-mail" className={inputCls} />
                  </div>
                  <input value={form.phone} onChange={set("phone")} placeholder="Telefone (com DDD)" className={inputCls} />
                  <textarea required value={form.message} onChange={set("message")} placeholder="Conte sobre seu projeto..." rows="4" className={`${inputCls} resize-none`} />
                  <label className="flex items-start gap-3 text-xs text-white/50">
                    <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-brand" />
                    <span>Li e concordo com a política de privacidade. Seus dados estão seguros e não serão compartilhados.</span>
                  </label>
                  <Button as="button" type="submit" variant="brand" tone="dark" className="w-full">
                    Solicitar orçamento
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
