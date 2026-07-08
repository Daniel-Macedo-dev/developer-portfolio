import { ImageResponse } from "next/og";

import type { Locale } from "@/data/locales";
import { site } from "@/data/site";
import { ui } from "@/data/ui";

/**
 * Composição compartilhada da imagem social. A marca é a mesma nos dois
 * idiomas; apenas o posicionamento profissional (tagline) é localizado.
 */

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

const taglines: Record<Locale, string> = {
  "pt-BR": "Desenvolvimento de software, backend e soluções orientadas a dados",
  en: "Software development, backend engineering and data-oriented applications",
};

export function ogImageAlt(locale: Locale): string {
  return ui[locale].meta.siteTitle;
}

export function renderOgImage(locale: Locale): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0f17",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#ff8a3d",
            fontFamily: "monospace",
          }}
        >
          daniel.macedo
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              color: "#e8ecf4",
              lineHeight: 1.1,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#9aa5ba",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {taglines[locale]}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#6b7690",
            fontFamily: "monospace",
          }}
        >
          Java · Spring Boot · Python · SQL · React · TypeScript
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
