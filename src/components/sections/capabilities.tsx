import type { Locale } from "@/data/locales";
import { capabilities } from "@/data/profile";
import { ui } from "@/data/ui";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { TechTag } from "@/components/tech-tag";

interface CapabilitiesProps {
  locale: Locale;
}

export function Capabilities({ locale }: CapabilitiesProps) {
  const strings = ui[locale].capabilities;

  return (
    <Section
      eyebrow={strings.eyebrow}
      title={strings.title}
      description={strings.description}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {capabilities[locale].map((area, index) => (
          <Reveal key={area.title} delay={index * 0.05}>
            <div className="flex h-full flex-col rounded-card border border-border bg-surface p-6">
              <h3 className="text-base font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {area.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {area.stack.map((tech) => (
                  <TechTag key={tech} label={tech} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
