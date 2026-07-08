import type { Metadata } from "next";

import { ui } from "@/data/ui";
import { ProjectsPage } from "@/components/pages/projects-page";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/projects",
  title: ui.en.projectsPage.metaTitle,
  description: ui.en.projectsPage.metaDescription,
});

export default function EnglishProjects() {
  return <ProjectsPage locale="en" />;
}
