import Image from "next/image";
import styles from "./Footer.module.css";

interface FooterProps {
  lang: string;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  console.log(lang);
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <Image
          className={styles.logo}
          width={100}
          height={100}
          src="/logo.svg"
          alt="logo"
        />
      </div>

      <div className={styles.section}>
        <h3>Title</h3>
        <hr />
        <ul className={styles.list}>
          <li>
            <a href="#">lalala</a>
          </li>
          <li>
            <a href="#">lalala</a>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3>Title</h3>
        <hr />
        <ul className={styles.list}>
          <li>
            <a href="#">lalala</a>
          </li>
          <li>
            <a href="#">lalala</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
