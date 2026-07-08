interface TechTagProps {
  label: string;
}

/** Rótulo técnico compacto em monoespaçada, usado para stacks. */
export function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface px-2 py-1 font-mono text-xs text-muted">
      {label}
    </span>
  );
}
