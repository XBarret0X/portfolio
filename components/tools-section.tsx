"use client"

import { useEffect, useRef } from "react"

const tools = [
  {
    name: "CapCut",
    description:
      "Edicoes dinamicas, cortes precisos, legendas animadas e formatacao viral para TikTok/Reels.",
    level: 95,
  },
  {
    name: "Photoshop",
    description:
      "Manipulacao de imagem avancada, tratamento de fotos, remocao de fundo e thumbnails de alto impacto.",
    level: 90,
  },
  {
    name: "Canva",
    description:
      "Agilidade na criacao de carrosseis, identidades visuais e materiais de marketing.",
    level: 85,
  },
]

export function ToolsSection() {
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
    <section ref={sectionRef} id="ferramentas" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="fade-target mb-3 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary opacity-0">
          Meu Arsenal
        </p>
        <h2 className="fade-target mb-16 text-center font-mono text-3xl font-bold text-foreground opacity-0 animation-delay-200 sm:text-4xl">
          Ferramentas que Domino
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={`fade-target rounded-2xl border border-border bg-card p-8 opacity-0 transition-all hover:border-primary/50 hover:bg-secondary ${
                i === 1 ? "animation-delay-200" : i === 2 ? "animation-delay-400" : ""
              }`}
            >
              <h3 className="mb-3 font-mono text-xl font-bold text-foreground">
                {tool.name}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
              {/* Skill bar */}
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                  style={{ width: `${tool.level}%` }}
                />
              </div>
              <p className="mt-2 text-right text-xs text-muted-foreground">
                {tool.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
