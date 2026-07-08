import type { Localized } from "./locales";

/**
 * Strings de interface por idioma. Conteúdo editorial longo vive junto
 * dos dados a que pertence (projects.ts, profile.ts); aqui ficam os
 * rótulos e microcopy compartilhados entre páginas.
 */
export interface UiStrings {
  skipToContent: string;
  nav: { home: string; projects: string; about: string; contact: string };
  languageSwitcher: { label: string; ptName: string; enName: string };
  header: { githubLabel: string; linkedinLabel: string; openMenu: string; closeMenu: string; mainNavLabel: string };
  footer: { navigation: string; contact: string; tagline: string; builtWith: string };
  hero: {
    greeting: string;
    headline: string;
    supporting: string;
    ctaProjects: string;
  };
  capabilities: { eyebrow: string; title: string; description: string };
  featured: { eyebrow: string; title: string; description: string; badgeMain: string; viewCaseStudy: string; repository: string };
  backend: { eyebrow: string; title: string; description: string; viewAll: string; repoOf: (name: string) => string };
  education: { eyebrow: string; title: string };
  contactSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    intro: string;
    featuredTitle: string;
    backendTitle: string;
    backendIntro: string;
    metaTitle: string;
    metaDescription: string;
  };
  projectDetail: {
    breadcrumbLabel: string;
    breadcrumb: string;
    badge: string;
    viewRepo: string;
    context: string;
    solution: string;
    screens: string;
    screensNote: string;
    features: string;
    engineering: string;
    architecture: string;
    challenges: string;
    allProjects: string;
    next: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    educationTitle: string;
    whereTitle: string;
    email: string;
    seeProjects: string;
    metaTitle: string;
    metaDescription: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
    seeProjects: string;
  };
  meta: { siteTitle: string; description: string };
}

