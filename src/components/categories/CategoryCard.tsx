import Link from "next/link";

import styles from "./CategoryCard.module.css";
import { darkenColor, toHexColorString } from "@/utils/hex-color";

interface CategoryCardProps {
  title: string;
  link: string;
  Icon: React.ElementType;
  color: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  link,
  Icon,
  color,
}) => {
  return (
    <Link href={link}>
      <article
        className={styles.card}
        style={{
          background: toHexColorString(color),
          color: toHexColorString(darkenColor(color, 0.5)),
        }}
      >
        <div className={styles.texts}>
          <h3>{title}</h3>
          <p>see more</p>
        </div>
        <Icon className={styles.image} />
        <div className={styles.oval} />
      </article>
    </Link>
  );
};

export default CategoryCard;
