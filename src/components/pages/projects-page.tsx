import type { Locale } from "@/data/locales";
import { backendProjects, featuredProjects } from "@/data/projects";
import { ui } from "@/data/ui";
import { FeaturedProjectsGrid } from "@/components/projects/featured-projects-grid";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/motion/reveal";

export function ProjectsPage({ locale }: { locale: Locale }) {
  const strings = ui[locale].projectsPage;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <header>
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          {strings.eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {strings.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {strings.intro}
        </p>
      </header>

      <section aria-labelledby="destaque-titulo" className="mt-14">
        <h2
          id="destaque-titulo"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          {strings.featuredTitle}
        </h2>
        <div className="mt-6">
          <FeaturedProjectsGrid projects={featuredProjects} locale={locale} />
        </div>
      </section>

      <section aria-labelledby="backend-titulo" className="mt-16">
        <h2
          id="backend-titulo"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          {strings.backendTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {strings.backendIntro}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {backendProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} locale={locale} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
