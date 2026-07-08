import type { Locale, Localized } from "./locales";

export type ProjectCategory = "flagship" | "backend";

/**
 * Screenshot real da aplicação em execução (proveniência verificada —
 * capturado do produto real rodando localmente). Nunca usar mockups ou
 * imagens fabricadas. src e dimensões são independentes de idioma;
 * alt e legenda vivem no conteúdo localizado, em ordem paralela.
 */
export interface ProjectScreenshot {
  src: string;
  width: number;
  height: number;
}

export interface ScreenshotText {
  alt: string;
  caption: string;
}

export interface ProjectCaseStudy {
  /** Problema ou contexto que motivou o projeto. */
  context: string;
  /** Abordagem de solução adotada. */
  solution: string;
  /** Decisões e destaques de engenharia. */
  engineering: string[];
  /** Organização de arquitetura, quando relevante. */
  architecture?: string[];
  /** Desafios reais e pontos de aprendizado. */
  challenges?: string[];
}

/** Conteúdo editorial de um projeto em um idioma. */
export interface ProjectContent {
  tagline: string;
  summary: string;
  highlights: string[];
  caseStudy?: ProjectCaseStudy;
  /** Texto das screenshots, na mesma ordem de Project.screenshots. */
  screenshots?: ScreenshotText[];
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  featured: boolean;
  stack: string[];
  /** Somente URLs verificadas; projetos sem repositório público ficam sem link. */
  repoUrl?: string;
  /** Marca/ícone real do projeto (proveniência verificada no repositório original). */
  logo?: string;
  /** Screenshots reais da aplicação em execução. */
  screenshots?: ProjectScreenshot[];
  content: Localized<ProjectContent>;
}

