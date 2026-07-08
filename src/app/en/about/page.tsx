import type { Metadata } from "next";

import { ui } from "@/data/ui";
import { AboutPage } from "@/components/pages/about-page";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/about",
  title: ui.en.aboutPage.metaTitle,
  description: ui.en.aboutPage.metaDescription,
});

export default function EnglishAbout() {
  return <AboutPage locale="en" />;
}
