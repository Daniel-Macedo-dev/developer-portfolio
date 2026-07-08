import type { Metadata } from "next";
import Link from "next/link";

import { education } from "@/data/profile";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/button-link";
import { EducationCard } from "@/components/education-card";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Quem é Daniel Macedo Silva: estudante de Análise e Desenvolvimento de Sistemas na FATEC Zona Sul, Técnico em Informática e desenvolvedor com foco em backend, dados e projetos full-stack.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <header>
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          sobre
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Quem é o Daniel
        </h1>
      </header>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
        <p>
          Sou o {site.name}, desenvolvedor de software com foco em backend,
          dados e projetos full-stack. Curso Análise e Desenvolvimento de
          Sistemas na FATEC Zona Sul, com conclusão prevista para dezembro de
          2027, e antes disso me formei Técnico em Informática.
        </p>
        <p>
          Meu aprendizado acontece principalmente construindo: desenvolvi uma
          aplicação desktop de controle de investimentos com dashboards,
          indicadores e integrações com dados de mercado; um jogo full-stack
          conduzido por IA generativa; uma experiência de loja integrada a uma
          API própria; e um conjunto de APIs REST em Java + Spring Boot
          explorando persistência relacional e NoSQL, autenticação com JWT e
          armazenamento em nuvem.
        </p>
        <p>
          Me interessam especialmente sistemas que organizam e dão sentido a
          dados — dashboards, indicadores, integrações com APIs externas e a
          engenharia por trás disso: modelagem, camadas bem separadas e código
          que outras pessoas conseguem manter.
        </p>
      </div>

      <section aria-labelledby="formacao-titulo" className="mt-12">
        <h2
          id="formacao-titulo"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Formação
        </h2>
        <ol className="mt-5 space-y-4">
          {education.map((item) => (
            <li key={item.title}>
              <EducationCard item={item} />
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="contato-titulo" className="mt-12">
        <h2
          id="contato-titulo"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          Onde me encontrar
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${site.email}`} variant="primary">
            <MailIcon width={16} height={16} />
            E-mail
          </ButtonLink>
          <ButtonLink href={site.links.github}>
            <GitHubIcon width={16} height={16} />
            GitHub
          </ButtonLink>
          <ButtonLink href={site.links.linkedin}>
            <LinkedInIcon width={16} height={16} />
            LinkedIn
          </ButtonLink>
        </div>
      </section>

      <div className="mt-14 border-t border-border pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          Conheça os projetos
          <ArrowRightIcon width={16} height={16} />
        </Link>
      </div>
    </div>
  );
}
