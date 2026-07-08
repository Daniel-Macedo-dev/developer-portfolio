export type ProjectCategory = "flagship" | "backend";

/**
 * Screenshot real da aplicação em execução (proveniência verificada —
 * capturado do produto real rodando localmente). Nunca usar mockups ou
 * imagens fabricadas.
 */
export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
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
  /** Screenshots reais da aplicação em execução. */
  screenshots?: ProjectImage[];
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
    screenshots: [
      {
        src: "/projects/breakinv/dashboard.png",
        alt: "Dashboard do BreakInv com KPIs de patrimônio total, lucro acumulado, comparação com o CDI, saúde da carteira e gráficos de composição",
        caption:
          "Dashboard: visão consolidada da carteira com KPIs, comparação com o CDI e saúde de diversificação",
        width: 1280,
        height: 712,
      },
      {
        src: "/projects/breakinv/analise-ativos.png",
        alt: "Página de análise de ativos do BreakInv mostrando cotação, variação, máximas e mínimas de 52 semanas e volume do ticker PETR4",
        caption:
          "Análise de ativos: consulta por ticker com cotação e indicadores reais via integração com a Brapi",
        width: 1280,
        height: 712,
      },
      {
        src: "/projects/breakinv/carteira.png",
        alt: "Tela de carteira do BreakInv com tabela de investimentos por categoria, liquidez, valor investido e ações de editar, vender e excluir",
        caption:
          "Carteira: gestão dos ativos com categorias, liquidez e operações de compra e venda",
        width: 1280,
        height: 712,
      },
      {
        src: "/projects/breakinv/diversificacao.png",
        alt: "Página de diversificação do BreakInv comparando distribuição atual e ideal da carteira com método de rebalanceamento por aporte",
        caption:
          "Diversificação: distribuição atual versus ideal com sugestão de rebalanceamento por aporte",
        width: 1280,
        height: 712,
      },
      {
        src: "/projects/breakinv/ranking.png",
        alt: "Ranking de ativos do BreakInv com maiores altas e baixas do dia e gráfico de variação percentual",
        caption:
          "Ranking: desempenho diário dos ativos da carteira com cotações atualizadas",
        width: 1280,
        height: 712,
      },
    ],
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
    screenshots: [
      {
        src: "/projects/guessme/home.png",
        alt: "Tela inicial do GuessMe com tema de dossiê investigativo, ficha do caso selado e etapas de abertura, interrogação e encerramento",
        caption:
          "Home: identidade visual de dossiê investigativo com a ficha do caso e as etapas do jogo",
        width: 1280,
        height: 800,
      },
      {
        src: "/projects/guessme/jogo.png",
        alt: "Tela de investigação ativa do GuessMe com transcrição do interrogatório, consultas rápidas e caderno de evidências",
        caption:
          "Jogo: interrogatório com perguntas rápidas, transcrição da partida e caderno de evidências",
        width: 1280,
        height: 800,
      },
      {
        src: "/projects/guessme/como-funciona.png",
        alt: "Página Como Funciona do GuessMe descrevendo o protocolo de interrogação em cinco etapas",
        caption:
          "Como funciona: o protocolo do jogo em cinco etapas, com estados de evidência sim, não e talvez",
        width: 1280,
        height: 800,
      },
    ],
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
    tagline:
      "Landing full-stack de roteiros culturais por São Paulo com captação de interesse",
    summary:
      "Projeto full-stack do Jovem Tour SP — landing de roteiros culturais por São Paulo com identidade visual própria, mascote e fluxo de captação de interesse, com frontend em React + Vite + TypeScript + Tailwind CSS integrado a uma API REST em Spring Boot com JPA e MySQL.",
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
      {
        src: "/projects/jovemtour-store/hero.png",
        alt: "Hero da landing do Jovem Tour SP com o título Explore São Paulo, marca do projeto e categorias de arte urbana, gastronomia, história e natureza",
        caption:
          "Hero: identidade visual própria do Jovem Tour SP com as categorias de roteiros culturais",
        width: 1280,
        height: 700,
      },
      {
        src: "/projects/jovemtour-store/roteiros.png",
        alt: "Seção de roteiros em destaque com cards do Roteiro Paulista Cultural, Liberdade e Cultura Japonesa, Beco do Batman e Parque Ibirapuera",
        caption:
          "Roteiros em destaque: cards com tags temáticas e ações de conhecer o roteiro e manifestar interesse",
        width: 1280,
        height: 1090,
      },
      {
        src: "/projects/jovemtour-store/mascote.png",
        alt: "Seção do mascote oficial Caramelo com a arte da marca e um recado sobre os roteiros em planejamento",
        caption:
          "Mascote Caramelo: trabalho real de marca aplicado ao produto",
        width: 1280,
        height: 580,
      },
      {
        src: "/projects/jovemtour-store/planejar.png",
        alt: "Formulário Planejar meu rolê com campos de nome, WhatsApp, área de interesse, tamanho do grupo e consentimento de uso de dados",
        caption:
          "Planejar meu rolê: formulário de captação de leads integrado à API, com consentimento explícito",
        width: 1280,
        height: 980,
      },
    ],
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
