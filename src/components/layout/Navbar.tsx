"use client";

import { CategoryRaw } from "@/types";
import ProductsButton from "./ProductsButton";
import Link from "next/link";
import { NAV_LINKS as data } from "@/Data";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

interface NavbarProps {
  lang: string;
  categories: Promise<CategoryRaw[]>;
}

const Navbar: React.FC<NavbarProps> = ({ lang, categories }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("hello");
  };

  useEffect(() => {
    // This runs only in the browser
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) return null;

  return (
    <>
      <div className="text-3xl md:hidden" onClick={toggleMenu}>
        <BiMenu />
      </div>
      {isMobile ? (
        <MobileNav
          lang={lang}
          categories={categories}
          toggle={toggleMenu}
          isOpen={isOpen}
        />
      ) : (
        <DesktopNav lang={lang} categories={categories} />
      )}
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
    <nav className="flex items-center gap-6">
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

const MobileNav: React.FC<
  NavbarProps & { toggle: () => void; isOpen: boolean }
> = ({ lang, toggle, isOpen }) => {
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
    <nav
      className={clsx(
        "fixed top-0 z-20 flex h-screen w-screen flex-col items-center justify-between gap-6 bg-white p-5 transition-all",
        isOpen ? "left-0" : "left-full",
      )}
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="w-44"
      />
      <div>
        {data.map((item) => (
          <div
            key={item.name_en}
            className={"py-2 text-center text-2xl hover:text-blue-500"}
          >
            <Link href={`/${lang}/${item.link}`} onClick={toggle}>
              <p
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
    </nav>
  );
};
