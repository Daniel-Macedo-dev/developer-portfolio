import { localePath, type Locale } from "@/data/locales";
import { getProjectContent, type Project } from "@/data/projects";
import { getSiteUrl, site } from "@/data/site";
import { ui } from "@/data/ui";

/**
 * JSON-LD factual mínimo. Regra de verdade: apenas dados públicos
 * verificados — nada de cargos, empregadores, métricas ou perfis
 * inventados. sameAs usa somente GitHub e LinkedIn reais.
 */

type JsonLd = Record<string, unknown>;

export function personJsonLd(locale: Locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `${getSiteUrl()}${localePath("/", locale)}`,
    sameAs: [site.links.github, site.links.linkedin],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Python",
      "SQL",
      "REST APIs",
      "React",
      "TypeScript",
    ],
  };
}

export function webSiteJsonLd(locale: Locale): JsonLd {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: siteUrl,
    description: ui[locale].meta.description,
    inLanguage: ["pt-BR", "en"],
  };
}

export function projectJsonLd(project: Project, locale: Locale): JsonLd {
  const content = getProjectContent(project, locale);
  const url = `${getSiteUrl()}${localePath(`/projects/${project.slug}`, locale)}`;
  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: content.summary,
    url,
    inLanguage: locale,
    programmingLanguage: project.stack,
    author: {
      "@type": "Person",
      name: site.name,
      url: getSiteUrl(),
    },
  };
  if (project.repoUrl) {
    data.codeRepository = project.repoUrl;
  }
  if (project.screenshots?.[0]) {
    data.image = `${getSiteUrl()}${project.screenshots[0].src}`;
  }
  return data;
}

/**
 * Serialização segura para <script type="application/ld+json">:
 * escapa "<" para impedir encerramento prematuro da tag.
 */
export function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
