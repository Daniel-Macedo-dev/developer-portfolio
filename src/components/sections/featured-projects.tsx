import { featuredProjects } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

export function FeaturedProjects() {
  const [main, ...others] = featuredProjects;

  return (
    <Section
      id="projetos"
      eyebrow="projetos em destaque"
      title="Trabalhos que representam minha engenharia"
      description="Projetos completos com problema, solução e decisões técnicas documentadas — do desktop local-first a integrações com IA generativa."
      className="border-t border-border bg-surface/30"
    >
      <div className="space-y-6">
        {main && (
          <Reveal>
            <FeaturedProjectCard project={main} prominent />
          </Reveal>
        )}
        <div className="grid gap-6 lg:grid-cols-2">
          {others.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <FeaturedProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
