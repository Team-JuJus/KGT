"use client";

import { getProducts } from "@/app/actions/getProducts";
import { CategoryRaw, Company, Product } from "@/types";
import { use } from "react";
import { useState, useEffect } from "react";

const sortOptions = [
  { id: "title-asc", label: { en: "Title (A→Z)", fa: "عنوان (الف تا ی)" } },
  { id: "title-desc", label: { en: "Title (Z→A)", fa: "عنوان (ی تا الف)" } },
  { id: "company-asc", label: { en: "Company (A→Z)", fa: "شرکت (الف تا ی)" } },
  { id: "company-desc", label: { en: "Company (Z→A)", fa: "شرکت (ی تا الف)" } },
];

interface FilterSortProps {
  categories: Promise<CategoryRaw[]>;
  isEnglish: boolean;
  companies: Promise<Company[]>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSort: React.FC<FilterSortProps> = ({
  isEnglish,
  categories,
  companies,
  setProducts,
  setLoading,
}) => {
  const allCategories = use(categories);
  const allCompanies = use(companies);

  // 🌟 State
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [sort, setSort] = useState("title-asc");

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async (pageNum: number) => {
      try {
        const categoryFilter = selectedCategories[0] || undefined;
        const companyFilter = selectedCompanies[0] || undefined;
        const data = await getProducts({
          page: pageNum,
          search,
          categoryId: categoryFilter,
          company: companyFilter,
        });

        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(() => {
      fetchProducts(1);
    }, 800);

    return () => clearTimeout(timeout);
  }, [search, selectedCategories, selectedCompanies, setProducts, setLoading]);

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const toggleCompany = (name: string) => {
    setSelectedCompanies((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name],
    );
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedCompanies([]);
    setSort("title-asc");
  };

  return (
    <div className="sticky top-0 left-0 h-screen w-60 shrink-0 overflow-y-scroll p-4 max-md:hidden">
      <h2 className="mb-3 text-xl font-semibold">
        {isEnglish ? "Filters" : "فیلترها"}
      </h2>

      {/* Search */}
      <div className="mb-4">
        <label htmlFor="search" className="mb-1 block text-sm font-medium">
          {isEnglish ? "Search" : "جستجو"}
        </label>
        <input
          id="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={isEnglish ? "Search products" : "جستجوی محصولات"}
          className="w-full rounded-md border p-2"
        />
      </div>

      {/* Category */}
      <fieldset className="mb-4">
        <legend className="mb-2 font-medium">
          {isEnglish ? "Category" : "دسته‌بندی"}
        </legend>
        {allCategories.map((c) => (
          <div key={c.name_en} className="flex items-center">
            <input
              id={`cat-${c.name_en}`}
              type="checkbox"
              checked={selectedCategories.includes(c.name_en)}
              onChange={() => toggleCategory(c.name_en)}
              className="m-1"
            />
            <label htmlFor={`cat-${c.name_en}`}>
              {isEnglish ? c.name_en : c.name_fa}
            </label>
          </div>
        ))}
      </fieldset>

      {/* Company */}
      <fieldset className="mb-4">
        <legend className="mb-2 font-medium">
          {isEnglish ? "Company" : "شرکت"}
        </legend>
        {allCompanies.map((c) => (
          <div key={c.name_en} className="flex items-center">
            <input
              id={`comp-${c.name_en}`}
              type="checkbox"
              checked={selectedCompanies.includes(c.name_en)}
              onChange={() => toggleCompany(c.name_en)}
              className="m-1"
            />
            <label htmlFor={`comp-${c.name_en}`}>
              {isEnglish ? c.name_en : c.name_fa}
            </label>
          </div>
        ))}
      </fieldset>

      {/* Sort */}
      <div className="mb-4">
        <label htmlFor="sort" className="mb-1 block text-sm font-medium">
          {isEnglish ? "Sort" : "مرتب‌سازی"}
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full rounded-md border p-2"
        >
          {sortOptions.map((s) => (
            <option key={s.id} value={s.id}>
              {isEnglish ? s.label.en : s.label.fa}
            </option>
          ))}
        </select>
      </div>

      {/* Reset */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={resetFilters}
          className="rounded-md border px-3 py-2"
        >
          {isEnglish ? "Reset" : "بازنشانی"}
        </button>
      </div>
    </div>
  );
};

export default FilterSort;
