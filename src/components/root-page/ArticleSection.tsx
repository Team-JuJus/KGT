import { RiShareForwardLine } from "react-icons/ri";
import Link from "next/link";

import ArticleCard from "../articles/ArticleCard";
import clsx from "clsx";
import { Articles } from "@/types";
import { formatDate } from "@/utils/date";

interface ArticleSectionProps {
  lang: string;
}

async function getArticles(): Promise<Articles[]> {
  const url = new URL("/mock/articles.json", process.env.NEXT_PUBLIC_SITE_URL);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

const ArticleSection: React.FC<ArticleSectionProps> = async ({ lang }) => {
  const isEnglish = lang === "en";
  const data = await getArticles();

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
          {data.map((item, index) => {
            const date = new Date(item.time);
            const { formatted, formattedFa } = formatDate(date);

            return (
              <ArticleCard
                title={isEnglish ? item.title_en : item.title_fa}
                link={item.link}
                image={item.image}
                alt={item.alt}
                summary={isEnglish ? item.summary_en : item.summary_fa}
                key={index}
                isEnglish={isEnglish}
                time={isEnglish ? formatted : formattedFa}
                author={isEnglish ? item.author_en : item.author_fa}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
