import Link from "next/link";

import { backendProjects } from "@/data/projects";
import { ArrowRightIcon } from "@/components/icons";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

export function BackendProjects() {
  return (
    <Section
      eyebrow="backend & apis"
      title="APIs e serviços"
      description="Projetos menores e focados que mostram variedade: persistência relacional e NoSQL, autenticação, integrações entre serviços e nuvem."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {backendProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.04}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          Ver todos os projetos
          <ArrowRightIcon width={16} height={16} />
        </Link>
      </div>
    </Section>
  );
}
