import { site } from "@/data/site";
import { ButtonLink } from "@/components/button-link";
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
              <ButtonLink
                href={`mailto:${site.email}`}
                variant="primary"
                className="w-full max-w-full justify-center sm:w-auto"
              >
                <MailIcon width={16} height={16} className="shrink-0" />
                <span className="truncate">{site.email}</span>
              </ButtonLink>
              <ButtonLink
                href={site.links.linkedin}
                className="flex-1 justify-center sm:flex-none"
              >
                <LinkedInIcon width={16} height={16} />
                LinkedIn
              </ButtonLink>
              <ButtonLink
                href={site.links.github}
                className="flex-1 justify-center sm:flex-none"
              >
                <GitHubIcon width={16} height={16} />
                GitHub
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
