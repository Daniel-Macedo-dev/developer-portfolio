import { education } from "@/data/profile";
import { EducationCard } from "@/components/education-card";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

export function Education() {
  return (
    <Section
      eyebrow="formação"
      title="Base acadêmica e técnica"
      className="border-t border-border bg-surface/30"
    >
      <ol className="space-y-5">
        {education.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={index * 0.05}>
              <EducationCard item={item} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
