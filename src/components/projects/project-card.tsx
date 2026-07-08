import Link from "next/link";

import type { Project } from "@/data/projects";
import { ExternalLink } from "@/components/external-link";
import { GitHubIcon } from "@/components/icons";
import { TechTag } from "@/components/tech-tag";

interface ProjectCardProps {
  project: Project;
}

/** Card compacto para projetos de backend/API. */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-card border border-border bg-surface p-5 transition-colors hover:border-border-strong">
      <h3 className="font-mono text-sm font-semibold text-foreground">
        <Link
          href={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {project.name}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.tagline}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>
      {project.repoUrl && (
        <ExternalLink
          href={project.repoUrl}
          aria-label={`Repositório de ${project.name} no GitHub`}
          className="relative z-10 mt-4 inline-flex w-fit items-center gap-1.5 text-xs text-faint transition-colors hover:text-foreground"
        >
          <GitHubIcon width={14} height={14} />
          Repositório
        </ExternalLink>
      )}
    </article>
  );
}
