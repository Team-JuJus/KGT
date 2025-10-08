import CategoryCard from "../categories/CategoryCard";
import styles from "./CategorySection.module.css";

import { MOCK_CATEGORIES as data } from "@/Data";

interface CategorySectionProps {
  lang: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ lang }) => {
  const isEnglish = lang === "en";

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_caption}>
          <h2>{isEnglish ? "Categories" : "دسته بندی ها"}</h2>
        </div>
        <hr />
      </div>
      <div className={styles.categories}>
        {data.map((cat, index) => (
          <CategoryCard
            title={lang == "en" ? cat.title_en : cat.title_fa}
            key={index}
            Icon={cat.Icon}
            link={cat.link}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
