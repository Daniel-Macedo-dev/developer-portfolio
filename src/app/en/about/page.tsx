import type { Metadata } from "next";

import { ui } from "@/data/ui";
import { AboutPage } from "@/components/pages/about-page";
import { buildAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: ui.en.aboutPage.metaTitle,
  description: ui.en.aboutPage.metaDescription,
  alternates: buildAlternates("/about", "en"),
};

export default function EnglishAbout() {
  return <AboutPage locale="en" />;
}
