"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type Category = "todos" | "video" | "design" | "social"

const projects = [
  {
    title: "Reels Dinamico para Marca de Moda",
    description:
      "Edicao acelerada no CapCut, sincronia com a batida da musica (beat sync), transicoes criativas e color grading.",
    category: "video" as Category,
    image: "/images/portfolio-1.jpg",
  },
  {
    title: "Video de Conteudo/Podcast",
    description:
      "Cortes focados em retencao, insercao de b-rolls (imagens de apoio) e legendas estilo 'Hormozi'.",
    category: "video" as Category,
    image: "/images/portfolio-2.jpg",
  },
  {
    title: "Campanha de Lancamento",
    description:
      "Manipulacao de produto no Photoshop e criacao de flyer digital de alta conversao.",
    category: "design" as Category,
    image: "/images/portfolio-3.jpg",
  },
  {
    title: "Carrossel Educativo",
    description:
      "Design limpo e atrativo feito no Canva, focado em salvar e compartilhar.",
    category: "design" as Category,
    image: "/images/portfolio-4.jpg",
  },
  {
    title: "Estudo de Caso de Crescimento",
    description:
      "Grafico mostrando aumento de alcance e engajamento apos assumir o gerenciamento de um cliente.",
    category: "social" as Category,
    image: "/images/portfolio-5.jpg",
  },
]

const filters: { label: string; value: Category | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Videos", value: "video" },
  { label: "Design", value: "design" },
  { label: "Social Media", value: "social" },
]

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFilter, setActiveFilter] = useState<Category | "todos">("todos")

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

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
    <section ref={sectionRef} id="portfolio" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="fade-target mb-3 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary opacity-0">
          Portfolio
        </p>
        <h2 className="fade-target mb-12 text-center font-mono text-3xl font-bold text-foreground opacity-0 animation-delay-200 sm:text-4xl">
          Exemplos Praticos
        </h2>

        {/* Filters */}
        <div className="fade-target mb-12 flex flex-wrap items-center justify-center gap-3 opacity-0 animation-delay-400">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === f.value
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-secondary text-secondary-foreground hover:border-primary/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-background/0 p-6 transition-all duration-300 group-hover:bg-background/80">
                  <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="mb-2 inline-block rounded-md bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                      {project.category === "video"
                        ? "Video"
                        : project.category === "design"
                          ? "Design"
                          : "Social Media"}
                    </span>
                    <h3 className="mb-1 font-mono text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
