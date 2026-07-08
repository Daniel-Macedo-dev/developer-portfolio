import { serializeJsonLd } from "@/lib/structured-data";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/** Bloco de dados estruturados schema.org com serialização segura. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Conteúdo controlado (gerado do modelo tipado) e escapado.
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
