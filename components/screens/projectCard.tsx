import Image from "next/image";
import { ReactNode } from "react";
import { AiOutlineProject } from "react-icons/ai"; // icon like in top right

interface ProjectCardProps {
  title: string;
  projectNumber: string;
  description: string;
  imageSrc: string;
  onViewProject?: () => void;
  icon: ReactNode;
}

export default function ProjectCard({
  title,
  projectNumber,
  description,
  imageSrc,
  onViewProject,
  icon,
}: ProjectCardProps) {
  return (
    <div>
      <p className="mb-4">
        <span className="text-indigo-500">Project {projectNumber}</span> //{" "}
        {title}
      </p>
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-28">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
          <div className="absolute top-4 right-4 text-slate-900 p-2 rounded-md flex items-center justify-center w-[28px] h-[28px] bg-teal-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-[32px] flex flex-col gap-3 border-t border-t-slate-800">
          <p className="text-[#c0c0d0] text-[18px]">{description}</p>

          <button
            onClick={onViewProject}
            className="mt-2 px-[12px] py-[10px] bg-slate-600 w-max rounded text-sm text-white hover:bg-[#2a2e42] transition"
          >
            view-project
          </button>
        </div>
      </div>
    </div>
  );
}
