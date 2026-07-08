import Image from "next/image";

import type { Locale } from "@/data/locales";
import type { ProjectScreenshot, ScreenshotText } from "@/data/projects";
import { ui } from "@/data/ui";

interface ProjectGalleryProps {
  screenshots: ProjectScreenshot[];
  text: ScreenshotText[];
  locale: Locale;
}

/** Galeria de capturas reais da aplicação, com legenda por imagem. */
export function ProjectGallery({ screenshots, text, locale }: ProjectGalleryProps) {
  return (
    <>
      <p className="text-sm text-faint">
        {ui[locale].projectDetail.screensNote}
      </p>
      <div className="mt-5 space-y-6">
        {screenshots.map((shot, index) => (
          <figure key={shot.src}>
            <Image
              src={shot.src}
              alt={text[index]?.alt ?? ""}
              width={shot.width}
              height={shot.height}
              sizes="(max-width: 768px) 100vw, 720px"
              className="rounded-card border border-border"
            />
            <figcaption className="mt-2 text-sm leading-relaxed text-muted">
              {text[index]?.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
