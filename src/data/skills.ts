import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillGroup = {
  category: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "REST API", icon: FaGithub },
      { name: "Scrum e Kanban", icon: FaGitAlt },
    ],
  },
];
