import { MOCK_CATEGORIES as data } from "@/Data"; //temporary
import ProductCard from "@/components/products/ProductCard";

import styles from "./ProductSection.module.css";

interface ProductsSectionProps {
  lang: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ lang }) => {
  return (
    <section className={styles.container}>
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
    </section>
  );
};

export default ProductsSection;
