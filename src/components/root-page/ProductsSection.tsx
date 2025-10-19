import { RiShareForwardLine } from "react-icons/ri";

import { MOCK_PRODUCTS as data } from "@/Data";
import ProductCard from "@/components/products/ProductCard";

import Link from "next/link";

interface ProductsSectionProps {
  lang: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ lang }) => {
  const isEnglish = lang === "en";

  return (
    <section className="bg-blue-50 py-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-900">
            {isEnglish ? "Products" : "محصولات"}
          </h2>
          <Link
            href={`${lang}/products`}
            className="flex items-center text-blue-900"
          >
            {isEnglish ? "All products" : "همه محصولات"} <RiShareForwardLine />
          </Link>
        </div>
        <hr />
        <div className="flex flex-wrap justify-center gap-5 py-5">
          {data.map((item, index) => (
            <ProductCard
              title={lang == "en" ? item.title_en : item.title_fa}
              link={item.link}
              image={item.image}
              alt={item.alt}
              desc={lang == "en" ? item.summary_en : item.summary_fa}
              key={index}
              isEnglish={isEnglish}
              country={isEnglish ? item.country_en : item.country_fa}
              company={item.company}
              category={isEnglish ? item.category_en : item.category_fa}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
