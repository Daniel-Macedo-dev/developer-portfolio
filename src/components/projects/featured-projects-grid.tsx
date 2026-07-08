import type { Locale } from "@/data/locales";
import type { Project } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { Reveal } from "@/components/motion/reveal";

interface FeaturedProjectsGridProps {
  projects: Project[];
  locale: Locale;
}

/**
 * Composição padrão dos projetos em destaque: o primeiro em largura
 * total com maior proeminência, os demais em grade de duas colunas.
 */
export function FeaturedProjectsGrid({
  projects,
  locale,
}: FeaturedProjectsGridProps) {
  const [main, ...others] = projects;

  return (
    <div className="space-y-6">
      {main && (
        <Reveal>
          <FeaturedProjectCard project={main} locale={locale} prominent />
        </Reveal>
      )}
      <div className="grid gap-6 lg:grid-cols-2">
        {others.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <FeaturedProjectCard project={project} locale={locale} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
