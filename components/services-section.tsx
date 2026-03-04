"use client"

import { useEffect, useRef } from "react"
import { Film, Palette, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Film,
    title: "Edicao de Video",
    description:
      "Edicao profissional focada em retencao e viralizacao. Cortes precisos, transicoes criativas, legendas animadas e sincronizacao com audio para maximizar o impacto do seu conteudo.",
  },
  {
    icon: Palette,
    title: "Edicao de Fotos e Design",
    description:
      "Tratamento profissional de imagens, criacao de identidade visual, thumbnails de alto impacto e materiais graficos que comunicam a essencia da sua marca.",
  },
  {
    icon: BarChart3,
    title: "Gestao de Redes Sociais",
    description:
      "Estrategia completa de conteudo, cronograma de postagens e analise de metricas para crescimento consistente e construcao de autoridade digital.",
  },
]

export function ServicesSection() {
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
    <section ref={sectionRef} id="servicos" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="fade-target mb-3 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary opacity-0">
          Servicos
        </p>
        <h2 className="fade-target mb-16 text-center font-mono text-3xl font-bold text-foreground opacity-0 animation-delay-200 sm:text-4xl">
          O que eu faco por voce
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`fade-target group rounded-2xl border border-border bg-card p-8 opacity-0 transition-all hover:border-primary/50 hover:bg-secondary ${
                  i === 1 ? "animation-delay-200" : i === 2 ? "animation-delay-400" : ""
                }`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={28} />
                </div>
                <h3 className="mb-3 font-mono text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
