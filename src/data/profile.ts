export interface CapabilityArea {
  title: string;
  description: string;
  stack: string[];
}

/**
 * Áreas de atuação com contexto prático real — evidência por projetos,
 * sem rótulos de proficiência arbitrários.
 */
export const capabilities: CapabilityArea[] = [
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
];

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export const education: EducationItem[] = [
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
];
