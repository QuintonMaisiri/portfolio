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
import { MenuIcon, X } from "lucide-react";
import MobileNav from "./mobileNav";

export type PageLink = {
  name: string;
  url: string;
  component: React.ElementType;
};

const navLinks: PageLink[] = [
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
const contact: PageLink = {
  name: "_contact-me",
  url: "/contact-me",
  component: Contact,
};

const notFound: PageLink = {
  name: "_not-found",
  url: "/not-found",
  component: NotFound,
};

const allLinks: PageLink[] = [...navLinks, contact, notFound];

export default function Container({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<PageLink>(navLinks[0]);
  const [openNav, setOpenNav] = useState(false);
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
      <div className="bg-themeBg rounded-lg lg:rounded-xl shadow-lg w-full h-full max-h-screen max-w-[1780px] text-themeFg border border-themeStroke flex flex-col overflow-hidden lg:aspect-[16/10]">
        <nav className="w-full flex items-center justify-between border-b border-themeStroke">
          <div className="flex w-full justify-between items-center lg:w-auto lg:items-start lg:justify-start">
            <div className="lg:border-r border-themeStroke p-4 xl:py-5 xl:px-7 lg:w-[286px] xl:w-[312px] ">
              quinton-maisiri
            </div>
            <div>
             {
              openNav ? <X className="mr-4 lg:hidden" onClick={() => setOpenNav(false)} />
              :  <MenuIcon
                className="mr-4 lg:hidden"
                onClick={() => setOpenNav(true)}
              />
             }
            </div>
            {navLinks.map((link) => (
              <div
                key={link.name}
                className={`hidden lg:block border-r border-themeStroke p-4 xl:py-5 xl:px-7 cursor-pointer ${
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
            className={`hidden lg:block border-l border-l-themeStroke p-4 xl:py-5 xl:px-7 cursor-pointer ${
              page.name === contact.name &&
              "border-b border-b-primary border-b-2"
            }`}
            onClick={() => setPage(contact)}
          >
            _contact-me
          </div>
        </nav>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {openNav ? (
            <MobileNav
              links={allLinks}
              onClick={(page: PageLink) => {
                setPage(page);
                setOpenNav(false);
              }}
            />
          ) : page.component ? (
            <page.component />
          ) : (
            children
          )}
        </div>
        <footer className="w-full flex items-center lg:justify-between border-t border-themeStroke">
          <div className="flex">
            <div className="border-r border-themeStroke py-5 px-7  ">
              find me on:
            </div>
            <div className="border-r border-themeStroke xl:py-5 px-7 flex items-center ">
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
                  className=""
                />
              </Link>
            </div>
          </div>
          <div className="lg:border-l border-l-themeStroke py-5 px-7 ">
            <Link
              href="https://github.com/QuintonMaisiri2"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex items-center gap-2"
            >
              <p className="hidden lg:block"> @quintonmaisiri</p>
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
