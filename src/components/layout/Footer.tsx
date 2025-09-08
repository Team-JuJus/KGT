import React from "react";

import styles from "./Footer.module.css";

interface FooterProps {
  lang: string;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className={styles.footer}>
      <div>Footer</div>
    </footer>
  );
};

export default Footer;
