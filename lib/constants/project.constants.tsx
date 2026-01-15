import { Project } from "@/types/project.types";
import { Brain } from "lucide-react";
import {
  RiNextjsFill,
  RiAngularjsFill,
  RiFlutterFill,
  RiTailwindCssFill,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";
import {
  SiDart,
  SiLangchain,
  SiMongodb,
  SiNestjs,
  SiSanity,
  SiSupabase,
} from "react-icons/si";

export const frameworks = [
  {
    name: "Next.js",
    icon: <RiNextjsFill size={24} />,
  },
  {
    name: "Angular",
    icon: <RiAngularjsFill size={24} />,
  },
  {
    name: "Flutter",
    icon: <RiFlutterFill size={24} />,
  },
  {
    name: "Dart",
    icon: <SiDart size={24} />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size={24} />,
  },
  {
    name: "Nest.js",
    icon: <SiNestjs size={24} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={24} />,
  },
  {
    name: "LangChain",
    icon: <SiLangchain size={24} />,
  },
  {
    name: "Sanity",
    icon: <SiSanity size={24} />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase size={24} />,
  }
];

export const projects: Project[] = [
  {
    name: "Wardrobe Worth",
    description:
      "Discover your wardrobe's resale value using real-time market data.",
    framework: ["Next.js", "Tailwind CSS"],
    link: "https://wardrobe-worth.com",
    imageUrl: "/images/projects/wardrobe-worth.png",
  },
  {
    name: "Nurse Applicants System",
    description: "Automates nurse trainee applications and selection.",
    framework: ["Next.js", "Nest.js", "TypeScript", "MongoDB"],
    link: "https://example.com/nurse-trainee-system",
    imageUrl: "/images/projects/nurse-trainee.png",
  },
  {
    name: "Vision Aluminium",
    description: "Corporate website for Vision Aluminium.",
    framework: ["Next.js", "Tailwind CSS"],
    link: "https://visionaluminium.co.zw",
    imageUrl: "/images/projects/vision-aluminium.png",
  },
  {
    name: "Quick USSD",
    description: "Mobile app for quick access to USSD codes.",
    framework: ["Flutter", "Dart"],
    link: "https://github.com/QuintonMaisiri/quick_ussd",
    imageUrl: "/images/projects/quick-ussd.png",
  },
  {
    name: "Uncommon Playground",
    description:
      "A platform to explore and share uncommon coding projects.",
    framework: ["Angular", "Tailwind CSS", "MongoDB", "LangChain"],
    link: "https://playground.uncommon.org/",
    imageUrl: "/images/projects/playground.png",
  },  
  {
    name: "Portfolio Website",
    description: "Personal portfolio to showcase projects and skills.",
    framework: ["Next.js", "Tailwind CSS"],
    link: "https://your-portfolio.com",
    imageUrl: "/images/projects/vision-aluminium.png",
  },
  {
    name: "Facilite",
    description:
      "Facilite is a Chilean financial education platform for everyone. ",
    framework: ["Next.js", "Tailwind CSS", "Sanity"],
    link: "https://example.com/facilite",
    imageUrl: "/images/projects/facilite.png",
  },
  {
    name: "Spot Reipapo",
    description: "Find nearby bars and clubs.",
    framework: ["Flutter", "Supabase", "Dart"],
    link: "",
    imageUrl: "/images/projects/spot-reipapo.png",
  },
  {
    name: "Keynes Investments",
    description:
      "An investment management platform that provides tools and resources for investors to manage their portfolios effectively.",
    framework: ["Next.js", "TypeScript", "Sanity"],
    link: "https://keynesinvestments.org/",
    imageUrl: "/images/projects/keynes.png",
  },
  {
    name: "PaRank ndepapi",
    description:
      "Find pickup points / rank for any location in Zimbabwe.",
    framework: ["Flutter", "Dart", "Supabase"],
    link: "",
    imageUrl: "/images/projects/parank.png",
  },
];
