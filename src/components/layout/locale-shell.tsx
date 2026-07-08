import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import type { Locale } from "@/data/locales";
import { ui } from "@/data/ui";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LocaleShellProps {
  locale: Locale;
  children: ReactNode;
}

/**
 * Documento compartilhado pelos dois root layouts (pt-BR na raiz e /en).
 * Cada idioma tem seu próprio root layout para que <html lang> seja
 * correto por rota; a composição visual é idêntica.
 */
export function LocaleShell({ locale, children }: LocaleShellProps) {
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          {ui[locale].skipToContent}
        </a>
        <Header locale={locale} />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
