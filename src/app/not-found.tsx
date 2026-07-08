import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        O endereço que você acessou não existe ou foi movido. Que tal voltar
        para o início ou explorar os projetos?
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent-strong px-5 text-sm font-medium text-background transition-colors hover:bg-accent"
        >
          Voltar ao início
        </Link>
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
        >
          Ver projetos
          <ArrowRightIcon width={16} height={16} />
        </Link>
      </div>
    </div>
  );
}
