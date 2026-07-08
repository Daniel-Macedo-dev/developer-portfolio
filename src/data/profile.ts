import type { Localized } from "./locales";

export interface CapabilityArea {
  title: string;
  description: string;
  stack: string[];
}

/**
 * Áreas de atuação com contexto prático real — evidência por projetos,
 * sem rótulos de proficiência arbitrários.
 */
export const capabilities: Localized<CapabilityArea[]> = {
  "pt-BR": [
    {
      title: "Backend & APIs",
      description:
        "Desenvolvimento de APIs REST em Java com Spring Boot: CRUD, DTOs, camadas de serviço, autenticação com JWT e integrações entre serviços.",
      stack: ["Java", "Spring Boot", "REST", "JPA", "JWT"],
    },
    {
      title: "Dados & Persistência",
      description:
        "Modelagem e uso de bancos relacionais (MySQL, PostgreSQL, SQLite, H2) e experiência prática com NoSQL (DynamoDB), além de SQL para consultas e análise.",
      stack: ["SQL", "MySQL", "PostgreSQL", "SQLite", "DynamoDB"],
    },
    {
      title: "Frontend",
      description:
        "Interfaces web com React, TypeScript e Tailwind CSS, integradas a APIs REST — de landing pages a aplicações interativas.",
      stack: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Análise & Integrações",
      description:
        "Dashboards, indicadores e integrações com APIs externas — de dados financeiros (Brapi, Banco Central do Brasil) a IA generativa (Google Gemini).",
      stack: ["Python", "Dashboards", "APIs externas", "Docker", "Git"],
    },
  ],
  en: [
    {
      title: "Backend & APIs",
      description:
        "REST API development in Java with Spring Boot: CRUD, DTOs, service layers, JWT authentication and service-to-service integrations.",
      stack: ["Java", "Spring Boot", "REST", "JPA", "JWT"],
    },
    {
      title: "Data & Persistence",
      description:
        "Relational data modeling (MySQL, PostgreSQL, SQLite, H2) plus hands-on NoSQL experience (DynamoDB), and SQL for querying and analysis.",
      stack: ["SQL", "MySQL", "PostgreSQL", "SQLite", "DynamoDB"],
    },
    {
      title: "Frontend",
      description:
        "Web interfaces with React, TypeScript and Tailwind CSS, integrated with REST APIs — from landing pages to interactive applications.",
      stack: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Analysis & Integrations",
      description:
        "Dashboards, indicators and external API integrations — from financial market data (Brapi, Central Bank of Brazil) to generative AI (Google Gemini).",
      stack: ["Python", "Dashboards", "External APIs", "Docker", "Git"],
    },
  ],
};

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export const education: Localized<EducationItem[]> = {
  "pt-BR": [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "FATEC Zona Sul",
      period: "Em andamento · conclusão prevista para dezembro de 2027",
      description:
        "Graduação tecnológica com foco em desenvolvimento de software, bancos de dados, engenharia de software e sistemas.",
    },
    {
      title: "Técnico em Informática",
      institution: "Formação técnica",
      period: "Concluído",
      description:
        "Base técnica em lógica de programação, desenvolvimento e fundamentos de sistemas.",
    },
  ],
  en: [
    {
      title: "Systems Analysis and Development",
      institution: "FATEC Zona Sul",
      period: "In progress · expected graduation December 2027",
      description:
        "Technology degree focused on software development, databases, software engineering and systems.",
    },
    {
      title: "Technical Degree in Informatics",
      institution: "Technical education",
      period: "Completed",
      description:
        "Technical foundation in programming logic, software development and systems fundamentals.",
    },
  ],
};
