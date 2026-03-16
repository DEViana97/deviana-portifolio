export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    organization: "Agencia PixelCraft",
    period: "2023 - Atual",
    description:
      "Lideranca tecnica em interfaces React/Next.js com foco em acessibilidade, performance e design systems escalaveis.",
  },
  {
    title: "Bootcamp Full Stack",
    organization: "Rocketseat",
    period: "2022",
    description:
      "Formacao intensiva com projetos praticos de frontend moderno, APIs e boas praticas de engenharia de software.",
  },
  {
    title: "Bacharelado em Sistemas",
    organization: "Universidade Federal",
    period: "2019 - 2023",
    description:
      "Base academica em arquitetura de software, usabilidade e fundamentos de computacao aplicada a produtos digitais.",
  },
];
