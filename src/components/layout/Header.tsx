import Link from "next/link";
import { FiSearch } from "react-icons/fi";

import { NAV_LINKS as data } from "@/Data"; //temporary
import Image from "next/image";

interface NavbarProps {
  lang: string;
}

const Navbar: React.FC<NavbarProps> = async ({ lang }) => {
  return (
    <header className="mx-auto mb-10 flex max-w-7xl items-center justify-between py-5">
      <Image
        width={100}
        height={100}
        src={"logo.svg"}
        alt="logo"
        className="w-44"
      />

      <nav className="flex gap-5">
        {data.map((item) => (
          <Link key={item.name_en} href={"#" + item.link}>
            {lang == "fa" ? item.name_fa : item.name_en}
          </Link>
        ))}
      </nav>

      <div className="flex items-center rounded-3xl border-1 border-gray-500 p-1 px-4">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="outline-0"
        />
        <FiSearch />
      </div>
    </header>
  );
};

export default Navbar;
