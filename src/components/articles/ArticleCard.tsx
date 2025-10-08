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
}
const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  link,
  image,
  alt,
  summary,
  isEnglish,
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
        <h3>{title}</h3>

        <hr />

        <p className={styles.caption}>{summary}</p>

        <Link href={link} className={styles.button}>
          {isEnglish ? "More" : "بیشتر"}
        </Link>
      </div>
    </article>
  );
};
export default ArticleCard;
