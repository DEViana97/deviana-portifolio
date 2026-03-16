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
    id: "devmovies",
    name: "DEVMovies",
    description:
      "Projeto para ajudar pessoas a descobrirem, organizarem e acompanharem filmes e séries em um só lugar, com foco em experiência fluida e informações relevantes para decidir o que assistir.",
    technologies: ["Next.js", "TypeScript", "TMDb API", "Tailwind CSS", "Prisma"],
    image: "/projects/devmovies.png",
    demoUrl: "https://my-movies-wine.vercel.app/",
    githubUrl: "https://github.com/DEViana97/my-movies",
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
