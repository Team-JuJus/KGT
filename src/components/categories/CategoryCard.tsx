import Link from "next/link";

import { darkenColor, toHexColorString } from "@/utils/hex-color";
import CategoryShape from "../svgs/CategoryShape";
import clsx from "clsx";

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
  console.log(color);
  return (
    <Link href={link}>
      <article
        style={{
          background: toHexColorString(color),
          color: toHexColorString(darkenColor(color, 0.35)),
        }}
        className="relative flex h-44 w-md items-center overflow-hidden rounded-lg border-4 border-white p-5 shadow-lg max-md:w-sm"
      >
        <CategoryShape
          color={color}
          className={clsx(
            "absolute top-0 left-0 h-full w-full",
            !isEnglish && "-scale-x-100",
          )}
        />
        <div className="z-10">
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{isEnglish ? "See more" : "بیشتر"}</p>
        </div>
        <Icon
          className={`absolute top-7 z-10 text-7xl ${isEnglish ? "right-7" : "left-7"}`}
        />
      </article>
    </Link>
  );
};

export default CategoryCard;
