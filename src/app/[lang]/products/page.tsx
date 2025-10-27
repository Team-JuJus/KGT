import React from "react";
import ProductCard from "@/components/products/ProductCard";
import { getProducts } from "@/app/fetchers/getProducts";
const sortOptions = [
  { id: "title-asc", label: { en: "Title (A→Z)", fa: "عنوان (الف تا ی)" } },
  { id: "title-desc", label: { en: "Title (Z→A)", fa: "عنوان (ی تا الف)" } },
  { id: "company-asc", label: { en: "Company (A→Z)", fa: "شرکت (الف تا ی)" } },
  { id: "company-desc", label: { en: "Company (Z→A)", fa: "شرکت (ی تا الف)" } },
];

const categories = [
  { en: "Electronics", fa: "الکترونیک" },
  { en: "Home Appliances", fa: "لوازم خانگی" },
  { en: "Health & Beauty", fa: "سلامت و زیبایی" },
  { en: "Sports & Outdoors", fa: "ورزش و فضای باز" },
  { en: "Books", fa: "کتاب‌ها" },
  { en: "Clothing", fa: "پوشاک" },
];

const companies = [
  { en: "Acme Corp", fa: "شرکت اکمه" },
  { en: "NovaTech", fa: "نوواتک" },
  { en: "GreenLeaf", fa: "گرین‌لیف" },
  { en: "Stellar Goods", fa: "استلار گودز" },
  { en: "PureHealth", fa: "پیورهلث" },
];

const countries = [
  { en: "United States", fa: "ایالات متحده" },
  { en: "Germany", fa: "آلمان" },
  { en: "Iran", fa: "ایران" },
  { en: "China", fa: "چین" },
  { en: "United Kingdom", fa: "بریتانیا" },
];

export const dynamic = "force-static";

const page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = await params;
  const isEnglish = lang === "en";
  const data = await getProducts();

  return (
    <main dir={isEnglish ? "ltr" : "rtl"}>
      <div className="flex items-center justify-center bg-blue-900 p-2 text-white">
        <h2 className="text-3xl font-bold">
          {isEnglish ? "Products" : "محصولات"}
        </h2>
      </div>

      <section
        aria-labelledby="products-heading"
        className="relative flex w-full"
      >
        <div
          className="sticky top-0 left-0 h-screen w-60 shrink-0 overflow-y-scroll p-4"
          aria-hidden={false}
        >
          <h2 id="products-heading" className="mb-3 text-xl font-semibold">
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
              placeholder={isEnglish ? "Search products" : "جستجوی محصولات"}
              className="w-full rounded-md border p-2"
            />
          </div>

          {/* Category */}
          <fieldset className="mb-4">
            <legend className="mb-2 font-medium">
              {isEnglish ? "Category" : "دسته‌بندی"}
            </legend>
            {categories.map((c) => (
              <div key={c.en} className="flex items-center">
                <input id={`cat-${c.en}`} type="checkbox" className="m-1" />
                <label htmlFor={`cat-${c.en}`}>{isEnglish ? c.en : c.fa}</label>
              </div>
            ))}
          </fieldset>

          {/* Company */}
          <fieldset className="mb-4">
            <legend className="mb-2 font-medium">
              {isEnglish ? "Company" : "شرکت"}
            </legend>
            {companies.map((c) => (
              <div key={c.en} className="flex items-center">
                <input id={`comp-${c.en}`} type="checkbox" className="m-1" />
                <label htmlFor={`comp-${c.en}`}>
                  {isEnglish ? c.en : c.fa}
                </label>
              </div>
            ))}
          </fieldset>

          {/* Country */}
          <fieldset className="mb-4">
            <legend className="mb-2 font-medium">
              {isEnglish ? "Country" : "کشور"}
            </legend>
            {countries.map((c) => (
              <div key={c.en} className="flex items-center">
                <input id={`country-${c.en}`} type="checkbox" className="m-1" />
                <label htmlFor={`country-${c.en}`}>
                  {isEnglish ? c.en : c.fa}
                </label>
              </div>
            ))}
          </fieldset>

          {/* Sort */}
          <div className="mb-4">
            <label htmlFor="sort" className="mb-1 block text-sm font-medium">
              {isEnglish ? "Sort" : "مرتب‌سازی"}
            </label>
            <select id="sort" className="w-full rounded-md border p-2">
              {sortOptions.map((s) => (
                <option key={s.id} value={s.id}>
                  {isEnglish ? s.label.en : s.label.fa}
                </option>
              ))}
            </select>
          </div>

          {/* Reset */}
          <div className="flex gap-2">
            <button type="button" className="rounded-md border px-3 py-2">
              {isEnglish ? "Reset" : "بازنشانی"}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 p-5">
          {data.map((item, index) => (
            <ProductCard
              key={index}
              title={isEnglish ? item.title_en : item.title_fa}
              link={item.link}
              image={item.image}
              alt={item.alt}
              desc={isEnglish ? item.summary_en : item.summary_fa}
              isEnglish={isEnglish}
              country={isEnglish ? item.country_en : item.country_fa}
              company={item.company}
              category={isEnglish ? item.category_en : item.category_fa}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
