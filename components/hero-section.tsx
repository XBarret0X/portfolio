"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, MessageCircle } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="fade-target mb-6 text-sm font-medium uppercase tracking-[0.3em] text-primary opacity-0">
          Editor de Video &middot; Designer &middot; Gestor de Redes
        </p>

        <h1 className="fade-target text-balance font-mono text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animation-delay-200 sm:text-5xl lg:text-7xl">
          Transformando a sua{" "}
          <span className="text-primary">presenca digital</span> com estrategia
          e impacto visual.
        </h1>

        <p className="fade-target mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground opacity-0 animation-delay-400 sm:text-lg">
          Por Gabriel Barreto | Editor de Video, Designer e Gestor de Redes
          Sociais.
        </p>

        <div className="fade-target mt-10 flex flex-col items-center justify-center gap-4 opacity-0 animation-delay-600 sm:flex-row">
          <a
            href="#portfolio"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Ver Projetos
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary hover:text-primary"
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-1.5 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
