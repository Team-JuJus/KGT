import { RiShareForwardLine } from "react-icons/ri";

import { MOCK_PRODUCTS as data } from "@/Data";
import ProductCard from "@/components/products/ProductCard";

import styles from "./ProductSection.module.css";
import Link from "next/link";

interface ProductsSectionProps {
  lang: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ lang }) => {
  const isEnglish = lang === "en";

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_caption}>
          <h2>{isEnglish ? "Products" : "محصولات"}</h2>
          <Link href={`${lang}/products`}>
            {isEnglish ? "All products" : "همه محصولات"} <RiShareForwardLine />
          </Link>
        </div>
        <hr />
      </div>
      <div className={styles.products}>
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
    </section>
  );
};

export default ProductsSection;
