"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import SearchAndLanguage from "./SearchBar";

import { CgMenu } from "react-icons/cg";

import { NAV_LINKS } from "@/Data";
import HeaderLogo from "./HeaderLogo";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const urlPath = usePathname();
  const pathNames = urlPath.split("/");

  const lang = pathNames[1];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (link: string) => {
    if (pathNames[2] === link) return true;
    if (pathNames[2] === undefined && link === "") return true;
    return false;
  };

  return (
    <>
      <nav className="flex items-center justify-between p-5 md:hidden">
        <HeaderLogo />
        <CgMenu className="text-4xl text-blue-800" onClick={toggleMenu} />
      </nav>

      <div
        className={`fixed top-0 left-0 z-20 flex h-screen w-screen flex-col items-center justify-between gap-6 bg-white p-5 transition-transform md:hidden ${isOpen ? "" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center gap-10">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-40"
          />
          <SearchAndLanguage />
        </div>

        <div>
          {NAV_LINKS.map((item) => (
            <div
              key={item.name_en}
              className={"py-2 text-center text-2xl hover:text-blue-500"}
            >
              <Link href={`/${lang}/${item.link}`}>
                <p
                  onClick={toggleMenu}
                  className={clsx(
                    "p-2 transition-all",
                    isActive(item.link) && "font-bold text-blue-800",
                  )}
                >
                  {lang === "fa" ? item.name_fa : item.name_en}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default MobileNavigation;
