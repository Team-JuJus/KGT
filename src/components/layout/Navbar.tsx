"use client";

import { CategoryRaw } from "@/types";
import ProductsButton from "./ProductsButton";
import Link from "next/link";
import { NAV_LINKS as data } from "@/Data";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavbarProps {
  lang: string;
  categories: Promise<CategoryRaw[]>;
}

const Navbar: React.FC<NavbarProps> = ({ lang, categories }) => {
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
    <nav className="hidden md:flex md:items-center md:gap-6">
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

export default Navbar;
