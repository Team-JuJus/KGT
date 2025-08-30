import Image from "next/image";
import Link from "next/link";

import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  title: string;
  link: string;
  image: string;
  alt: string;
  rtl?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  link,
  image,
  alt,
  rtl,
}) => {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>

      <Image
        className={styles.image}
        src={image}
        width={300}
        height={300}
        alt={alt}
      />

      <Link
        href={link}
        className={`${rtl ? styles.buttonRTL : styles.buttonLTR}`}
      >
        X
      </Link>
    </article>
  );
};

export default CategoryCard;
