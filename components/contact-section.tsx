"use client"

import { useEffect, useRef, useState } from "react"
import { Send, MessageCircle } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    projeto: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll(".fade-target")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Ola Gabriel! Meu nome e ${formState.nome}. ${formState.projeto}`
    window.open(
      `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <section ref={sectionRef} id="contato" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="fade-target mb-3 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary opacity-0">
          Contato
        </p>
        <h2 className="fade-target mb-4 text-center font-mono text-3xl font-bold text-foreground opacity-0 animation-delay-200 sm:text-4xl">
          Vamos tirar o seu proximo{" "}
          <span className="text-primary">projeto</span> do papel?
        </h2>
        <p className="fade-target mb-12 text-center text-muted-foreground opacity-0 animation-delay-400">
          Preencha o formulario abaixo ou entre em contato diretamente pelas redes sociais.
        </p>

        <form
          onSubmit={handleSubmit}
          className="fade-target space-y-5 rounded-2xl border border-border bg-card p-8 opacity-0 animation-delay-400"
        >
          <div>
            <label
              htmlFor="nome"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Nome
            </label>
            <input
              id="nome"
              type="text"
              required
              value={formState.nome}
              onChange={(e) =>
                setFormState((s) => ({ ...s, nome: e.target.value }))
              }
              className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
              className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="projeto"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Qual e o projeto?
            </label>
            <textarea
              id="projeto"
              required
              rows={4}
              value={formState.projeto}
              onChange={(e) =>
                setFormState((s) => ({ ...s, projeto: e.target.value }))
              }
              className="w-full resize-none rounded-lg border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Descreva brevemente o que voce precisa..."
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            <Send size={16} />
            Enviar Mensagem
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            <MessageCircle size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
