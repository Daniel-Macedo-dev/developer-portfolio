import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  /** Rótulo curto em monoespaçada acima do título. */
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/** Seção padrão com cabeçalho consistente (eyebrow + título + descrição). */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
