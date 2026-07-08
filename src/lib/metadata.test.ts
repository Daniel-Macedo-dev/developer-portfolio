import { afterEach, describe, expect, it } from "vitest";

import {
  buildAlternates,
  buildPageMetadata,
  buildRootMetadata,
} from "./metadata";

describe("metadata localizada", () => {
  it("gera canonical e hreflang coerentes por idioma", () => {
    const pt = buildAlternates("/projects", "pt-BR");
    expect(pt.canonical).toBe("/projects");
    const en = buildAlternates("/projects", "en");
    expect(en.canonical).toBe("/en/projects");
    expect(en.languages).toEqual({
      "pt-BR": "/projects",
      en: "/en/projects",
      "x-default": "/projects",
    });
  });

  it("página interna referencia a imagem social do próprio idioma", () => {
    for (const [locale, ogPath] of [
      ["pt-BR", "/og/pt-BR"],
      ["en", "/og/en"],
    ] as const) {
      const meta = buildPageMetadata({
        locale,
        path: "/projects/breakinv",
        title: "BreakInv",
        description: "resumo",
        ogDescription: "tagline",
      });
      const og = meta.openGraph as Record<string, unknown>;
      const images = og.images as { url: string; alt: string }[];
      expect(images).toHaveLength(1);
      expect(images[0].url).toBe(ogPath);
      expect(og.url).toBe(
        locale === "en" ? "/en/projects/breakinv" : "/projects/breakinv",
      );
      expect(og.description).toBe("tagline");
      expect(og.siteName).toBe("Daniel Macedo Silva");
      expect(og.locale).toBe(locale === "en" ? "en_US" : "pt_BR");
    }
  });

  it("alt da imagem social é localizado", () => {
    const pt = buildPageMetadata({
      locale: "pt-BR",
      path: "/",
      title: "t",
      description: "d",
    });
    const en = buildPageMetadata({
      locale: "en",
      path: "/",
      title: "t",
      description: "d",
    });
    const altOf = (meta: typeof pt) =>
      (
        (meta.openGraph as Record<string, unknown>).images as {
          alt: string;
        }[]
      )[0].alt;
    expect(altOf(pt)).toContain("Desenvolvedor de Software");
    expect(altOf(en)).toContain("Software Developer");
  });

  describe("verificação do Search Console", () => {
    afterEach(() => {
      delete process.env.GOOGLE_SITE_VERIFICATION;
    });

    it("não emite verification sem a variável configurada", () => {
      delete process.env.GOOGLE_SITE_VERIFICATION;
      const meta = buildRootMetadata("pt-BR", "https://example.com");
      expect(meta.verification).toBeUndefined();
    });

    it("emite verification google quando configurada", () => {
      process.env.GOOGLE_SITE_VERIFICATION = "token-de-teste";
      const meta = buildRootMetadata("pt-BR", "https://example.com");
      expect(meta.verification).toEqual({ google: "token-de-teste" });
    });
  });
});
