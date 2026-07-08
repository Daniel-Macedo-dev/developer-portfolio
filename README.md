# developer-portfolio

Portfólio pessoal de [Daniel Macedo Silva](https://github.com/Daniel-Macedo-dev) — desenvolvimento de software, backend e soluções orientadas a dados.

**Status:** primeira versão completa, pronta para deploy (ainda não publicada).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, rotas 100% estáticas)
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) (tokens de design via `@theme`)
- [Motion](https://motion.dev) para animações de entrada (com suporte a `prefers-reduced-motion`)
- [Vitest](https://vitest.dev) + Testing Library para testes

## Requisitos

- Node.js 20.9+ (desenvolvido com Node 22)
- npm

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:3000
```

Outros comandos:

```bash
npm run lint     # ESLint
npm run build    # build de produção
npm run start    # serve o build de produção
npm run test     # testes (Vitest, execução única)
npm run test:watch
```

## Estrutura

```
src/
  app/                  # rotas (App Router)
    projects/           # índice de projetos
    projects/[slug]/    # páginas de detalhe geradas do modelo de conteúdo
    about/              # sobre
    sitemap.ts          # sitemap gerado
    robots.ts           # robots.txt
    icon.tsx            # favicon gerado no build
    opengraph-image.tsx # imagem social gerada no build
  components/           # layout, seções da home, cards de projeto, primitivas
  data/                 # fonte única de conteúdo tipado
    site.ts             # identidade, links e navegação
    profile.ts          # áreas de atuação e formação
    projects.ts         # projetos, categorias, destaque e case studies
```

## Gestão de conteúdo

Todo o conteúdo vive em `src/data/` com tipos TypeScript:

- **Adicionar um projeto**: incluir um novo objeto em `projects.ts`. A rota `/projects/<slug>`, o card, o sitemap e a metadata são gerados automaticamente.
- **Destacar um projeto**: `featured: true` (apenas projetos `flagship`).
- **Link de repositório**: o campo `repoUrl` é opcional — projetos sem repositório público simplesmente não exibem o link.
- **Case study**: o bloco `caseStudy` (contexto, solução, decisões de engenharia, arquitetura, desafios) é opcional; projetos menores usam tratamento mais leve.

A integridade desses dados é verificada por testes (`src/data/projects.test.ts`).

## Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site, usada em metadata, sitemap e Open Graph. Fallback local: `http://localhost:3000`. |

Ver `.env.example`.

## Deploy

O projeto está pronto para a Vercel (ou qualquer host com suporte a Next.js): build estático, sem backend, sem banco de dados e sem segredos. Basta configurar `NEXT_PUBLIC_SITE_URL` com o domínio de produção.

## Limitações conhecidas

- Sem imagens/screenshots reais dos projetos por enquanto — os cards e case studies foram desenhados para funcionar bem sem mídia; há espaço para adicionar mídia real no futuro.
- Conteúdo apenas em português (pt-BR) nesta versão.

## Direções futuras (não implementadas)

- Screenshots e mídia real dos projetos nos case studies
- Versão em inglês
- Textos técnicos longos (possível adoção de MDX quando houver conteúdo editorial)
