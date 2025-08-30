import CategoryCard from "@/components/categories/CategoryCard";
import React from "react";

import styles from "./Home.module.css";

interface HomeProps {
  params: { lang: string };
}

//This will be deleted in the production.
const MOCK_DATA = [
  { title_en: "A", title_fa: "الف", link: "", alt: "", image: "next.svg" },
  { title_en: "B", title_fa: "ب", link: "", alt: "", image: "next.svg" },
  { title_en: "C", title_fa: "ج", link: "", alt: "", image: "next.svg" },
  { title_en: "D", title_fa: "د", link: "", alt: "", image: "next.svg" },
];

const Home: React.FC<HomeProps> = async ({ params }) => {
  const { lang } = await params;
  const rtl = lang == "fa";
  return (
    <main>
      <section>
        <h2>{lang == "en" ? "Categories" : "دسته بندی ها"}</h2>
        <div className={styles.categories}>
          {MOCK_DATA.map((item, index) => (
            <CategoryCard
              title={lang == "en" ? item.title_en : item.title_fa}
              link="link"
              image="next.svg"
              alt="Test text"
              rtl={rtl}
              key={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
