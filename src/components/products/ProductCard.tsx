import Image from "next/image";
import Link from "next/link";

import styles from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
  link: string;
  image: string;
  alt: string;
  rtl?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  link,
  image,
  alt,
  rtl,
}) => {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>

      <Image className={styles.image} src={image} fill alt={alt} />

      <Link
        href={link}
        className={`${rtl ? styles.buttonRTL : styles.buttonLTR}`}
      >
        X
      </Link>
    </article>
  );
};

export default ProductCard;
