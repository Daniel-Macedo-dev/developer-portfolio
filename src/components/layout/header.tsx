"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navItems, site } from "@/data/site";
import { CloseIcon, GitHubIcon, LinkedInIcon, MenuIcon } from "@/components/icons";
import { ExternalLink } from "@/components/external-link";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Fecha o menu ao navegar para outra rota (ajuste de estado no render).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-baseline gap-1 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-foreground">daniel</span>
          <span className="text-accent">.macedo</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-3 py-2 text-sm transition-colors ${
                      active
                        ? "text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ExternalLink
            href={site.links.github}
            aria-label="GitHub de Daniel Macedo"
            className="hidden rounded-md p-2 text-muted transition-colors hover:text-foreground md:inline-flex"
          >
            <GitHubIcon />
          </ExternalLink>
          <ExternalLink
            href={site.links.linkedin}
            aria-label="LinkedIn de Daniel Macedo"
            className="hidden rounded-md p-2 text-muted transition-colors hover:text-foreground md:inline-flex"
          >
            <LinkedInIcon />
          </ExternalLink>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-muted transition-colors hover:text-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? "Fechar menu" : "Abrir menu"}
            </span>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-md px-3 py-3 text-base ${
                      active
                        ? "bg-accent-soft text-accent"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 flex gap-2 border-t border-border pt-3">
              <ExternalLink
                href={site.links.github}
                className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm text-muted hover:text-foreground"
              >
                <GitHubIcon width={18} height={18} />
                GitHub
              </ExternalLink>
              <ExternalLink
                href={site.links.linkedin}
                className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm text-muted hover:text-foreground"
              >
                <LinkedInIcon width={18} height={18} />
                LinkedIn
              </ExternalLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
