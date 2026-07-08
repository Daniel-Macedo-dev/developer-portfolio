import type { Locale } from "@/data/locales";
import { education } from "@/data/profile";
import { ui } from "@/data/ui";
import { EducationCard } from "@/components/education-card";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";

interface EducationProps {
  locale: Locale;
}

export function Education({ locale }: EducationProps) {
  const strings = ui[locale].education;

  return (
    <Section
      eyebrow={strings.eyebrow}
      title={strings.title}
      className="border-t border-border bg-surface/30"
    >
      <ol className="space-y-5">
        {education[locale].map((item, index) => (
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
