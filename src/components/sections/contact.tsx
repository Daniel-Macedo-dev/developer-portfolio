import { site } from "@/data/site";
import { ExternalLink } from "@/components/external-link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-card border border-border bg-surface p-8 text-center shadow-card sm:p-12">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
              contato
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Vamos conversar?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted">
              Estou aberto a oportunidades, projetos e trocas técnicas. O
              caminho mais rápido é o e-mail — ou me encontre no LinkedIn e no
              GitHub.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent-strong px-5 text-sm font-medium text-background transition-colors hover:bg-accent"
              >
                <MailIcon width={16} height={16} />
                {site.email}
              </a>
              <ExternalLink
                href={site.links.linkedin}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
              >
                <LinkedInIcon width={16} height={16} />
                LinkedIn
              </ExternalLink>
              <ExternalLink
                href={site.links.github}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
              >
                <GitHubIcon width={16} height={16} />
                GitHub
              </ExternalLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