export const projects: Project[] = [
  {
    slug: "breakinv",
    name: "BreakInv",
    category: "flagship",
    featured: true,
    stack: ["Java 21", "JavaFX", "SQLite", "Maven", "OkHttp", "Gson", "JUnit 5"],
    repoUrl: "https://github.com/DeD-TechStack/BreakInv",
    logo: "/projects/breakinv-icon.svg",
    screenshots: [
      { src: "/projects/breakinv/dashboard.png", width: 1280, height: 712 },
      { src: "/projects/breakinv/analise-ativos.png", width: 1280, height: 712 },
      { src: "/projects/breakinv/carteira.png", width: 1280, height: 712 },
      { src: "/projects/breakinv/diversificacao.png", width: 1280, height: 712 },
      { src: "/projects/breakinv/ranking.png", width: 1280, height: 712 },
    ],
    content: {
      "pt-BR": {
        tagline:
          "Controle e análise de investimentos em uma aplicação desktop local-first",
        summary:
          "Aplicação desktop em Java + JavaFX para controle, análise e acompanhamento de investimentos, com persistência local em SQLite e integração com serviços externos de dados de mercado para cotações, benchmarks, indicadores e histórico de ativos.",
        highlights: [
          "Dashboard com visão consolidada da carteira e KPIs de patrimônio e lucro/prejuízo",
          "Snapshot diário para acompanhar a evolução da carteira ao longo do tempo",
          "Análise de diversificação e ranking de ativos com destaques de desempenho",
          "Simulação de cenários de investimento",
          "Página de análise de ativos com consulta por ticker, indicadores e histórico",
          "Extrato de movimentações com visão consolidada por período",
          "Persistência local automática em SQLite, sem depender de backend dedicado",
        ],
        caseStudy: {
          context:
            "Acompanhar uma carteira de investimentos costuma exigir planilhas manuais ou depender de plataformas de terceiros. O BreakInv nasceu para centralizar registro de ativos, movimentações e análise de performance em uma aplicação desktop que funciona de forma local-first: os dados ficam no computador do usuário, em um banco SQLite embarcado, e as integrações externas entram apenas como complemento analítico.",
          solution:
            "Desenvolvi uma aplicação desktop em Java 21 com JavaFX, organizada em camadas de domínio, infraestrutura e apresentação. O fluxo principal — cadastro de ativos, movimentações, snapshots e análises — roda inteiramente local, com persistência automática em SQLite. Para enriquecer a análise, integrei serviços externos de dados de mercado (como a Brapi e dados do Banco Central do Brasil) para cotações, benchmarks, indicadores e histórico de ativos, com configuração de token feita pelo próprio usuário.",
          engineering: [
            "Arquitetura em camadas separando domínio e regras de negócio (core), integrações e persistência (infrastructure) e interface (presentation)",
            "Snapshot diário da carteira para construir o histórico de evolução patrimonial de forma incremental",
            "Consumo de APIs externas com OkHttp e desserialização com Gson, isolados da camada de domínio",
            "Persistência local com SQLite via JDBC, sem servidor de banco de dados",
            "Testes automatizados com JUnit 5 nas regras de negócio",
            "Interface JavaFX com navegação por páginas e foco em visualização de dados",
          ],
          architecture: [
            "core — domínio, contratos e regras de negócio",
            "infrastructure — APIs externas, persistência e configurações",
            "presentation — telas, componentes e navegação",
          ],
          challenges: [
            "Modelar o cálculo de performance e evolução patrimonial a partir de movimentações e snapshots, mantendo consistência histórica",
            "Combinar dados locais com dados de mercado de fontes externas sem acoplar o domínio às APIs",
            "Manter a interface desktop responsiva enquanto dados externos são carregados",
          ],
        },
        screenshots: [
          {
            alt: "Dashboard do BreakInv com KPIs de patrimônio total, lucro acumulado, comparação com o CDI, saúde da carteira e gráficos de composição",
            caption:
              "Dashboard: visão consolidada da carteira com KPIs, comparação com o CDI e saúde de diversificação",
          },
          {
            alt: "Página de análise de ativos do BreakInv mostrando cotação, variação, máximas e mínimas de 52 semanas e volume do ticker PETR4",
            caption:
              "Análise de ativos: consulta por ticker com cotação e indicadores reais via integração com a Brapi",
          },
          {
            alt: "Tela de carteira do BreakInv com tabela de investimentos por categoria, liquidez, valor investido e ações de editar, vender e excluir",
            caption:
              "Carteira: gestão dos ativos com categorias, liquidez e operações de compra e venda",
          },
          {
            alt: "Página de diversificação do BreakInv comparando distribuição atual e ideal da carteira com método de rebalanceamento por aporte",
            caption:
              "Diversificação: distribuição atual versus ideal com sugestão de rebalanceamento por aporte",
          },
          {
            alt: "Ranking de ativos do BreakInv com maiores altas e baixas do dia e gráfico de variação percentual",
            caption:
              "Ranking: desempenho diário dos ativos da carteira com cotações atualizadas",
          },
        ],
      },
      en: {
        tagline:
          "Investment tracking and analysis in a local-first desktop application",
        summary:
          "Desktop application built with Java + JavaFX for tracking, analyzing and monitoring investments, with local SQLite persistence and external market-data integrations for quotes, benchmarks, indicators and asset history.",
        highlights: [
          "Dashboard with a consolidated portfolio view and KPIs for net worth and profit/loss",
          "Daily snapshots that track how the portfolio evolves over time",
          "Diversification analysis and asset ranking with performance highlights",
          "Investment scenario simulation",
          "Asset analysis page with ticker lookup, indicators and price history",
          "Transaction statement with a consolidated per-period view",
          "Automatic local persistence in SQLite, with no dedicated backend required",
        ],
        caseStudy: {
          context:
            "Tracking an investment portfolio usually means manual spreadsheets or depending on third-party platforms. BreakInv was built to centralize asset registration, transactions and performance analysis in a desktop application that works local-first: data lives on the user's machine in an embedded SQLite database, and external integrations serve purely as an analytical complement.",
          solution:
            "I built a desktop application in Java 21 with JavaFX, organized into domain, infrastructure and presentation layers. The core flow — registering assets, transactions, snapshots and analysis — runs entirely locally with automatic SQLite persistence. To enrich the analysis, I integrated external market-data services (such as Brapi and Central Bank of Brazil data) for quotes, benchmarks, indicators and asset history, with API tokens configured by the user.",
          engineering: [
            "Layered architecture separating domain and business rules (core), integrations and persistence (infrastructure), and UI (presentation)",
            "Daily portfolio snapshots that build the net-worth history incrementally",
            "External API consumption with OkHttp and Gson deserialization, isolated from the domain layer",
            "Local persistence with SQLite over JDBC — no database server required",
            "Automated JUnit 5 tests around the business rules",
            "JavaFX interface with page-based navigation focused on data visualization",
          ],
          architecture: [
            "core — domain, contracts and business rules",
            "infrastructure — external APIs, persistence and configuration",
            "presentation — screens, components and navigation",
          ],
          challenges: [
            "Modeling performance and net-worth evolution from transactions and snapshots while keeping the history consistent",
            "Combining local data with external market data without coupling the domain to the APIs",
            "Keeping the desktop UI responsive while external data loads",
          ],
        },
        screenshots: [
          {
            alt: "BreakInv dashboard with KPIs for total net worth, accumulated profit, CDI benchmark comparison, portfolio health and composition charts",
            caption:
              "Dashboard: consolidated portfolio view with KPIs, CDI benchmark comparison and diversification health",
          },
          {
            alt: "BreakInv asset analysis page showing price, daily change, 52-week highs and lows and trading volume for the PETR4 ticker",
            caption:
              "Asset analysis: ticker lookup with real quotes and indicators through the Brapi integration",
          },
          {
            alt: "BreakInv portfolio screen with an investment table showing category, liquidity, invested amount and edit, sell and delete actions",
            caption:
              "Portfolio: asset management with categories, liquidity and buy/sell operations",
          },
          {
            alt: "BreakInv diversification page comparing the current and ideal portfolio distribution with a contribution-based rebalancing method",
            caption:
              "Diversification: current versus ideal distribution with contribution-based rebalancing suggestions",
          },
          {
            alt: "BreakInv asset ranking with the day's top gainers and losers and a percentage variation chart",
            caption:
              "Ranking: daily performance of portfolio assets with up-to-date quotes",
          },
        ],
      },
    },
  },
  {
    slug: "guessme",
    name: "GuessMe",
    category: "flagship",
    featured: true,
    stack: [
      "React 19",
      "Vite",
      "TypeScript",
      "Java 21",
      "Spring Boot",
      "Spring WebFlux",
      "Google Gemini API",
    ],
    repoUrl: "https://github.com/Daniel-Macedo-dev/GuessMe",
    logo: "/projects/guessme-icon.svg",
    screenshots: [
      { src: "/projects/guessme/home.png", width: 1280, height: 800 },
      { src: "/projects/guessme/jogo.png", width: 1280, height: 800 },
      { src: "/projects/guessme/como-funciona.png", width: 1280, height: 800 },
    ],
    content: {
      "pt-BR": {
        tagline: "Jogo de adivinhação de personagens conduzido por IA generativa",
        summary:
          "Projeto full-stack composto por um frontend em React + Vite + TypeScript e uma API REST em Java + Spring Boot integrada à API do Google Gemini, que conduz partidas de adivinhação de personagens com perguntas, dicas e detecção de acerto.",
        highlights: [
          "Partidas por categoria (Geral, Anime, Games, Filmes, Séries e Quadrinhos)",
          "Envio de perguntas do jogador e respostas geradas com apoio do Google Gemini",
          "Geração de dicas contextuais durante a partida",
          "Detecção de acerto e retorno dos dados do personagem descoberto",
          "Identidade visual própria de dossiê investigativo, com caderno de evidências",
          "Backend reativo com Spring WebFlux e consumo da IA via WebClient",
        ],
        caseStudy: {
          context:
            "O GuessMe explora uma dimensão diferente dos projetos de API tradicionais: integrar IA generativa a um fluxo de jogo interativo. O desafio é manter uma partida coerente — a IA precisa responder perguntas sobre um personagem secreto de forma curta e consistente, gerar dicas e reconhecer quando o jogador acertou.",
          solution:
            "Implementei o projeto em duas partes: uma API REST em Java + Spring Boot (repositório guessme-api) que concentra a lógica do jogo e a comunicação com a API do Google Gemini, e um frontend web em React + Vite + TypeScript com identidade de dossiê investigativo, que conduz a experiência do jogador — início de partida, envio de perguntas, caderno de evidências e dicas.",
          engineering: [
            "Separação clara de responsabilidades: o backend controla estado da partida, categorias e comunicação com a IA; o frontend cuida apenas da experiência de jogo",
            "Integração com o Google Gemini via WebClient em uma stack reativa com Spring WebFlux",
            "Organização do backend em camadas (controller, service, dto, config)",
            "Frontend em React 19 + TypeScript com React Router e CSS customizado, sem framework de UI",
          ],
          challenges: [
            "Manter as respostas da IA curtas, consistentes e restritas ao personagem secreto ao longo da partida",
            "Modelar o fluxo do jogo (início por categoria, perguntas, dicas, acerto) como uma API consumível pelo frontend",
          ],
        },
        screenshots: [
          {
            alt: "Tela inicial do GuessMe com tema de dossiê investigativo, ficha do caso selado e etapas de abertura, interrogação e encerramento",
            caption:
              "Home: identidade visual de dossiê investigativo com a ficha do caso e as etapas do jogo",
          },
          {
            alt: "Tela de investigação ativa do GuessMe com transcrição do interrogatório, consultas rápidas e caderno de evidências",
            caption:
              "Jogo: interrogatório com perguntas rápidas, transcrição da partida e caderno de evidências",
          },
          {
            alt: "Página Como Funciona do GuessMe descrevendo o protocolo de interrogação em cinco etapas",
            caption:
              "Como funciona: o protocolo do jogo em cinco etapas, com estados de evidência sim, não e talvez",
          },
        ],
      },
      en: {
        tagline: "A character-guessing game driven by generative AI",
        summary:
          "Full-stack project combining a React + Vite + TypeScript frontend with a Java + Spring Boot REST API integrated with the Google Gemini API, running character-guessing matches with questions, hints and win detection.",
        highlights: [
          "Matches by category (General, Anime, Games, Movies, Series and Comics)",
          "Player questions answered with support from Google Gemini",
          "Contextual hint generation during the match",
          "Win detection with the revealed character's details",
          "Original investigation-dossier visual identity with an evidence notebook",
          "Reactive backend with Spring WebFlux consuming the AI through WebClient",
        ],
        caseStudy: {
          context:
            "GuessMe explores a different dimension from traditional API projects: integrating generative AI into an interactive game loop. The challenge is keeping a match coherent — the AI must answer questions about a secret character in short, consistent replies, generate hints and recognize when the player has guessed correctly.",
          solution:
            "I built the project in two parts: a REST API in Java + Spring Boot (the guessme-api repository) that owns the game logic and the communication with the Google Gemini API, and a web frontend in React + Vite + TypeScript with an investigation-dossier identity that drives the player experience — starting a case, asking questions, collecting evidence and requesting hints.",
          engineering: [
            "Clear separation of responsibilities: the backend owns match state, categories and AI communication; the frontend owns only the game experience",
            "Google Gemini integration through WebClient on a reactive Spring WebFlux stack",
            "Backend organized in layers (controller, service, dto, config)",
            "React 19 + TypeScript frontend with React Router and custom CSS — no UI framework",
          ],
          challenges: [
            "Keeping AI answers short, consistent and restricted to the secret character throughout the match",
            "Modeling the game flow (category selection, questions, hints, win detection) as an API the frontend can consume",
          ],
        },
        screenshots: [
          {
            alt: "GuessMe home screen with an investigation-dossier theme, a sealed case file and the opening, interrogation and closing steps",
            caption:
              "Home: investigation-dossier visual identity with the case file and the game's steps",
          },
          {
            alt: "GuessMe active investigation screen with the interrogation transcript, quick questions and the evidence notebook",
            caption:
              "Game: interrogation with quick questions, match transcript and the evidence notebook",
          },
          {
            alt: "GuessMe How It Works page describing the five-step interrogation protocol",
            caption:
              "How it works: the game's five-step protocol, with yes, no and maybe evidence states",
          },
        ],
      },
    },
  },
  {
    slug: "jovemtour-store",
    name: "JovemTour Store",
    category: "flagship",
    featured: true,
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "JPA",
      "MySQL",
    ],
    screenshots: [
      { src: "/projects/jovemtour-store/hero.png", width: 1280, height: 700 },
      { src: "/projects/jovemtour-store/roteiros.png", width: 1280, height: 1090 },
      { src: "/projects/jovemtour-store/mascote.png", width: 1280, height: 580 },
      { src: "/projects/jovemtour-store/planejar.png", width: 1280, height: 980 },
    ],
    content: {
      "pt-BR": {
        tagline:
          "Landing full-stack de roteiros culturais por São Paulo com captação de interesse",
        summary:
          "Projeto full-stack do Jovem Tour SP — landing de roteiros culturais por São Paulo com identidade visual própria, mascote e fluxo de captação de interesse, com frontend em React + Vite + TypeScript + Tailwind CSS integrado a uma API REST em Spring Boot com JPA e MySQL.",
        highlights: [
          "Landing responsiva de roteiros culturais por São Paulo com identidade visual e mascote próprios",
          "Cards de roteiros com categorias temáticas (arte urbana, gastronomia, história e natureza)",
          "Fluxo de captação de interesse/leads com formulário integrado à API",
          "Fallback offline no frontend: exibe conteúdo salvo quando a API está indisponível",
          "Persistência relacional com JPA e MySQL",
        ],
        caseStudy: {
          context:
            "O Jovem Tour SP é um projeto orientado a produto: uma landing de roteiros culturais por São Paulo em que o visitante conhece as experiências — do Roteiro Paulista Cultural ao Beco do Batman — e deixa seu interesse para ser avisado quando elas estiverem disponíveis. Diferente de um CRUD isolado, o foco está na integração completa entre uma interface com identidade forte e um backend que registra esses leads.",
          solution:
            "Construí o frontend em React + Vite + TypeScript com Tailwind CSS, com identidade visual própria (cores, tipografia display e o mascote Caramelo) e uma experiência responsiva de apresentação dos roteiros, e um backend em Spring Boot expondo uma API REST com persistência em MySQL via JPA para registrar o fluxo de interesse. O conteúdo dos roteiros é servido pela API, e o frontend mantém um fallback offline com conteúdo salvo.",
          engineering: [
            "Integração ponta a ponta entre o frontend React e a API REST em Spring Boot",
            "Modelagem relacional dos dados de roteiros e leads com JPA e MySQL",
            "Fallback offline no frontend para manter a experiência quando a API está indisponível",
            "UI responsiva com Tailwind CSS, TypeScript e identidade visual própria",
          ],
          challenges: [
            "Desenhar um fluxo de interesse simples para o visitante sem exigir cadastro ou checkout",
            "Manter contratos consistentes entre frontend e backend durante a evolução do projeto",
            "Construir uma identidade visual de marca (e não um template) mantendo a implementação enxuta",
          ],
        },
        screenshots: [
          {
            alt: "Hero da landing do Jovem Tour SP com o título Explore São Paulo, marca do projeto e categorias de arte urbana, gastronomia, história e natureza",
            caption:
              "Hero: identidade visual própria do Jovem Tour SP com as categorias de roteiros culturais",
          },
          {
            alt: "Seção de roteiros em destaque com cards do Roteiro Paulista Cultural, Liberdade e Cultura Japonesa, Beco do Batman e Parque Ibirapuera",
            caption:
              "Roteiros em destaque: cards com tags temáticas e ações de conhecer o roteiro e manifestar interesse",
          },
          {
            alt: "Seção do mascote oficial Caramelo com a arte da marca e um recado sobre os roteiros em planejamento",
            caption: "Mascote Caramelo: trabalho real de marca aplicado ao produto",
          },
          {
            alt: "Formulário Planejar meu rolê com campos de nome, WhatsApp, área de interesse, tamanho do grupo e consentimento de uso de dados",
            caption:
              "Planejar meu rolê: formulário de captação de leads integrado à API, com consentimento explícito",
          },
        ],
      },
      en: {
        tagline:
          "Full-stack cultural tourism landing page for São Paulo with lead capture",
        summary:
          "Full-stack project for Jovem Tour SP — a cultural tourism landing page for São Paulo with its own visual identity, mascot and interest-capture flow, combining a React + Vite + TypeScript + Tailwind CSS frontend with a Spring Boot REST API backed by JPA and MySQL.",
        highlights: [
          "Responsive landing page for São Paulo cultural tours with an original visual identity and mascot",
          "Tour cards with themed categories (street art, gastronomy, history and nature)",
          "Interest/lead-capture flow with a form integrated with the API",
          "Offline fallback on the frontend: cached content is shown when the API is unavailable",
          "Relational persistence with JPA and MySQL",
        ],
        caseStudy: {
          context:
            "Jovem Tour SP is a product-oriented project: a landing page for cultural tours around São Paulo where visitors explore the experiences — from the Paulista Cultural Tour to the Beco do Batman street-art alley — and leave their interest to be notified when tours become available. Unlike an isolated CRUD, the focus is the complete integration between an interface with a strong identity and a backend that records those leads.",
          solution:
            "I built the frontend in React + Vite + TypeScript with Tailwind CSS, with an original visual identity (colors, display typography and the Caramelo mascot) and a responsive tour-browsing experience, plus a Spring Boot backend exposing a REST API with MySQL persistence through JPA to record the interest flow. Tour content is served by the API, and the frontend keeps an offline fallback with cached content.",
          engineering: [
            "End-to-end integration between the React frontend and the Spring Boot REST API",
            "Relational modeling of tour and lead data with JPA and MySQL",
            "Offline fallback on the frontend to keep the experience alive when the API is unavailable",
            "Responsive UI with Tailwind CSS, TypeScript and an original brand identity",
          ],
          challenges: [
            "Designing a simple interest flow for visitors without requiring sign-up or checkout",
            "Keeping frontend/backend contracts consistent as the project evolved",
            "Building a real brand identity (not a template) while keeping the implementation lean",
          ],
        },
        screenshots: [
          {
            alt: "Jovem Tour SP landing hero with the Explore São Paulo title, project brand and the street art, gastronomy, history and nature categories",
            caption:
              "Hero: Jovem Tour SP's original visual identity with the cultural tour categories",
          },
          {
            alt: "Featured tours section with cards for the Paulista Cultural Tour, Liberdade and Japanese Culture, Beco do Batman and Ibirapuera Park",
            caption:
              "Featured tours: cards with themed tags and actions to learn more or express interest",
          },
          {
            alt: "Official mascot section featuring Caramelo with the brand artwork and a note about tours being planned",
            caption: "Caramelo mascot: real brand work applied to the product",
          },
          {
            alt: "Plan-my-tour form with fields for name, WhatsApp, area of interest, group size and data-usage consent",
            caption:
              "Plan my tour: lead-capture form integrated with the API, with explicit consent",
          },
        ],
      },
    },
  },
  {
    slug: "supermercado-api",
    name: "supermercado-api",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "JPA", "H2", "MySQL", "Docker"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/supermercado-api",
    content: {
      "pt-BR": {
        tagline: "API RESTful de produtos com POO aplicada e ambientes H2/MySQL",
        summary:
          "API RESTful em Java + Spring Boot para gerenciamento de produtos de supermercado, demonstrando POO com herança e polimorfismo, DTOs e encapsulamento, com H2 em desenvolvimento e MySQL em produção via Docker.",
        highlights: [
          "CRUD completo de produtos via endpoints REST",
          "POO aplicada: herança, polimorfismo e encapsulamento no domínio",
          "DTOs separando o modelo de domínio do contrato da API",
          "H2 para desenvolvimento e MySQL para produção via Docker",
        ],
      },
      en: {
        tagline: "RESTful product API with applied OOP and H2/MySQL environments",
        summary:
          "RESTful API in Java + Spring Boot for managing supermarket products, demonstrating OOP with inheritance, polymorphism, DTOs and encapsulation — H2 for development and MySQL in production via Docker.",
        highlights: [
          "Full product CRUD through REST endpoints",
          "Applied OOP: inheritance, polymorphism and encapsulation in the domain",
          "DTOs separating the domain model from the API contract",
          "H2 for development and MySQL for production via Docker",
        ],
      },
    },
  },
  {
    slug: "upload-api",
    name: "upload-api",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "JWT", "Amazon S3", "MySQL"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/upload-api",
    content: {
      "pt-BR": {
        tagline: "Autenticação JWT e upload de arquivos no Amazon S3",
        summary:
          "API REST em Java + Spring Boot para autenticação, upload de arquivos no Amazon S3 e gerenciamento de prints, com JWT, MySQL e integração com um frontend em React.",
        highlights: [
          "Autenticação com JWT",
          "Upload e gerenciamento de arquivos no Amazon S3",
          "Persistência de metadados em MySQL",
          "Integração com o frontend Site Prints Jogos (React + Vite)",
        ],
      },
      en: {
        tagline: "JWT authentication and file uploads to Amazon S3",
        summary:
          "REST API in Java + Spring Boot for authentication, Amazon S3 file uploads and screenshot management, with JWT, MySQL and integration with a React frontend.",
        highlights: [
          "JWT authentication",
          "File upload and management on Amazon S3",
          "Metadata persistence in MySQL",
          "Integration with the Site Prints Jogos frontend (React + Vite)",
        ],
      },
    },
  },
  {
    slug: "player-api",
    name: "player-api",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "AWS DynamoDB", "REST"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/player-api",
    content: {
      "pt-BR": {
        tagline: "CRUD de jogadores com AWS DynamoDB e integração entre APIs",
        summary:
          "API REST em Java + Spring Boot para gerenciamento de jogadores usando AWS DynamoDB como banco NoSQL, integrada à pet-api (MySQL) para associar pets a jogadores registrados.",
        highlights: [
          "CRUD de jogadores com persistência NoSQL em DynamoDB",
          "Integração entre serviços: associação de pets (pet-api, MySQL) a jogadores",
          "Contraste prático entre modelagem relacional e NoSQL",
        ],
      },
      en: {
        tagline: "Player CRUD on AWS DynamoDB with API-to-API integration",
        summary:
          "REST API in Java + Spring Boot for managing players on AWS DynamoDB (NoSQL), integrated with pet-api (MySQL) to link pets to registered players.",
        highlights: [
          "Player CRUD with NoSQL persistence on DynamoDB",
          "Service-to-service integration: linking pets (pet-api, MySQL) to players",
          "Hands-on contrast between relational and NoSQL modeling",
        ],
      },
    },
  },
  {
    slug: "tarefa-api",
    name: "tarefa-api",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "REST", "JPA"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/tarefa-api",
    content: {
      "pt-BR": {
        tagline: "API REST de tarefas com Java e Spring Boot",
        summary:
          "API REST em Java + Spring Boot voltada ao gerenciamento de tarefas, com operações CRUD e persistência relacional.",
        highlights: [
          "Operações CRUD de tarefas via endpoints REST",
          "Camadas organizadas de controller, service e persistência",
        ],
      },
      en: {
        tagline: "Task REST API with Java and Spring Boot",
        summary:
          "REST API in Java + Spring Boot for task management, with CRUD operations and relational persistence.",
        highlights: [
          "Task CRUD operations through REST endpoints",
          "Organized controller, service and persistence layers",
        ],
      },
    },
  },
  {
    slug: "api-cadastro-usuario",
    name: "api-cadastro-usuario",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "JPA", "REST"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/api-cadastro-usuario",
    content: {
      "pt-BR": {
        tagline: "Cadastro de usuários com Spring Boot e persistência relacional",
        summary:
          "API em Java + Spring Boot com operações de cadastro, consulta, atualização e remoção de usuários, com persistência em banco relacional.",
        highlights: [
          "CRUD de usuários via API REST",
          "Persistência relacional com JPA",
        ],
      },
      en: {
        tagline: "User registration API with Spring Boot and relational persistence",
        summary:
          "Java + Spring Boot API with user create, read, update and delete operations backed by a relational database.",
        highlights: [
          "User CRUD through a REST API",
          "Relational persistence with JPA",
        ],
      },
    },
  },
  {
    slug: "xuitter",
    name: "xuitter",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "REST", "SQL"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/xuitter",
    content: {
      "pt-BR": {
        tagline: "Backend de microblog com persistência relacional",
        summary:
          "Projeto backend em Java inspirado em um microblog, com comportamento REST e persistência relacional.",
        highlights: [
          "Endpoints REST para o fluxo de publicações",
          "Modelagem relacional dos dados",
        ],
      },
      en: {
        tagline: "Microblog backend with relational persistence",
        summary:
          "Backend project in Java inspired by a microblog, with REST behavior and relational persistence.",
        highlights: [
          "REST endpoints for the posting flow",
          "Relational data modeling",
        ],
      },
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const backendProjects = projects.filter(
  (p) => p.category === "backend",
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Conteúdo do projeto no idioma pedido. */
export function getProjectContent(project: Project, locale: Locale) {
  return project.content[locale];
}
