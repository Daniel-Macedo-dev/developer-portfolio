import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("inclui as rotas estáticas e todas as rotas de projeto", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls.some((url) => url.endsWith("/projects"))).toBe(true);
    expect(urls.some((url) => url.endsWith("/about"))).toBe(true);
    for (const project of projects) {
      expect(urls).toContain(`http://localhost:3000/projects/${project.slug}`);
    }
  });

  it("gera URLs absolutas a partir do fallback local", () => {
    for (const entry of sitemap()) {
      expect(entry.url).toMatch(/^http:\/\/localhost:3000/);
    }
  });
});