export const ui: Localized<UiStrings> = {
  "pt-BR": {
    skipToContent: "Pular para o conteúdo",
    nav: { home: "Início", projects: "Projetos", about: "Sobre", contact: "Contato" },
    languageSwitcher: { label: "Idioma", ptName: "Português", enName: "English" },
    header: {
      githubLabel: "GitHub de Daniel Macedo",
      linkedinLabel: "LinkedIn de Daniel Macedo",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      mainNavLabel: "Navegação principal",
    },
    footer: {
      navigation: "Navegação",
      contact: "Contato",
      tagline: "Desenvolvimento de software, backend e soluções orientadas a dados.",
      builtWith: "Construído com Next.js, TypeScript e Tailwind CSS.",
    },
    hero: {
      greeting: "Olá, eu sou o Daniel —",
      headline: "Desenvolvimento de software, backend e soluções orientadas a dados.",
      supporting:
        "Estudante de Análise e Desenvolvimento de Sistemas na FATEC Zona Sul e Técnico em Informática, com experiência prática em Java, Spring Boot, Python, SQL, APIs REST, bancos de dados e projetos full-stack.",
      ctaProjects: "Ver projetos",
    },
    capabilities: {
      eyebrow: "atuação",
      title: "Como eu trabalho",
      description:
        "Áreas em que tenho experiência prática construída em projetos reais — a evidência está nos projetos, não em barras de habilidade.",
    },
    featured: {
      eyebrow: "projetos em destaque",
      title: "Trabalhos que representam minha engenharia",
      description:
        "Projetos completos com problema, solução e decisões técnicas documentadas — do desktop local-first a integrações com IA generativa.",
      badgeMain: "projeto principal",
      viewCaseStudy: "Ver case study",
      repository: "Repositório",
    },
    backend: {
      eyebrow: "backend & apis",
      title: "APIs e serviços",
      description:
        "Projetos menores e focados que mostram variedade: persistência relacional e NoSQL, autenticação, integrações entre serviços e nuvem.",
      viewAll: "Ver todos os projetos",
      repoOf: (name) => `Repositório de ${name} no GitHub`,
    },
    education: { eyebrow: "formação", title: "Base acadêmica e técnica" },
    contactSection: {
      eyebrow: "contato",
      title: "Vamos conversar?",
      description:
        "Estou aberto a oportunidades, projetos e trocas técnicas. O caminho mais rápido é o e-mail — ou me encontre no LinkedIn e no GitHub.",
    },
    projectsPage: {
      eyebrow: "projetos",
      title: "O que eu construí",
      intro:
        "Uma seleção intencional: três projetos completos que mostram profundidade — desktop, full-stack e IA generativa — e um conjunto de APIs focadas que mostram variedade de persistência, autenticação e integrações.",
      featuredTitle: "Em destaque",
      backendTitle: "APIs e serviços",
      backendIntro:
        "Projetos backend menores e focados — persistência relacional e NoSQL, autenticação com JWT, armazenamento em nuvem e integração entre serviços.",
      metaTitle: "Projetos",
      metaDescription:
        "Projetos de software de Daniel Macedo Silva: aplicação desktop de investimentos, jogo full-stack com IA generativa, landing full-stack de turismo cultural e APIs REST em Java + Spring Boot.",
    },
    projectDetail: {
      breadcrumbLabel: "Trilha de navegação",
      breadcrumb: "projetos",
      badge: "destaque",
      viewRepo: "Ver repositório no GitHub",
      context: "Contexto",
      solution: "Solução",
      screens: "O produto em telas",
      screensNote: "Capturas reais da aplicação em execução.",
      features: "Principais funcionalidades",
      engineering: "Decisões de engenharia",
      architecture: "Arquitetura",
      challenges: "Desafios e aprendizados",
      allProjects: "Todos os projetos",
      next: "Próximo",
    },
    aboutPage: {
      eyebrow: "sobre",
      title: "Quem é o Daniel",
      paragraphs: [
        "Sou o Daniel Macedo Silva, desenvolvedor de software com foco em backend, dados e projetos full-stack. Curso Análise e Desenvolvimento de Sistemas na FATEC Zona Sul, com conclusão prevista para dezembro de 2027, e antes disso me formei Técnico em Informática.",
        "Meu aprendizado acontece principalmente construindo: desenvolvi uma aplicação desktop de controle de investimentos com dashboards, indicadores e integrações com dados de mercado; um jogo full-stack conduzido por IA generativa; uma landing de turismo cultural integrada a uma API própria; e um conjunto de APIs REST em Java + Spring Boot explorando persistência relacional e NoSQL, autenticação com JWT e armazenamento em nuvem.",
        "Me interessam especialmente sistemas que organizam e dão sentido a dados — dashboards, indicadores, integrações com APIs externas e a engenharia por trás disso: modelagem, camadas bem separadas e código que outras pessoas conseguem manter.",
      ],
      educationTitle: "Formação",
      whereTitle: "Onde me encontrar",
      email: "E-mail",
      seeProjects: "Conheça os projetos",
      metaTitle: "Sobre",
      metaDescription:
        "Quem é Daniel Macedo Silva: estudante de Análise e Desenvolvimento de Sistemas na FATEC Zona Sul, Técnico em Informática e desenvolvedor com foco em backend, dados e projetos full-stack.",
    },
    notFound: {
      title: "Página não encontrada",
      description:
        "O endereço que você acessou não existe ou foi movido. Que tal voltar para o início ou explorar os projetos?",
      backHome: "Voltar ao início",
      seeProjects: "Ver projetos",
    },
    meta: {
      siteTitle: "Daniel Macedo Silva — Desenvolvedor de Software",
      description:
        "Portfólio de Daniel Macedo Silva — desenvolvimento de software, backend e soluções orientadas a dados, com experiência prática em Java, Spring Boot, Python, SQL, APIs REST e projetos full-stack.",
    },
  },
  en: {
    skipToContent: "Skip to content",
    nav: { home: "Home", projects: "Projects", about: "About", contact: "Contact" },
    languageSwitcher: { label: "Language", ptName: "Português", enName: "English" },
    header: {
      githubLabel: "Daniel Macedo on GitHub",
      linkedinLabel: "Daniel Macedo on LinkedIn",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNavLabel: "Main navigation",
    },
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      tagline: "Software development, backend engineering and data-oriented applications.",
      builtWith: "Built with Next.js, TypeScript and Tailwind CSS.",
    },
    hero: {
      greeting: "Hi, I'm Daniel —",
      headline: "Software development, backend engineering and data-oriented applications.",
      supporting:
        "Systems Analysis and Development student at FATEC Zona Sul with a technical degree in Informatics, and hands-on experience in Java, Spring Boot, Python, SQL, REST APIs, databases and full-stack projects.",
      ctaProjects: "View projects",
    },
    capabilities: {
      eyebrow: "what i do",
      title: "How I work",
      description:
        "Areas where I have hands-on experience built through real projects — the evidence lives in the projects, not in skill bars.",
    },
    featured: {
      eyebrow: "featured projects",
      title: "Work that represents my engineering",
      description:
        "Complete projects with a documented problem, solution and technical decisions — from a local-first desktop app to generative AI integrations.",
      badgeMain: "main project",
      viewCaseStudy: "Read case study",
      repository: "Repository",
    },
    backend: {
      eyebrow: "backend & apis",
      title: "APIs and services",
      description:
        "Smaller, focused projects that show range: relational and NoSQL persistence, authentication, service-to-service integrations and cloud storage.",
      viewAll: "View all projects",
      repoOf: (name) => `${name} repository on GitHub`,
    },
    education: { eyebrow: "education", title: "Academic and technical background" },
    contactSection: {
      eyebrow: "contact",
      title: "Let's talk?",
      description:
        "I'm open to opportunities, projects and technical conversations. Email is the fastest way to reach me — or find me on LinkedIn and GitHub.",
    },
    projectsPage: {
      eyebrow: "projects",
      title: "What I've built",
      intro:
        "A deliberate selection: three complete projects that show depth — desktop, full-stack and generative AI — plus a set of focused APIs that show range across persistence, authentication and integrations.",
      featuredTitle: "Featured",
      backendTitle: "APIs and services",
      backendIntro:
        "Smaller, focused backend projects — relational and NoSQL persistence, JWT authentication, cloud storage and service-to-service integration.",
      metaTitle: "Projects",
      metaDescription:
        "Software projects by Daniel Macedo Silva: a desktop investment tracker, a full-stack game driven by generative AI, a full-stack cultural tourism landing page, and REST APIs built with Java and Spring Boot.",
    },
    projectDetail: {
      breadcrumbLabel: "Breadcrumb",
      breadcrumb: "projects",
      badge: "featured",
      viewRepo: "View repository on GitHub",
      context: "Context",
      solution: "Solution",
      screens: "The product in screens",
      screensNote: "Real captures of the application running.",
      features: "Key features",
      engineering: "Engineering decisions",
      architecture: "Architecture",
      challenges: "Challenges and lessons",
      allProjects: "All projects",
      next: "Next",
    },
    aboutPage: {
      eyebrow: "about",
      title: "Who is Daniel",
      paragraphs: [
        "I'm Daniel Macedo Silva, a software developer focused on backend engineering, data and full-stack projects. I'm studying Systems Analysis and Development at FATEC Zona Sul (expected graduation: December 2027), and before that I earned a technical degree in Informatics.",
        "I learn primarily by building: a desktop investment tracker with dashboards, indicators and market-data integrations; a full-stack game driven by generative AI; a cultural tourism landing page integrated with its own API; and a set of REST APIs in Java + Spring Boot exploring relational and NoSQL persistence, JWT authentication and cloud storage.",
        "I'm especially drawn to systems that organize data and make it meaningful — dashboards, indicators, external API integrations — and to the engineering behind them: modeling, well-separated layers and code other people can maintain.",
      ],
      educationTitle: "Education",
      whereTitle: "Where to find me",
      email: "Email",
      seeProjects: "Explore the projects",
      metaTitle: "About",
      metaDescription:
        "Who is Daniel Macedo Silva: Systems Analysis and Development student at FATEC Zona Sul, Informatics technician, and developer focused on backend, data and full-stack projects.",
    },
    notFound: {
      title: "Page not found",
      description:
        "The address you tried to reach doesn't exist or has moved. How about heading back home or exploring the projects?",
      backHome: "Back to home",
      seeProjects: "View projects",
    },
    meta: {
      siteTitle: "Daniel Macedo Silva — Software Developer",
      description:
        "Portfolio of Daniel Macedo Silva — software development, backend engineering and data-oriented applications, with hands-on experience in Java, Spring Boot, Python, SQL, REST APIs and full-stack projects.",
    },
  },
};
