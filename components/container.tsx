"use client";

import { useEffect, useState } from "react";
import Landing from "./screens/landing";
import Image from "next/image";
import About from "./screens/about";
import Projects from "./screens/projects";
import Contact from "./screens/contact";
import { usePathname } from "next/navigation";
import NotFound from "./screens/notFound";
import Link from "next/link";

const navLinks = [
  {
    name: "_hello",
    url: "/",
    component: Landing,
  },
  {
    name: "_about-me",
    url: "/about-me",
    component: About,
  },
  {
    name: "_projects",
    url: "/projects",
    component: Projects,
  },
];
const contact = {
  name: "_contact-me",
  url: "/contact-me",
  component: Contact,
};

const notFound = {
  name: "_not-found",
  url: "/not-found",
  component: NotFound,
};

const allLinks = [...navLinks, contact, notFound];

export default function Container({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState(navLinks[0]);

  const pathName = usePathname();

  useEffect(() => {
    const path = pathName;
    const matchedLink = allLinks.find((link) => link.url === path);
    if (matchedLink) {
      setPage(matchedLink);
    } else if (path != "") {
      setPage(notFound);
    }
  }, [pathName]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-themeBackdrop p-5 ">
      <div className="bg-themeBg rounded-xl shadow-lg w-full h-full max-w-[1780px] text-themeFg border border-themeStroke flex flex-col overflow-hidden lg:aspect-[16/10]">
        <nav className="w-full flex items-center justify-between border-b border-themeStroke">
          <div className="flex">
            <div className="border-r border-themeStroke py-5 px-7 w-[312px] ">
              quinton-maisiri
            </div>
            {navLinks.map((link) => (
              <div
                key={link.name}
                className={`border-r border-themeStroke py-5 px-7 cursor-pointer ${
                  page.name === link.name &&
                  "border-b border-b-primary border-b-2"
                }`}
                onClick={() => setPage(link)}
              >
                {link.name}
              </div>
            ))}
          </div>
          <div
            className={`border-l border-l-themeStroke py-5 px-7 cursor-pointer ${
              page.name === contact.name &&
              "border-b border-b-primary border-b-2"
            }`}
            onClick={() => setPage(contact)}
          >
            _contact-me
          </div>
        </nav>
        <div className="flex-1 overflow-y-auto">
          {page.component ? <page.component /> : children}
        </div>
        <footer className="w-full flex items-center justify-between border-t border-themeStroke">
          <div className="flex">
            <div className="border-r border-themeStroke py-5 px-7  ">
              find me on
            </div>
            <div className="border-r border-themeStroke py-5 px-7">
              <Link
                href="https://www.linkedin.com/in/quinton-maisiri-2ab157211/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/linkedin.png"
                  alt="linkedin"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="border-l border-l-themeStroke py-5 px-7 ">
           <Link href="https://github.com/QuintonMaisiri2" target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2">
            @quintonmaisiri
            <Image
              src="/images/github.png"
              alt="github"
              width={24}
              height={24}
            />
           </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
