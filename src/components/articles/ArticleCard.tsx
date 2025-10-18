import Image from "next/image";
import styles from "./ArticleCard.module.css";
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
    <article className={styles.card}>
      <Image
        src={image}
        width={800}
        height={800}
        alt={alt}
        className={styles.image}
      />

      <div className={styles.details}>
        <div className={styles.publishDetes}>
          <p>{author}</p>
          <p>{time}</p>
        </div>
        <hr />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.caption}>{summary}</p>
        <Link href={link} className={styles.button}>
          {isEnglish ? "More" : "بیشتر"}
        </Link>
      </div>
    </article>
  );
};
export default ArticleCard;
