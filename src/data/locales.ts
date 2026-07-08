/**
 * Modelo mínimo de localização: dois idiomas, URLs pt-BR preservadas na
 * raiz e inglês sob /en. Sem framework de i18n — dicionários tipados.
 */
export const locales = ["pt-BR", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

/** Conteúdo que varia por idioma. */
export type Localized<T> = Record<Locale, T>;

/**
 * Converte um caminho canônico (sem prefixo de idioma) para o caminho
 * real do idioma. Ex.: ("/projects", "en") → "/en/projects".
 */
export function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/**
 * Mapa de rotas alternativas por idioma para um caminho canônico —
 * usado em hreflang e no sitemap. x-default aponta para o pt-BR, o
 * idioma principal do site.
 */
export function alternatePaths(
  path: string,
): Record<Locale | "x-default", string> {
  return {
    "pt-BR": localePath(path, "pt-BR"),
    en: localePath(path, "en"),
    "x-default": localePath(path, defaultLocale),
  };
}
