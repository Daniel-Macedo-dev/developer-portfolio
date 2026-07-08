export type ProjectCategory = "flagship" | "backend";

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

export interface Project {
  slug: string;
  name: string;
  /** Posicionamento em uma linha. */
  tagline: string;
  /** Resumo usado em cards e listagens. */
  summary: string;
  category: ProjectCategory;
  featured: boolean;
  stack: string[];
  /** Somente URLs verificadas; projetos sem repositório público ficam sem link. */
  repoUrl?: string;
  /**
   * Marca/ícone real do projeto (proveniência verificada no repositório
   * original). Nunca usar imagens fabricadas ou de banco de imagens.
   */
  logo?: string;
  /** Funcionalidades e características principais. */
  highlights: string[];
  caseStudy?: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: "breakinv",
    name: "BreakInv",
    tagline: "Controle e análise de investimentos em uma aplicação desktop local-first",
    summary:
      "Aplicação desktop em Java + JavaFX para controle, análise e acompanhamento de investimentos, com persistência local em SQLite e integração com serviços externos de dados de mercado para cotações, benchmarks, indicadores e histórico de ativos.",
    category: "flagship",
    featured: true,
    stack: [
      "Java 21",
      "JavaFX",
      "SQLite",
      "Maven",
      "OkHttp",
      "Gson",
      "JUnit 5",
    ],
    repoUrl: "https://github.com/DeD-TechStack/BreakInv",
    logo: "/projects/breakinv-icon.svg",
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
  },
  {
    slug: "guessme",
    name: "GuessMe",
    tagline: "Jogo de adivinhação de personagens conduzido por IA generativa",
    summary:
      "Projeto full-stack composto por um frontend em React + Vite + TypeScript e uma API REST em Java + Spring Boot integrada à API do Google Gemini, que conduz partidas de adivinhação de personagens com perguntas, dicas e detecção de acerto.",
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
    highlights: [
      "Partidas por categoria (Geral, Anime, Games, Filmes, Séries e Quadrinhos)",
      "Envio de perguntas do jogador e respostas geradas com apoio do Google Gemini",
      "Geração de dicas contextuais durante a partida",
      "Detecção de acerto e retorno dos dados do personagem descoberto",
      "Frontend React com navegação entre telas via React Router",
      "Backend reativo com Spring WebFlux e consumo da IA via WebClient",
    ],
    caseStudy: {
      context:
        "O GuessMe explora uma dimensão diferente dos projetos de API tradicionais: integrar IA generativa a um fluxo de jogo interativo. O desafio é manter uma partida coerente — a IA precisa responder perguntas sobre um personagem secreto de forma curta e consistente, gerar dicas e reconhecer quando o jogador acertou.",
      solution:
        "Implementei o projeto em duas partes: uma API REST em Java + Spring Boot (repositório guessme-api) que concentra a lógica do jogo e a comunicação com a API do Google Gemini, e um frontend web em React + Vite + TypeScript que conduz a experiência do jogador — início de partida, envio de perguntas, exibição de respostas e dicas.",
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
  },
  {
    slug: "jovemtour-store",
    name: "JovemTour Store",
    tagline: "Experiência de loja full-stack com fluxo de interesse e pedidos",
    summary:
      "Projeto full-stack de loja/landing com apresentação de produtos e fluxo de leads de interesse/pedido, com frontend em React + Vite + TypeScript + Tailwind CSS integrado a uma API REST em Spring Boot com JPA e MySQL.",
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
    highlights: [
      "Apresentação de produtos em uma experiência de loja/landing responsiva",
      "Fluxo de interesse/pedido para captação de leads",
      "Integração entre frontend React e API REST em Spring Boot",
      "Persistência relacional com JPA e MySQL",
      "Interface construída com Tailwind CSS",
    ],
    caseStudy: {
      context:
        "O JovemTour Store é um projeto orientado a produto: uma experiência de loja/landing em que o visitante conhece os produtos e manifesta interesse ou intenção de pedido. Diferente de um CRUD isolado, o foco está na integração completa entre uma interface de apresentação e um backend que registra esses leads.",
      solution:
        "Construí o frontend em React + Vite + TypeScript com Tailwind CSS, priorizando uma interface responsiva de apresentação de produtos, e um backend em Spring Boot expondo uma API REST com persistência em MySQL via JPA para registrar o fluxo de interesse/pedidos.",
      engineering: [
        "Integração ponta a ponta entre o frontend React e a API REST em Spring Boot",
        "Modelagem relacional dos dados de produtos e pedidos com JPA e MySQL",
        "UI responsiva construída com Tailwind CSS e TypeScript",
      ],
      challenges: [
        "Desenhar um fluxo de interesse/pedido simples para o visitante sem exigir um checkout completo",
        "Manter contratos consistentes entre frontend e backend durante a evolução do projeto",
      ],
    },
  },
  {
    slug: "supermercado-api",
    name: "supermercado-api",
    tagline: "API RESTful de produtos com POO aplicada e ambientes H2/MySQL",
    summary:
      "API RESTful em Java + Spring Boot para gerenciamento de produtos de supermercado, demonstrando POO com herança e polimorfismo, DTOs e encapsulamento, com H2 em desenvolvimento e MySQL em produção via Docker.",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "JPA", "H2", "MySQL", "Docker"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/supermercado-api",
    highlights: [
      "CRUD completo de produtos via endpoints REST",
      "POO aplicada: herança, polimorfismo e encapsulamento no domínio",
      "DTOs separando o modelo de domínio do contrato da API",
      "H2 para desenvolvimento e MySQL para produção via Docker",
    ],
  },
  {
    slug: "upload-api",
    name: "upload-api",
    tagline: "Autenticação JWT e upload de arquivos no Amazon S3",
    summary:
      "API REST em Java + Spring Boot para autenticação, upload de arquivos no Amazon S3 e gerenciamento de prints, com JWT, MySQL e integração com um frontend em React.",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "JWT", "Amazon S3", "MySQL"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/upload-api",
    highlights: [
      "Autenticação com JWT",
      "Upload e gerenciamento de arquivos no Amazon S3",
      "Persistência de metadados em MySQL",
      "Integração com o frontend Site Prints Jogos (React + Vite)",
    ],
  },
  {
    slug: "player-api",
    name: "player-api",
    tagline: "CRUD de jogadores com AWS DynamoDB e integração entre APIs",
    summary:
      "API REST em Java + Spring Boot para gerenciamento de jogadores usando AWS DynamoDB como banco NoSQL, integrada à pet-api (MySQL) para associar pets a jogadores registrados.",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "AWS DynamoDB", "REST"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/player-api",
    highlights: [
      "CRUD de jogadores com persistência NoSQL em DynamoDB",
      "Integração entre serviços: associação de pets (pet-api, MySQL) a jogadores",
      "Contraste prático entre modelagem relacional e NoSQL",
    ],
  },
  {
    slug: "tarefa-api",
    name: "tarefa-api",
    tagline: "API REST de tarefas com Java e Spring Boot",
    summary:
      "API REST em Java + Spring Boot voltada ao gerenciamento de tarefas, com operações CRUD e persistência relacional.",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "REST", "JPA"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/tarefa-api",
    highlights: [
      "Operações CRUD de tarefas via endpoints REST",
      "Camadas organizadas de controller, service e persistência",
    ],
  },
  {
    slug: "api-cadastro-usuario",
    name: "api-cadastro-usuario",
    tagline: "Cadastro de usuários com Spring Boot e persistência relacional",
    summary:
      "API em Java + Spring Boot com operações de cadastro, consulta, atualização e remoção de usuários, com persistência em banco relacional.",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "JPA", "REST"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/api-cadastro-usuario",
    highlights: [
      "CRUD de usuários via API REST",
      "Persistência relacional com JPA",
    ],
  },
  {
    slug: "xuitter",
    name: "xuitter",
    tagline: "Backend de microblog com persistência relacional",
    summary:
      "Projeto backend em Java inspirado em um microblog, com comportamento REST e persistência relacional.",
    category: "backend",
    featured: false,
    stack: ["Java", "Spring Boot", "REST", "SQL"],
    repoUrl: "https://github.com/Daniel-Macedo-dev/xuitter",
    highlights: [
      "Endpoints REST para o fluxo de publicações",
      "Modelagem relacional dos dados",
    ],
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
