import type { EducationItem } from "@/data/profile";

interface EducationCardProps {
  item: EducationItem;
}

/** Card de item de formação, usado na home e na página Sobre. */
export function EducationCard({ item }: EducationCardProps) {
  return (
    <div className="rounded-card border border-border bg-surface p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-semibold text-foreground">
          {item.title}
        </h3>
        <span className="font-mono text-xs text-faint">{item.period}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-accent">
        {item.institution}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {item.description}
      </p>
    </div>
  );
}
