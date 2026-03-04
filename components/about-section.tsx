"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function AboutSection() {
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
      id="sobre"
      className="relative px-6 py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Image */}
        <div className="fade-target relative opacity-0">
          <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-border sm:h-96 sm:w-80">
            <Image
              src="/images/profile.jpg"
              alt="Gabriel Barreto - Foto profissional"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, 320px"
            />
          </div>
          {/* Accent border */}
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-primary/30" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="fade-target mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary opacity-0">
            Sobre Mim
          </p>
          <h2 className="fade-target mb-6 font-mono text-3xl font-bold leading-tight text-foreground opacity-0 animation-delay-200 sm:text-4xl">
            De cortes simples a{" "}
            <span className="text-primary">estrategias digitais</span>{" "}
            completas.
          </h2>
          <p className="fade-target text-pretty text-base leading-relaxed text-muted-foreground opacity-0 animation-delay-400">
            Minha jornada no audiovisual comecou em 2020. O que iniciou como uma
            curiosidade com edicoes de video rapidamente se transformou em uma
            paixao por contar historias e prender a atencao do publico. Venho
            evoluindo desde entao: dominei as ferramentas visuais,
            aprofundei-me nas tendencias de retencao e expandi minhas
            habilidades para o gerenciamento estrategico de redes sociais.
          </p>
          <p className="fade-target mt-4 text-pretty text-base leading-relaxed text-muted-foreground opacity-0 animation-delay-600">
            Hoje, unindo minha base tecnica a criatividade, nao entrego apenas
            artes ou videos bonitos, mas sim pecas projetadas para engajar,
            converter e construir autoridade para marcas e criadores.
          </p>
        </div>
      </div>
    </section>
  )
}
