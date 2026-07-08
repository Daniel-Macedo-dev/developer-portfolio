import type { Metadata } from "next";

import { backendProjects, featuredProjects } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de software de Daniel Macedo Silva: aplicação desktop de investimentos, jogo full-stack com IA generativa, loja full-stack e APIs REST em Java + Spring Boot.",
};

export default function ProjectsPage() {
  const [main, ...others] = featuredProjects;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <header>
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          projetos
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          O que eu construí
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Uma seleção intencional: três projetos completos que mostram
          profundidade — desktop, full-stack e IA generativa — e um conjunto de
          APIs focadas que mostram variedade de persistência, autenticação e
          integrações.
        </p>
      </header>

      <section aria-labelledby="destaque-titulo" className="mt-14">
        <h2
          id="destaque-titulo"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Em destaque
        </h2>
        <div className="mt-6 space-y-6">
          {main && (
            <Reveal>
              <FeaturedProjectCard project={main} prominent />
            </Reveal>
          )}
          <div className="grid gap-6 lg:grid-cols-2">
            {others.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <FeaturedProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="backend-titulo" className="mt-16">
        <h2
          id="backend-titulo"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          APIs e serviços
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Projetos backend menores e focados — persistência relacional e
          NoSQL, autenticação com JWT, armazenamento em nuvem e integração
          entre serviços.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {backendProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
