import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./Header.module.css";

import { NAV_LINKS as data } from "@/Data"; //temporary

interface NavbarProps {
  lang: string;
}

const Navbar: React.FC<NavbarProps> = async ({ lang }) => {
  return (
    <header className={styles.header}>
      <img src={"logo.svg"} alt="logo" className={styles.logo} />
      <nav className={styles.nav}>
        {data.map((item) => (
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
