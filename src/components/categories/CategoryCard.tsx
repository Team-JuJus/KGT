import Link from "next/link";

import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  title: string;
  link: string;
  Icon: React.ElementType;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, link, Icon }) => {
  return (
    <Link href={link}>
      <article className={styles.card}>
        <Icon className={styles.image} />
        <h3>{title}</h3>
      </article>
    </Link>
  );
};

export default CategoryCard;
