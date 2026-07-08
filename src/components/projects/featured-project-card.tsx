import Link from "next/link";

import { localePath, type Locale } from "@/data/locales";
import { getProjectContent, type Project } from "@/data/projects";
import { ui } from "@/data/ui";
import { ExternalLink } from "@/components/external-link";
import { ArrowRightIcon, GitHubIcon } from "@/components/icons";
import { TechTag } from "@/components/tech-tag";

interface FeaturedProjectCardProps {
  project: Project;
  locale: Locale;
  /** Card em largura total com mais destaques (usado para o projeto principal). */
  prominent?: boolean;
}

/** Card de projeto em destaque, com resumo, destaques e stack. */
export function FeaturedProjectCard({
  project,
  locale,
  prominent = false,
}: FeaturedProjectCardProps) {
  const strings = ui[locale].featured;
  const content = getProjectContent(project, locale);
  const highlights = content.highlights.slice(0, prominent ? 4 : 3);

  return (
    <article
      className={`group relative flex flex-col rounded-card border border-border bg-surface p-6 shadow-card transition-colors hover:border-border-strong sm:p-8 ${
        prominent ? "border-l-2 border-l-accent" : ""
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          <Link
            href={localePath(`/projects/${project.slug}`, locale)}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {project.name}
          </Link>
        </h3>
        {prominent && (
          <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
            {strings.badgeMain}
          </span>
        )}
      </div>

      <p className="mt-1 text-sm font-medium text-accent">{content.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {content.summary}
      </p>

      <ul className="mt-5 space-y-2">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-sm text-muted">
            <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mb-6 mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border pt-5">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
          {strings.viewCaseStudy}
          <ArrowRightIcon width={16} height={16} />
        </span>
        {project.repoUrl && (
          <ExternalLink
            href={project.repoUrl}
            className="relative z-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon width={16} height={16} />
            {strings.repository}
          </ExternalLink>
        )}
      </div>
    </article>
  );
}
