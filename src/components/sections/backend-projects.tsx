import Link from "next/link";

import { localePath, type Locale } from "@/data/locales";
import { backendProjects } from "@/data/projects";
import { ui } from "@/data/ui";
import { ArrowRightIcon } from "@/components/icons";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

interface BackendProjectsProps {
  locale: Locale;
}

export function BackendProjects({ locale }: BackendProjectsProps) {
  const strings = ui[locale].backend;

  return (
    <Section
      eyebrow={strings.eyebrow}
      title={strings.title}
      description={strings.description}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {backendProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.04}>
            <ProjectCard project={project} locale={locale} />
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href={localePath("/projects", locale)}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          {strings.viewAll}
          <ArrowRightIcon width={16} height={16} />
        </Link>
      </div>
    </Section>
  );
}
