import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import React, { use } from "react";

interface ProductLayoutProps {
  products: Promise<Product[]>;
  isEnglish: boolean;
}

const ProductLayout = ({ products, isEnglish }: ProductLayoutProps) => {
  const allProducts = use(products);
  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      {allProducts.map((item) => (
        <ProductCard
          key={item.id}
          title={isEnglish ? item.name_en : item.name_fa}
          link={item.image_url}
          image={item.image_url}
          alt={item.name_en}
          desc={isEnglish ? item.summary_en : item.summary_fa}
          isEnglish={isEnglish}
          country={isEnglish ? item.country_en : item.country_fa}
          company={item.company}
          category={
            isEnglish
              ? item.category_id["name_en"]
              : item.category_id["name_fa"]
          }
        />
      ))}
    </div>
  );
};

export default ProductLayout;
