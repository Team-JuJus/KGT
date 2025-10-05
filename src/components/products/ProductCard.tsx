import Image from "next/image";
import Link from "next/link";

import styles from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
  link: string;
  desc: string;
  image: string;
  alt: string;
  lang: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  link,
  image,
  alt,
  desc,
  lang,
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

        <p className={styles.caption}>{desc}</p>

        <Link href={link} className={styles.button}>
          {lang === "en" ? "More" : "بیشتر"}
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
