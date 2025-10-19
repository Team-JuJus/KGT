import CategoryCard from "../categories/CategoryCard";

import { MOCK_CATEGORIES as data } from "@/Data";

interface CategorySectionProps {
  lang: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ lang }) => {
  const isEnglish = lang === "en";

  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            {isEnglish ? "Categories" : "دسته بندی ها"}
          </h2>
          <hr className="mb-5" />
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {data.map((cat, index) => (
            <CategoryCard
              title={lang == "en" ? cat.title_en : cat.title_fa}
              key={index}
              Icon={cat.Icon}
              link={cat.link}
              color={cat.color}
              isEnglish={isEnglish}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
