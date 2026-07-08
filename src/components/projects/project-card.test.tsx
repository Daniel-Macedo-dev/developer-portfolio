// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { Project, ProjectContent } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { FeaturedProjectCard } from "./featured-project-card";

const content: ProjectContent = {
  tagline: "Uma API de exemplo para testes",
  summary: "Resumo do projeto de exemplo.",
  highlights: ["Destaque um", "Destaque dois"],
};

const baseProject: Project = {
  slug: "projeto-exemplo",
  name: "projeto-exemplo",
  category: "backend",
  featured: false,
  stack: ["Java", "Spring Boot"],
  repoUrl: "https://github.com/Daniel-Macedo-dev/projeto-exemplo",
  content: {
    "pt-BR": content,
    en: { ...content, tagline: "A sample API for tests" },
  },
};

describe("ProjectCard", () => {
  it("liga o título para a página de detalhe do projeto no idioma atual", () => {
    render(<ProjectCard project={baseProject} locale="pt-BR" />);
    const link = screen.getByRole("link", { name: "projeto-exemplo" });
    expect(link.getAttribute("href")).toBe("/projects/projeto-exemplo");
  });

  it("prefixa /en no link de detalhe quando o idioma é inglês", () => {
    render(<ProjectCard project={baseProject} locale="en" />);
    const link = screen.getByRole("link", { name: "projeto-exemplo" });
    expect(link.getAttribute("href")).toBe("/en/projects/projeto-exemplo");
    expect(screen.getByText("A sample API for tests")).toBeDefined();
  });

  it("renderiza link seguro para o repositório quando verificado", () => {
    render(<ProjectCard project={baseProject} locale="pt-BR" />);
    const repoLink = screen.getByRole("link", {
      name: /repositório de projeto-exemplo/i,
    });
    expect(repoLink.getAttribute("href")).toBe(baseProject.repoUrl);
    expect(repoLink.getAttribute("target")).toBe("_blank");
    expect(repoLink.getAttribute("rel")).toContain("noopener");
  });

  it("omite o link de repositório quando não há URL verificada", () => {
    render(
      <ProjectCard
        project={{ ...baseProject, repoUrl: undefined }}
        locale="pt-BR"
      />,
    );
    expect(screen.queryByRole("link", { name: /repositório/i })).toBeNull();
  });
});

describe("FeaturedProjectCard", () => {
  it("mostra o selo de projeto principal apenas quando prominent", () => {
    const { rerender } = render(
      <FeaturedProjectCard project={baseProject} locale="pt-BR" prominent />,
    );
    expect(screen.getByText("projeto principal")).toBeDefined();

    rerender(<FeaturedProjectCard project={baseProject} locale="pt-BR" />);
    expect(screen.queryByText("projeto principal")).toBeNull();
  });

  it("limita os destaques exibidos no card", () => {
    const project: Project = {
      ...baseProject,
      content: {
        "pt-BR": { ...content, highlights: ["a", "b", "c", "d", "e", "f"] },
        en: { ...content, highlights: ["a", "b", "c", "d", "e", "f"] },
      },
    };
    render(<FeaturedProjectCard project={project} locale="pt-BR" prominent />);
    expect(screen.getAllByRole("listitem").length).toBe(4);
  });
});
