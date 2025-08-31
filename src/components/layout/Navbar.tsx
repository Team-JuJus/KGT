import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./Header.module.css";

const NAV_LINKS = [
  { name_fa: "خانه", name_en: "Home", link: "/" },
  { name_fa: "محصولات", name_en: "Products", link: "products" },
  { name_fa: "مقالات", name_en: "Articles", link: "articles" },
  { name_fa: "درباره ما", name_en: "About us", link: "about" },
  { name_fa: "تماس با ما", name_en: "Contact", link: "contact" },
];

interface NavbarProps {
  lang: string;
}

const Navbar: React.FC<NavbarProps> = async ({ lang }) => {
  return (
    <header className={styles.header}>
      <Image src={"next.svg"} width={300} height={100} alt="logo" />
      <nav className={styles.nav}>
        {NAV_LINKS.map((item) => (
          <Link key={item.name_en} href={"#" + item.link}>
            {lang == "fa" ? item.name_fa : item.name_en}
          </Link>
        ))}
      </nav>

      <div className={styles.tools}>
        <input type="text" name="search" />
      </div>
    </header>
  );
};

export default Navbar;
