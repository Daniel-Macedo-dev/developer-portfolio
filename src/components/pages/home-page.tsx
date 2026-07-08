import type { Locale } from "@/data/locales";
import { JsonLd } from "@/components/json-ld";
import { personJsonLd, webSiteJsonLd } from "@/lib/structured-data";
import { BackendProjects } from "@/components/sections/backend-projects";
import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <JsonLd data={personJsonLd(locale)} />
      <JsonLd data={webSiteJsonLd(locale)} />
      <Hero locale={locale} />
      <Capabilities locale={locale} />
      <FeaturedProjects locale={locale} />
      <BackendProjects locale={locale} />
      <Education locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
