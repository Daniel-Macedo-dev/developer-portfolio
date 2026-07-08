import Image from "next/image";
import Link from "next/link";

import { localePath, type Locale } from "@/data/locales";
import {
  getProjectContent,
  projects,
  type Project,
} from "@/data/projects";
import { ui } from "@/data/ui";
import { ButtonLink } from "@/components/button-link";
import { JsonLd } from "@/components/json-ld";
import { projectJsonLd } from "@/lib/structured-data";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GitHubIcon,
} from "@/components/icons";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { TechTag } from "@/components/tech-tag";

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

export function ProjectDetailPage({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const strings = ui[locale].projectDetail;
  const content = getProjectContent(project, locale);

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <JsonLd data={projectJsonLd(project, locale)} />
      <nav aria-label="Breadcrumb" className="font-mono text-xs text-faint">
        <Link
          href={localePath("/projects", locale)}
          className="transition-colors hover:text-foreground"
        >
          {strings.breadcrumb}
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
              {strings.badge}
            </span>
          )}
        </div>
        <p className="mt-3 text-lg font-medium text-accent">{content.tagline}</p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {content.summary}
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
              {strings.viewRepo}
              <ArrowUpRightIcon width={14} height={14} />
            </ButtonLink>
          </div>
        )}
      </header>

      {content.caseStudy && (
        <>
          <DetailSection title={strings.context}>
            <p className="text-base leading-relaxed text-muted">
              {content.caseStudy.context}
            </p>
          </DetailSection>

          <DetailSection title={strings.solution}>
            <p className="text-base leading-relaxed text-muted">
              {content.caseStudy.solution}
            </p>
          </DetailSection>
        </>
      )}

      {project.screenshots && content.screenshots && (
        <DetailSection title={strings.screens}>
          <ProjectGallery
            screenshots={project.screenshots}
            text={content.screenshots}
            locale={locale}
          />
        </DetailSection>
      )}

      <DetailSection title={strings.features}>
        <BulletList items={content.highlights} />
      </DetailSection>

      {content.caseStudy && (
        <>
          <DetailSection title={strings.engineering}>
            <BulletList items={content.caseStudy.engineering} />
          </DetailSection>

          {content.caseStudy.architecture && (
            <DetailSection title={strings.architecture}>
              <ul className="space-y-2">
                {content.caseStudy.architecture.map((item) => (
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

          {content.caseStudy.challenges && (
            <DetailSection title={strings.challenges}>
              <BulletList items={content.caseStudy.challenges} />
            </DetailSection>
          )}
        </>
      )}

      <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
        <Link
          href={localePath("/projects", locale)}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          {strings.allProjects}
        </Link>
        <Link
          href={localePath(`/projects/${nextProject.slug}`, locale)}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          {strings.next}: {nextProject.name}
          <ArrowRightIcon width={16} height={16} />
        </Link>
      </footer>
    </article>
  );
}
