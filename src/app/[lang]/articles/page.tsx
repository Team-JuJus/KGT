import { getArticles } from "@/app/actions/getArticles";
import ArticleCard from "@/components/articles/ArticleCard";
import { formatDate } from "@/utils/date";

interface PageProps {
  params: {
    lang: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { lang } = await params;
  const isEnglish = lang === "en";
  const articles = await getArticles();
  return (
    <main>
      <div className="flex items-center justify-center bg-blue-900 p-2 text-white">
        <h2 className="text-3xl font-bold">
          {isEnglish ? "Articles" : "مقالات"}
        </h2>
      </div>
      <section className="mx-auto flex max-w-7xl items-center justify-center gap-5 max-md:flex-col">
        {articles.map((item, index) => {
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
      </section>
    </main>
  );
};

export default page;
