"use client";

import { CategoryRaw } from "@/types";
import ProductsButton from "./ProductsButton";
import Link from "next/link";
import { NAV_LINKS as data } from "@/Data";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import SearchAndLanguage from "./SearchBar";
import { CgMenu } from "react-icons/cg";

interface NavbarProps {
  lang: string;
  categories: Promise<CategoryRaw[]>;
}

const Navbar: React.FC<NavbarProps> = ({ lang, categories }) => {
  return (
    <>
      <MobileNav lang={lang} categories={categories} />
      <DesktopNav lang={lang} categories={categories} />
    </>
  );
};

export default Navbar;

const DesktopNav: React.FC<NavbarProps> = ({ lang, categories }) => {
  const pathName = usePathname();
  const isActive = (link: string) => {
    const pathNames = pathName.split("/");
    if (pathNames[2] === link) {
      return true;
    }
    if (pathNames[2] === undefined && link === "") {
      return true;
    }
    return false;
  };

  return (
    <nav className="flex items-center gap-6 max-md:hidden">
      {data.map((item) => (
        <div
          key={item.name_en}
          className={"px-2 py-1 text-sm hover:text-blue-500"}
        >
          {item.name_en === "Products" ? (
            <ProductsButton
              lang={lang}
              categories={categories}
              isActive={isActive(item.link)}
            />
          ) : (
            <Link href={`/${lang}/${item.link}`}>
              <p
                className={clsx(
                  "p-2 transition-all",
                  isActive(item.link) && "font-bold text-blue-800",
                )}
              >
                {lang === "fa" ? item.name_fa : item.name_en}
              </p>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

const MobileNav: React.FC<NavbarProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (link: string) => {
    const pathNames = pathName.split("/");
    if (pathNames[2] === link) {
      return true;
    }
    if (pathNames[2] === undefined && link === "") {
      return true;
    }
    return false;
  };

  return (
    <>
      <CgMenu className="text-4xl text-blue-800" onClick={toggleMenu} />
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
          <SearchAndLanguage lang={lang} />
        </div>

        <div>
          {data.map((item) => (
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
