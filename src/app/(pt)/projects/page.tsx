import type { Metadata } from "next";

import { ui } from "@/data/ui";
import { ProjectsPage } from "@/components/pages/projects-page";
import { buildAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: ui["pt-BR"].projectsPage.metaTitle,
  description: ui["pt-BR"].projectsPage.metaDescription,
  alternates: buildAlternates("/projects", "pt-BR"),
};

export default function Projects() {
  return <ProjectsPage locale="pt-BR" />;
}
