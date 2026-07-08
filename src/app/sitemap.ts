import type { MetadataRoute } from "next";

import { getAllProjectSlugs } from "@/data/projects";
import { getSiteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/projects`, priority: 0.9 },
    { url: `${siteUrl}/about`, priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: `${siteUrl}/projects/${slug}`,
      priority: 0.8,
    }),
  );

  return [...staticRoutes, ...projectRoutes];
}
