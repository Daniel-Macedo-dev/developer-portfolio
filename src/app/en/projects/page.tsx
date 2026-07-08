import type { Metadata } from "next";

import { ui } from "@/data/ui";
import { ProjectsPage } from "@/components/pages/projects-page";
import { buildAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: ui.en.projectsPage.metaTitle,
  description: ui.en.projectsPage.metaDescription,
  alternates: buildAlternates("/projects", "en"),
};

export default function EnglishProjects() {
  return <ProjectsPage locale="en" />;
}
