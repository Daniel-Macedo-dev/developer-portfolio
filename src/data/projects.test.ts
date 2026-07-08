import { existsSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { locales } from "./locales";
import {
  backendProjects,
  featuredProjects,
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectContent,
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

  it("preenche os campos obrigatórios em todos os idiomas", () => {
    for (const project of projects) {
      expect(project.name.trim()).not.toBe("");
      expect(project.stack.length).toBeGreaterThan(0);
      for (const locale of locales) {
        const content = getProjectContent(project, locale);
        expect(content.tagline.trim(), `${project.slug}/${locale}`).not.toBe("");
        expect(content.summary.trim(), `${project.slug}/${locale}`).not.toBe("");
        expect(content.highlights.length, `${project.slug}/${locale}`).toBeGreaterThan(0);
      }
    }
  });

  it("mantém paridade estrutural de conteúdo entre pt-BR e en", () => {
    for (const project of projects) {
      const pt = project.content["pt-BR"];
      const en = project.content.en;
      expect(en.highlights.length, project.slug).toBe(pt.highlights.length);
      expect(Boolean(en.caseStudy), project.slug).toBe(Boolean(pt.caseStudy));
      if (pt.caseStudy && en.caseStudy) {
        expect(en.caseStudy.engineering.length).toBe(pt.caseStudy.engineering.length);
        expect(en.caseStudy.architecture?.length).toBe(pt.caseStudy.architecture?.length);
        expect(en.caseStudy.challenges?.length).toBe(pt.caseStudy.challenges?.length);
      }
      expect(en.screenshots?.length, project.slug).toBe(pt.screenshots?.length);
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

  it("aponta screenshots para arquivos reais com texto localizado completo", () => {
    for (const project of projects) {
      const shots = project.screenshots ?? [];
      for (const shot of shots) {
        expect(
          existsSync(path.join(process.cwd(), "public", shot.src)),
          `arquivo ausente: ${shot.src}`,
        ).toBe(true);
        expect(shot.width).toBeGreaterThan(0);
        expect(shot.height).toBeGreaterThan(0);
      }
      for (const locale of locales) {
        const text = getProjectContent(project, locale).screenshots ?? [];
        expect(text.length, `${project.slug}/${locale}`).toBe(shots.length);
        for (const t of text) {
          expect(t.alt.trim().length).toBeGreaterThan(10);
          expect(t.caption.trim()).not.toBe("");
        }
      }
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

  it("dá case study completo e screenshots reais aos projetos em destaque", () => {
    for (const project of featuredProjects) {
      expect(project.screenshots?.length ?? 0).toBeGreaterThanOrEqual(3);
      for (const locale of locales) {
        const content = getProjectContent(project, locale);
        expect(content.caseStudy).toBeDefined();
        expect(content.caseStudy?.context.trim()).not.toBe("");
        expect(content.caseStudy?.solution.trim()).not.toBe("");
        expect(content.caseStudy?.engineering.length).toBeGreaterThan(0);
      }
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
