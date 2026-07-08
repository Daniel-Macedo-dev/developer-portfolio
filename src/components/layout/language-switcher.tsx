"use client";

import { usePathname } from "next/navigation";

import { localePath, type Locale } from "@/data/locales";
import { ui } from "@/data/ui";

interface LanguageSwitcherProps {
  locale: Locale;
  /** Layout empilhado para o menu mobile. */
  compact?: boolean;
}

/** Remove o prefixo /en para obter o caminho canônico equivalente. */
function canonicalPath(pathname: string): string {
  if (pathname === "/en") return "/";
  return pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
}

/**
 * Alternância de idioma com dois links explícitos (sem dropdown, sem
 * bandeiras como única identificação). Preserva a rota equivalente.
 * Links âncora nativos: trocar de root layout exige documento novo.
 */
export function LanguageSwitcher({ locale, compact = false }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const path = canonicalPath(pathname);
  const strings = ui[locale].languageSwitcher;

  const options: { locale: Locale; label: string; lang: string }[] = [
    { locale: "pt-BR", label: strings.ptName, lang: "pt-BR" },
    { locale: "en", label: strings.enName, lang: "en" },
  ];

  return (
    <nav aria-label={strings.label}>
      <ul
        className={
          compact
            ? "flex gap-2"
            : "flex items-center rounded-md border border-border bg-surface p-0.5"
        }
      >
        {options.map((option) => {
          const current = option.locale === locale;
          return (
            <li key={option.locale} className={compact ? "flex-1" : undefined}>
              <a
                href={localePath(path, option.locale)}
                lang={option.lang}
                hrefLang={option.lang}
                aria-current={current ? "true" : undefined}
                className={`block rounded px-2.5 py-1 text-center font-mono text-xs transition-colors ${
                  current
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-foreground"
                } ${compact ? "min-h-11 content-center px-3 text-sm" : ""}`}
              >
                {option.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
