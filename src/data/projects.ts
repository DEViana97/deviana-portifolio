export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  articleUrl?: string;
};

export const projects: Project[] = [
  {
    id: "ecovigia",
    name: "EcovigIA — Fiscalização Urbana com IA | Prefeitura de Fortaleza",
    description:
      "Colaborei no desenvolvimento do Eco VigIA, sistema que utiliza inteligência artificial e câmeras de monitoramento para identificar e multar cidadãos e empresas que descartam lixo em locais proibidos em Fortaleza. O projeto conta com reconhecimento facial e de placas de veículos, e integra a futura Central de Monitoramento da Prefeitura, com previsão de operação em 2026.",
    technologies: ["Next.js", "TypeScript", "React", "React Charts 2", "Leaflet", "Styled Components", "Tanstack Query"],
    image: "/projects/ecovigia.png",
    articleUrl: "https://diariodonordeste.verdesmares.com.br/ceara/fortaleza-vai-usar-ia-para-identificar-e-multar-quem-jogar-lixo-em-locais-proibidos-1.3720294",
  },
  {
    id: "parada-segura",
    name: "Parada Segura — Dashboard de Monitoramento Inteligente | Prefeitura de Fortaleza",
    description:
      "Dashboard de monitoramento e gestão operacional para o programa Parada Segura da Prefeitura de Fortaleza, que moderniza pontos de ônibus com wi-fi, videomonitoramento e painéis de previsão em tempo real (41+ abrigos em 29 bairros). A plataforma centraliza em tempo real todos os eventos dos abrigos, exibe feeds das câmeras de monitoramento, oferece mapa geoespacial de status de cada ponto, painéis analíticos com indicadores de desempenho e geração de relatórios operacionais para a equipe gestora.",
    technologies: ["Next.js", "TypeScript", "Leaflet", "Recharts", "Tanstack Query", "Styled Components"],
    image: "/projects/parada-segura.jpg",
    articleUrl: "https://www.fortaleza.ce.gov.br/noticias/parada-segura-fortaleza-ja-conta-com-abrigos-de-onibus-wi-fi-e-paineis-de-previsao"
  },
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
    id: "cidade-sem-buracos",
    name: "Cidade Sem Buracos",
    description:
      "A ideia é simples: um site onde as pessoas podem reportar buracos nas ruas, com localização e descrição. Esses dados ficam disponíveis para consulta pública e podem ser usados por órgãos municipais para priorizar reparos. O objetivo é criar uma comunidade engajada que ajude a melhorar a infraestrutura urbana, tornando as cidades mais seguras para todos.",
    technologies: ["Next.js", "TypeScript", "React", "Recharts", "Leaflet", "Vercel", "Tailwind CSS", "Zod", "Prisma", "NextAuth", "Tanstack Query"],
    image: "/projects/cidade-sem-buracos.png",
    demoUrl: "https://cidade-sem-buracos.vercel.app/",
    githubUrl: "https://github.com/deviana97/cidade-sem-buracos",
  },
  {
    id: "citydesk",
    name: "Chamados da Cidade — Dashboard SaaS para Gestão de Chamados Urbanos",
    description:
      "Dashboard SaaS voltado para prefeituras e empresas de facilities. Permite que analistas monitorem, filtrem e respondam ocorrências reportadas por cidadãos — buracos, iluminação, lixo, etc. — com mapa interativo, histórico de status e sistema de comentários internos.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Tanstack Query", "Recharts", "Leaflet", "Tailwind CSS"],
    image: "/projects/chamados-da-cidade.png",
    demoUrl: "https://chamados-da-cidade.vercel.app/",
    githubUrl: "https://github.com/DEViana97/chamados-da-cidade-",
  }
];
