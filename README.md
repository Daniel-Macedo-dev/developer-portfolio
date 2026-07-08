# developer-portfolio

Portfólio pessoal de [Daniel Macedo Silva](https://github.com/Daniel-Macedo-dev) — desenvolvimento de software, backend e soluções orientadas a dados.

**Produção:** https://developer-portfolio-daniels-projects-0382e1b8.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, rotas 100% estáticas)
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) (tokens de design via `@theme`)
- [Motion](https://motion.dev) para animações de entrada (com suporte a `prefers-reduced-motion`)
- [Vitest](https://vitest.dev) + Testing Library para testes unitários
- [Playwright](https://playwright.dev) (Chromium) para jornadas E2E e QA visual

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
npm run lint       # ESLint
npm run build      # build de produção
npm run start      # serve o build de produção
npm run test       # testes unitários (Vitest, execução única)
npm run test:watch
npm run test:e2e   # jornadas de browser (Playwright; faz build + start sozinho)
npm run qa:visual  # captura screenshots das rotas em 8 viewports (.qa-screenshots/)
```

Para os comandos de browser é preciso instalar o Chromium do Playwright uma vez:

```bash
npx playwright install chromium
```

O `qa:visual` espera um servidor já em execução (`npm run build && npm run start`).

Para rodar a suíte E2E contra outra origem (ex.: o deployment de produção):

```bash
$env:PLAYWRIGHT_BASE_URL = "https://developer-portfolio-daniels-projects-0382e1b8.vercel.app"
npm run test:e2e
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

O projeto está pronto para a Vercel (ou qualquer host com suporte a Next.js): build estático, sem backend, sem banco de dados e sem segredos.

Estado atual: projeto `developer-portfolio` na Vercel (time "Daniel's projects"), com `NEXT_PUBLIC_SITE_URL` configurada em produção com a URL real. Deploys via `npx vercel deploy --prod` a partir do estado local publicado na `main`.

Para reproduzir do zero:

1. Importar/linkar o repositório na Vercel (framework Next.js detectado automaticamente; sem `vercel.json` — não é necessário).
2. Configurar a variável `NEXT_PUBLIC_SITE_URL` com o domínio de produção real.
3. Deploy — todas as rotas são estáticas/SSG; sitemap, robots, favicon e imagem OG são gerados no build.
4. Pós-deploy: conferir `/sitemap.xml`, `/robots.txt` e a pré-visualização de compartilhamento (OG) com o domínio real.

## Mídia dos projetos

Todas as imagens em `public/projects/` têm proveniência verificada:

- **Marcas** (`breakinv-icon.svg`, `guessme-icon.svg`): ícones oficiais copiados dos repositórios originais dos projetos.
- **Screenshots** (`breakinv/`, `guessme/`, `jovemtour-store/`): capturas das aplicações reais em execução local, com dados de demonstração. Nenhuma imagem fabricada ou mockup apresentado como produto.

Os metadados de cada imagem (alt, legenda, dimensões) vivem no modelo tipado em `src/data/projects.ts` e são verificados por testes.

## Limitações conhecidas

- Conteúdo apenas em português (pt-BR) nesta versão.
- E2E cobre apenas Chromium (desktop + mobile emulado).
- O fluxo de jogo do GuessMe com respostas da IA não pôde ser capturado (chave da API indisponível no ambiente de captura); as telas integradas mostram estados reais pré-partida.

## Direções futuras (não implementadas)

- Screenshots reais dos projetos nos case studies
- Versão em inglês
- Textos técnicos longos (possível adoção de MDX quando houver conteúdo editorial)
