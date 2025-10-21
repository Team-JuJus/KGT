import { RiShareForwardLine } from "react-icons/ri";
import Link from "next/link";

import { MOCK_ARTICLES as data } from "@/Data";
import ArticleCard from "../articles/ArticleCard";
import clsx from "clsx";

interface ArticleSectionProps {
  lang: string;
}
const ArticleSection: React.FC<ArticleSectionProps> = ({ lang }) => {
  const isEnglish = lang === "en";
  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-900">
            {isEnglish ? "Articles" : "مقالات"}
          </h2>
          <Link
            className="flex items-center text-blue-900"
            href={`${lang}/products`}
          >
            {isEnglish ? "All articles" : "همه مقالات"}{" "}
            <RiShareForwardLine
              className={clsx(!isEnglish && "-scale-x-100")}
            />
          </Link>
        </div>
        <hr />
        <div className="flex flex-wrap justify-center gap-5 py-5">
          {data.map((item, index) => (
            <ArticleCard
              title={isEnglish ? item.title_en : item.title_fa}
              link={item.link}
              image={item.image}
              alt={item.alt}
              summary={isEnglish ? item.summary_en : item.summary_fa}
              key={index}
              isEnglish={isEnglish}
              time={item.time}
              author={isEnglish ? item.author_en : item.author_fa}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
