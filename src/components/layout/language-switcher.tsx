"use client";

import { usePathname } from "next/navigation";

import { localePath, type Locale } from "@/data/locales";

interface LanguageSwitcherProps {
  locale: Locale;
  /** Rótulo acessível do nav de idiomas, no idioma atual. */
  label: string;
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
export function LanguageSwitcher({
  locale,
  label,
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const path = canonicalPath(pathname);

  const options: { locale: Locale; label: string; lang: string }[] = [
    { locale: "pt-BR", label: "Português", lang: "pt-BR" },
    { locale: "en", label: "English", lang: "en" },
  ];

  return (
    <nav aria-label={label}>
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
                className={`block rounded text-center font-mono transition-colors ${
                  compact
                    ? "min-h-11 content-center px-3 text-sm"
                    : "px-2.5 py-1 text-xs"
                } ${
                  current
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-foreground"
                }`}
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
