import { ChevronDown, ChevronRight, File, Folder, X } from "lucide-react";
import Image from "next/image";
import ProjectCard from "./projectCard";
import {
  RiAngularjsFill,
  RiCss3Fill,
  RiFlutterFill,
  RiHtml5Fill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { useState } from "react";
import { SiNestjs } from "react-icons/si";

const frameworks = [
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
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "HTML 5",
    icon: <RiHtml5Fill />,
  },
  {
    name: "CSS 3",
    icon: <RiCss3Fill />,
  },
  {
    name: "Nest.js",
    icon: <SiNestjs />,
  },
];

export default function Projects() {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [projects, setProjects] = useState<any[]>([]);

  const handleCheckboxChange = (name: string) => {
    setSelectedFrameworks((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };
  return (
    <div className="w-full h-full flex">
      {/* Nav section */}
      <div className="flex w-[312px] border-r border-themeStroke">
        <div className="h-full w-full ">
          <div className="px-5 py-4 flex items-center gap-2 border-b border-themeStroke">
            <Image
              src="/images/chevronDown.png"
              alt="chevron down"
              width={16}
              height={16}
            />
            projects
          </div>
          <div className="px-5 py-4 space-y-3">
            {frameworks.map((fw) => (
              <label key={fw.name} className="flex items-center gap-4">
                <input
                  type="checkbox"
                  value={fw.name}
                  checked={selectedFrameworks.includes(fw.name)}
                  onChange={() => handleCheckboxChange(fw.name)}
                  className="
                appearance-none
                w-5 h-5
                border-2 border-slate-500
                rounded
                checked:bg-slate-500
                checked:border-slate-500
                relative
                before:absolute
                before:top-0
                before:left-0
                before:w-full
                before:h-full
                before:flex
                before:items-center
                before:justify-center
                before:text-white
                before:text-sm
                before:content-['✔']
                before:opacity-0
                checked:before:opacity-100
                transition
              "
                />
                {fw.icon}
                <span>{fw.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Displayed Content */}
      <div className="h-full flex flex-col flex-1">
        {/* Open file name container */}
        <div className="w-[259px] h-max px-5 border-r py-4 border-themeStroke ">
          <div className="flex items-center justify-between">
            React <X className="w-[16px]" />
          </div>
        </div>
        {/* Open file content */}
        <div className="h-full flex w-full ">
          <div className=" p-10 flex-1 h-full border-t border-r border-themeStroke">
            <div className="grid grid-cols-3 gap-7">
              <ProjectCard
                title="_ui-animations"
                projectNumber="1"
                description="Duis aute irure dolor in velit esse cillum dolore."
                imageSrc="/images/terminal.png"
                icon={<RiNextjsFill size={24} />}
                onViewProject={() => console.log("View project clicked")}
              />
              <ProjectCard
                title="_ui-animations"
                projectNumber="1"
                description="Duis aute irure dolor in velit esse cillum dolore."
                imageSrc="/images/terminal.png"
                icon={<RiNextjsFill size={24} />}
                onViewProject={() => console.log("View project clicked")}
              />
              <ProjectCard
                title="_ui-animations"
                projectNumber="1"
                description="Duis aute irure dolor in velit esse cillum dolore."
                imageSrc="/images/terminal.png"
                icon={<RiNextjsFill size={24} />}
                onViewProject={() => console.log("View project clicked")}
              />
            </div>
          </div>
          {/* Scroll bar */}
          <div className="h-full border-t border-r w-[32px] border-themeStroke p-2 pt-4">
            <div className="bg-themeStroke w-full h-2 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
