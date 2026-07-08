import Link from "next/link";

import { localePath, type Locale } from "@/data/locales";
import { education } from "@/data/profile";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { ButtonLink } from "@/components/button-link";
import { EducationCard } from "@/components/education-card";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";

export function AboutPage({ locale }: { locale: Locale }) {
  const strings = ui[locale].aboutPage;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <header>
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          {strings.eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {strings.title}
        </h1>
      </header>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
        {strings.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <section aria-labelledby="formacao-titulo" className="mt-12">
        <h2
          id="formacao-titulo"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          {strings.educationTitle}
        </h2>
        <ol className="mt-5 space-y-4">
          {education[locale].map((item) => (
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
          {strings.whereTitle}
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${site.email}`} variant="primary">
            <MailIcon width={16} height={16} />
            {strings.email}
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
          href={localePath("/projects", locale)}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          {strings.seeProjects}
          <ArrowRightIcon width={16} height={16} />
        </Link>
      </div>
    </div>
  );
}
