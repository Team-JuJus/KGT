import Image from "next/image";
import Link from "next/link";
import { FaCalendarDays } from "react-icons/fa6";
import { FaStamp } from "react-icons/fa";

interface ArticleCardProps {
  title: string;
  link: string;
  image: string;
  alt: string;
  summary: string;
  isEnglish: boolean;
  time: string;
  author: string;
}
const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  link,
  image,
  alt,
  summary,
  isEnglish,
  time,
  author,
}) => {
  return (
    <article className="w-80 overflow-hidden rounded-2xl shadow-lg">
      <Image src={image} width={800} height={800} alt={alt} />

      <div className="p-3">
        <div className="flex gap-5 text-xs">
          <div className="flex items-center gap-1">
            <FaStamp className="text-[15px] text-blue-900" />
            <p className="">{author}</p>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarDays className="text-[15px] text-blue-900" />
            <p>{time}</p>
          </div>
        </div>
        <hr className="my-2" />
        <p className="mb-1 text-xl font-bold">{title}</p>
        <p className="mb-2 text-sm text-gray-600">{summary}</p>
        <Link href={link}>
          <button className="w-24 rounded-md bg-blue-900 p-2 text-white">
            {isEnglish ? "More" : "بیشتر"}
          </button>
        </Link>
      </div>
    </article>
  );
};
export default ArticleCard;
