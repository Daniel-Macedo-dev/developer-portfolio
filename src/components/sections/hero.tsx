import { localePath, type Locale } from "@/data/locales";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { ButtonLink } from "@/components/button-link";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const strings = ui[locale].hero;

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Realce radial sutil no topo, apenas composição. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,var(--color-accent-soft),transparent_65%)]"
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="font-mono text-sm text-accent">{strings.greeting}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {strings.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {strings.supporting}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={localePath("/projects", locale)}
              variant="primary"
              className="w-full justify-center sm:w-auto"
            >
              {strings.ctaProjects}
              <ArrowRightIcon width={16} height={16} />
            </ButtonLink>
            <ButtonLink
              href={site.links.github}
              className="flex-1 justify-center sm:flex-none"
            >
              <GitHubIcon width={16} height={16} />
              GitHub
            </ButtonLink>
            <ButtonLink
              href={site.links.linkedin}
              className="flex-1 justify-center sm:flex-none"
            >
              <LinkedInIcon width={16} height={16} />
              LinkedIn
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
