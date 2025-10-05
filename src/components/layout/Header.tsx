import Link from "next/link";
import { FiSearch } from "react-icons/fi";

import styles from "./Header.module.css";

import { NAV_LINKS as data } from "@/Data"; //temporary
import Image from "next/image";

interface NavbarProps {
  lang: string;
}

const Navbar: React.FC<NavbarProps> = async ({ lang }) => {
  return (
    <header className={styles.header}>
      <Image
        width={100}
        height={100}
        src={"logo.svg"}
        alt="logo"
        className={styles.logo}
      />

      <nav className={styles.nav}>
        {data.map((item) => (
          <Link key={item.name_en} href={"#" + item.link}>
            {lang == "fa" ? item.name_fa : item.name_en}
          </Link>
        ))}
      </nav>

      <div className={styles.tools}>
        <div className={styles.searchbar}>
          <input type="text" name="search" placeholder="Search..." />
          <FiSearch />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
