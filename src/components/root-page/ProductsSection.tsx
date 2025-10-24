import Link from "next/link";
import clsx from "clsx";
import { RiShareForwardLine } from "react-icons/ri";
import ProductSwiper from "./ProductSwiper";
import { Suspense } from "react";
import { getProducts } from "@/app/actions/getProducts";

interface ProductsSectionProps {
  lang: string;
}

export default function ProductsSection({ lang }: ProductsSectionProps) {
  const isEnglish = lang === "en";

  const dataPromise = getProducts();

  return (
    <section className="bg-blue-50 py-5">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between px-3 sm:px-0">
          <h2 className="text-2xl font-bold text-blue-900">
            {isEnglish ? "Products" : "محصولات"}
          </h2>
          <Link
            href={`/${lang}/products`}
            className="flex items-center text-blue-900"
          >
            {isEnglish ? "All products" : "همه محصولات"}{" "}
            <RiShareForwardLine
              className={clsx(!isEnglish && "-scale-x-100")}
            />
          </Link>
        </div>

        <hr className="my-3" />

        <Suspense fallback={<div>Loading...</div>}>
          <ProductSwiper data={dataPromise} isEnglish={isEnglish} />
        </Suspense>
      </div>
    </section>
  );
}
