import { RiShareForwardLine } from "react-icons/ri";

import { MOCK_PRODUCTS as data } from "@/Data"; //temporary
import ProductCard from "@/components/products/ProductCard";

import styles from "./ProductSection.module.css";
import Link from "next/link";

interface ProductsSectionProps {
  lang: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ lang }) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_caption}>
          <h2>Products</h2>
          <Link href={`${lang}/products`}>
            All products <RiShareForwardLine />
          </Link>
        </div>
        <hr />
      </div>
      <div className={styles.products}>
        {data.map((item, index) => (
          <ProductCard
            title={lang == "en" ? item.title_en : item.title_fa}
            link="link"
            image="/lab-image-2.png"
            alt="Test text"
            desc={lang == "en" ? item.summary_en : item.summary_fa}
            key={index}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
