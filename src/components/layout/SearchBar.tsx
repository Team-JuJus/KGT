"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchAndLanguageProps {
  lang: string;
}

const SearchAndLanguage: React.FC<SearchAndLanguageProps> = ({ lang }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname(); // get current path

  const toggleLanguage = () => {
    const newLang = lang === "fa" ? "en" : "fa";
    const pathWithoutLang = pathname.replace(/^\/(fa|en)/, "");

    // Push new language-prefixed route
    router.push(`/${newLang}${pathWithoutLang}`);
  };

  const onSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search for:", query);
    setQuery("");
  };

  return (
    <div className="flex items-center gap-3">
      <form
        onSubmit={onSubmitSearch}
        className="items-center rounded-full border border-gray-300 px-3 py-1 md:flex"
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
      <button onClick={toggleLanguage} className="w-8">
        <Image
          src={lang === "fa" ? "/iran.svg" : "/eng.svg"}
          alt={lang === "fa" ? "Iran Flag" : "England Flag"}
          width={24}
          height={12}
          className="w-full ring-2"
        />
      </button>
    </div>
  );
};

export default SearchAndLanguage;
