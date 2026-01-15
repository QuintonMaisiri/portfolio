import {  File, X } from "lucide-react";
import Image from "next/image";
import ProjectCard from "../projectCard";
import { useEffect, useState } from "react";
import { frameworks, projects } from "@/lib/constants/project.constants";
import { Project } from "@/types/project.types";

export default function Projects() {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const handleCheckboxChange = (name: string) => {
    setSelectedFrameworks((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  useEffect(() => {
    if (selectedFrameworks.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.framework.some((fw) => selectedFrameworks.includes(fw))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedFrameworks]);


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
      <div className="h-full flex flex-col flex-1 overflow-hidden">
        {/* Open file name container */}
       
         {selectedFrameworks.length > 0 &&
          <div className="min-w-[259px] w-max h-max px-5 border-r py-4 border-themeStroke">
           <div className="flex items-center justify-between">
            {selectedFrameworks.map((framework) => `${framework}, ` ) }<X className="w-[16px] ml-10 cursor-pointer" onClick={()=> setSelectedFrameworks([])}/>
          </div>
           </div>
         }
       
        {/* Open file content */}
        <div className="h-full flex w-full ">
          <div className=" p-10 flex-1 h- border-t border-r border-themeStroke overflow-y-scroll gutter-scrollbar">
            <div className="grid grid-cols-3 gap-7">
              {
                filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={`_${project.name}`}
                    projectNumber={(index + 1).toString()}
                    description={project.description}
                    imageSrc={project.imageUrl}
                    icon={frameworks.find(fw => fw.name === project.framework[0])?.icon || <File size={24} />}
                    onViewProject={() => window.open(project.link, "_blank")}
                  />
                ))
              }
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
