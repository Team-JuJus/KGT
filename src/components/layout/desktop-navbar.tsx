"use client";

import { use } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import ProductsButton from "./ProductsButton";

import { NAV_LINKS } from "@/Data";

import { NavbarProps } from "@/types";

const DesktopNavigation: React.FC<NavbarProps> = ({ categories }) => {
  const urlPath = usePathname();
  const pathNames = urlPath.split("/");
  const lang = pathNames[1];

  const categoryData = use(categories);

  const isActive = (link: string) => {
    if (pathNames[2] === link) return true;
    if (pathNames[2] === undefined && link === "") return true;
    return false;
  };

  return (
    <nav className="flex items-center gap-6 max-md:hidden">
      {NAV_LINKS.map((item) => (
        <div
          key={item.name_en}
          className={"px-2 py-1 text-sm hover:text-blue-500"}
        >
          {item.name_en === "Products" ? (
            <ProductsButton
              lang={lang}
              categories={categoryData}
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

export default DesktopNavigation;
