export const site = {
  name: "Daniel Macedo Silva",
  shortName: "Daniel Macedo",
  email: "danielmacedosilva11@gmail.com",
  links: {
    github: "https://github.com/Daniel-Macedo-dev",
    linkedin: "https://www.linkedin.com/in/daniel-macedo-dev/",
    repository: "https://github.com/Daniel-Macedo-dev/developer-portfolio",
  },
} as const;

/**
 * Base URL used for metadata, sitemap and Open Graph.
 * Configure NEXT_PUBLIC_SITE_URL in production (e.g. on Vercel);
 * falls back to localhost for local development.
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
