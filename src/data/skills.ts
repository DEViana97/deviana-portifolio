export type SkillGroup = {
  category: string;
  icon: string;
  accent: "primary" | "secondary" | "tertiary";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "code",
    accent: "primary",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux", "Zustand"],
  },
  {
    category: "Styling",
    icon: "palette",
    accent: "secondary",
    items: ["Tailwind CSS", "Styled Components", "Framer Motion", "Bootstrap", "SASS"],
  },
  {
    category: "Ferramentas",
    icon: "build",
    accent: "tertiary",
    items: ["Git & GitHub", "Figma", "Vercel", "REST APIs", "Scrum e Kanban"],
  },
];
