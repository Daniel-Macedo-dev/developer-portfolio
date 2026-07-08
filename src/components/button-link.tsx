import Link from "next/link";
import type { ReactNode } from "react";

import { ExternalLink } from "@/components/external-link";

type ButtonVariant = "primary" | "secondary";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex min-h-11 items-center gap-2 rounded-md bg-accent-strong px-5 text-sm font-medium text-background transition-colors hover:bg-accent",
  secondary:
    "inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:border-border-strong",
};

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  /** Classes adicionais (ex.: largura total no mobile). */
  className?: string;
}

/**
 * Link com aparência de botão nas duas variantes do sistema.
 * Resolve automaticamente navegação interna, e-mail e link externo seguro.
 */
export function ButtonLink({
  href,
  variant = "secondary",
  children,
  className: extraClassName,
}: ButtonLinkProps) {
  const className = extraClassName
    ? `${variantClasses[variant]} ${extraClassName}`
    : variantClasses[variant];

  if (href.startsWith("http")) {
    return (
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
