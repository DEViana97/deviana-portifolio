export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce-dashboard",
    name: "E-commerce Insight",
    description:
      "Dashboard analitico para e-commerce com filtros em tempo real, visualizacoes interativas e monitoramento de conversao.",
    technologies: ["Next.js", "TypeScript", "Recharts", "Styled Components"],
    image: "/projects/project-analytics.svg",
    demoUrl: "https://example.com/ecommerce-insight",
    githubUrl: "https://github.com/seu-usuario/ecommerce-insight",
  },
  {
    id: "task-flow",
    name: "TaskFlow Pro",
    description:
      "Aplicacao colaborativa para gestao de tarefas com drag and drop, notificacoes e automacoes para squads remotos.",
    technologies: ["React", "TypeScript", "Framer Motion", "Axios"],
    image: "/projects/project-taskflow.svg",
    demoUrl: "https://example.com/taskflow-pro",
    githubUrl: "https://github.com/seu-usuario/taskflow-pro",
  },
  {
    id: "fintech-landing",
    name: "Fintech Landing",
    description:
      "Landing page de alta conversao para startup financeira, com SEO tecnico, performance A+ e componentes reutilizaveis.",
    technologies: ["Next.js", "Zod", "React Hook Form", "Vercel"],
    image: "/projects/project-fintech.svg",
    demoUrl: "https://example.com/fintech-landing",
    githubUrl: "https://github.com/seu-usuario/fintech-landing",
  },
];
