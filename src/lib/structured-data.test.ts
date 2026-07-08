import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";
import {
  personJsonLd,
  projectJsonLd,
  serializeJsonLd,
  webSiteJsonLd,
} from "./structured-data";

describe("dados estruturados", () => {
  it("gera Person apenas com perfis públicos verificados", () => {
    const person = personJsonLd("pt-BR");
    expect(person["@type"]).toBe("Person");
    expect(person.name).toBe("Daniel Macedo Silva");
    expect(person.sameAs).toEqual([
      "https://github.com/Daniel-Macedo-dev",
      "https://www.linkedin.com/in/daniel-macedo-dev/",
    ]);
    // Regra de verdade: sem cargo, empregador, prêmios ou métricas.
    for (const forbidden of ["jobTitle", "worksFor", "award", "aggregateRating"]) {
      expect(person[forbidden]).toBeUndefined();
    }
  });

  it("gera WebSite com os dois idiomas", () => {
    const site = webSiteJsonLd("en");
    expect(site["@type"]).toBe("WebSite");
    expect(site.inLanguage).toEqual(["pt-BR", "en"]);
  });

  it("gera SoftwareSourceCode válido e parseável para todos os projetos e idiomas", () => {
    for (const project of projects) {
      for (const locale of ["pt-BR", "en"] as const) {
        const data = projectJsonLd(project, locale);
        expect(data["@type"]).toBe("SoftwareSourceCode");
        expect(data.name).toBe(project.name);
        expect(String(data.url)).toContain(`/projects/${project.slug}`);
        if (locale === "en") {
          expect(String(data.url)).toContain("/en/");
        }
        if (project.repoUrl) {
          expect(data.codeRepository).toBe(project.repoUrl);
        } else {
          expect(data.codeRepository).toBeUndefined();
        }
        const parsed = JSON.parse(serializeJsonLd(data));
        expect(parsed["@context"]).toBe("https://schema.org");
      }
    }
  });

  it("escapa < na serialização para uso seguro em script", () => {
    const out = serializeJsonLd({ x: "</script><b>" });
    expect(out).not.toContain("</script>");
    expect(JSON.parse(out).x).toBe("</script><b>");
  });
});
