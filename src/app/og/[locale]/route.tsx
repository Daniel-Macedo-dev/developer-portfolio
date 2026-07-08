import { locales, type Locale } from "@/data/locales";
import { renderOgImage } from "@/lib/og-image";

/**
 * Imagem social por idioma em URL estável (/og/pt-BR, /og/en), gerada
 * no build. Rota explícita em vez de opengraph-image por convenção:
 * páginas que definem openGraph próprio perderiam a imagem herdada no
 * merge raso de metadata, e o route group (pt) gera URL com hash.
 */

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return new Response("Not found", { status: 404 });
  }
  return renderOgImage(locale);
}
