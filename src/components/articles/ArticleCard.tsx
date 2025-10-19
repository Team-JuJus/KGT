import Image from "next/image";
import Link from "next/link";

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
          <p className="">{author}</p>
          <p>{time}</p>
        </div>
        <hr className="my-2" />
        <h3>{title}</h3>
        <p>{summary}</p>
        <Link href={link}>{isEnglish ? "More" : "بیشتر"}</Link>
      </div>
    </article>
  );
};
export default ArticleCard;
