import Image from "next/image";

import type { ProjectImage } from "@/data/projects";

interface ProjectGalleryProps {
  screenshots: ProjectImage[];
}

/** Galeria de capturas reais da aplicação, com legenda por imagem. */
export function ProjectGallery({ screenshots }: ProjectGalleryProps) {
  return (
    <>
      <p className="text-sm text-faint">
        Capturas reais da aplicação em execução.
      </p>
      <div className="mt-5 space-y-6">
        {screenshots.map((shot) => (
          <figure key={shot.src}>
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(max-width: 768px) 100vw, 720px"
              className="rounded-card border border-border"
            />
            <figcaption className="mt-2 text-sm leading-relaxed text-muted">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
