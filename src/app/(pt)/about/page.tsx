import type { Metadata } from "next";

import { ui } from "@/data/ui";
import { AboutPage } from "@/components/pages/about-page";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "pt-BR",
  path: "/about",
  title: ui["pt-BR"].aboutPage.metaTitle,
  description: ui["pt-BR"].aboutPage.metaDescription,
});

export default function About() {
  return <AboutPage locale="pt-BR" />;
}
