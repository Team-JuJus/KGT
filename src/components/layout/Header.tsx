"use client";

import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS as data } from "@/Data";
import { usePathname } from "next/navigation";
import { Category } from "@/types";
import { buildCategoryTree } from "@/utils/treeFromData";
import ProductsButton from "./ProductsButton";

interface NavbarProps {
  lang: string;
  categories: Promise<Category[]>;
}

const Navbar: React.FC<NavbarProps> = ({ lang, categories }) => {
  const categoriesData = use(categories);
  const categoriesTree = buildCategoryTree(categoriesData);

  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const isActive = (link: string) => {
    const normalized = link.startsWith("/") ? link : `/${link}`;
    return pathname === normalized || pathname.startsWith(normalized + "/");
  };

  const onSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // For now use console log; later navigate to search page
    console.log("Search for:", query);
    setQuery("");
  };

  return (
    <header className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-5">
        <Link className="flex items-center gap-3" href="/">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="logo"
            className="w-40 max-md:w-32"
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {data.map((item) => (
            <div
              key={item.name_en}
              className={`px-2 py-1 text-sm hover:underline ${isActive(item.link) ? "font-bold text-blue-600" : "text-gray-700"}`}
            >
              {item.name_en === "Products" ? (
                <ProductsButton lang={lang} categoriesTree={categoriesTree} />
              ) : (
                <Link href={`/${lang}/${item.link}`}>
                  {lang === "fa" ? item.name_fa : item.name_en}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <form
            onSubmit={onSubmitSearch}
            className="hidden items-center rounded-full border border-gray-300 px-3 py-1 md:flex"
          >
            <input
              aria-label={lang === "fa" ? "جستجو" : "Search"}
              className="w-40 bg-transparent text-sm outline-none"
              placeholder={lang === "fa" ? "جستجو..." : "Search..."}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" aria-label="search" className="text-gray-600">
              <FiSearch />
            </button>
          </form>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center rounded-md border border-gray-200 p-2 md:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden">
          <div className="space-y-2 rounded-b-md border-t border-gray-200 bg-white/80 p-3">
            {data.map((item) => (
              <Link
                key={item.name_en}
                href={item.link.startsWith("/") ? item.link : `/${item.link}`}
                onClick={() => setOpen(false)}
                className={`block rounded px-2 py-2 text-sm ${isActive(item.link) ? "bg-blue-50 font-semibold" : "text-gray-700"}`}
              >
                {lang === "fa" ? item.name_fa : item.name_en}
              </Link>
            ))}

            <form
              onSubmit={onSubmitSearch}
              className="mt-2 flex items-center gap-2"
            >
              <input
                aria-label={lang === "fa" ? "جستجو" : "Search"}
                className="flex-1 rounded-md border px-3 py-2 text-sm"
                placeholder={lang === "fa" ? "جستجو..." : "Search..."}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3 py-2 text-white"
              >
                <FiSearch />
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
