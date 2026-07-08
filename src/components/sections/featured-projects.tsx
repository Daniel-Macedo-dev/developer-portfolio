import type { Locale } from "@/data/locales";
import { featuredProjects } from "@/data/projects";
import { ui } from "@/data/ui";
import { FeaturedProjectsGrid } from "@/components/projects/featured-projects-grid";
import { Section } from "@/components/section";

interface FeaturedProjectsProps {
  locale: Locale;
}

export function FeaturedProjects({ locale }: FeaturedProjectsProps) {
  const strings = ui[locale].featured;

  return (
    <Section
      id="projetos"
      eyebrow={strings.eyebrow}
      title={strings.title}
      description={strings.description}
      className="border-t border-border bg-surface/30"
    >
      <FeaturedProjectsGrid projects={featuredProjects} locale={locale} />
    </Section>
  );
}
