import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectContent,
} from "@/data/projects";
import { ProjectDetailPage } from "@/components/pages/project-detail-page";
import { buildPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const content = getProjectContent(project, "pt-BR");
  return buildPageMetadata({
    locale: "pt-BR",
    path: `/projects/${slug}`,
    title: project.name,
    description: content.summary,
    ogDescription: content.tagline,
  });
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailPage project={project} locale="pt-BR" />;
}
