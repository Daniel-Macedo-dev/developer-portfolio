import type { Metadata } from "next";

import { ui } from "@/data/ui";
import { ProjectsPage } from "@/components/pages/projects-page";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "pt-BR",
  path: "/projects",
  title: ui["pt-BR"].projectsPage.metaTitle,
  description: ui["pt-BR"].projectsPage.metaDescription,
});

export default function Projects() {
  return <ProjectsPage locale="pt-BR" />;
}
