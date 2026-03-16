import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiVercel } from "react-icons/si";

import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillGroup = {
  category: "Frontend" | "Ferramentas";
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
    ],
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];
