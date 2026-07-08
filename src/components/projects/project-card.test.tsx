// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { Project } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { FeaturedProjectCard } from "./featured-project-card";

const baseProject: Project = {
  slug: "projeto-exemplo",
  name: "projeto-exemplo",
  tagline: "Uma API de exemplo para testes",
  summary: "Resumo do projeto de exemplo.",
  category: "backend",
  featured: false,
  stack: ["Java", "Spring Boot"],
  repoUrl: "https://github.com/Daniel-Macedo-dev/projeto-exemplo",
  highlights: ["Destaque um", "Destaque dois"],
};

describe("ProjectCard", () => {
  it("liga o título para a página de detalhe do projeto", () => {
    render(<ProjectCard project={baseProject} />);
    const link = screen.getByRole("link", { name: "projeto-exemplo" });
    expect(link.getAttribute("href")).toBe("/projects/projeto-exemplo");
  });

  it("renderiza link seguro para o repositório quando verificado", () => {
    render(<ProjectCard project={baseProject} />);
    const repoLink = screen.getByRole("link", {
      name: /repositório de projeto-exemplo/i,
    });
    expect(repoLink.getAttribute("href")).toBe(baseProject.repoUrl);
    expect(repoLink.getAttribute("target")).toBe("_blank");
    expect(repoLink.getAttribute("rel")).toContain("noopener");
  });

  it("omite o link de repositório quando não há URL verificada", () => {
    render(
      <ProjectCard project={{ ...baseProject, repoUrl: undefined }} />,
    );
    expect(screen.queryByRole("link", { name: /repositório/i })).toBeNull();
  });
});

describe("FeaturedProjectCard", () => {
  it("mostra o selo de projeto principal apenas quando prominent", () => {
    const { rerender } = render(
      <FeaturedProjectCard project={baseProject} prominent />,
    );
    expect(screen.getByText("projeto principal")).toBeDefined();

    rerender(<FeaturedProjectCard project={baseProject} />);
    expect(screen.queryByText("projeto principal")).toBeNull();
  });

  it("limita os destaques exibidos no card", () => {
    const project: Project = {
      ...baseProject,
      highlights: ["a", "b", "c", "d", "e", "f"],
    };
    render(<FeaturedProjectCard project={project} prominent />);
    expect(screen.getAllByRole("listitem").length).toBe(4);
  });
});
