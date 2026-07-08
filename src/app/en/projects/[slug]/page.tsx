import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectContent,
} from "@/data/projects";
import { ProjectDetailPage } from "@/components/pages/project-detail-page";
import { buildAlternates } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/en/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const content = getProjectContent(project, "en");
  return {
    title: project.name,
    description: content.summary,
    alternates: buildAlternates(`/projects/${slug}`, "en"),
    openGraph: {
      title: project.name,
      description: content.tagline,
    },
  };
}

export default async function EnglishProjectPage({
  params,
}: PageProps<"/en/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailPage project={project} locale="en" />;
}
