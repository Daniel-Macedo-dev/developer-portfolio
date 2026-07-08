import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("inclui as rotas dos dois idiomas para páginas estáticas e projetos", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    // 3 páginas estáticas + projetos, cada uma em pt-BR e en.
    expect(entries.length).toBe((3 + projects.length) * 2);

    for (const path of ["/projects", "/about", "/en", "/en/projects", "/en/about"]) {
      expect(urls.some((url) => url.endsWith(path))).toBe(true);
    }
    for (const project of projects) {
      expect(urls).toContain(
        `http://localhost:3000/projects/${project.slug}`,
      );
      expect(urls).toContain(
        `http://localhost:3000/en/projects/${project.slug}`,
      );
    }
  });

  it("não gera URLs duplicadas", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("declara alternates de idioma com x-default apontando para o pt-BR", () => {
    for (const entry of sitemap()) {
      const languages = entry.alternates?.languages as Record<string, string>;
      expect(languages["pt-BR"]).toBeDefined();
      expect(languages.en).toBeDefined();
      expect(languages["x-default"]).toBe(languages["pt-BR"]);
    }
  });

  it("gera URLs absolutas a partir do fallback local", () => {
    for (const entry of sitemap()) {
      expect(entry.url).toMatch(/^http:\/\/localhost:3000/);
    }
  });
});
