import { aboutMeData } from "@/lib/constants/about.constants";
import { Category, File as FileType } from "@/types/about-types";
import {
  ChevronDown,
  File,
  FileSearch,
  Folder,
  Gamepad,
  Mail,
  Phone,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Welcome from "../welcome";
import DisplayContents from "../displayContents";
import CodeSnippet from "../codeSnippet";

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    aboutMeData.categories[0]
  );
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);

  const handleFolderToggle = (folderName: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((name) => name !== folderName)
        : [...prev, folderName]
    );
  };

  return (
    <div className="w-full h-full flex">
      {/* Nav section */}
      <div className="flex w-[312px] border-r border-themeStroke">
        <div className="h-full border-r border-themeStroke py-4 pl-4 pr-5">
          <div className="flex flex-col gap-5">
            {aboutMeData.categories.map((c, index) => (
              <Image
                key={index}
                src={selectedCategory === c ? c.iconSelected : c.iconUnselected}
                alt={c.name}
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => {
                  setSelectedCategory(c);
                }}
              />
            ))}
          </div>
        </div>
        <div className="h-full w-full ">
          <div className="px-5 py-4 flex items-center gap-2 border-b border-themeStroke mb-4">
            <Image
              src="/images/chevronDown.png"
              alt="chevron down"
              width={16}
              height={16}
            />
            {selectedCategory.name}
          </div>
          {selectedCategory.details.map((detail, index) => (
            <div key={index} className="px-5 flex items-center gap-2">
              {typeof detail === "object" && "files" in detail ? (
                <div>
                  <div
                    onClick={() => handleFolderToggle(detail.name)}
                    className="px-5 cursor-pointer flex items-center gap-2"
                  >
                    <ChevronDown
                      className={`w-[16px] transition-transform ${
                        expandedFolders.includes(detail.name)
                          ? "rotate-0"
                          : "-rotate-90"
                      }`}
                    />
                    <Folder className={`w-[16px] ${detail.color}`} />
                    {detail.name}
                  </div>
                  <div
                    className={`ml-6 ${
                      expandedFolders.includes(detail.name) ? "block" : "hidden"
                    }`}
                  >
                    {detail.files.map((file, idx) => (
                      <div
                        onClick={() => setSelectedFile(file)}
                        key={idx}
                        className="cursor-pointer px-5 py-2 flex items-center gap-2"
                      >
                        <File className="w-[16px]" />
                        {file.name}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setSelectedFile(detail)}
                  className="cursor-pointer py-2 px-5 flex items-center gap-2"
                >
                  <File className="w-[16px]" />
                  {detail.name}
                </div>
              )}
            </div>
          ))}
          <div className="px-5 py-4 flex items-center gap-2 border-b border-t border-themeStroke my-4">
            <Image
              src="/images/chevronDown.png"
              alt="chevron down"
              width={16}
              height={16}
            />
            contacts
          </div>
          <div className="px-5 py-2 flex items-center gap-2 text-sm">
            <Mail className="w-[14px]" /> maisiriquinton@gmail.com
          </div>
          <div className="px-5 py-2 pt-1 flex items-center gap-2 text-sm">
            <Phone className="w-[14px]" /> +263 776 441 883
          </div>
        </div>
      </div>

      {/* Displayed Content */}
      <div className="h-full flex flex-col flex-1">
        {/* Open file name container */}
        {selectedFile && (
          <div className="w-[259px] h-max px-5 border-r py-4 border-themeStroke ">
            <div className="flex items-center justify-between">
              {selectedFile.name}{" "}
              <X
                onClick={() => setSelectedFile(null)}
                className="cursor-pointer w-[16px]"
              />
            </div>
          </div>
        )}
        {/* Open file content */}
        <div className="h-full flex w-full">
          {selectedFile ? (
            <DisplayContents contents={selectedFile.content!} />
          ) : (
            <div className="w-4/5 h-full border-r border-themeStroke">
              <Welcome title={selectedCategory.name} />
            </div>
          )}

          {/* Code snippet showcase */}
          <div
            className={` px-8 py-4 w-3/5 h-full overflow-hidden  border-r border-themeStroke ${
              selectedFile && "border-t"
            }`}
          >
            {" "}
            <CodeSnippet />
          </div>

          <div className="h-full border-t border-r w-[32px] border-themeStroke p-2 pt-4">
            <div className="bg-themeStroke w-full h-2 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
