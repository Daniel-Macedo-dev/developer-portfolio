import Link from "next/link";

import { site } from "@/data/site";
import { ExternalLink } from "@/components/external-link";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Realce radial sutil no topo, apenas composição. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,rgba(255,138,61,0.08),transparent_65%)]"
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="font-mono text-sm text-accent">
            Olá, eu sou o Daniel —
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Desenvolvimento de software, backend e soluções orientadas a dados.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Estudante de Análise e Desenvolvimento de Sistemas na FATEC Zona
            Sul e Técnico em Informática, com experiência prática em Java,
            Spring Boot, Python, SQL, APIs REST, bancos de dados e projetos
            full-stack.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent-strong px-5 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              Ver projetos
              <ArrowRightIcon width={16} height={16} />
            </Link>
            <ExternalLink
              href={site.links.github}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
            >
              <GitHubIcon width={16} height={16} />
              GitHub
            </ExternalLink>
            <ExternalLink
              href={site.links.linkedin}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
            >
              <LinkedInIcon width={16} height={16} />
              LinkedIn
            </ExternalLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
