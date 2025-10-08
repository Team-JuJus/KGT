import { RiShareForwardLine } from "react-icons/ri";
import styles from "./ArticleSection.module.css";
import Link from "next/link";

import { MOCK_ARTICLES as data } from "@/Data";
import ArticleCard from "../articles/ArticleCard";

interface ArticleSectionProps {
  lang: string;
}
const ArticleSection: React.FC<ArticleSectionProps> = ({ lang }) => {
  const isEnglish = lang === "en";
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_caption}>
          <h2>{isEnglish ? "Articles" : "مقالات"}</h2>
          <Link href={`${lang}/products`}>
            {isEnglish ? "All articles" : "همه مقالات"} <RiShareForwardLine />
          </Link>
        </div>
        <hr />
      </div>
      <div className={styles.articles}>
        {data.map((item, index) => (
          <ArticleCard
            title={lang == "en" ? item.title_en : item.title_fa}
            link={item.link}
            image={item.image}
            alt={item.alt}
            summary={lang == "en" ? item.summary_en : item.summary_fa}
            key={index}
            isEnglish={isEnglish}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
