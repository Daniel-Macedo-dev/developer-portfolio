import { education } from "@/data/profile";
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
          <Reveal key={item.title} delay={index * 0.05}>
            <li className="rounded-card border border-border bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-faint">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">
                {item.institution}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
