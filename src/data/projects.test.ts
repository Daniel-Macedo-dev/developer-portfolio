import { existsSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import {
  backendProjects,
  featuredProjects,
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
} from "./projects";

describe("integridade dos dados de projetos", () => {
  it("possui slugs únicos", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("usa slugs seguros para URL (kebab-case)", () => {
    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("preenche os campos obrigatórios de todos os projetos", () => {
    for (const project of projects) {
      expect(project.name.trim()).not.toBe("");
      expect(project.tagline.trim()).not.toBe("");
      expect(project.summary.trim()).not.toBe("");
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.highlights.length).toBeGreaterThan(0);
    }
  });

  it("só aponta repositórios para URLs do GitHub via https", () => {
    for (const project of projects) {
      if (project.repoUrl) {
        expect(project.repoUrl).toMatch(/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/);
      }
    }
  });

  it("aponta logos somente para arquivos reais dentro de public/", () => {
    for (const project of projects) {
      if (project.logo) {
        expect(project.logo).toMatch(/^\/projects\/[\w.-]+\.(svg|png|webp)$/);
        expect(
          existsSync(path.join(process.cwd(), "public", project.logo)),
        ).toBe(true);
      }
    }
  });

  it("aponta screenshots para arquivos reais com alt, legenda e dimensões", () => {
    for (const project of projects) {
      for (const shot of project.screenshots ?? []) {
        expect(
          existsSync(path.join(process.cwd(), "public", shot.src)),
          `arquivo ausente: ${shot.src}`,
        ).toBe(true);
        expect(shot.alt.trim().length).toBeGreaterThan(10);
        expect(shot.caption.trim()).not.toBe("");
        expect(shot.width).toBeGreaterThan(0);
        expect(shot.height).toBeGreaterThan(0);
      }
    }
  });

  it("dá screenshots reais a todos os projetos em destaque", () => {
    for (const project of featuredProjects) {
      expect(project.screenshots?.length ?? 0).toBeGreaterThanOrEqual(3);
    }
  });

  it("marca como destaque apenas projetos flagship", () => {
    for (const project of projects) {
      if (project.featured) {
        expect(project.category).toBe("flagship");
      }
    }
  });

  it("mantém os três projetos em destaque com BreakInv em primeiro", () => {
    expect(featuredProjects.length).toBe(3);
    expect(featuredProjects[0].slug).toBe("breakinv");
    const featuredSlugs = featuredProjects.map((p) => p.slug);
    expect(featuredSlugs).toContain("guessme");
    expect(featuredSlugs).toContain("jovemtour-store");
  });

  it("dá case study completo a todos os projetos em destaque", () => {
    for (const project of featuredProjects) {
      expect(project.caseStudy).toBeDefined();
      expect(project.caseStudy?.context.trim()).not.toBe("");
      expect(project.caseStudy?.solution.trim()).not.toBe("");
      expect(project.caseStudy?.engineering.length).toBeGreaterThan(0);
    }
  });

  it("separa corretamente os projetos backend", () => {
    expect(backendProjects.length).toBeGreaterThan(0);
    for (const project of backendProjects) {
      expect(project.category).toBe("backend");
      expect(project.featured).toBe(false);
    }
  });
});

describe("resolução de slug", () => {
  it("resolve um slug válido para o projeto correspondente", () => {
    const project = getProjectBySlug("breakinv");
    expect(project?.name).toBe("BreakInv");
  });

  it("retorna undefined para slug inexistente", () => {
    expect(getProjectBySlug("nao-existe")).toBeUndefined();
  });

  it("expõe todos os slugs para geração estática de rotas", () => {
    const slugs = getAllProjectSlugs();
    expect(slugs.length).toBe(projects.length);
    for (const slug of slugs) {
      expect(getProjectBySlug(slug)).toBeDefined();
    }
  });
});
