import type { Metadata } from "next";

import { alternatePaths, type Locale } from "@/data/locales";
import { ui } from "@/data/ui";

/**
 * Alternates de idioma (canonical + hreflang) para uma página, a partir
 * do caminho canônico sem prefixo de idioma. Resolvidos contra o
 * metadataBase definido no layout.
 */
export function buildAlternates(
  path: string,
  locale: Locale,
): NonNullable<Metadata["alternates"]> {
  const alternates = alternatePaths(path);
  return {
    canonical: alternates[locale],
    languages: {
      "pt-BR": alternates["pt-BR"],
      en: alternates.en,
      "x-default": alternates["x-default"],
    },
  };
}

/** Metadata raiz de um idioma (título, descrição, OG, alternates da home). */
export function buildRootMetadata(locale: Locale, siteUrl: string): Metadata {
  const strings = ui[locale];
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: strings.meta.siteTitle,
      template: `%s — Daniel Macedo`,
    },
    description: strings.meta.description,
    alternates: buildAlternates("/", locale),
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "pt_BR",
      siteName: "Daniel Macedo Silva",
      title: strings.meta.siteTitle,
      description: strings.meta.description,
    },
    twitter: {
      card: "summary",
      title: strings.meta.siteTitle,
      description: strings.meta.description,
    },
  };
}
