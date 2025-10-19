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
        className="relative flex h-32 w-md items-center overflow-hidden rounded-md border-4 border-white p-5 shadow-lg"
      >
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{isEnglish ? "See more" : "بیشتر"}</p>
        </div>
        <Icon className="absolute top-3 right-5 z-10 text-7xl" />
        <div className="absolute -top-12 -right-5 h-40 w-32 rotate-45 rounded-[50%] bg-white" />
      </article>
    </Link>
  );
};

export default CategoryCard;
