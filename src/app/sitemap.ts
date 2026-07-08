import type { MetadataRoute } from "next";

import { alternatePaths, localePath, locales } from "@/data/locales";
import { getAllProjectSlugs } from "@/data/projects";
import { getSiteUrl } from "@/data/site";

/** Caminhos canônicos (sem prefixo de idioma) de todas as páginas. */
function canonicalPaths(): { path: string; priority: number }[] {
  return [
    { path: "/", priority: 1 },
    { path: "/projects", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    ...getAllProjectSlugs().map((slug) => ({
      path: `/projects/${slug}`,
      priority: 0.8,
    })),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return canonicalPaths().flatMap(({ path, priority }) => {
    const alternates = alternatePaths(path);
    const languages = {
      "pt-BR": `${siteUrl}${alternates["pt-BR"]}`,
      en: `${siteUrl}${alternates.en}`,
      "x-default": `${siteUrl}${alternates["x-default"]}`,
    };
    return locales.map((locale) => ({
      url: `${siteUrl}${localePath(path, locale)}`,
      priority: locale === "pt-BR" ? priority : priority - 0.1,
      alternates: { languages },
    }));
  });
}
