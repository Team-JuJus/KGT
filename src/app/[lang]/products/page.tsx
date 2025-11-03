import React, { Suspense } from "react";
import { getProducts } from "@/app/actions/getProducts";
import ProductLayout from "./ProductLayout";
import ProductCardSkeleton from "./productCardSkeleton";
import FilterSort from "./FilterSort";
import { getCategories } from "@/app/actions/getCategories";
import { getCompanies } from "@/app/actions/getCompanies";

export const dynamic = "force-dynamic";

const page = async ({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams: { page: string };
}) => {
  const { lang } = await params;
  const { page } = await searchParams;

  const isEnglish = lang === "en";

  const products = getProducts(Number(page));
  const categories = getCategories();
  const companies = getCompanies();

  return (
    <main>
      <div className="flex items-center justify-center bg-blue-900 p-2 text-white">
        <h2 className="text-3xl font-bold">
          {isEnglish ? "Products" : "محصولات"}
        </h2>
      </div>

      <section
        aria-labelledby="products-heading"
        className="relative flex w-full"
      >
        <FilterSort
          companies={companies}
          isEnglish={isEnglish}
          categories={categories}
        />
        <Suspense
          fallback={
            <div className="flex flex-wrap justify-center gap-5 p-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <ProductLayout products={products} isEnglish={isEnglish} />
        </Suspense>
        {/* <Pagination
            currentPage={Number(page || 1)}
            lang={lang}
            totalPages={totalPages}
          /> */}
      </section>
    </main>
  );
};

export default page;
