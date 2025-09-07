// import CategoryCard from "@/components/categories/CategoryCard";
import React from "react";

import styles from "./Home.module.css";
import ProductCard from "@/components/products/ProductCard";

import { MOCK_CATEGORIES as data } from "@/Data"; //temporary

interface HomeProps {
  params: { lang: string };
}

const Home: React.FC<HomeProps> = async ({ params }) => {
  const { lang } = await params;
  const rtl = lang == "fa";
  return (
    <main>
      <section>
        <div className={styles.categories}>
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
    </main>
  );
};

export default Home;
