import Link from "next/link";

import { localePath, type Locale } from "@/data/locales";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { ExternalLink } from "@/components/external-link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const strings = ui[locale];
  const navItems = [
    { href: localePath("/", locale), label: strings.nav.home },
    { href: localePath("/projects", locale), label: strings.nav.projects },
    { href: localePath("/about", locale), label: strings.nav.about },
    { href: `${localePath("/", locale)}#contato`, label: strings.nav.contact },
  ];

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-sm font-semibold">
              <span className="text-foreground">daniel</span>
              <span className="text-accent">.macedo</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {strings.footer.tagline}
            </p>
          </div>

          <nav aria-label={strings.footer.navigation}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-faint">
              {strings.footer.navigation}
            </h2>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-faint">
              {strings.footer.contact}
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <MailIcon width={16} height={16} />
                  {site.email}
                </a>
              </li>
              <li>
                <ExternalLink
                  href={site.links.github}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <GitHubIcon width={16} height={16} />
                  GitHub
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={site.links.linkedin}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <LinkedInIcon width={16} height={16} />
                  LinkedIn
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-faint">
          © {new Date().getFullYear()} {site.name}. {strings.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
