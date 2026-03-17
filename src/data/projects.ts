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
    technologies: ["Next.js", "TypeScript", "TMDb API", "Tailwind CSS", "Prisma", "React Query"],
    image: "/projects/devmovies.png",
    demoUrl: "https://my-movies-wine.vercel.app/",
    githubUrl: "https://github.com/DEViana97/my-movies",
  },
  {
    id: "eCommerceInsight",
    name: "E-commerce Insight",
    description:
      "Uma plataforma de analytics para e-commerce com autenticação, controle de acesso por perfil e visualização de métricas de vendas em tempo real, pronta para deploy em cloud",
    technologies: ["Next.js", "TypeScript", "Prisma", "Recharts", "Zustand", "Vercel", "React Query"],
    image: "/projects/e-insight.png",
    demoUrl: "https://ecommerce-insight.vercel.app/",
    githubUrl: "https://github.com/DEViana97/ecommerce-insight",
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
