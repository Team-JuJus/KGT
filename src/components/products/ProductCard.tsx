import Image from "next/image";
import Link from "next/link";

import styles from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
  link: string;
  desc: string;
  image: string;
  alt: string;
  isEnglish: boolean;
  country: string;
  company: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  link,
  image,
  alt,
  desc,
  isEnglish,
  category,
  company,
}) => {
  return (
    <article className={styles.card}>
      <Image
        className={styles.logo}
        src="/zeiss.jpg"
        alt={company}
        width={100}
        height={100}
      />

      <Image
        src={image}
        width={800}
        height={800}
        alt={alt}
        className={styles.image}
      />
      <p className={styles.category}>{category}</p>
      <hr />

      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.caption}>{desc}</p>

        <Link href={link} className={styles.button}>
          {isEnglish ? "View details" : "جزئیات بیشتر"}
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
