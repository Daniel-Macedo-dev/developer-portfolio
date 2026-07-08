import type { Metadata } from "next";

import { getSiteUrl } from "@/data/site";
import { LocaleShell } from "@/components/layout/locale-shell";
import { buildRootMetadata } from "@/lib/metadata";

import "../globals.css";

export const metadata: Metadata = buildRootMetadata("en", getSiteUrl());

export default function EnglishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LocaleShell locale="en">{children}</LocaleShell>;
}
