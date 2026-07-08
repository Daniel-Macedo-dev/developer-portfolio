export const site = {
  name: "Daniel Macedo Silva",
  shortName: "Daniel Macedo",
  role: "Desenvolvimento de software, backend e soluções orientadas a dados",
  description:
    "Portfólio de Daniel Macedo Silva — desenvolvimento de software, backend e soluções orientadas a dados, com experiência prática em Java, Spring Boot, Python, SQL, APIs REST e projetos full-stack.",
  email: "danielmacedosilva11@gmail.com",
  links: {
    github: "https://github.com/Daniel-Macedo-dev",
    linkedin: "https://www.linkedin.com/in/daniel-macedo-dev/",
    repository: "https://github.com/Daniel-Macedo-dev/developer-portfolio",
  },
} as const;

export const navItems = [
  { href: "/", label: "Início" },
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
] as const;

/**
 * Base URL used for metadata, sitemap and Open Graph.
 * Configure NEXT_PUBLIC_SITE_URL in production (e.g. on Vercel);
 * falls back to localhost for local development.
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
