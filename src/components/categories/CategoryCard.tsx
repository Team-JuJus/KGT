import Link from "next/link";

import { darkenColor, toHexColorString } from "@/utils/hex-color";

interface CategoryCardProps {
  title: string;
  link: string;
  Icon: React.ElementType;
  color: number;
  isEnglish: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  link,
  Icon,
  color,
  isEnglish,
}) => {
  return (
    <Link href={link}>
      <article
        style={{
          background: toHexColorString(color),
          color: toHexColorString(darkenColor(color, 0.5)),
        }}
        className="relative flex h-32 w-md items-center overflow-hidden rounded-md border-4 border-white p-5 shadow-lg max-md:w-xs"
      >
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{isEnglish ? "See more" : "بیشتر"}</p>
        </div>
        <Icon
          className={`absolute top-3 z-10 text-7xl ${isEnglish ? "right-5" : "left-5"}`}
        />
        <div
          className={`absolute -top-12 h-40 w-32 rounded-[50%] bg-white ${isEnglish ? "-right-5 rotate-45" : "-left-5 -rotate-45"}`}
        />
      </article>
    </Link>
  );
};

export default CategoryCard;
