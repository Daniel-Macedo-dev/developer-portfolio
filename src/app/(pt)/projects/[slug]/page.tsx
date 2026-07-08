import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
} from "@/data/projects";
import { ButtonLink } from "@/components/button-link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GitHubIcon,
} from "@/components/icons";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { TechTag } from "@/components/tech-tag";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name,
      description: project.tagline,
    },
  };
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
          <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <nav aria-label="Trilha de navegação" className="font-mono text-xs text-faint">
        <Link href="/projects" className="transition-colors hover:text-foreground">
          projetos
        </Link>
        <span aria-hidden> / </span>
        <span className="text-muted">{project.slug}</span>
      </nav>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-4">
          {project.logo && (
            <Image
              src={project.logo}
              alt=""
              width={56}
              height={56}
              unoptimized
              className="rounded-card border border-border"
            />
          )}
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.name}
          </h1>
          {project.featured && (
            <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
              destaque
            </span>
          )}
        </div>
        <p className="mt-3 text-lg font-medium text-accent">
          {project.tagline}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>

        {project.repoUrl && (
          <div className="mt-6">
            <ButtonLink href={project.repoUrl}>
              <GitHubIcon width={16} height={16} />
              Ver repositório no GitHub
              <ArrowUpRightIcon width={14} height={14} />
            </ButtonLink>
          </div>
        )}
      </header>

      {project.caseStudy && (
        <>
          <DetailSection title="Contexto">
            <p className="text-base leading-relaxed text-muted">
              {project.caseStudy.context}
            </p>
          </DetailSection>

          <DetailSection title="Solução">
            <p className="text-base leading-relaxed text-muted">
              {project.caseStudy.solution}
            </p>
          </DetailSection>
        </>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <DetailSection title="O produto em telas">
          <ProjectGallery screenshots={project.screenshots} />
        </DetailSection>
      )}

      <DetailSection title="Principais funcionalidades">
        <BulletList items={project.highlights} />
      </DetailSection>

      {project.caseStudy && (
        <>
          <DetailSection title="Decisões de engenharia">
            <BulletList items={project.caseStudy.engineering} />
          </DetailSection>

          {project.caseStudy.architecture && (
            <DetailSection title="Arquitetura">
              <ul className="space-y-2">
                {project.caseStudy.architecture.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-4 py-3 font-mono text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {project.caseStudy.challenges && (
            <DetailSection title="Desafios e aprendizados">
              <BulletList items={project.caseStudy.challenges} />
            </DetailSection>
          )}
        </>
      )}

      <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          Todos os projetos
        </Link>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          Próximo: {nextProject.name}
          <ArrowRightIcon width={16} height={16} />
        </Link>
      </footer>
    </article>
  );
}
