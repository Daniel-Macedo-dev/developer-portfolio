import type { Metadata } from "next";

import { alternatePaths, localePath, type Locale } from "@/data/locales";
import { ui } from "@/data/ui";
import { ogImageAlt, ogImageSize } from "@/lib/og-image";

const siteName = "Daniel Macedo Silva";

/** Referência explícita à imagem social do idioma (rota /og/[locale]). */
function ogImages(locale: Locale) {
  return [
    {
      url: `/og/${locale}`,
      width: ogImageSize.width,
      height: ogImageSize.height,
      alt: ogImageAlt(locale),
      type: "image/png",
    },
  ];
}

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

/** Bloco Open Graph completo — páginas que definem openGraph parcial
 *  perderiam type/locale/siteName herdados do layout no merge raso. */
function buildOpenGraph(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    locale: locale === "en" ? "en_US" : "pt_BR",
    siteName,
    url: localePath(path, locale),
    title,
    description,
    images: ogImages(locale),
  };
}

/** Metadata raiz de um idioma (título, descrição, OG, alternates da home). */
export function buildRootMetadata(locale: Locale, siteUrl: string): Metadata {
  const strings = ui[locale];
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: strings.meta.siteTitle,
      template: `%s — Daniel Macedo`,
    },
    description: strings.meta.description,
    alternates: buildAlternates("/", locale),
    openGraph: buildOpenGraph(
      locale,
      "/",
      strings.meta.siteTitle,
      strings.meta.description,
    ),
    twitter: {
      card: "summary_large_image",
      title: strings.meta.siteTitle,
      description: strings.meta.description,
      images: ogImages(locale),
    },
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  };
}

/**
 * Metadata completa de uma página interna: título, descrição, alternates
 * e Open Graph/Twitter consistentes entre si e com o idioma da rota.
 */
export function buildPageMetadata(options: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogDescription?: string;
}): Metadata {
  const { locale, path, title, description } = options;
  const ogDescription = options.ogDescription ?? description;
  return {
    title,
    description,
    alternates: buildAlternates(path, locale),
    openGraph: buildOpenGraph(locale, path, title, ogDescription),
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: ogImages(locale),
    },
  };
}
