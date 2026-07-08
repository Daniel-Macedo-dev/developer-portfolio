import { featuredProjects } from "@/data/projects";
import { FeaturedProjectsGrid } from "@/components/projects/featured-projects-grid";
import { Section } from "@/components/section";

export function FeaturedProjects() {
  return (
    <Section
      id="projetos"
      eyebrow="projetos em destaque"
      title="Trabalhos que representam minha engenharia"
      description="Projetos completos com problema, solução e decisões técnicas documentadas — do desktop local-first a integrações com IA generativa."
      className="border-t border-border bg-surface/30"
    >
      <FeaturedProjectsGrid projects={featuredProjects} />
    </Section>
  );
}
