"use client";

import { Suspense, useState } from "react";
import { CategoryRaw, Company, Product } from "@/types";
import FilterSortSkeleton from "./FilterSortSkeleton";
import FilterSort from "./FilterSort";
import ProductCardSkeleton from "./productCardSkeleton";
import ProductLayout from "./ProductLayout";

interface SectionProps {
  companies: Promise<Company[]>;
  isEnglish: boolean;
  categories: Promise<CategoryRaw[]>;
}

const Section = ({ companies, isEnglish, categories }: SectionProps) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <section
      aria-labelledby="products-heading"
      className="relative flex w-full"
    >
      <Suspense fallback={<FilterSortSkeleton />}>
        <FilterSort
          setProducts={setProducts}
          setLoading={setLoading}
          isEnglish={isEnglish}
          companies={companies}
          categories={categories}
        />
      </Suspense>

      {loading ? (
        <div className="flex flex-wrap justify-center gap-5 p-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <ProductLayout products={products} isEnglish={isEnglish} />
      )}
    </section>
  );
};

export default Section;
